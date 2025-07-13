function Navbar() {

    return (
        <>
            <nav className="flex bg-stone-800 text-stone-50 p-10 justify-between">
                <div className="text-lg">LOGO HERE</div>
                <div className="flex gap-4">
                    <a className="no-underline" href="#intro">About</a>
                    <a className="no-underline" href="#portfolio">Projects</a>
                    <a className="no-underline" href="#expertise">Skills</a>
                    <a className="no-underline" href="#library">Library</a>
                    <a className="no-underline" href="#contact">Contact</a>
                </div>
            </nav>
        </>
    )

}

export default Navbar