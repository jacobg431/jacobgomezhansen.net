import PortfolioItem from '../items/portfolioItem'
import portfolioData from '../../data/portfolioData.json'

function Portfolio(props) {
    const images = props.images
    const portfolioSectionStyling = 'flex justify-center px-4 2xs:px-10 sm:px-20 lg:px-40 bg-white'
    const portfolioInnerWrapperStyling = 'flex flex-col gap-6 w-full xl:max-w-[64rem] py-10'
    const textWrapperStyling = 'flex flex-col gap-2'
    const titleStyling = 'text-3xl font-bold'
    const paragraphStyling = 'text-sm sm:text-base'
    const portfolioItemsContainerStyling = 'grid grid-cols-[repeat(auto-fit,_minmax(18rem,_1fr))] gap-6'
    const portfolioItemList = portfolioData.itemList

    return (
        <>
            <section id="portfolio" className={portfolioSectionStyling}>
                <div className={portfolioInnerWrapperStyling}>
                    <div className={textWrapperStyling}>
                        <h2 className={titleStyling}>Projects</h2>
                        <p className={paragraphStyling}>
                            This is a list of some exciting projects I have worked on. 
                            Feel free to click on any of the external links to learn more about them.
                        </p>
                    </div>
                    <div className={portfolioItemsContainerStyling}>
                        {portfolioItemList.map((item) => (
                            <PortfolioItem key={item.key} item={item} images={images} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Portfolio
