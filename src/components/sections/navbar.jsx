import NavbarItem from '../items/navbarItem'

function Navbar() {
    return (
        <>
            <nav className="flex bg-black text-white font-bold p-10 justify-between">
                <div className="w-32 bg-center bg-contain bg-no-repeat bg-[url(/src/assets/Personal-Logo-Trans-Negative-256-Px.webp)]"></div>
                <div className="flex gap-4">
                    <NavbarItem title="About" href="#intro" />
                    <NavbarItem title="Projects" href="#portfolio" />
                    <NavbarItem title="Skills" href="#expertise" />
                    <NavbarItem title="Library" href="#library" />
                    <NavbarItem title="Contact" href="#contact" />
                </div>
            </nav>
        </>
    )
}

export default Navbar
