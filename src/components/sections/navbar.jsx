import { useEffect, useState } from 'react'
import NavbarItem from '../items/navbarItem'
import { setupNavbarClickEvents } from '../../utils/setupEventListeners'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'

function Navbar() {
    function isSmallScreen() {
        return window.innerWidth <= 1024
    }

    useEffect(() => {
        const cleanup = setupNavbarClickEvents()
        return cleanup
    }, [])

    const [smallScreen, setSmallScreen] = useState(() => {
        return isSmallScreen()
    })

    window.onresize = () => {
        setSmallScreen(isSmallScreen())
    }

    const navbarContainerStyling = smallScreen ? 'hidden' : 'flex gap-4'
    const navbarMobileMenu = smallScreen ? <FontAwesomeIcon icon="bars" size="xl" /> : null

    library.add(faBars)

    return (
        <>
            <nav className="flex bg-black text-white font-bold p-10 justify-between">
                <div className="w-32 bg-center bg-contain bg-no-repeat bg-[url(/src/assets/Personal-Logo-Trans-Negative-256-Px.webp)]"></div>
                {navbarMobileMenu}
                <div id="navbar-container" className={navbarContainerStyling}>
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
