import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  Squares2X2Icon,
  FunnelIcon,
  AdjustmentsVerticalIcon,
  ChevronUpDownIcon,
  ArrowPathIcon,
  PlusIcon,
  BarsArrowDownIcon,
  BarsArrowUpIcon,
  ArrowLeftCircleIcon,
  XMarkIcon,
  TrashIcon,
  PencilSquareIcon,
  PlusCircleIcon,
  Bars3Icon,
  ArrowLeftIcon,
} from "@heroicons/react/24/outline";
import RzPopoverMenu from "./rz-dropdown";
import RzTabs from "./rz-tabs";
import RzDrawer from "./rz-drawer";
import RzButton from "./atoms/rz-button";
import RzDropdown from "../animation-components/rz-dropdown-animation";
import RzBadge from "./atoms/rz-badge";

const TableActionHeader = ({ tableTitle }) => {
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
            <TrashIcon className="w-6 h-6 text-[#94A3B8]" />
            <PencilSquareIcon className="w-6 h-6 text-[#94A3B8]" />
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
  return (
    <>
      <div className="bg-white flex  items-center justify-between  mx-8 my-[18px]">
        <div className="text-base whitespace-nowrap me-4 font-medium leading-normal">
          {tableTitle ?? ""}
        </div>

        <div>
          <div
            className="md:hidden border rounded-md p-1"
            onClick={openSidebar}
          >
            <Bars3Icon className="w-5 h-5 text-gray-700" />
          </div>
          <RzDrawer
            isOpen={isSidebarOpen}
            onClose={closeSidebar}
            header={
              <div onClick={closeSidebar} className="flex items-center">
                <div className="p-1 rounded-md border inline-flex mx-2">
                  <ArrowLeftIcon className="text-blue-900 w-6 h-6" />
                </div>
                Table Filters
              </div>
            }
          />
        </div>

        <div className="md:flex hidden  items-center space-x-[10px]">
          <div className="border-[#DBDDE0] p-1 rounded-[5px] border">
            <Squares2X2Icon className="w-6 h-6 text-[#94A3B8]" />
          </div>
          <div className="max-w-[270px] whitespace-nowrap rounded-[5px] border border-[#DBDDE0] flex items-center px-[15px]">
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
                <RzButton size="md" text="Clear" type="secondary" />,
                <RzButton size="md" text="Apply" />,
              ]}
            />
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
    </>
  );
};
export default TableActionHeader;
