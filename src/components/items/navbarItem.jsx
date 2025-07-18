function NavbarItem(props) {
    return (
        <>
            <a className="no-underline transition-colors duration-500 hover:text-red hover:animate-pulse" href={props.href}>
                {props.title}
            </a>
        </>
    )
}

export default NavbarItem;