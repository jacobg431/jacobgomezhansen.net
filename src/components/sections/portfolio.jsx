import PortfolioItem from "../ui/portfolioItem"

function Portfolio() {

    return (
        <>
            <section id="portfolio">
                <h2>Portfolio</h2>
                <div class="portfolio-list">

                    <PortfolioItem title="Project Titan" description="A web-based strategy game with real-time multiplayer features." />
                    <PortfolioItem title="CodeForge" description="An interactive IDE in the browser, with live collaboration." />
                    <PortfolioItem title="DataViz Pro" description="Dynamic dashboards for monitoring key performance metrics." />

                </div>
            </section>
        </>
    )

}

export default Portfolio