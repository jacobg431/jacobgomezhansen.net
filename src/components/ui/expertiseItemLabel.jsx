function ExpertiseItemLabel(props) {
    const title = props.title
    const expertiseItemStyling = 'flex justify-center items-center px-8 py-6 font-bold bg-gray rounded-xl'
    const expertiseItemTextStyling = 'text-center text-sm m-0'

    return (
        <>
            <div className={expertiseItemStyling}>
                <p className={expertiseItemTextStyling}>{title}</p>
            </div>
        </>
    )
}

export default ExpertiseItemLabel