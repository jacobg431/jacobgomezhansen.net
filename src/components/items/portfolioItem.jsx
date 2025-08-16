import { library } from "@fortawesome/fontawesome-svg-core"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faExternalLink } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react"
import { useDeviceDetection } from '../../hooks/useDeviceDetection'

function PortfolioItem(props) {
    const portfolioItemStyling = 'border border-black border-4 max-w-96 p-10 bg-white rounded-xl duration-400 ease-out hover:border-red hover:shadow-2xl'
    const portfolioImageStyling = 'h-32 min-w-60 rounded-xl'

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

    return (
        <>
            <div className={portfolioItemStyling}>
                <img className={portfolioImageStyling} src={props.imageUrl} alt={props.alt}></img>
                <h3 className="text-xl font-bold mt-8 -mb-2">{props.title}</h3>
                <p className="py-6">{props.description}</p>
                <span className="max-w-28 flex items-center gap-2 group hover:cursor-pointer" onMouseEnter={onSpanMouseEnter} onMouseLeave={onSpanMouseLeave}>
                    <a className="duration-400 ease-out group-hover:text-red" href="#">Read more</a>
                    <FontAwesomeIcon icon={faExternalLink} className="duration-400 ease-out" style={iconDynamicStyling} />
                </span>
            </div>
        </>
    )
}

export default PortfolioItem
