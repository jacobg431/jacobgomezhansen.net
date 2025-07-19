import { useState } from 'react'
import { motion as Motion, AnimatePresence } from 'framer-motion'
function Header() {
    const [flipped, setFlipped] = useState(false)
    const items = flipped ? [
        'avatar', 'text'
    ] : [
        'text', 'avatar'
    ]

    function onHeaderMouseOver() {
        setFlipped(true)
    }

    function onHeaderMouseOut() {
        setFlipped(false)
    }

    //const elements = flipped
    //    ? [
    //          <div key={`avatar`} className="w-32 min-w-32 h-32 min-h-32 rounded-full bg-stone-800"></div>,
    //          <div key={`text`} className="text-4xl font-bold">
    //              Welcome! I'm Jacob, Fullstack Developer
    //          </div>,
    //      ]
    //    : [
    //          <div key={`text`} className="text-4xl font-bold">
    //              Welcome! I'm Jacob, Fullstack Developer
    //          </div>,
    //          <div key={`avatar`} className="w-32 min-w-32 h-32 min-h-32 rounded-full bg-stone-800"></div>,
    //      ]

    const avatarStyling = 'w-32 h-32 rounded-full border-4 bg-center bg-contain bg-[url(/src/assets/Profile-Picture-256-Px.webp)]'
    const textStyling = 'text-4xl font-bold'

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
                            {id === 'text' && "Welcome! I'm Jacob, Fullstack Developer"}
                        </Motion.div>
                    ))}
                </AnimatePresence>
            </header>
        </>
    )
}

export default Header
