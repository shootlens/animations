import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import RzTableComponent from "./table-component-page";
import {
  PencilSquareIcon,
  ArrowTrendingUpIcon,
  ClipboardDocumentIcon,
  TrashIcon,
  EyeIcon,
  ArrowTrendingDownIcon,
} from "@heroicons/react/24/outline";
import RzPriorityChip from "../components/rz-priority-chip";
import RzAvatar from "../components/rz-avatar";
import RzBadge from "../components/atoms/rz-badge";
import AdobeImage from "../assets/icons/Adobe.svg";
import JiraImage from "../assets/icons/jira.svg";
import BoxImage from "../assets/icons/box.svg";

const MultilevelTablePage = () => {
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
  const TypeOneHeaders = [
    { label: "Name" },
    { label: "Description" },
    { label: "Environment" },
    { label: "Auth Type" },
    { label: "Created On" },
    { label: "Host Name" },
    { label: "Actions" },
  ];

  const TypeOneTableData = [
    {
      Name: (
        <div className="flex space-x-4 items-center">
          <img src={BoxImage} alt="adobe-icon" className="w-10 h-10" />
          <div className="text-black text-base not-italic font-medium">Box</div>
        </div>
      ),
      Description: "A highly customisable cloud sharing platform",
      Environment: (
        <div className="flex space-x-3">
          <RzBadge
            title="Dev V10"
            backgroundColor="#EDE8FE"
            textColor="#8463F9"
            normalBadge={true}
          />
          <RzBadge
            title="QA V8"
            backgroundColor="#EDE8FE"
            textColor="#8463F9"
            normalBadge={true}
          />
          <RzBadge
            title="Prod V4"
            backgroundColor="#EDE8FE"
            textColor="#8463F9"
            normalBadge={true}
          />
        </div>
      ),
      "Auth Type": (
        <RzBadge
          title="Auth 2.0"
          backgroundColor="#FDF6DB"
          textColor="#E79B04"
        />
      ),
      "Created On": (
        <div className="text-sm text-gray-500 not-italic font-normal leading-normal">
          11 July 2023 10:32
        </div>
      ),
      "Host Name": (
        <div className="text-sm text-gray-500 not-italic font-normal leading-normal">
          https://api.box.com/2.0/
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
      Name: (
        <div className="flex space-x-4 items-center">
          <img src={AdobeImage} alt="adobe-icon" className="w-10 h-10" />
          <div className="text-black text-base not-italic font-medium">Box</div>
        </div>
      ),
      Description: "A highly customisable cloud sharing platform",
      Environment: (
        <div className="flex space-x-3">
          <RzBadge
            title="Dev V10"
            backgroundColor="#EDE8FE"
            textColor="#8463F9"
            normalBadge={true}
          />
          <RzBadge
            title="Dev V8"
            backgroundColor="#EDE8FE"
            textColor="#8463F9"
          />
        </div>
      ),
      "Auth Type": (
        <RzBadge
          title="Auth 2.0"
          backgroundColor="#FDF6DB"
          textColor="#E79B04"
        />
      ),
      "Created On": (
        <div className="text-sm text-gray-500 not-italic font-normal leading-normal">
          11 July 2023 10:32
        </div>
      ),
      "Host Name": (
        <div className="text-sm text-gray-500 not-italic font-normal leading-normal">
          https://api.box.com/2.0/
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
      Name: (
        <div className="flex space-x-4 items-center">
          <img src={JiraImage} alt="adobe-icon" className="w-10 h-10" />
          <div className="text-black text-base not-italic font-medium">Box</div>
        </div>
      ),
      Description: "A highly customisable cloud sharing platform",
      Environment: (
        <RzBadge title="Draft" backgroundColor="#F1C40F" textColor="white" />
      ),
      "Auth Type": (
        <RzBadge
          title="Auth 2.0"
          backgroundColor="#FDF6DB"
          textColor="#E79B04"
        />
      ),
      "Created On": (
        <div className="text-sm text-gray-500 not-italic font-normal leading-normal">
          11 July 2023 10:32
        </div>
      ),
      "Host Name": (
        <div className="text-sm text-gray-500 not-italic font-normal leading-normal">
          https://api.box.com/2.0/
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
        <RzBadge title="Assign" backgroundColor="#F7E9CE" textColor="#E79B04" />
      ),
      QUEUE: (
        <RzBadge
          title="Queue"
          backgroundColor="#2AC76933"
          textColor="#41A1A4"
        />
      ),
      "ASSIGNED TO": (
        <RzBadge
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
        <RzBadge title="Assign" backgroundColor="#F7E9CE" textColor="#E79B04" />
      ),
      QUEUE: (
        <RzBadge
          title="Queue"
          backgroundColor="#2AC76933"
          textColor="#41A1A4"
        />
      ),
      "ASSIGNED TO": (
        <RzBadge
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
        <RzBadge title="Assign" backgroundColor="#F7E9CE" textColor="#E79B04" />
      ),
      QUEUE: (
        <RzBadge
          title="Queue"
          backgroundColor="#2AC76933"
          textColor="#41A1A4"
        />
      ),
      "ASSIGNED TO": (
        <RzBadge
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
  return (
    <>
      <div className="max-h-screen overflow-y-auto custom-scroll">
        <div>
          <DndProvider backend={HTML5Backend}>
            <RzTableComponent
              ColumnHeaders={ColumnHeaders}
              tableContent={TableData}
              enableColumnSearch
              tableActions
              tableTitle="Table Title"
              isDraggable
              showCheckbox
              isSortable
            />
          </DndProvider>
        </div>
        <div className="mt-48">
          <DndProvider backend={HTML5Backend}>
            <RzTableComponent
              ColumnHeaders={TypeOneHeaders}
              tableContent={TypeOneTableData}
            />
          </DndProvider>
        </div>
      </div>
    </>
  );
};
export default MultilevelTablePage;
