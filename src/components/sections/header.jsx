import { useMemo, useState } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { useTypewriter } from 'react-simple-typewriter'
import { useDeviceDetection } from '../../hooks/useDeviceDetection'

function Header() {
    // Regular constants
    const avatarStyling =
        'min-w-20 h-20 xs:min-w-24 xs:h-24 sm:min-w-28 sm:h-28 md:min-w-32 md:h-32 md: rounded-full border-4'
    const typewriterWrapperStyling =
        'inline-block w-[12rem] xs:w-[16rem] sm:w-[20rem] lg:w-auto text-lg xs:text-2xl sm:text-3xl lg:text-4xl font-mono font-bold'
    const preTypewriterStyling = 'inline-block w-auto whitespace-pre'
    const typewriterStyling = 'inline-block w-auto min-h-0 items-center whitespace-normal'
    const typewriterStrings = ['Software Developer', 'Embedded Programmer', 'Computer Engineer']

    // State-related constants
    const [flipped, setFlipped] = useState(false)
    const items = flipped ? ['avatar', 'text'] : ['text', 'avatar']
    const typewriterLength = Math.max(...typewriterStrings.map((s) => s.length))

    const [typewriterText] = useTypewriter({
        words: typewriterStrings,
        loop: true,
        delaySpeed: 3000,
    })

    const typewriterPaddedText = useMemo(() => {
        const padCount = typewriterLength - typewriterText.length
        return typewriterText + '\u00A0'.repeat(padCount)
    }, [typewriterText, typewriterLength])

    const device = useDeviceDetection()

    const headerContentMap = {
        avatar: (
            <img src="src/assets/Profile-Picture-256-Px.webp" alt="Profile picture of Jacob Gomez Hansen" className={avatarStyling}></img>
        ),
        text: (
            <div className={typewriterWrapperStyling}>
                <span className={preTypewriterStyling}>Welcome! I'm Jacob, </span>
                <span className={typewriterStyling}>{typewriterPaddedText}</span>
            </div>
        ),
    }

    // Functions
    function onHeaderMouseEnter() {
        if (device !== 'Desktop' || flipped) return
        setFlipped(true)
    }

    function onHeaderMouseLeave() {
        if (!flipped) return
        setFlipped(false)
    }

    return (
        <>
            <header
                id="header"
                className="flex items-center px-4 py-10 2xs:p-10 gap-4 2xs:gap-8 border-b-4 border-b-red relative hover:bg-black duration-400"
                style={{ justifyContent: flipped ? 'center' : 'space-between' }}
                onMouseEnter={onHeaderMouseEnter}
                onMouseLeave={onHeaderMouseLeave}
            >
                <AnimatePresence>
                    {items.map((id) => (
                        <Motion.div
                            key={id}
                            layout
                            animate={{ color: flipped ? 'var(--color-red)' : 'var(--color-black)' }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                        >
                            {headerContentMap[id]}
                        </Motion.div>
                    ))}
                </AnimatePresence>
            </header>
        </>
    )
}

export default Header
