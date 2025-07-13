import LibraryItem from "../items/libraryItem"

function Library() {

    return (
        <>
            <section id="library" className="p-10 bg-stone-50">
                <h2 className="text-3xl py-6">Library</h2>
                <div className="grid grid-cols-[repeat(auto-fit,_minmax(400px,_1fr))] gap-6">

                    <LibraryItem title="C# and .NET" description="Lorem ipsum dolor sit amet consectetur adipiscing elit." />
                    <LibraryItem title="Full Stack Development with Spring Boot 3 and React" description="Lorem ipsum dolor sit amet consectetur adipiscing elit." />
                    <LibraryItem title="The Data Warehouse Toolkit" description="Lorem ipsum dolor sit amet consectetur adipiscing elit." />
                    
                </div>
            </section>
        </>
    )

}

export default Library