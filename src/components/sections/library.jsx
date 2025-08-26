import LibraryItem from '../items/libraryItem'

function Library() {
    const librarySectionStyling = 'flex justify-center px-4 2xs:px-10 sm:px-20 lg:px-40 bg-white'
    const libraryInnerWrapperStyling = 'w-full xl:max-w-[64rem] py-10'
    const libraryTitleStyling = 'text-3xl font-bold mb-6'
    const libraryItemsContainerStyling =
        'grid grid-cols-[repeat(auto-fit,_minmax(16rem,_1fr))] xs:grid-cols-[repeat(auto-fit,_minmax(24rem,_1fr))] gap-6'

    return (
        <>
            <section id="library" className={librarySectionStyling}>
                <div className={libraryInnerWrapperStyling}>
                    <h2 className={libraryTitleStyling}>Library</h2>
                    <div className={libraryItemsContainerStyling}>
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
                </div>
            </section>
        </>
    )
}

export default Library
