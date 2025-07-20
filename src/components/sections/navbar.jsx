import { useEffect } from 'react'
import NavbarItem from '../items/navbarItem'
import { setupNavbarClickEvents } from '../../utils/setupEventListeners'

function Navbar() {
    useEffect(() => {
        const cleanup = setupNavbarClickEvents()
        return cleanup
    }, [])

    return (
        <>
            <nav className="flex bg-black text-white font-bold p-10 justify-between">
                <div className="w-32 bg-center bg-contain bg-no-repeat bg-[url(/src/assets/Personal-Logo-Trans-Negative-256-Px.webp)]"></div>
                <div id="navbar-container" className="flex gap-4">
                    <NavbarItem id="navbar-intro" title="About" href="#intro" />
                    <NavbarItem id="navbar-portfolio" title="Projects" href="#portfolio" />
                    <NavbarItem id="navbar-expertise" title="Skills" href="#expertise" />
                    <NavbarItem id="navbar-library" title="Library" href="#library" />
                    <NavbarItem id="navbar-contact" title="Contact" href="#contact" />
                </div>
            </nav>
        </>
    )
}

export default Navbar
