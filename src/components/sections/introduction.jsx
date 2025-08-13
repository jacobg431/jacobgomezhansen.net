import { library } from '@fortawesome/fontawesome-svg-core'
import { faSquareLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import IntroIconItem from '../items/introIconItem'
import getUserLanguage from '../../utils/language'

function Introduction() {
    const introSectionStyling = 'flex justify-center lg:flex-row px-4 2xs:px-10 sm:px-20 lg:px-40 xl:px-0 bg-white'
    const introInnerWrapperStyling = 'flex flex-col w-full xl:max-w-[64rem] py-10 gap-8'
    const downloadButtonStyling = 'cursor-pointer font-bold text-center px-4 py-2 rounded-lg ring-black ring-1 inset-ring-black inset-ring-3 duration-400 ease-out hover:border-red hover:ring-red hover:inset-ring-red hover:text-red'

    const resumeLanguageMap = {
        default: '/src/assets/Resume-Jacob-Gomez-Hansen-English-Version.pdf',
        danish: '/src/assets/Resume-Jacob-Gomez-Hansen-Dansk-Version.pdf',
        norwegian: '/src/assets/Resume-Jacob-Gomez-Hansen-Norsk-Versjon.pdf',
    }
    const resumeLanguageUrl = resumeLanguageMap[getUserLanguage()]

    library.add(faSquareLinkedin, faSquareGithub)

    function onDonwloadButtonClick() {
        window.open(resumeLanguageUrl)
    }

    return (
        <>
            <section id="intro" className={introSectionStyling}>
                <div className={introInnerWrapperStyling}>                
                    <p className="w-[100%] text-sm xs:text-base text-justify">
                        Recently graduated computer engineer with a strong passion for software development. I have several
                        years of experience volunteering in organizations, and over two years of relevant job experience. My
                        special expertise include building and delivering full-stack solutions on the web, solving complex
                        problems programmatically, as well as engineering robust database solutions. The next item on my
                        bucket list is securing an interesting and challenging career with both horizontal and vertical
                        growth opportunities.
                    </p>
                    <div className="flex flex-row w-full items-center gap-4">
                        <IntroIconItem iconId="linkedin" tooltip="LinkedIn"/>
                        <IntroIconItem iconId="github" tooltip="GitHub" />
                        <div className={downloadButtonStyling} onClick={onDonwloadButtonClick}>Download Resume</div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Introduction
