function PortfolioItem(props) {

    return (
        <>
             <div class="portfolio-item">
                <h3>{props.title}</h3>
                <div class="thumb" style="height:100px; background: var(--bg-dark);"></div>
                <p>{props.description}</p>
            </div>
        </>
    )

}

export default PortfolioItem