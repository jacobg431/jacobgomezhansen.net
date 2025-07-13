import ExpertiseItem from '../items/expertiseItem'

function Expertise() {
    return (
        <>
            <section id="expertise" className="p-10 bg-stone-50">
                <h2 className="text-3xl py-6">Expertise</h2>
                <div className="grid grid-cols-[repeat(auto-fit,_minmax(150px,_1fr))] gap-6">
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
            </section>
        </>
    )
}

export default Expertise
