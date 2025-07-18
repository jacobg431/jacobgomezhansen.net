import { useState } from 'react'
import FlipMove from '../animations/flipMove'

function Header() {
    const [flipped, setFlipped] = useState(false)

    function onHeaderMouseOver() {
        setFlipped(true)
    }

    function onHeaderMouseOut() {
        setFlipped(false)
    }

    const elements = flipped
        ? [
              <div key={1} className="text-4xl font-bold">
                  Welcome! I'm Jacob, Fullstack Developer
              </div>,
              <div key={0} className="w-32 min-w-32 h-32 min-h-32 rounded-full bg-stone-800"></div>,
          ]
        : [
              <div key={0} className="text-4xl font-bold">
                  Welcome! I'm Jacob, Fullstack Developer
              </div>,
              <div key={1} className="w-32 min-w-32 h-32 min-h-32 rounded-full bg-stone-800"></div>,
          ]

    return (
        <>
            <header
                id="header"
                className="flex items-center justify-between p-10 bg-stone-300 gap-8"
                onMouseOver={onHeaderMouseOver}
                onMouseOut={onHeaderMouseOut}
            >
                <FlipMove typeName={null} duration={500} enterAnimation="none" leaveAnimation="none">
                    {elements}
                </FlipMove>
            </header>
        </>
    )
}

export default Header
