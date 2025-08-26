import ExpertiseItemLabel from "../ui/expertiseItemLabel"

function ExpertiseItem(props) {
    const title = props.item.title
    const labelList = props.item.labelList
    const expertiseItemStyling = 'border border-black border-4 rounded-xl p-10'
    const expertiseTitleStyling = 'text-md 2xs:text-xl font-bold mb-6'
    const expertiseLabelsContainerStyling = 'grid grid-cols-[repeat(auto-fit,_minmax(140px,_1fr))] gap-6'

    return (
        <div className={expertiseItemStyling}>
            <h4 className={expertiseTitleStyling}>{title}</h4>
            <div className={expertiseLabelsContainerStyling}>
                {labelList.map((label, index) => (
                    <ExpertiseItemLabel key={index} title={label} />
                ))}
            </div>
        </div>
    )
}

export default ExpertiseItem
