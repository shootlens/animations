import { useState } from "react";
import RzDrawer from "../components/rz-drawer";
import RzButton from "../components/atoms/rz-button";
import {
  ArrowLeftCircleIcon,
  TrashIcon,
  PencilSquareIcon,
  PlusCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import RzDropdown from "../animation-components/rz-dropdown-animation";
import RzBadge from "../components/atoms/rz-badge";
import RzTabs from "../components/rz-tabs";

const MultiColumnFilter = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  const FilterItem = ({ title }) => {
    return (
      <>
        <div className="flex justify-between items-center py-3">
          <div className="flex items-center">
            <input type="radio" className="w-4 h-4" />
            <div className="ml-[10px] text-base not-italic text-[#6B7280] font-normal">
              {title ? title : "Add Title"}
            </div>
          </div>
          <div className="flex space-x-[10px]">
            <TrashIcon className="w-6 h-6 text-[#94A3B8] cursor-pointer" />
            <PencilSquareIcon className="w-6 h-6 text-[#94A3B8] cursor-pointer" />
          </div>
        </div>
      </>
    );
  };

  const itmes = [
    {
      title: "Assign to me",
    },
    {
      title: "Assign to me open",
    },
    {
      title: "Category is open",
    },
    {
      title: "Email",
    },
    {
      title: "Finance",
    },
    {
      title: "Priority is critical",
    },
    {
      title: "Priority is high",
    },
    {
      title: "Priority is source is portal",
    },
  ];
  const tabsData = [
    {
      title: "Saved Filters",
      content: (
        <div className="py-[10px] flex flex-col justify-between">
          <div className="h-[450px] overflow-y-auto">
            {itmes.map((item) => (
              <FilterItem title={item.title} />
            ))}
          </div>
        </div>
      ),
    },
    {
      title: "Create Filters",
      content: (
        <div className="flex flex-col justify-between h-full max-h-full">
          <div>
            <div className=" text-black text-sm not-italic font-normal mb-[10px]">
              First Name
            </div>
            <div className="w-full border rounded-md px-[13px] py-[4px]">
              <input
                type="text"
                className="w-full rounded-md text-sm font-normal not-italic"
                placeholder="first name"
              />
            </div>
            <div className="mt-6 text-black text-sm not-italic font-normal">
              Select Field
            </div>
            <div className="my-[10px]">
              <RzDropdown title="Queue" />
            </div>
            <div className="mb-[10px]">
              <RzDropdown title="is" />
            </div>
            <div className="mb-[10px]">
              <RzDropdown title="Default" />
            </div>

            <div className="flex justify-end">
              <div className="p-2 border border-[#2563EB] rounded-[5px] inline-flex">
                <PlusCircleIcon className="w-5 h-5 text-[#2563EB]" />
              </div>
            </div>
            <div className="inline-flex  items-center space-x-2 rounded-[5px] border border-[#8463F9] px-2">
              <div className="text-[#8463F9] text-sm not-italic font-normal items-center py-[2px] flex">
                Queue
                <div className="mx-2 flex">
                  <RzBadge
                    backgroundColor="#EDE8FE"
                    normalBadge={false}
                    title="DOT IN"
                    textColor="#8463F9"
                  />
                </div>
                Default-james
              </div>
              <XMarkIcon className="w-6 h-6 text-[#94A3B8]" />
            </div>
          </div>
        </div>
      ),
    },
  ];
  return (
    <>
      <div>
        <div onClick={openSidebar}>Click here</div>
        <RzDrawer
          isOpen={isSidebarOpen}
          onClose={closeSidebar}
          header={[
            <div className="flex items-center py-[10px]">
              <ArrowLeftCircleIcon
                className="text-[#2563EB] w-6 h-6 me-1"
                onClick={closeSidebar}
              />
              <div className="text-base text-black not-italic font-normal leading-normal">
                Filters
              </div>
            </div>,
          ]}
          content={
            <div className="flex-1 overflow-y-auto">
              <RzTabs tabs={tabsData} />
            </div>
          }
          footer={[
            <RzButton
              size="lg"
              text="Clear"
              type="secondary"
              onClick={() => console.log("cancel clicked")}
            />,
            <RzButton
              size="lg"
              text="Apply"
              onClick={() => console.log("apply clicked")}
            />,
          ]}
        />
      </div>
    </>
  );
};
export default MultiColumnFilter;
