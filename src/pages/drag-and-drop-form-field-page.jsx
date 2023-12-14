import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import DragDots from "../assets/icons/drag-vector.svg";
import RzToggle from "../components/atoms/rz-toggle";

const HeaderComponent = ({ title }) => {
  return (
    <div className="flex justify-between items-center p-4">
      <div className="max-w-[180px] w-full flex">
        <img src={DragDots} alt="drag-icon" className="mx-2  hover:scale-90" />
        {title}
      </div>
      <div className="flex-grow border rounded-md">
        <input
          type="text"
          placeholder={title}
          className="w-full p-1.5 rounded-md"
        />
      </div>
      <div className="flex space-x-4 mx-3">
        <RzToggle />
        <PencilSquareIcon className="text-[#94A3B8] w-6 h-6" />
        <TrashIcon className="text-[#94A3B8] w-6 h-6" />
      </div>
    </div>
  );
};

const DraggableComponent = ({ id, title, index, moveItem, onDragEnd }) => {
  const [, dragRef] = useDrag({
    type: "DRAGGABLE_COMPONENT",
    item: { id, index },
  });

  const [, dropRef] = useDrop({
    accept: "DRAGGABLE_COMPONENT",
    hover: (draggedItem) => {
      if (draggedItem.index !== index) {
        moveItem(draggedItem.index, index);
        draggedItem.index = index;
      }
    },
    drop: onDragEnd,
  });

  return (
    <li ref={(node) => dragRef(dropRef(node))}>
      <HeaderComponent title={title} />
    </li>
  );
};

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
};

const DragAndDropList = () => {
  const [items, setItems] = useState([
    { id: 1, title: "Name" },
    { id: 2, title: "Email ID" },
    { id: 3, title: "Contact Number" },
    { id: 4, title: "Department" },
    { id: 5, title: "Reporting manager" },
    { id: 6, title: "Issue details" },
  ]);

  const onDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedItems = reorder(
      items,
      result.source.index,
      result.destination.index
    );
    setItems(reorderedItems);
  };

  const moveItem = (startIndex, endIndex) => {
    const reorderedItems = reorder(items, startIndex, endIndex);
    setItems(reorderedItems);
  };

  return (
    <div className="bg-gray-100 h-screen w-full overflow-auto">
      <div className="max-w-3xl mx-auto w-full my-9">
        <div className="text-lg font-bold text-gray-700 py-9">
          Drag and Drop field page
        </div>
        <DndProvider backend={HTML5Backend}>
          <ul>
            {items.map((item, index) => (
              <DraggableComponent
                key={item.id}
                id={item.id}
                title={item.title}
                index={index}
                moveItem={moveItem}
                onDragEnd={onDragEnd}
              />
            ))}
          </ul>
        </DndProvider>
      </div>
    </div>
  );
};

export default DragAndDropList;
