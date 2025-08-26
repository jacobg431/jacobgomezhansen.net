import { useState } from 'react'
import { DragDropContext, Draggable, Droppable } from '@hello-pangea/dnd'
import ExpertiseItemLabel from '../ui/expertiseItemLabel'

function ExpertiseItem(props) {
    const title = props.item.title
    const labelList = props.item.labelList
    const expertiseItemStyling = 'border border-black border-4 rounded-xl p-10'
    const expertiseTitleStyling = 'text-md 2xs:text-xl font-bold mb-6'
    const expertiseLabelsContainerStyling = 'flex flex-wrap gap-6'

    const [labels, setLabels] = useState(labelList)

    const handleDragEnd = (result) => {
        if (!result.destination) return

        const updatedLabels = Array.from(labels)
        const [moved] = updatedLabels.splice(result.source.index, 1)
        updatedLabels.splice(result.destination.index, 0, moved)

        setLabels(updatedLabels)
    }

    return (
        <div className={expertiseItemStyling}>
            <h4 className={expertiseTitleStyling}>{title}</h4>
            <DragDropContext onDragEnd={handleDragEnd}>
                <Droppable droppableId='labels' direction='horizontal'>
                    {(provided) => (
                        <div className={expertiseLabelsContainerStyling} ref={provided.innerRef} {...provided.droppableProps}>
                            {labels.map((label, index) => (
                                <Draggable key={label} draggableId={label} index={index}>
                                    {(provided) => (
                                        <div ref={provided.innerRef} {...provided.dragHandleProps} {...provided.draggableProps}>
                                            <ExpertiseItemLabel title={label} />
                                        </div>
                                    )}
                                </Draggable>
                            ))}
                            {provided.placeholder}
                        </div>
                    )}
                </Droppable>
            </DragDropContext>
        </div>
    )
}

export default ExpertiseItem
