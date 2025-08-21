function Label(props) {
    const labelColor = props.label.color
    const labelText = props.label.text
    const labelStyling = 'flex text-nowrap text-sm gap-2 items-center border border-3 border-black rounded-xl px-2'
    const labelDotStyling = 'h-2 w-2 rounded-full bg-black'

    const dotDynamicStyling = { backgroundColor: labelColor }
    return (
        <>
            <span className={labelStyling}>
                <div className={labelDotStyling} style={dotDynamicStyling}></div>
                <p>{labelText}</p>
            </span>
        </>
    )
}

export default Label
