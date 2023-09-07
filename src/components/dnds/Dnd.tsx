import { DragDropContext, Draggable, Droppable } from "react-beautiful-dnd";



interface DndProps {
  groups: Array<string>[] | null;
  setGroups: React.Dispatch<React.SetStateAction<string[][]>> | null;
  groupStyle?: any;
  itemStyle?: any;
}

export default function Dnd({
  groups,
  setGroups,
  groupStyle,
  itemStyle
}: DndProps) {

  const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);
    destClone.splice(droppableDestination.index, 0 , removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
  }

  const reorder = (groups, startIndex, endIndex) => {
    const result = Array.from(groups);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  }

  const onDragEnd = (result) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }
    const sIdx = +source.droppableId;
    const dIdx = +destination.droppableId;

    if (sIdx === dIdx) {
      const Items = reorder(groups[sIdx], source.index, destination.index);
      const newGroups = [...groups];
      newGroups[sIdx] = Items;
      setGroups(newGroups);
    } else {
      const result = move(groups[sIdx], groups[dIdx], source, destination);
      const newGroups = [...groups];
      newGroups[sIdx] = result[sIdx];
      newGroups[dIdx] = result[dIdx];

      setGroups(newGroups.filter(group => group.length));
    }
  }

  const getItemStyle = (isDragging, draggableStyle) => ({
    ...itemStyle,
    ...draggableStyle
  })

  const getGroupStyle = (isDraggingOver) => ({
    ...groupStyle
  })

  return(
    <div className="flex">
      <DragDropContext onDragEnd={onDragEnd}>
        {groups?.map((group, idx: number) => (
          <Droppable key={idx} droppableId={`${idx}`}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={getGroupStyle(snapshot.isDraggingOver)}
                {...provided.droppableProps}
              >
                {group.map((item, index) => (
                  <Draggable
                    key={item}
                    draggableId={item}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(snapshot.isDragging, provided.draggableProps.style)}
                      >
                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                          {item}
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </div>
  )
}