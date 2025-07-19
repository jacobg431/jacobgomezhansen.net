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

    return (
        <>
            <header
                id="header"
                className="flex items-center p-10 bg-stone-300 gap-8 relative"
                style={{ justifyContent: flipped ? 'center' : 'space-between' }} 
                onMouseOver={onHeaderMouseOver}
                onMouseOut={onHeaderMouseOut}
            >
                <AnimatePresence>
                    {items.map((id) => (
                        <Motion.div 
                            key={id} 
                            layout 
                            transition={{ duration: 0.4 }}
                            className={id === 'avatar' ? 'w-32 h-32 rounded-full bg-stone-800' : 'text-4xl font-bold'} 
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
