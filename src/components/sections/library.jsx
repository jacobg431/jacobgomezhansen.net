import LibraryItem from '../items/libraryItem'
import libraryData from '../../data/libraryData.json'

function Library() {
    const librarySectionStyling = 'flex justify-center px-4 2xs:px-10 sm:px-20 lg:px-40 bg-white'
    const libraryInnerWrapperStyling = 'w-full xl:max-w-[64rem] py-10'
    const libraryTitleStyling = 'text-3xl font-bold mb-6'
    const libraryItemsContainerStyling =
        'grid grid-cols-[repeat(auto-fit,_minmax(16rem,_1fr))] xs:grid-cols-[repeat(auto-fit,_minmax(24rem,_1fr))] gap-6'
    const libraryItemList = libraryData.itemList

    return (
        <>
            <section id="library" className={librarySectionStyling}>
                <div className={libraryInnerWrapperStyling}>
                    <h2 className={libraryTitleStyling}>Library</h2>
                    <div className={libraryItemsContainerStyling}>
                        {libraryItemList.map((item) => (
                            <LibraryItem key={item.key} item={item} />
                        ))}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Library
