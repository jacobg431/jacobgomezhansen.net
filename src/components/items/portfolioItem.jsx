function PortfolioItem(props) {

    return (
        <>
             <div className="max-w-96 p-6 bg-stone-300 rounded-xl">
                <h3 className="text-xl font-bold py-6">{props.title}</h3>
                <div className="h-32 bg-stone-800 rounded-xl"></div>
                <p className="py-6">{props.description}</p>
            </div>
        </>
    )

}

export default PortfolioItem