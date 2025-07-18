function Header() {
    return (
        <>
            <header className="group flex items-center justify-between p-10 bg-stone-300 gap-8">
                <div className="group-hover:translate-x-full text-4xl font-bold transition-all duration-500 ease-in-out">
                    Welcome! I'm Jacob, Fullstack Developer
                </div>
                <div className="group-hover:-translate-x-300 w-32 min-w-32 h-32 min-h-32 rounded-full bg-stone-800 transition-all duration-500 ease-in-out"></div>
            </header>
        </>
    )
}

export default Header
