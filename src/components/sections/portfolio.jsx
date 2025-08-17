import PortfolioItem from '../items/portfolioItem'

function Portfolio() {

    const portfolioSectionStyling = 'flex justify-center px-4 2xs:px-10 sm:px-20 lg:px-40 bg-white'
    const portfolioInnerWrapperStyling = 'w-full xl:max-w-[64rem] py-10'
    const portfolioItemsContainerStyling = 'grid grid-cols-[repeat(auto-fit,_minmax(16rem,_1fr))] gap-6'

    return (
        <>
            <section id="portfolio" className={portfolioSectionStyling}>
                <div className={portfolioInnerWrapperStyling}>
                    <h2 className="font-bold text-3xl py-6">Projects</h2>
                    <div className={portfolioItemsContainerStyling}>
                        <PortfolioItem
                            title="Automated Maintenance Scheduling"
                            url="https://www.hiof.no/iio/om/expo/prosjekter-2025/automatisering/b25itk59/index.html"
                            imageUrl="/src/assets/Optiplan-128-Px.webp"
                            description="Web-based prototype to demonstrate the concept of automated maintenance scheduling in industrial environments. Sponsored by Kongsberg Digital."
                        />
                        <PortfolioItem
                            title="Create a CV"
                            url="https://cv.begby.net"
                            imageUrl="/src/assets/Create-a-CV-128-Px.webp"
                            description="Automatically generate a CV in PDF format based on user form input."
                        />
                        <PortfolioItem
                            title="Make GPT Laugh"
                            url="https://globalgamejam.org/games/2024/make-gpt-laugh-5"
                            imageUrl="/src/assets/Make-GPT-Laugh-128-Px.webp"
                            description="Form sentences. Keep ChatGPT amused. Keep on living."
                        />
                        <PortfolioItem
                            title="Bards of the Wild"
                            url="https://gamebanana.com/mods/451070"
                            imageUrl="/src/assets/Bards-of-the-Wild-128-Px.webp"
                            description="A The Legend of Zelda: Breath of the Wild music modification. Made in collaboration with VGM Lounge and 30+ composers. Original music only."
                        />
                        <PortfolioItem
                            title="Ballads of the Wild"
                            url="https://gamebanana.com/mods/425867"
                            imageUrl="/src/assets/Ballads-of-the-wild-128-Px.webp"
                            description="A The Legend of Zelda: Breath of the Wild music modification. All tracks are covers, remixes or rearrangements of tracks from The Legend of Zelda franchise."
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio
