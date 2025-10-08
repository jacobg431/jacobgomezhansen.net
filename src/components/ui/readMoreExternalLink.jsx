import { library } from '@fortawesome/fontawesome-svg-core'
import { faExternalLink } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'
import { useDeviceDetection } from '../../hooks/useDeviceDetection'

function ReadMoreExternalLink(props) {
    const url = props.url
    const readmoreLinkStyling = 'duration-400 ease-out group-hover:text-red'
    const readMoreSpanStyling = 'max-w-28 mt-6 flex items-center gap-2 group hover:cursor-pointer'
    const readmoreLinkIconStyling = 'duration-400 ease-out'

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

    return (
        <>
            <span className={readMoreSpanStyling} onMouseEnter={onSpanMouseEnter} onMouseLeave={onSpanMouseLeave}>
                <a className={readmoreLinkStyling} href={url} target="_blank">
                    Read more
                </a>
                <FontAwesomeIcon icon={faExternalLink} className={readmoreLinkIconStyling} style={iconDynamicStyling} />
            </span>
        </>
    )
}

export default ReadMoreExternalLink
