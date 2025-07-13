import ExpertiseItem from "../items/expertiseItem"

function Expertise() {

    return (
        <>
            <section id="expertise" className="p-10 bg-stone-50">
                <h2 className="text-3xl py-6">Expertise</h2>
                <div className="flex grid-cols-6 gap-6">
                    <ExpertiseItem title="Python" />
                    <ExpertiseItem title="C++" />
                    <ExpertiseItem title="C" />
                    <ExpertiseItem title="C#" />
                    <ExpertiseItem title="Java" />
                    <ExpertiseItem title="JavaScript" />
                </div>
            </section>
        </>
    )

}

export default Expertise