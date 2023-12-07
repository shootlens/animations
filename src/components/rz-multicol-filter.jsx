import {
  ArrowLeftCircleIcon,
  PencilSquareIcon,
  PlusCircleIcon,
  TrashIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import RzButton from "../animation-components/rz-button-component";
import RzTabs from "./rz-tabs";
import RzDropdown from "../animation-components/rz-dropdown";
import RzStatusChip from "./atoms/rz-badge";

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

const MulticolFilter = ({ isOpen, onClose }) => {
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
                  <RzStatusChip
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
          {/* <div className="flex justify-end mt-9">
            <RzButton buttonText="Clear" secondaryButton />
            <RzButton buttonText="Save & Apply" disabledButton />
          </div> */}
        </div>
      ),
    },
  ];
  return (
    <>
      <div>
        <div
          className={`fixed inset-0 bg-black opacity-50 z-50 ${
            isOpen ? "block" : "hidden"
          }`}
          onClick={onClose}
        ></div>
        <div
          className={`fixed inset-y-0 right-0 w-1/4 bg-white text-gray-800 p-[10px] ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } transform transition-transform ease-in-out duration-300 z-50 flex flex-col justify-between`}
        >
          <div className="flex flex-col h-full">
            <div>
              <div className="flex items-center py-[10px]">
                <ArrowLeftCircleIcon
                  className="text-[#2563EB] w-6 h-6 me-1"
                  onClick={onClose}
                />
                <div className="text-base text-black not-italic font-normal leading-normal">
                  Filters
                </div>
              </div>
            </div>

            <div className="flex-1 overflow-y-auto">
              <RzTabs tabs={tabsData} />
            </div>
          </div>
          <div className="flex items-center spacex-[23px] justify-end space-x-[10px]">
            <RzButton buttonText="Clear" secondaryButton />
            <RzButton buttonText="Apply" primaryButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default MulticolFilter;
