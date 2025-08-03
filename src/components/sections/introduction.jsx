import greenPlanet from '../../assets/Green-Black-Planet.svg'
import redPlanet from '../../assets/Red-Black-Planet.svg'
import yellowPlanet from '../../assets/Yellow-Black-Planet.svg'

function Introduction() {

    const planetStyling = 'h-32 cursor-pointer hover:scale-150 duration-400 ease-out peer z-10'
    const tooltipStyling = 'top-100 peer-hover:top-125 absolute px-3 py-1 text-white bg-black rounded-2xl opacity-0 peer-hover:opacity-100 duration-400 ease-out'

    return (
        <>
            <section id="intro" className="flex w-full gap-8 px-4 py-10 2xs:p-10 bg-stone-50 img.hover:bg-black">
                <p className="max-w-3xl text-justify">
                    Recently graduated computer engineer with a strong passion for software development. I have several
                    years of experience volunteering in organizations, and over two years of relevant job experience. My
                    special expertise include building and delivering full-stack solutions on the web, solving complex
                    problems programmatically, as well as engineering robust database solutions. The next item on my
                    bucket list is securing an interesting and challenging career with both horizontal and vertical
                    growth opportunities.
                </p>
                <div className="flex w-full justify-center gap-8">
                    <div className="flex justify-center">
                        <img src={greenPlanet} alt="Flat vector image depicting a green planet" className={planetStyling} />
                        <div className={tooltipStyling}>GitHub</div>
                    </div>
                    <div className="flex justify-center">
                        <img src={redPlanet} alt="Flat vector image depicting a yellow planet with rings" className={planetStyling} />
                        <div className={tooltipStyling}>LinkedIn</div>
                    </div>
                    <div className="flex justify-center">
                        <img src={yellowPlanet} alt="Flat vector image depicting a red planet" className={planetStyling} />
                        <div className={tooltipStyling}>Message Me</div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Introduction
