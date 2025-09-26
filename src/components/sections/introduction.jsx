import { library } from '@fortawesome/fontawesome-svg-core'
import { faSquareLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import Button from '../ui/button'
import getUserLanguage from '../../utils/language'

function Introduction(props) {
    const resumes = props.resumes
    const introSectionStyling =
        'flex justify-center lg:flex-row px-4 pt-10 2xs:px-10 sm:px-20 lg:px-40 xl:px-0 bg-white'
    const introInnerWrapperStyling = 'flex flex-col w-full xl:max-w-[64rem] py-10 gap-8'
    const introTextStyling = 'w-[100%] text-sm xs:text-base text-justify'
    const introButtonStyling = 'flex flex-row w-full items-center gap-4'

    const resumeLanguageMap = {
        default: resumes['/src/assets/resumes/Resume-Jacob-Gomez-Hansen-English-Version.pdf'],
        danish: resumes['/src/assets/resumes/Resume-Jacob-Gomez-Hansen-Dansk-Version.pdf'],
        norwegian: resumes['/src/assets/resumes/Resume-Jacob-Gomez-Hansen-Norsk-Versjon.pdf'],
    }
    const resumeLanguageUrl = resumeLanguageMap[getUserLanguage()]

    library.add(faSquareLinkedin, faSquareGithub)

    function onDownloadButtonClick() {
        window.open(resumeLanguageUrl)
    }

    function onMessageButtonClick() {
        return
    }

    return (
        <>
            <section id="intro" className={introSectionStyling}>
                <div className={introInnerWrapperStyling}>
                    <p className={introTextStyling}>
                        Recently graduated computer engineer with a strong passion for software development. I have
                        several years of experience volunteering in organizations, and over two years of relevant job
                        experience. My special expertise include building and delivering full-stack solutions on the
                        web, solving complex problems programmatically, as well as engineering robust database
                        solutions. The next item on my bucket list is securing an interesting and challenging career
                        with both horizontal and vertical growth opportunities.
                    </p>
                    <div className={introButtonStyling}>
                        <Button text="Download Resume" onClick={onDownloadButtonClick} />
                        <Button text="Message Me" onClick={onMessageButtonClick} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Introduction
