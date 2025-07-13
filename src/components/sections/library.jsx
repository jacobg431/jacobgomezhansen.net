import LibraryItem from "../items/libraryItem"

function Library() {

    return (
        <>
            <section id="library" className="p-10 bg-stone-50">
                <h2 className="text-3xl py-6">Library</h2>
                <div className="flex grid-cols-[repeat_minmax(200px,_1fr)] gap-6">

                    <LibraryItem title="Clean Code" description="Robert C. Martin's guide to writing readable, maintainable code." />
                    <LibraryItem title="The Pragmatic Programmer" description="Essential tips and philosophies for pragmatic software development." />
                    <LibraryItem title="Design Patterns" description="Classic solutions to common software design challenges." />
                    
                </div>
            </section>
        </>
    )

}

export default Library