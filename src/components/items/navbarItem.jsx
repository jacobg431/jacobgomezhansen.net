function NavbarItem(props) {
    const href = props.href
    const title = props.title
    
    return (
        <>
            <a
                className="no-underline transition-colors duration-500 hover:text-red hover:animate-pulse"
                href={href}
            >
                {title}
            </a>
        </>
    )
}

export default NavbarItem
