import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useDeviceDetection } from '../../hooks/useDeviceDetection'

function IntroIconItem(props) {
    const iconContainerStyling = 'relative flex items-center justify-center z-5'
    const iconStyling = 'cursor-pointer duration-400 ease-out peer z-10'
    const defaultColor = '#292524'
    const hoverColor = '#ff6167'

    const iconTypeMap = {
        linkedin: ['fab', 'square-linkedin'],
        github: ['fab', 'square-github'],
    }
    const iconLinkMap = {
        linkedin: 'https://www.linkedin.com/in/jacob-gomez-hansen/',
        github: 'https://github.com/jacobg431',
    }

    const [isHovering, setHovering] = useState(false)
    const iconDynamicStyling = { color: isHovering ? hoverColor : defaultColor }

    const icon = (
        <FontAwesomeIcon
            icon={iconTypeMap[props.iconId]}
            className={iconStyling}
            style={iconDynamicStyling}
            size="3x"
            onMouseEnter={onIconMouseEnter}
            onMouseLeave={onIconMouseLeave}
            onClick={onIconClick}
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

    function onIconClick() {
        window.open(iconLinkMap[props.iconId], '_blank')
    }

    return (
        <>
            <div className={iconContainerStyling}>{icon}</div>
        </>
    )
}

export default IntroIconItem
