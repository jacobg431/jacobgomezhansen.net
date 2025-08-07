import { library } from '@fortawesome/fontawesome-svg-core'
import { faSquareLinkedin, faSquareGithub } from '@fortawesome/free-brands-svg-icons'
import { faFileArrowDown } from '@fortawesome/free-solid-svg-icons'
import IntroIconItem from '../items/introIconItem'

function Introduction() {
    const introSectionStyling =
        'flex flex-col lg:flex-row w-full gap-8 px-4 pt-10 2xs:p-10 bg-white img.hover:bg-black group'

    library.add(faSquareLinkedin, faSquareGithub, faFileArrowDown)

    return (
        <>
            <section id="intro" className={introSectionStyling}>
                <p className="w-[100%] text-sm xs:text-base text-justify">
                    Recently graduated computer engineer with a strong passion for software development. I have several
                    years of experience volunteering in organizations, and over two years of relevant job experience. My
                    special expertise include building and delivering full-stack solutions on the web, solving complex
                    problems programmatically, as well as engineering robust database solutions. The next item on my
                    bucket list is securing an interesting and challenging career with both horizontal and vertical
                    growth opportunities.
                </p>
                <div className="flex flex-row w-full items-center justify-around">
                    <IntroIconItem iconId="linkedin" toopltip="LinkedIn" hoverColor="#0077b5" />
                    <IntroIconItem iconId="github" toopltip="GitHub" hoverColor="#000" />
                    <IntroIconItem iconId="download" toopltip="Download Resume" hoverColor="#ff6167" />
                </div>
            </section>
        </>
    )
}

export default Introduction
