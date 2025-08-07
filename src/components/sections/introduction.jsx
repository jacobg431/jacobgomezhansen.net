import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSquareLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import { useDeviceDetection } from '../../hooks/useDeviceDetection'

function Introduction() {
    const introSectionStyling =
        'flex flex-col lg:flex-row w-full gap-8 px-4 pt-10 2xs:p-10 bg-white img.hover:bg-black group'
    const iconStyling = 'cursor-pointer scale-300 xs:scale-400 hover:scale-450 xs:hover:scale-600 duration-400 ease-out peer z-10'
    const tooltipStyling =
        'top-16 peer-hover:top-32 absolute px-3 py-1 text-white bg-black rounded-2xl opacity-0 peer-hover:opacity-100 duration-400 ease-out'
    const iconContainerStyling = 'relative flex w-18 h-18 xs:w-24 xs:h-24 items-center justify-center z-5'

    const [isHoveringLinkedIn, setHoveringLinkedIn] = useState(false)
    const [isHoveringGithub, setHoveringGithub] = useState(false)
    const [isHoveringDownload, setHoveringDownload] = useState(false)

    const linkedInIconStyling = { color: isHoveringLinkedIn ? '#0077b5' : '#292524' }
    const guthubIconStyling = { color: isHoveringGithub ? '#000' : '#292524' }
    const downloadIconStyling = { color: isHoveringDownload ? '#ff6167' : '#292524' }

    library.add(faSquareLinkedin, faSquareGithub, faFileArrowDown)

    const linkedInIcon = (
        <FontAwesomeIcon
            icon={['fab', 'square-linkedin']}
            className={iconStyling}
            style={linkedInIconStyling}
            onMouseEnter={() => {
                return onIconMouseEnter('linkedin')
            }}
            onMouseLeave={() => {
                return onIconMouseLeave('linkedin')
            }}
        />
    )
    const githubIcon = (
        <FontAwesomeIcon
            icon={['fab', 'square-github']}
            className={iconStyling}
            style={guthubIconStyling}
            onMouseEnter={() => onIconMouseEnter('github')}
            onMouseLeave={() => onIconMouseLeave('github')}
        />
    )
    const downloadIcon = (
        <FontAwesomeIcon
            icon={'file-arrow-down'}
            className={iconStyling}
            style={downloadIconStyling}
            onMouseEnter={() => onIconMouseEnter('download')}
            onMouseLeave={() => onIconMouseLeave('download')}
        />
    )

    const device = useDeviceDetection()

    function onIconMouseEnter(icon) {
        if (device !== 'Desktop') return
        switch (icon) {
            case 'linkedin':
                setHoveringLinkedIn(true)
                break
            case 'github':
                setHoveringGithub(true)
                break
            case 'download':
                setHoveringDownload(true)
                break
        }
    }

    function onIconMouseLeave(icon) {
        switch (icon) {
            case 'linkedin':
                setHoveringLinkedIn(false)
                console.log(isHoveringLinkedIn)
                break
            case 'github':
                setHoveringGithub(false)
                break
            case 'download':
                setHoveringDownload(false)
                break
        }
    }

    return (
        <>
            <section id="intro" className={introSectionStyling}>
                <p className="w-[100%] text-justify">
                    Recently graduated computer engineer with a strong passion for software development. I have several
                    years of experience volunteering in organizations, and over two years of relevant job experience. My
                    special expertise include building and delivering full-stack solutions on the web, solving complex
                    problems programmatically, as well as engineering robust database solutions. The next item on my
                    bucket list is securing an interesting and challenging career with both horizontal and vertical
                    growth opportunities.
                </p>
                <div className="flex flex-row w-full items-center justify-around">
                    <div className={iconContainerStyling}>
                        {linkedInIcon}
                        <div className={tooltipStyling}>GitHub</div>
                    </div>
                    <div className={iconContainerStyling}>
                        {githubIcon}
                        <div className={tooltipStyling}>LinkedIn</div>
                    </div>
                    <div className={iconContainerStyling}>
                        {downloadIcon}
                        <div className={tooltipStyling}>Download Resume</div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Introduction
