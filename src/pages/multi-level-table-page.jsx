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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
    }, {
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
      <DndProvider backend={HTML5Backend}>
        <RzTableComponent
          ColumnHeaders={ColumnHeaders}
          tableContent={TableData}
          enableColumnSearch
          tableActions
          tableTitle="Table Title"
          isDraggable
          showCheckbox
        />
      </DndProvider>
    </>
  );
};
export default MultilevelTablePage;
