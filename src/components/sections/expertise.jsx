import ExpertiseItem from '../items/expertiseItem'
import expertiseData from '../../data/expertiseData.json'

function Expertise() {
    const expertiseSectionStyling = 'flex justify-center px-4 2xs:px-10 sm:px-20 lg:px-40 bg-white'
    const expertiseInnerWrapperStyling = 'flex flex-col gap-6 w-full xl:max-w-[64rem] py-10'
    const expertiseTitleStyling = 'text-3xl font-bold'
    const expertiseItemList = expertiseData.itemList

    return (
        <>
            <section id="expertise" className={expertiseSectionStyling}>
                <div className={expertiseInnerWrapperStyling}>
                    <h2 className={expertiseTitleStyling}>Expertise</h2>
                    {expertiseItemList.map((item) => (
                        <ExpertiseItem key={item.key} item={item} />
                    ))}
                </div>
            </section>
        </>
    )
}

export default Expertise
