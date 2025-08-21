import { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import NavbarItem from '../items/navbarItem'
import { setupNavbarClickEvents } from '../../utils/setupEventListeners'
import personalLogo from '../../assets/Personal-Logo-Trans-Negative-256-Px.webp'

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

    const navbarSectionStyling =
        'flex bg-black text-white font-bold px-4 2xs:px-10 sm:px-20 lg:px-40 xl:px-0 justify-center'
    const navbarInnerWrapperStyling = 'flex w-full xl:max-w-[64rem] py-10 justify-between'
    const navbarContainerStyling = smallScreen ? 'hidden' : 'flex gap-4'
    const navbarMobileContainerStyling = openMenu
        ? 'flex w-full h-full z-10 absolute top-0 flex-col items-center justify-center gap-4 text-xl text-white font-bold bg-black transition-[height] duration-400'
        : 'flex w-full h-0 z-10 absolute -top-32 text-white font-bold bg-black transition-[height] duration-400'
    const navbarMobileMenuIcon = smallScreen ? (
        <FontAwesomeIcon icon="bars" size="xl" className="z-20" onClick={handleNavbarMenuClick} />
    ) : null

    return (
        <>
            <nav className={navbarSectionStyling}>
                <div className={navbarInnerWrapperStyling}>
                    <img
                        src={personalLogo}
                        alt='Personal logo. The initials "JGH" stands for "Jacob Gomez Hansen".'
                        className="h-6 z-20"
                    ></img>
                    {navbarMobileMenuIcon}
                    <div id="navbar-container" className={navbarContainerStyling}>
                        <NavbarItem id="navbar-intro" title="About" href="#intro" />
                        <NavbarItem id="navbar-portfolio" title="Projects" href="#portfolio" />
                        <NavbarItem id="navbar-expertise" title="Skills" href="#expertise" />
                        <NavbarItem id="navbar-library" title="Library" href="#library" />
                        <NavbarItem id="navbar-contact" title="Contact" href="#contact" />
                    </div>
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
