import PortfolioItem from '../items/portfolioItem'
import portfolioData from '../../data/portfolioData.json'

function Portfolio(props) {
    const allImages = props.allImages
    const portfolioSectionStyling = 'flex justify-center px-4 2xs:px-10 sm:px-20 lg:px-40 bg-white'
    const portfolioInnerWrapperStyling = 'w-full xl:max-w-[64rem] py-10'
    const portfolioItemsContainerStyling = 'grid grid-cols-[repeat(auto-fit,_minmax(18rem,_1fr))] gap-6'
    const portfolioItemList = portfolioData.itemList

    return (
        <>
            <section id="portfolio" className={portfolioSectionStyling}>
                <div className={portfolioInnerWrapperStyling}>
                    <h2 className="font-bold text-3xl py-6">Projects</h2>
                    <div className={portfolioItemsContainerStyling}>
                        {portfolioItemList.map((item) => (
                            <PortfolioItem key={item.key} item={item} allImages={allImages} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio
