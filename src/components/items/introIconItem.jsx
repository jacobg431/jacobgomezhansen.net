import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useDeviceDetection } from '../../hooks/useDeviceDetection'
import getUserLanguage from '../../utils/language'

function IntroIconItem(props) {
    const iconContainerStyling = 'relative flex items-center justify-center z-5'
    const iconStyling = 'cursor-pointer duration-400 ease-out peer z-10 hover:animate-pulse'
    const defaultColor = '#292524'

    const resumeLanguageMap = {
        default: '/src/assets/Resume-Jacob-Gomez-Hansen-English-Version.pdf',
        danish: '/src/assets/Resume-Jacob-Gomez-Hansen-Dansk-Version.pdf',
        norwegian: '/src/assets/Resume-Jacob-Gomez-Hansen-Norsk-Versjon.pdf',
    }
    const resumeLanguageUrl = resumeLanguageMap[getUserLanguage()]

    const iconTypeMap = {
        linkedin: ['fab', 'square-linkedin'],
        github: ['fab', 'square-github'],
        download: 'file-arrow-down',
    }
    const iconLinkMap = {
        linkedin: 'https://www.linkedin.com/in/jacob-gomez-hansen/',
        github: 'https://github.com/jacobg431',
        download: resumeLanguageUrl,
    }

    const [isHovering, setHovering] = useState(false)
    const iconDynamicStyling = { color: isHovering ? props.hoverColor : defaultColor }

    const icon = (
        <FontAwesomeIcon
            icon={iconTypeMap[props.iconId]}
            className={iconStyling}
            style={iconDynamicStyling}
            size='2xl'
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
            <div className={iconContainerStyling}>
                {icon}
            </div>
        </>
    )
}

export default IntroIconItem
