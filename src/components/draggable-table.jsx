import React, { useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import RzBadge from "./atoms/rz-badge";
import RzAvatar from "./rz-avatar";
import {
  MagnifyingGlassIcon,
  PencilSquareIcon,
  Square2StackIcon,
  TrashIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const DraggableTable = ({ enableColumnSearch }) => {
  const [columns, setColumns] = useState([
    "Ticket Type Title",
    "Description",
    "Status",
    "Created By",
    "Last Updated",
    "Actions",
  ]);

  const [items, setItems] = useState([
    {
      "Ticket Type Title": "Configuration Request",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      Status: (
        <RzBadge
          title="Published"
          backgroundColor="#DFF7E9"
          textColor="#229F54"
        />
      ),
      "Created By": (
        <div className="flex items-center">
          <div className="mx-2">
            <RzAvatar firstName="Rezolve" />
          </div>
          Sudhanshu@rezolve.ai
        </div>
      ),
      "Last Updated": "Last updated",
      Actions: (
        <div className="flex items-center space-x-[10px]">
          <PencilSquareIcon className="w-4 h-4 text-[#94A3B8]" />
          <TrashIcon className="w-4 h-4 text-[#94A3B8]" />
          <Square2StackIcon className="w-4 h-4 text-[#94A3B8]" />
        </div>
      ),
    },
    {
      "Ticket Type Title": "Configuration Request1",
      Description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      Status: (
        <RzBadge
          title="Success"
          backgroundColor="#DFF7E9"
          textColor="#229F54"
        />
      ),
      "Created By": (
        <div className="flex items-center">
          <div className="mx-2">
            <RzAvatar firstName="Rezolve" />
          </div>
          Sudhanshu@rezolve.ai
        </div>
      ),
      "Last Updated": "Last updated",
      Actions: (
        <div className="flex items-center space-x-[10px]">
          <PencilSquareIcon className="w-4 h-4 text-[#94A3B8]" />
          <TrashIcon className="w-4 h-4 text-[#94A3B8]" />
          <Square2StackIcon className="w-4 h-4 text-[#94A3B8]" />
        </div>
      ),
    },
  ]);
  const moveColumn = (dragIndex, hoverIndex) => {
    const updatedColumns = [...columns];
    const [draggedColumn] = updatedColumns.splice(dragIndex, 1);
    setTimeout(() => {
      updatedColumns.splice(hoverIndex, 0, draggedColumn);
      setColumns(updatedColumns);
    }, 200);
  };

  const moveRow = (dragIndex, hoverIndex) => {
    const updatedItems = [...items];
    const [draggedItem] = updatedItems.splice(dragIndex, 1);
    setTimeout(() => {
      updatedItems.splice(hoverIndex, 0, draggedItem);
      setItems(updatedItems);
    }, 200);
  };
  const Column = ({ index, name }) => {
    const [{ isDragging }, drag] = useDrag({
      type: "COLUMN",
      item: { index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    const [, drop] = useDrop({
      accept: "COLUMN",
      hover: (item) => {
        if (item.index !== index) {
          moveColumn(item.index, index);
          item.index = index;
        }
      },
    });

    const [searchBars, setSearchBars] = useState(columns.map(() => false));
    const toggleSearchBar = (index) => {
      setSearchBars((prevSearchBars) =>
        prevSearchBars.map((searchBar, i) =>
          i === index ? !searchBar : searchBar
        )
      );
    };

    const SearchBar = () => {
      return (
        <div className="absolute top-0 left-0 w-full bg-white border border-gray-300  rounded-md z-10 mt-1 flex justify-between">
          <input
            type="text"
            placeholder="Search..."
            className="w-full max-w-sm p-1 text-sm font-normal border-gray-300 py-1 px-1.5 rounded-l-md "
          />
          <div
            className="p-1.5 bg-gray-100 rounded-r-md"
            onClick={() => toggleSearchBar(index)}
          >
            <XMarkIcon className="w-5 h-5 text-gray-400" />
          </div>
        </div>
      );
    };

    return (
      <th
        ref={(node) => drag(drop(node))}
        className={`text-start ${isDragging ? "opacity-50" : ""}`}
      >
        <div className="flex justify-between items-center  py-[13px] px-[10px] relative ">
          <div>{name}</div>
          {enableColumnSearch && (
            <div className="ml-4">
              <MagnifyingGlassIcon
                className="w-4 h-4 text-[#6B7280]"
                onClick={() => toggleSearchBar(index)}
              />
              {searchBars[index] && <SearchBar />}
            </div>
          )}
        </div>
      </th>
    );
  };

  const Row = ({ index, item }) => {
    const [{ isDragging }, drag] = useDrag({
      type: "ROW",
      item: { index },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    });

    const [, drop] = useDrop({
      accept: "ROW",
      hover: (item) => {
        if (item.index !== index) {
          moveRow(item.index, index);
          item.index = index;
        }
      },
    });

    const opacity = isDragging ? 0.5 : 1;
    const backgroundColor = isDragging
      ? "rgba(144, 202, 249, 0.5)"
      : "transparent";

    return (
      <tr
        ref={(node) => drag(drop(node))}
        className="grouped-table"
        style={{ opacity, backgroundColor }}
      >
        {columns.map((colName, colIndex) => (
          <td
            key={colIndex}
            className="py-4 px-[10px] text-[#6B7280] max-w-[330px] break-words"
          >
            {item[colName]}
          </td>
        ))}
      </tr>
    );
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="rounded-md overflow-auto max-h-[500px] max-w-full border relative custom-scroll">
        <table className="w-full rounded-md p-2">
          <thead className="sticky top-0 bg-[#F9FAFB] text-sm not-italic font-medium leading-normal border-b z-10">
            <tr className="bg-[#F9FAFB]">
              {columns.map((name, index) => (
                <Column key={index} index={index} name={name} />
              ))}
            </tr>
          </thead>
          <tbody>
            {items.map((item, rowIndex) => (
              <Row key={rowIndex} index={rowIndex} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </DndProvider>
  );
};

export default DraggableTable;
