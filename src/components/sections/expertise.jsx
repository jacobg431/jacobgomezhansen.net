import ExpertiseItem from '../items/expertiseItem'
import expertiseData from '../../data/expertiseData.json'

function Expertise() {
    const expertiseSectionStyling = 'flex justify-center px-4 2xs:px-10 sm:px-20 lg:px-40 bg-white'
    const expertiseInnerWrapperStyling = 'flex flex-col gap-6 w-full xl:max-w-[64rem] py-10'
    const textWrapperStyling = 'flex flex-col gap-2'
    const titleStyling = 'text-3xl font-bold'
    const paragraphStyling = 'text-sm sm:text-base'
    const expertiseItemList = expertiseData.itemList

    return (
        <>
            <section id="expertise" className={expertiseSectionStyling}>
                <div className={expertiseInnerWrapperStyling}>
                    <div className={textWrapperStyling}>
                        <h2 className={titleStyling}>Expertise</h2>
                        <p className={paragraphStyling}>
                            I know how to create useful and valuable systems, using several technologies from across the
                            tech stack.
                        </p>
                    </div>
                    {expertiseItemList.map((item) => (
                        <ExpertiseItem key={item.key} item={item} />
                    ))}
                </div>
            </section>
        </>
    )
}

export default Expertise
