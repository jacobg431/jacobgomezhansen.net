import { useState } from 'react'
import LibraryItem from '../items/libraryItem'
import libraryData from '../../data/libraryData.json'
import Button from '../ui/button'

function Library(props) {
    const images = props.images
    const librarySectionStyling = 'flex justify-center pb-10 px-4 2xs:px-10 sm:px-20 lg:px-40 bg-white'
    const libraryInnerWrapperStyling = 'flex flex-col gap-6 w-full xl:max-w-[64rem] py-10'
    const textWrapperStyling = 'flex flex-col gap-2'
    const titleStyling = 'text-3xl font-bold'
    const paragraphStyling = 'text-sm sm:text-base'
    const libraryItemsContainerStyling =
        'grid grid-cols-[repeat(auto-fit,_minmax(16rem,_1fr))] xs:grid-cols-[repeat(auto-fit,_minmax(24rem,_1fr))] gap-6'
    const buttonWrapperStyling = 'flex'

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
                    <div className={textWrapperStyling}>
                        <h2 className={titleStyling}>Library</h2>
                        <p className={paragraphStyling}>
                            Several books have expanded my knowledge about software development. They have helped me through my studies, 
                            during my internship, or while working on projects in my free time. Here are my thoughts about some of them.
                        </p>
                    </div><div className={libraryItemsContainerStyling}>
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
