import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { useDeviceDetection } from '../../hooks/useDeviceDetection'

function IntroIconItem(props) {
    const iconStyling = 'cursor-pointer scale-300 xs:scale-400 hover:scale-450 xs:hover:scale-600 duration-400 ease-out peer z-10'
    const iconContainerStyling = 'relative flex w-18 h-18 xs:w-24 xs:h-24 items-center justify-center z-5'
    const tooltipStyling = 'top-16 peer-hover:top-32 absolute px-3 py-1 text-white bg-black rounded-2xl opacity-0 peer-hover:opacity-100 duration-400 ease-out'
    const defaultColor = '#292524'

    const iconMap = {
        'linkedin': ['fab', 'square-linkedin'],
        'github': ['fab', 'square-github'],
        'download': 'file-arrow-down'
    }

    const [isHovering, setHovering] = useState(false)
    const iconDynamicStyling = { color: isHovering ? props.hoverColor : defaultColor }

    const icon = (
        <FontAwesomeIcon
            icon={iconMap[props.iconId]}
            className={iconStyling}
            style={iconDynamicStyling}
            onMouseEnter={() => {
                return onIconMouseEnter(props.iconId)
            }}
            onMouseLeave={() => {
                return onIconMouseLeave(props.iconId)
            }}
        />
    )

    const device = useDeviceDetection()

    function onIconMouseEnter() {
        if (device !== 'Desktop' || isHovering) return
        setHovering(true)
    }

    function onIconMouseLeave() {
        setHovering(false)
    }

    return (
        <>
            <div className={iconContainerStyling}>
                {icon}
                <div className={tooltipStyling}>GitHub</div>
            </div>
        </>
    )
}

export default IntroIconItem