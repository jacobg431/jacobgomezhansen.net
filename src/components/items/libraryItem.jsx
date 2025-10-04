import ReadMoreExternalLink from '../ui/readMoreExternalLink'

function LibraryItem(props) {
    const title = props.item.title
    const description = props.item.description
    const url = props.item.url
    const alt = props.item.alt
    const imageUrl = props.item.imageUrl
    const realImageUrl = props.images[imageUrl]
    const libraryItemStyling =
        'border border-black border-4 flex flex-col xs:flex-row p-6 gap-6 text-center xs:text-left items-center rounded-xl'
    const libraryItemDescriptionStyling = 'text-sm'
    const imageStyling = 'w-20'
    const libraryItemTitleStyling = 'text-xl font-bold py-2'

    return (
        <>
            <div className={libraryItemStyling}>
                <img src={realImageUrl} alt={alt} className={imageStyling} />
                <div>
                    <h3 className={libraryItemTitleStyling}>{title}</h3>
                    <p className={libraryItemDescriptionStyling}>{description}</p>
                    <ReadMoreExternalLink url={url} />
                </div>
            </div>
        </>
    )
}

export default LibraryItem
