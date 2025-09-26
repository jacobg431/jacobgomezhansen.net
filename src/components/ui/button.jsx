function Button(props) {
    const text = props.text
    const onClick = props.onClick
    const buttonStyling =
        'cursor-pointer font-bold text-sm xs:text-base text-center px-4 py-2 rounded-lg ring-black ring-1 inset-ring-black inset-ring-3 duration-400 ease-out hover:border-red hover:ring-red hover:inset-ring-red hover:text-red'

    return (
        <div className={buttonStyling} onClick={onClick}>
            {text}
        </div>
    )
}

export default Button
