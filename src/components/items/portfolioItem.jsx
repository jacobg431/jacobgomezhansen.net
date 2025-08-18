import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLink } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { useDeviceDetection } from '../../hooks/useDeviceDetection'
import Label from "../ui/label"

function PortfolioItem(props) {
    const portfolioItemStyling = 'border border-black border-4 w-full 2xs:max-w-96 p-8 xs:p-10 bg-white rounded-xl duration-400 ease-out hover:border-red hover:shadow-2xl'
    const imageStyling = 'w-full rounded-xl'
    const titleStyling = 'text-md 2xs:text-xl font-bold mt-6 xs:mt-8 -mb-4'
    const descriptionStyling = 'py-6 text-sm'
    const labelsContainerStyling = 'grid grid-cols-[repeat(auto-fit,_minmax(6rem,_1fr))] gap-2'
    const readmoreLinkStyling = 'duration-400 ease-out group-hover:text-red'
    const readMoreSpanStyling = 'max-w-28 mt-6 flex items-center gap-2 group hover:cursor-pointer'
    const readmoreLinkIconStyling = 'duration-400 ease-out'

    const anyLabelPresent = isAnyLabelPresent()
    const labelsContainerDynamicStyling = {"display": anyLabelPresent ? "flex" : "hidden"}

    const [isHovering, setHovering] = useState(false)
    const iconDynamicStyling = { color: isHovering ? "#ff6167" : "#292524" }
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
        if (props?.labels == null) return false
        if (!Array.isArray(props.labelList)) return false
        if (Object.keys(props.labelList).length < 1) return false
        return true
    }

    return (
        <>
            <div className={portfolioItemStyling}>
                <img className={imageStyling} src={props.imageUrl} alt={props.alt}></img>
                <h3 className={titleStyling}>{props.title}</h3>
                <p className={descriptionStyling}>{props.description}</p>
                <div className={labelsContainerStyling} style={labelsContainerDynamicStyling}>
                    {props.labelList.map((label) => (
                        <>
                            <Label color={label.color} text={label.text} />
                        </>
                    ))}
                </div>
                <span className={readMoreSpanStyling} onMouseEnter={onSpanMouseEnter} onMouseLeave={onSpanMouseLeave}>
                    <a className={readmoreLinkStyling} href={props.url} target="_blank">Read more</a>
                    <FontAwesomeIcon icon={faExternalLink} className={readmoreLinkIconStyling} style={iconDynamicStyling} />
                </span>
            </div>
        </>
    )
}

export default PortfolioItem
