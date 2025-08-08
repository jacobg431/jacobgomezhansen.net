import LibraryItem from '../items/libraryItem'

function Library() {
    return (
        <>
            <section id="library" className="px-4 2xs:px-10 sm:px-20 lg:px-40 py-10 bg-stone-50">
                <h2 className="text-3xl py-6">Library</h2>
                <div className="grid grid-cols-[repeat(auto-fit,_minmax(16rem,_1fr))] xs:grid-cols-[repeat(auto-fit,_minmax(24rem,_1fr))] gap-6">
                    <LibraryItem
                        title="C# and .NET"
                        description="Lorem ipsum dolor sit amet consectetur adipiscing elit."
                    />
                    <LibraryItem
                        title="Full Stack Development with Spring Boot 3 and React"
                        description="Lorem ipsum dolor sit amet consectetur adipiscing elit."
                    />
                    <LibraryItem
                        title="The Data Warehouse Toolkit"
                        description="Lorem ipsum dolor sit amet consectetur adipiscing elit."
                    />
                </div>
            </section>
        </>
    )
}

export default Library
