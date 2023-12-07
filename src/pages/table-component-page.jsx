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
} from "@heroicons/react/24/outline";
import RzStatusChip from "../components/atoms/rz-badge";
import RzAvatar from "../components/rz-avatar";
import RzPriorityChip from "../components/rz-priority-chip";
import RzPopoverMenu from "../components/rz-popover-menu";
import { useState } from "react";
import MulticolFilter from "../components/rz-multicol-filter";

const RzTableComponent = () => {
  const people = [
    {
      name: "Lindsay Walton",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Lindsay Walton",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },

    {
      name: "Lindsay Walton",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Lindsay Walton",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Lindsay Walton",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Lindsay Walton",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Lindsay Walton",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
    {
      name: "Lindsay Walton",
      image:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  ];

  const Statuses = [
    {
      title: "Assign",
      backgroundColor: "#F7E9CE",
      textColor: "#E79B04",
    },
    {
      title: "Deafult",
      backgroundColor: "#2AC76933",
      textColor: "#41A1A4",
    },
    {
      title: "Admin User",
      backgroundColor: "#C4C4C433",
      textColor: "#617182",
    },
  ];

  const items = [
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
    {
      label: "Submitted On",
      onClick: (label) => console.log(`Clicked ${label}`),
      icon: (
        <div className="flex">
          <BarsArrowDownIcon className="w-6 h-6 text-[#94A3B8]" />
          <BarsArrowUpIcon className="w-6 h-6 text-[#94A3B8]" />
        </div>
      ),
    },
    {
      label: "Domain",
      onClick: (label) => console.log(`Clicked ${label}`),
      icon: (
        <div className="flex">
          <BarsArrowDownIcon className="w-6 h-6 text-[#94A3B8]" />
          <BarsArrowUpIcon className="w-6 h-6 text-[#94A3B8]" />
        </div>
      ),
    },
    {
      label: "Priority",
      onClick: (label) => console.log(`Clicked ${label}`),
      icon: (
        <div className="flex">
          <BarsArrowDownIcon className="w-6 h-6 text-[#94A3B8]" />
          <BarsArrowUpIcon className="w-6 h-6 text-[#94A3B8]" />
        </div>
      ),
    },
    {
      label: "Assign To",
      onClick: (label) => console.log(`Clicked ${label}`),
      icon: (
        <div className="flex">
          <BarsArrowDownIcon className="w-6 h-6 text-[#94A3B8]" />
          <BarsArrowUpIcon className="w-6 h-6 text-[#94A3B8]" />
        </div>
      ),
    },
  ];

  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);

  return (
    <>
      <div className="max-w-6xl rounded-md w-full mt-9 overflow-auto mx-auto max-h-fit">
        <div>
          <div className="px-2 rounded-md flex justify-between">
            <div>Inbox</div>
            <div className="flex items-center space-x-[10px] pb-[18px]">
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
                {/* <RzPopoverMenu
                  items={items}
                  titleIcon={false}
                  customIcon={
                    <AdjustmentsVerticalIcon className="w-6 h-6 text-[#94A3B8]" />
                  }
                  divider={true}
                /> */}
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
                  items={items}
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
          <div className="max-w-6xl rounded-md w-full border overflow-auto mx-auto">
            <table className=" p-9">
              <thead className=" pt-[14px] pb-[25px] border-t-[2px] border-b-[2px] border-[#E2E2E2]">
                <tr>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-4 text-start text-sm font-normal leading-normal not-italic items-center pt-[14px] pb-[25px]"
                  >
                    <input type="checkbox" className="h-4 w-4" />
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-4 text-start text-sm font-normal leading-normal not-italic pt-[14px] pb-[25px] flex items-center"
                  >
                    <div className="flex items-center">
                      PRIORITY
                      <ChevronUpDownIcon className="h-[18px] w-[18px] text-[#94A3B8] px-[2px]" />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-4 text-start text-sm font-normal leading-normal not-italic pt-[14px] pb-[25px]"
                  >
                    <div className="flex">
                      <div className="flex items-center">
                        TICKET
                        <ChevronUpDownIcon className="h-[18px] w-[18px] text-[#94A3B8] px-[2px]" />
                      </div>
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-4 text-start text-sm font-normal leading-normal not-italic pt-[14px] pb-[25px]"
                  >
                    <div className="flex items-center">
                      SUBJECT
                      <ChevronUpDownIcon className="h-[18px] w-[18px] text-[#94A3B8] px-[2px]" />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-4 text-start text-sm font-normal leading-normal not-italic pt-[14px] pb-[25px]"
                  >
                    <div className="flex items-center">
                      REQUESTED FOR
                      <ChevronUpDownIcon className="h-[18px] w-[18px] text-[#94A3B8] px-[2px]" />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-4 text-start text-sm font-normal leading-normal not-italic pt-[14px] pb-[25px]"
                  >
                    <div className="flex items-center">
                      STATUS
                      <ChevronUpDownIcon className="h-[18px] w-[18px] text-[#94A3B8] px-[2px]" />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-4 text-start text-sm font-normal leading-normal not-italic pt-[14px] pb-[25px]"
                  >
                    <div className="flex items-center">
                      QUEUE
                      <ChevronUpDownIcon className="h-[18px] w-[18px] text-[#94A3B8] px-[2px]" />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-4 text-start text-sm font-normal leading-normal not-italic pt-[14px] pb-[25px]"
                  >
                    <div className="flex items-center">
                      ASSIGNED TO
                      <ChevronUpDownIcon className="h-[18px] w-[18px] text-[#94A3B8] px-[2px]" />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className=" whitespace-nowrap px-4 text-start text-sm font-normal leading-normal not-italic pt-[14px] pb-[25px]"
                  >
                    <div className="flex items-center">
                      RESOLUTION SLA [HH:MM]
                      <ChevronUpDownIcon className="h-[18px] w-[18px] text-[#94A3B8] px-[2px]" />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className=" whitespace-nowrap px-4 text-start text-sm font-normal leading-normal not-italic pt-[14px] pb-[25px]"
                  >
                    <div className="flex items-center">
                      RESPONSE SLA [HH:MM]
                      <ChevronUpDownIcon className="h-[18px] w-[18px] text-[#94A3B8] px-[2px]" />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="whitespace-nowrap px-4 text-start text-sm font-normal leading-normal not-italic pt-[14px] pb-[25px]"
                  >
                    <div className="flex items-center">
                      Actions
                      <ChevronUpDownIcon className="h-[18px] w-[18px] text-[#94A3B8] px-[2px]" />
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {people.map((person) => (
                  <tr className="border-b border-[#E2E2E2]">
                    <td className="text-start px-4 whitespace-nowrap">
                      <input type="checkbox" className="h-4 w-4" />
                    </td>
                    <td className="text-start px-4 whitespace-nowrap">
                      <RzPriorityChip highPriority={true} />
                    </td>
                    <td className="text-start px-4 whitespace-nowrap">
                      PMT-008
                    </td>
                    <td className="text-start px-4 whitespace-nowrap">
                      Access request for external storage device
                    </td>
                    <td className=" px-4 flex items-center my-[9px]">
                      <div className="mr-[10px]">
                        <RzAvatar
                          firstName={person.name}
                          imgUrl="https://images.unsplash.com/photo-1517849&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                        />
                      </div>
                      <div className="whitespace-nowrap">{person.name}</div>
                    </td>

                    {Statuses.map((e) => (
                      <td className="text-start  px-4" key={e.title}>
                        <RzStatusChip
                          title={e.title}
                          backgroundColor={e.backgroundColor}
                          textColor={e.textColor}
                        />
                      </td>
                    ))}

                    <td className="text-start whitespace-nowrap px-4">
                      <div className="flex items-center">
                        <ArrowTrendingDownIcon className="h-5 w-5 mx-2 text-red-600 font-medium" />
                        Overdue -8:0
                      </div>
                    </td>
                    <td className="text-start whitespace-nowrap px-4">
                      <div className="flex items-center">
                        <ArrowTrendingUpIcon className="h-5 w-5 mx-2 text-green-600 font-medium" />
                        Met
                      </div>
                    </td>
                    <td className="text-start px-4 ">
                      <div className="flex">
                        <TrashIcon className="w-6 h-6 shrink-0 text-sm text-[#94A3B8] pl-2" />

                        <PencilSquareIcon className="w-6 h-6 shrink-0 text-sm text-[#94A3B8] pl-2" />
                        <EyeIcon className="w-6 h-6 shrink-0 text-sm text-[#94A3B8] pl-2" />
                        <ClipboardDocumentIcon className="w-6 h-6 shrink-0 text-sm text-[#94A3B8] pl-2" />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default RzTableComponent;
