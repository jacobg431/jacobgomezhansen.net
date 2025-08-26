function ExpertiseItemLabel(props) {
    const title = props.title
    const expertiseItemStyling = 'flex justify-center items-center boder border-black border-3 px-4 py-3 font-bold rounded-xl duration-400 ease-out hover:border-red hover:text-red hover:shadow-2xl'
    const expertiseItemTextStyling = 'text-center text-sm m-0 cursor-default'

    return (
        <>
            <div className={expertiseItemStyling}>
                <p className={expertiseItemTextStyling}>{title}</p>
            </div>
        </>
    )
}

export default ExpertiseItemLabel