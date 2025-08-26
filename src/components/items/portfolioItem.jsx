import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExternalLink } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useDeviceDetection } from '../../hooks/useDeviceDetection'
import Label from '../ui/label'

function PortfolioItem(props) {
    const title = props.item.title
    const description = props.item.description
    const alt = props.item.alt
    const url = props.item.url
    const imageUrl = props.item.imageUrl
    const labelList = props.item.labelList
    const realImageUrl = props.allImages[imageUrl]

    const portfolioItemStyling =
        'border border-black border-4 w-full 2xs:max-w-96 p-8 xs:p-10 bg-white rounded-xl duration-400 ease-out hover:border-red hover:shadow-2xl'
    const imageStyling = 'w-full rounded-xl'
    const titleStyling = 'text-md 2xs:text-xl font-bold mt-6 xs:mt-8 -mb-4'
    const descriptionStyling = 'py-6 text-sm'
    const labelsContainerStyling = 'flex flex-wrap gap-2'
    const readmoreLinkStyling = 'duration-400 ease-out group-hover:text-red'
    const readMoreSpanStyling = 'max-w-28 mt-6 flex items-center gap-2 group hover:cursor-pointer'
    const readmoreLinkIconStyling = 'duration-400 ease-out'

    const anyLabelPresent = isAnyLabelPresent()
    const labelsContainerDynamicStyling = { display: anyLabelPresent ? 'flex' : 'hidden' }

    const [isHovering, setHovering] = useState(false)
    const iconDynamicStyling = { color: isHovering ? '#ff6167' : '#292524' }
    const device = useDeviceDetection()

    library.add(faExternalLink)

    function onSpanMouseEnter() {
        if (device !== 'Desktop' || isHovering) return
        setHovering(true)
    }

    function onSpanMouseLeave() {
        setHovering(false)
    }

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
                        <Label key={label.key} label={label} />
                    ))}
                </div>
                <span className={readMoreSpanStyling} onMouseEnter={onSpanMouseEnter} onMouseLeave={onSpanMouseLeave}>
                    <a className={readmoreLinkStyling} href={url} target="_blank">
                        Read more
                    </a>
                    <FontAwesomeIcon
                        icon={faExternalLink}
                        className={readmoreLinkIconStyling}
                        style={iconDynamicStyling}
                    />
                </span>
            </div>
        </>
    )
}

export default PortfolioItem
