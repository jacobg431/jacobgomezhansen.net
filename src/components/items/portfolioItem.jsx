function PortfolioItem(props) {
    const portfolioItemStyling = 'border border-black border-4 max-w-96 px-8 py-10 bg-white rounded-xl'
    const portfolioImageStyling = 'h-32 rounded-xl'

    // bg-[url(' + props.imageUrl + ')]'

    return (
        <>
            <div className={portfolioItemStyling}>
                <img className={portfolioImageStyling} src={props.imageUrl} alt={props.alt}></img>
                <h3 className="text-xl font-bold mt-8 -mb-2">{props.title}</h3>
                <p className="py-6">{props.description}</p>
            </div>
        </>
    )
}

export default PortfolioItem
