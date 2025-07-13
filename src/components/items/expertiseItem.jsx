function ExpertiseItem(props) {
    return (
        <>
            <div className="flex justify-center items-center px-8 py-6 font-bold bg-stone-300 rounded-xl">
                <p className="text-center text-sm m-0">{props.title}</p>
            </div>
        </>
    )
}

export default ExpertiseItem
