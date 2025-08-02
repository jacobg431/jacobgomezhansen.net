function LibraryItem(props) {
    return (
        <>
            <div className="flex flex-col xs:flex-row w-full p-6 gap-6 text-center xs:text-left items-center bg-stone-300 rounded-xl">
                <div className="min-w-20 h-24 bg-stone-800"></div>
                <div className="">
                    <h3 className="text-xl font-bold py-2">{props.title}</h3>
                    <p>{props.description}</p>
                </div>
            </div>
        </>
    )
}

export default LibraryItem
