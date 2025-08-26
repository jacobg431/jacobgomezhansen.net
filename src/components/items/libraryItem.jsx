function LibraryItem(props) {
    const title = props.title
    const description = props.description
    const libraryItemStyling =
        'flex flex-col xs:flex-row p-6 gap-6 text-center xs:text-left items-center bg-gray rounded-xl'
    const libraryItemImageStyling = 'min-w-20 h-24 bg-black'
    const libraryItemTitleStyling = 'text-xl font-bold py-2'

    return (
        <>
            <div className={libraryItemStyling}>
                <div className={libraryItemImageStyling}></div>
                <div>
                    <h3 className={libraryItemTitleStyling}>{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </>
    )
}

export default LibraryItem
