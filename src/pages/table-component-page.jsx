import React, { useState, useEffect, useMemo } from "react";
import { useDrag, useDrop } from "react-dnd";
import PropTypes from "prop-types";
import {
  ChevronUpDownIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import TableActionHeader from "../components/table-action-header";

const RzTableComponent = ({
  isDraggable = false,
  tableTitle,
  tableActions,
  enableColumnSearch,
  showCheckbox,
  tableContent,
  ColumnHeaders,
  isSortable,
}) => {
  const HeaderCell = ({ label, onDragEnd, index }) => {
    const [hoverTimeout, setHoverTimeout] = useState(null);
    const [searchBar, setSearchBar] = useState(
      Array.from({ length: columns.length }, () => false)
    );
    const toggleSearchBar = (index) => {
      setSearchBar((prevSearchBars) =>
        prevSearchBars.map((searchBar, i) =>
          i === index ? !searchBar : searchBar
        )
      );
    };

    const SearchBar = () => {
      return (
        <div className="absolute top-9 left-0 w-full bg-white border border-gray-300  rounded-md z-10 mt-1 flex justify-between">
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
    useEffect(() => {
      return () => {
        if (hoverTimeout) {
          clearTimeout(hoverTimeout);
        }
      };
    }, [hoverTimeout]);

    const handleHover = useMemo(() => {
      return (draggedItem) => {
        if (hoverTimeout) {
          clearTimeout(hoverTimeout);
        }
        setHoverTimeout(
          setTimeout(() => {
            if (draggedItem.index !== index) {
              onDragEnd(draggedItem.index, index);
              draggedItem.index = index;
            }
          }, 150)
        );
      };
    }, [hoverTimeout, setHoverTimeout, onDragEnd, index]);

    const [{ isDragging }, dragRef] = useDrag({
      type: "COLUMN",
      item: { index },
      canDrag: isDraggable,
    });

    const [, dropRef] = useDrop({
      accept: "COLUMN",
      hover: handleHover,
    });

    return (
      <th
        scope="col"
        key={label}
        ref={(node) => dragRef(dropRef(node))}
        style={{ opacity: isDragging ? 0.5 : 1 }}
      >
        <div>
          {index === 0 && showCheckbox ? (
            <input type="checkbox" className="h-4 w-4" />
          ) : (
            <>
              <div className="relative  mx-6 whitespace-nowrap justify-between uppercase w-full items-center px-4 text-start text-black text-sm not-italic font-normal flex pt-[14px] pb-[25px]">
                <div className="flex">
                  {label}

                  {isSortable && (
                    <ChevronUpDownIcon className="h-[18px] w-[18px] text-[#94A3B8] px-[2px]" />
                  )}
                </div>

                {enableColumnSearch && (
                  <div className="ml-4">
                    <MagnifyingGlassIcon
                      className="w-4 h-4 text-[#6B7280]"
                      onClick={() => toggleSearchBar(index)}
                    />
                    {searchBar[index] && <SearchBar />}
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      </th>
    );
  };

  const Rows = ({ rowData, index, columns, onDragEnd }) => {
    const [hoverTimeout, setHoverTimeout] = useState(null);

    useEffect(() => {
      return () => {
        if (hoverTimeout) {
          clearTimeout(hoverTimeout);
        }
      };
    }, [hoverTimeout]);

    const handleHover = useMemo(() => {
      return (draggedItem) => {
        if (hoverTimeout) {
          clearTimeout(hoverTimeout);
        }
        setHoverTimeout(
          setTimeout(() => {
            if (draggedItem.index !== index) {
              onDragEnd(draggedItem.index, index);
              draggedItem.index = index;
            }
          }, 150)
        );
      };
    }, [hoverTimeout, setHoverTimeout, onDragEnd, index]);

    const [{ isDragging }, dragRef] = useDrag({
      type: "ROW",
      item: { index },
      canDrag: isDraggable,
    });

    const [, dropRef] = useDrop({
      accept: "ROW",
      hover: handleHover,
    });

    return (
      <tr
        className="border-b"
        ref={(node) => dragRef(dropRef(node))}
        style={{ opacity: isDragging ? 0.5 : 1 }}
      >
        {columns.map((column) => (
          <td key={column.label}>
            <div className="text-start px-4 whitespace-pre py-[9px] mx-6 ">
              {rowData[column.label]}
            </div>
          </td>
        ))}
      </tr>
    );
  };
  const [columns, setColumns] = useState(ColumnHeaders);
  const [rows, setRows] = useState(tableContent);

  const handleColumnDrop = (sourceIndex, targetIndex) => {
    const updatedColumns = [...columns];
    const [movedColumn] = updatedColumns.splice(sourceIndex, 1);
    updatedColumns.splice(targetIndex, 0, movedColumn);
    setColumns(updatedColumns);
  };

  const handleRowDrop = (sourceIndex, targetIndex) => {
    const updatedRows = [...rows];
    const [movedRow] = updatedRows.splice(sourceIndex, 1);
    updatedRows.splice(targetIndex, 0, movedRow);
    setRows(updatedRows);
  };
  return (
    <div>
      {tableActions && <TableActionHeader tableTitle={tableTitle} />}

      <div className="rounded-md overflow-auto my-8   max-h-[500px] custom-scroll mx-8 border relative custom-scrollx">
        <table className="w-full rounded-md p-2">
          <thead className="sticky top-0 bg-[#F9FAFB] text-sm not-italic font-medium leading-normal border-b z-10">
            <tr className="pt-[14px] pb-[25px] border-[#E2E2E2]">
              {columns.map((header, index) => (
                <HeaderCell
                  key={header.label}
                  label={header.label}
                  onDragEnd={handleColumnDrop}
                  index={index}
                />
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((tabledata, index) => (
              <Rows
                key={index}
                rowData={tabledata}
                onDragEnd={handleRowDrop}
                index={index}
                columns={columns}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RzTableComponent;

RzTableComponent.propTypes = {
  isDraggable: PropTypes.bool,
  tableTitle: PropTypes.string,
  showCheckbox: PropTypes.bool,
};
