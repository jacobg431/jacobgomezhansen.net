import { useState } from 'react'
import LibraryItem from '../items/libraryItem'
import libraryData from '../../data/libraryData.json'
import Button from '../ui/button'

function Library(props) {
    const images = props.images
    const librarySectionStyling = 'flex justify-center px-4 2xs:px-10 sm:px-20 lg:px-40 bg-white'
    const libraryInnerWrapperStyling = 'w-full xl:max-w-[64rem] py-10'
    const libraryTitleStyling = 'text-3xl font-bold mb-6'
    const libraryItemsContainerStyling =
        'grid grid-cols-[repeat(auto-fit,_minmax(16rem,_1fr))] xs:grid-cols-[repeat(auto-fit,_minmax(24rem,_1fr))] gap-6'
    const buttonWrapperStyling = 'mt-6 flex'

    const [isShowingAllItems, setShowItems] = useState(false)
    const buttonText = isShowingAllItems ? "Show Less" : "Show All"

    const libraryItemList = libraryData.itemList.sort((a, b) => a.key - b.key) // Make sure list is sorted in asc order
    const libraryItemMap = libraryItemList.map((item) => (<LibraryItem key={item.key} item={item} images={images} />))

    const libraryItemListLimited = libraryItemList.slice(0, 2)
    const libraryItemMapLimited = libraryItemListLimited.map((item) => (<LibraryItem key={item.key} item={item} images={images} />))

    function onLibraryButtonClick() {
        setShowItems(!isShowingAllItems)
    }

    return (
        <>
            <section id="library" className={librarySectionStyling}>
                <div className={libraryInnerWrapperStyling}>
                    <h2 className={libraryTitleStyling}>Library</h2>
                    <div className={libraryItemsContainerStyling}>
                        {isShowingAllItems ? libraryItemMap : libraryItemMapLimited}
                    </div>
                    <div className={buttonWrapperStyling}>
                        <Button text={buttonText} onClick={onLibraryButtonClick} />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Library
