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

    function handleNavbarMenuClick() {
        if (!smallScreen) return
        setOpenMenu(!openMenu)
    }

    useEffect(() => {
        const cleanup = setupNavbarClickEvents('navbar-container')
        return cleanup
    }, [])

    useEffect(() => {
        const cleanup = setupNavbarClickEvents('navbar-mobile-container')
        return cleanup
    }, [])

    const [smallScreen, setSmallScreen] = useState(() => {
        return isSmallScreen()
    })

    const [openMenu, setOpenMenu] = useState(false)

    window.onresize = () => {
        setSmallScreen(isSmallScreen())
        if (!isSmallScreen()) {
            setOpenMenu(false)
        }
    }

    library.add(faBars)

    const navbarContainerStyling = smallScreen ? 'hidden' : 'flex gap-4'
    const navbarMobileContainerStyling = openMenu ? 'flex w-full h-full z-10 absolute m-auto flex-col items-center justify-center gap-4 text-white font-bold bg-black' : 'hidden'
    const navbarMobileMenuIcon = smallScreen ? <FontAwesomeIcon icon="bars" size="xl" onClick={handleNavbarMenuClick} /> : null

    return (
        <>
            <nav className="flex bg-black text-white font-bold p-10 justify-between">
                <div className="w-32 bg-center bg-contain bg-no-repeat bg-[url(/src/assets/Personal-Logo-Trans-Negative-256-Px.webp)]"></div>
                {navbarMobileMenuIcon}
                <div id="navbar-container" className={navbarContainerStyling}>
                    <NavbarItem id="navbar-intro" title="About" href="#intro" />
                    <NavbarItem id="navbar-portfolio" title="Projects" href="#portfolio" />
                    <NavbarItem id="navbar-expertise" title="Skills" href="#expertise" />
                    <NavbarItem id="navbar-library" title="Library" href="#library" />
                    <NavbarItem id="navbar-contact" title="Contact" href="#contact" />
                </div>
            </nav>
            <div id="navbar-mobile-container" className={navbarMobileContainerStyling} onClick={handleNavbarMenuClick}>
                <NavbarItem id="navbar-mobile-intro" title="About" href="#intro" />
                <NavbarItem id="navbar-mobile-portfolio" title="Projects" href="#portfolio" />
                <NavbarItem id="navbar-mobile-expertise" title="Skills" href="#expertise" />
                <NavbarItem id="navbar-mobile-library" title="Library" href="#library" />
                <NavbarItem id="navbar-mobile-contact" title="Contact" href="#contact" />
            </div>
        </>
    )
}

export default Navbar
