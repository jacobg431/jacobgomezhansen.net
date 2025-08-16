function PortfolioItem(props) {
    const portfolioImageStyling = 'h-32 bg-white rounded-xl bg-contain bg-no-repeat bg-center ' + props.imageUrl
    // bg-[url(' + props.imageUrl + ')]'

    return (
        <>
            <div className="max-w-96 p-6 bg-stone-300 rounded-xl">
                <h3 className="text-xl font-bold py-6">{props.title}</h3>
                <div className={portfolioImageStyling}></div>
                <p className="py-6">{props.description}</p>
            </div>
        </>
    )
}

export default PortfolioItem
