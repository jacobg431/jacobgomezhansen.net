import PortfolioItem from '../items/portfolioItem'

function Portfolio() {

    const portfolioSectionStyling = 'flex justify-center px-4 2xs:px-10 sm:px-20 lg:px-40 bg-white'
    const portfolioInnerWrapperStyling = 'w-full xl:max-w-[64rem] py-10'
    const portfolioItemsContainerStyling = 'grid grid-cols-[repeat(auto-fit,_minmax(16rem,_1fr))] gap-6'

    return (
        <>
            <section id="portfolio" className={portfolioSectionStyling}>
                <div className={portfolioInnerWrapperStyling}>
                    <h2 className="text-3xl py-6">Portfolio</h2>
                    <div className={portfolioItemsContainerStyling}>
                        <PortfolioItem
                            title="Automated Maintenance Scheduling"
                            description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus."
                        />
                        <PortfolioItem
                            title="Create a CV"
                            description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus."
                        />
                        <PortfolioItem
                            title="Make GPT Laugh"
                            description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus."
                        />
                        <PortfolioItem
                            title="Ballads of the Wild"
                            description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus."
                        />
                        <PortfolioItem
                            title="Bards of the Wild"
                            description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus."
                        />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio
