import React, { useState, useCallback } from "react";
import { useDrag, useDrop } from "react-dnd";
import PropTypes from "prop-types";
import {
  ChevronUpDownIcon,
  ArrowTrendingDownIcon,
  ArrowTrendingUpIcon,
  PencilSquareIcon,
  EyeIcon,
  TrashIcon,
  ClipboardDocumentIcon,
  Squares2X2Icon,
  PlusIcon,
  MagnifyingGlassIcon,
  FunnelIcon,
  AdjustmentsVerticalIcon,
  ArrowPathIcon,
  BarsArrowDownIcon,
  BarsArrowUpIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import RzStatusChip from "../components/atoms/rz-badge";
import RzAvatar from "../components/rz-avatar";
import RzPriorityChip from "../components/rz-priority-chip";
import RzPopoverMenu from "../components/rz-popover-menu";
import MulticolFilter from "../components/rz-multicol-filter";

const ColumnHeaders = [
  { label: "Checkbox" },
  { label: "Priority" },
  { label: "Ticket" },
  { label: "Subject" },
  { label: "REQUESTED FOR" },
  { label: "STATUS" },
  { label: "QUEUE" },
  { label: "ASSIGNED TO" },
  { label: "RESOLUTION SLA [HH:MM]" },
  { label: "RESPONSE SLA [HH:MM]" },
  { label: "Actions" },
];

const ShowField = [
  {
    label: "Queue",
    onClick: (label) => console.log(`Clicked ${label}`),
    icon: (
      <div className="flex">
        <BarsArrowDownIcon className="w-6 h-6 text-[#94A3B8]" />
        <BarsArrowUpIcon className="w-6 h-6 text-[#94A3B8]" />
      </div>
    ),
  },
];

const TableData = [
  {
    Checkbox: <input type="checkbox" className="h-4 w-4" />,
    Priority: <RzPriorityChip highPriority={true} />,
    Ticket: "PMT-001",
    Subject: "Access request for external storage device",
    "REQUESTED FOR": (
      <div className="flex items-center">
        <div>
          <RzAvatar
            firstName="Lindsay Walton"
            imgUrl="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />
        </div>
        <div className="ml-[10px]">Lindsay Walton</div>
      </div>
    ),
    STATUS: (
      <RzStatusChip
        title="Assign"
        backgroundColor="#F7E9CE"
        textColor="#E79B04"
      />
    ),
    QUEUE: (
      <RzStatusChip
        title="Queue"
        backgroundColor="#2AC76933"
        textColor="#41A1A4"
      />
    ),
    "ASSIGNED TO": (
      <RzStatusChip
        title="Admin User"
        backgroundColor="#C4C4C433"
        textColor="#617182"
      />
    ),
    "RESOLUTION SLA [HH:MM]": (
      <div className="flex items-center">
        <ArrowTrendingDownIcon className="h-5 w-5 mx-2 text-red-600 font-medium" />
        Overdue -8:0
      </div>
    ),
    "RESPONSE SLA [HH:MM]": (
      <div className="flex items-center">
        <ArrowTrendingUpIcon className="h-5 w-5 mx-2 text-green-600 font-medium" />
        Met
      </div>
    ),
    Actions: (
      <div className="flex">
        <TrashIcon className="w-6 h-6 shrink-0 text-sm text-[#94A3B8] pl-2" />
        <PencilSquareIcon className="w-6 h-6 shrink-0 text-sm text-[#94A3B8] pl-2" />
        <EyeIcon className="w-6 h-6 shrink-0 text-sm text-[#94A3B8] pl-2" />
        <ClipboardDocumentIcon className="w-6 h-6 shrink-0 text-sm text-[#94A3B8] pl-2" />
      </div>
    ),
  },
  {
    Checkbox: <input type="checkbox" className="h-4 w-4" />,
    Priority: <RzPriorityChip highPriority={true} />,
    Ticket: "PMT-002",
    Subject: "Access request for external storage device",
    "REQUESTED FOR": (
      <div className="flex items-center">
        <div>
          <RzAvatar
            firstName="Lindsay Walton"
            imgUrl="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />
        </div>
        <div className="ml-[10px]">Lindsay Walton</div>
      </div>
    ),
    STATUS: (
      <RzStatusChip
        title="Assign"
        backgroundColor="#F7E9CE"
        textColor="#E79B04"
      />
    ),
    QUEUE: (
      <RzStatusChip
        title="Queue"
        backgroundColor="#2AC76933"
        textColor="#41A1A4"
      />
    ),
    "ASSIGNED TO": (
      <RzStatusChip
        title="Admin User"
        backgroundColor="#C4C4C433"
        textColor="#617182"
      />
    ),
    "RESOLUTION SLA [HH:MM]": (
      <div className="flex items-center">
        <ArrowTrendingDownIcon className="h-5 w-5 mx-2 text-red-600 font-medium" />
        Overdue -8:0
      </div>
    ),
    "RESPONSE SLA [HH:MM]": (
      <div className="flex items-center">
        <ArrowTrendingUpIcon className="h-5 w-5 mx-2 text-green-600 font-medium" />
        Met
      </div>
    ),
    Actions: (
      <div className="flex">
        <TrashIcon className="w-6 h-6 shrink-0 text-sm text-[#94A3B8] pl-2" />
        <PencilSquareIcon className="w-6 h-6 shrink-0 text-sm text-[#94A3B8] pl-2" />
        <EyeIcon className="w-6 h-6 shrink-0 text-sm text-[#94A3B8] pl-2" />
        <ClipboardDocumentIcon className="w-6 h-6 shrink-0 text-sm text-[#94A3B8] pl-2" />
      </div>
    ),
  },
  {
    Checkbox: <input type="checkbox" className="h-4 w-4" />,
    Priority: <RzPriorityChip highPriority={true} />,
    Ticket: "PMT-003",
    Subject: "Access request for external storage device",
    "REQUESTED FOR": (
      <div className="flex items-center">
        <div>
          <RzAvatar
            firstName="Lindsay Walton"
            imgUrl="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
          />
        </div>
        <div className="ml-[10px]">Lindsay Walton</div>
      </div>
    ),
    STATUS: (
      <RzStatusChip
        title="Assign"
        backgroundColor="#F7E9CE"
        textColor="#E79B04"
      />
    ),
    QUEUE: (
      <RzStatusChip
        title="Queue"
        backgroundColor="#2AC76933"
        textColor="#41A1A4"
      />
    ),
    "ASSIGNED TO": (
      <RzStatusChip
        title="Admin User"
        backgroundColor="#C4C4C433"
        textColor="#617182"
      />
    ),
    "RESOLUTION SLA [HH:MM]": (
      <div className="flex items-center">
        <ArrowTrendingDownIcon className="h-5 w-5 mx-2 text-red-600 font-medium" />
        Overdue -8:0
      </div>
    ),
    "RESPONSE SLA [HH:MM]": (
      <div className="flex items-center">
        <ArrowTrendingUpIcon className="h-5 w-5 mx-2 text-green-600 font-medium" />
        Met
      </div>
    ),
    Actions: (
      <div className="flex">
        <TrashIcon className="w-6 h-6 shrink-0 text-sm text-[#94A3B8] pl-2" />
        <PencilSquareIcon className="w-6 h-6 shrink-0 text-sm text-[#94A3B8] pl-2" />
        <EyeIcon className="w-6 h-6 shrink-0 text-sm text-[#94A3B8] pl-2" />
        <ClipboardDocumentIcon className="w-6 h-6 shrink-0 text-sm text-[#94A3B8] pl-2" />
      </div>
    ),
  },
];

const RzTableComponent = ({
  draggable = false,
  tableTitle,
  tableActions,
  enableColumnSearch,
  showCheckboxes,
}) => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  const HeaderCell = ({ label, onDragEnd, index }) => {
    const [hoverTimeout, setHoverTimeout] = useState(null);

    const [searchBar, setSearchBar] = useState(columns.map(() => false));
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

    const handleHover = useCallback(
      (draggedItem) => {
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
      },
      [hoverTimeout, setHoverTimeout, onDragEnd, index]
    );

    const [{ isDragging }, dragRef] = useDrag({
      type: "COLUMN",
      item: { index },
      canDrag: draggable,
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
          {index === 0 && showCheckboxes ? (
            <input type="checkbox" className="h-4 w-4" />
          ) : (
            <>
              <div className="relative whitespace-nowrap justify-between uppercase w-full items-center px-4 text-start text-black text-sm not-italic font-normal flex pt-[14px] pb-[25px]">
                <div className="flex">
                  {label}
                  <ChevronUpDownIcon className="h-[18px] w-[18px] text-[#94A3B8] px-[2px]" />
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

    const handleHover = useCallback(
      (draggedItem) => {
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
      },
      [hoverTimeout, setHoverTimeout, onDragEnd, index]
    );

    const [{ isDragging }, dragRef] = useDrag({
      type: "ROW",
      item: { index },
      canDrag: draggable,
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
            <div className="text-start px-4 break-words py-[9px] whitespace-nowrap">
              {rowData[column.label]}
            </div>
          </td>
        ))}
      </tr>
    );
  };
  const [columns, setColumns] = useState(ColumnHeaders);
  const [rows, setRows] = useState(TableData);

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
      {tableActions && (
        <div className="bg-white flex  justify-between  mx-8 my-[18px]">
          <div className="text-base font-medium leading-normal">
            {tableTitle ?? ""}
          </div>
          <div className="flex items-center space-x-[10px]">
            <div className="border-[#DBDDE0] p-1 rounded-[5px] border">
              <Squares2X2Icon className="w-6 h-6 text-[#94A3B8]" />
            </div>
            <div className="max-w-[270px] rounded-[5px] border border-[#DBDDE0] flex items-center px-[15px]">
              <div>
                <input
                  type="text"
                  className="w-full h-8 rounded-[5px] text-sm text-[#6B7280] border-none active:bg-none active:border-none"
                  placeholder="Assigned Tickets"
                />
              </div>
              <div>
                <FunnelIcon className="w-[18px] h-[18px] text-[#617182]" />
              </div>
            </div>
            <div className="border-[#DBDDE0] p-1 rounded-[5px] border flex items-center justify-center">
              <AdjustmentsVerticalIcon
                className="w-6 h-6 text-[#94A3B8]"
                onClick={openSidebar}
              />
              <MulticolFilter isOpen={isSidebarOpen} onClose={closeSidebar} />
            </div>
            <div className="border-[#DBDDE0] p-1 rounded-[5px] border">
              <ChevronUpDownIcon className="w-6 h-6 text-[#94A3B8]" />
            </div>
            <div className="border-[#DBDDE0] p-1 rounded-[5px] border">
              <ArrowPathIcon className="w-6 h-6 text-[#94A3B8]" />
            </div>
            <div>
              <RzPopoverMenu
                items={ShowField}
                multiselect={true}
                multiselectTitle="Column"
                title="Show Fields"
                titleIcon={true}
              />
            </div>
            <div className="max-w-[270px] rounded-[5px] border border-[#DBDDE0] flex items-center px-[15px]">
              <div>
                <input
                  type="text"
                  className="w-full h-8 rounded-[5px]"
                  placeholder="Search"
                />
              </div>
              <div>
                <MagnifyingGlassIcon className="w-[18px] h-[18px] text-[#617182]" />
              </div>
            </div>
            <div className="flex bg-[#2563EB] h-8 text-sm text-white items-center px-[15px] py-1  rounded-[5px]">
              <div>
                <PlusIcon className="w-[18px] h-[18px] font-bold mr-[1px] text-white" />
              </div>
              <div className="text-white not-italic font-normal leading-[normal]">
                Create
              </div>
            </div>
          </div>
        </div>
      )}

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
  draggable: PropTypes.bool,
  tableTitle: PropTypes.string,
  showCheckboxes: PropTypes.bool,
};
