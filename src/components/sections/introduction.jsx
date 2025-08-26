import { library } from '@fortawesome/fontawesome-svg-core'
import { faSquareLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
//import IntroIconItem from '../items/introIconItem'
import IntroButtonItem from '../items/introButtonItem'

function Introduction(props) {
    const allResumes = props.allResumes
    const introSectionStyling =
        'flex justify-center lg:flex-row mt-10 px-4 2xs:px-10 sm:px-20 lg:px-40 xl:px-0 bg-white'
    const introInnerWrapperStyling = 'flex flex-col w-full xl:max-w-[64rem] py-10 gap-8'

    library.add(faSquareLinkedin, faSquareGithub)

    return (
        <>
            <section id="intro" className={introSectionStyling}>
                <div className={introInnerWrapperStyling}>
                    <p className="w-[100%] text-sm xs:text-base text-justify">
                        Recently graduated computer engineer with a strong passion for software development. I have
                        several years of experience volunteering in organizations, and over two years of relevant job
                        experience. My special expertise include building and delivering full-stack solutions on the
                        web, solving complex problems programmatically, as well as engineering robust database
                        solutions. The next item on my bucket list is securing an interesting and challenging career
                        with both horizontal and vertical growth opportunities.
                    </p>
                    <div className="flex flex-row w-full items-center gap-4">
                        <IntroButtonItem id="download" text="Download Resume" allResumes={allResumes} />
                        <IntroButtonItem id="message" text="Message Me" allResumes={allResumes} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Introduction
