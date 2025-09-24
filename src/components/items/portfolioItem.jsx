import PortfolioItenLabel from '../ui/portfolioItemLabel'
import ReadMoreExternalLink from '../ui/readMoreExternalLink'

function PortfolioItem(props) {
    const title = props.item.title
    const description = props.item.description
    const alt = props.item.alt
    const url = props.item.url
    const imageUrl = props.item.imageUrl
    const labelList = props.item.labelList
    const realImageUrl = props.images[imageUrl]

    const portfolioItemStyling =
        'border border-black border-4 w-full 2xs:max-w-96 p-8 xs:p-10 bg-white rounded-xl duration-400 ease-out hover:border-red hover:shadow-2xl'
    const imageStyling = 'w-full rounded-xl'
    const titleStyling = 'text-md 2xs:text-xl font-bold mt-6 xs:mt-8 -mb-4'
    const descriptionStyling = 'py-6 text-sm'
    const labelsContainerStyling = 'flex flex-wrap gap-2'

    const anyLabelPresent = isAnyLabelPresent()
    const labelsContainerDynamicStyling = { display: anyLabelPresent ? 'flex' : 'hidden' }


    function isAnyLabelPresent() {
        if (labelList == null) return false
        if (!Array.isArray(labelList)) return false
        if (Object.keys(labelList).length < 1) return false
        return true
    }

    return (
        <>
            <div className={portfolioItemStyling}>
                <img className={imageStyling} src={realImageUrl} alt={alt}></img>
                <h3 className={titleStyling}>{title}</h3>
                <p className={descriptionStyling}>{description}</p>
                <div className={labelsContainerStyling} style={labelsContainerDynamicStyling}>
                    {labelList.map((label) => (
                        <PortfolioItenLabel key={label.key} label={label} />
                    ))}
                </div>
                <ReadMoreExternalLink url={url} />
            </div>
        </>
    )
}

export default PortfolioItem
