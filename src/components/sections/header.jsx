import { useMemo, useState } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

function Header() {
    const [flipped, setFlipped] = useState(false)
    const items = flipped ? ['avatar', 'text'] : ['text', 'avatar']

    const avatarStyling =
        'w-32 h-32 rounded-full border-4 bg-center bg-contain bg-[url(/src/assets/Profile-Picture-256-Px.webp)]'
    const textStyling = 'inline-block whitespace-pre text-4xl font-mono font-bold'

    const typewriterStrings = ['Software Developer', 'Embedded Programmer', 'Computer Engineer']
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

    function onHeaderMouseOver() {
        setFlipped(true)
    }

    function onHeaderMouseOut() {
        setFlipped(false)
    }

    return (
        <>
            <header
                id="header"
                className="flex items-center p-10 border-b-4 border-b-red gap-8 relative hover:bg-black duration-400"
                style={{ justifyContent: flipped ? 'center' : 'space-between' }}
                onMouseOver={onHeaderMouseOver}
                onMouseOut={onHeaderMouseOut}
            >
                <AnimatePresence>
                    {items.map((id) => (
                        <Motion.div
                            key={id}
                            layout
                            animate={{ color: flipped ? 'var(--color-red)' : 'var(--color-black)' }}
                            transition={{ duration: 0.4, ease: 'easeOut' }}
                            className={id === 'avatar' ? avatarStyling : textStyling}
                        >
                            {id === 'text' && "Welcome! I'm Jacob, "}
                            {id === 'text' && typewriterPaddedText}
                        </Motion.div>
                    ))}
                </AnimatePresence>
            </header>
        </>
    )
}

export default Header
