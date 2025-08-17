import ExpertiseItem from '../items/expertiseItem'

function Expertise() {

    const expertiseSectionStyling = 'flex justify-center px-4 2xs:px-10 sm:px-20 lg:px-40 bg-white'
    const expertiseInnerWrapperStyling = 'w-full xl:max-w-[64rem] py-10'
    const expertiseItemsContainerStyling = 'grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-6'

    return (
        <>
            <section id="expertise" className={expertiseSectionStyling}>
                <div className={expertiseInnerWrapperStyling}>
                    <h2 className="text-3xl py-6">Expertise</h2>
                    <div className={expertiseItemsContainerStyling}>
                        <ExpertiseItem title="Full-Stack Programming" />
                        <ExpertiseItem title="Web Development" />
                        <ExpertiseItem title="Mobile App Development" />
                        <ExpertiseItem title="Embedded Programming" />
                        <ExpertiseItem title="Data Engineering" />
                        <ExpertiseItem title="Data Warehouse" />
                        <ExpertiseItem title="Python" />
                        <ExpertiseItem title="C / C++" />
                        <ExpertiseItem title="C" />
                        <ExpertiseItem title="C# / .NET" />
                        <ExpertiseItem title="Java / Spring Boot" />
                        <ExpertiseItem title="JavaScript / React" />
                        <ExpertiseItem title="SQL" />
                    </div>
                </div>

            </section>
        </>
    )
}

export default Expertise
