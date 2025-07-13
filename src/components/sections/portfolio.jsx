import PortfolioItem from "../items/portfolioItem"

function Portfolio() {

    return (
        <>
            <section id="portfolio" className="p-10 bg-stone-50">
                <h2 className="text-3xl py-6">Portfolio</h2>
                <div className="grid grid-cols-[repeat(auto-fit,_minmax(300px,_1fr))] gap-6">

                    <PortfolioItem title="Automated Maintenance Scheduling" description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus." />
                    <PortfolioItem title="Create a CV" description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus." />
                    <PortfolioItem title="Make GPT Laugh" description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus." />
                    <PortfolioItem title="Ballads of the Wild" description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus." />
                    <PortfolioItem title="Bards of the Wild" description="Lorem ipsum dolor sit amet consectetur adipiscing elit. Dolor sit amet consectetur adipiscing elit quisque faucibus." />

                </div>
            </section>
        </>
    )

}

export default Portfolio