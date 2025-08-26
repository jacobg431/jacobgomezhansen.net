function ExpertiseItemLabel(props) {
    const title = props.title
    const expertiseItemStyling =
        'flex justify-center items-center bg-black min-w-24 px-4 py-3 text-white font-bold rounded-xl duration-400 ease-out hover:cursor-pointer hover:shadow-2xl group'
    const expertiseItemTextStyling = 'text-center text-sm select-none m-0 duration-400 ease-out group-hover:text-red'

    return (
        <>
            <div className={expertiseItemStyling}>
                <p className={expertiseItemTextStyling}>{title}</p>
            </div>
        </>
    )
}

export default ExpertiseItemLabel
