function Label(props) {
    const labelStyling = 'flex text-nowrap text-sm gap-2 items-center border border-3 border-black rounded-xl px-1'
    const labelDotStyling = 'h-2 w-2 rounded-full bg-black'

    const dotDynamicStyling = {"background-color": props.color}
    return(
        <>
            <span className={labelStyling}>
                <div className={labelDotStyling} style={dotDynamicStyling}></div>
                <p>{props.text}</p>
            </span>
        </>
    )
}

export default Label