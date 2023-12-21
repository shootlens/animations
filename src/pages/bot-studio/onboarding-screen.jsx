import OnboardFlowIcon from "../../assets/icons/bot-studio-flows-map.svg";
import RayStartArrow from "../../assets/icons/ray-start-arrow.svg";
import {
  PencilSquareIcon,
  DocumentDuplicateIcon,
  ArrowRightIcon,
  PlusIcon,
  MagnifyingGlassIcon,
  XMarkIcon,
  TrashIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from "@heroicons/react/24/outline";
import RzButton from "../../components/atoms/rz-button";
import { useState } from "react";
import AntDesignApiOutlinedIcon from "../../assets/icons/ant-design-api-outlined.svg";
import BotStudioFlowsSvgIcon from "../../assets/icons/bot-studio-flows-map.svg";
import solarCardLinearIcon from "../../assets/icons/solar-card-linear.svg";
import SolarDialogLinearIcon from "../../assets/icons/solar-dialog-linear.svg";
import DragDots from "../../assets/icons/drag-vector.svg";
import BotStudioSctionYellowIcon from "../../assets/icons/bot-studio-power-yellow.svg";
import CodeBlockIcon from "../../assets/icons/code-block-icon.svg";
import OnboardingComponentCard from "./onboarding-component-card.";

const OnboardingFlowScreen = () => {
  const [openPopup, setOpenPopup] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(true);

  const handlePopup = () => {
    setOpenPopup(!openPopup);
  };

  const handleSearch = () => {
    setIsSearchBarOpen(!isSearchBarOpen);
  };

  const handleCollapsed = () => {
    setIsCollapsed(!isCollapsed);
  };
  const DialogChip = ({ title, icon }) => {
    return (
      <>
        <div className="rounded-full border border-[#D1D5DB] px-6 py-[5px] flex items-center cursor-pointer">
          <div className="me-[5px]">{icon}</div>
          <div className="text-black text-sm not-italic font-medium leading-normal">
            {title}
          </div>
        </div>
      </>
    );
  };

  const ToolbarBadge = ({ title, onClick }) => {
    return (
      <>
        <div
          className="border rounded-md px-[10px] py-[5px] inline-flex items-center cursor-pointer"
          onClick={onClick}
        >
          <img
            src={DragDots}
            alt="drag-and-drop-dots-svg"
            className="me-2 w-3 h-3"
          />
          <div className="text-sm text-gray-500 not-italic font-normal leading-normal">
            {title}
          </div>
        </div>
      </>
    );
  };

  const dialogData = [
    {
      title: "Flows",
      icon: <img src={BotStudioFlowsSvgIcon} alt="power-icon" />,
    },
    {
      title: "Actions",
      icon: <img src={AntDesignApiOutlinedIcon} alt="power-icon" />,
    },
    {
      title: "Slot",
      icon: <img src={AntDesignApiOutlinedIcon} alt="power-icon" />,
    },
    {
      title: "Cards",
      icon: <img src={solarCardLinearIcon} alt="power-icon" />,
    },
    {
      title: "Dialogs",
      icon: <img src={SolarDialogLinearIcon} alt="power-icon" />,
    },
  ];

  const ToolbarData = [
    {
      title: "Add step",
      onclick: "",
    },
    {
      title: "goto",
      onclick: "",
    },
    {
      title: "Reset",
      onclick: "",
    },
    {
      title: "Split",
      onclick: "",
    },
    {
      title: "Send",
      onclick: "",
    },
    {
      title: "Set",
      onclick: "",
    },
  ];

  const OnboardDialog = () => {
    return (
      <>
        <div className="max-w-3xl w-full px-8 py-[22px] bg-white shadow-xl rounded-[10px] items-start">
          <div className="text-black text-base not-italic font-medium leading-normal pb-6">
            Select Component to Add
          </div>
          <div className="flex flex-wrap items-start space-x-[17px]">
            {dialogData.map((e) => (
              <DialogChip title={e.title} icon={e.icon} />
            ))}
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="flex-grow bg-white overflow-y-auto rounded-[15px] py-[22px] px-[12px] relative custom-scroll">
        <div className="flex justify-between border-b pb-[14px]">
          <div className="flex space-x-[4px] items-center">
            <img src={OnboardFlowIcon} alt="onboard-flow-icon" />
            <div className="text-gray-500 text-xl font-semibold not-italic leading-normal">
              OnboardingFlow
            </div>
            <div className="flex space-x-[4px] items-center pl-[19px]">
              <PencilSquareIcon className="w-6 h-6 text-[#94A3B8]" />
              <DocumentDuplicateIcon className="w-6 h-6 text-[#94A3B8]" />
            </div>
          </div>

          <div className="flex space-x-[10px] items-center ">
            {/* <div className="border rounded-md border-[#2563EB] items-center justify-center flex px-4 py-1.5 bg-[#F0F6FF]">
              <div className="flex items-center pe-1">
                <ArrowRightIcon className="w-6 h-6 text-[#94A3B8] mx-1" />
                <div className="text-sm not-italic font-medium leading-5 text-black me-2">
                  Toolbar
                </div>
              </div>
              <div className="flex space-x-[4px]">
                {ToolbarData.map((e) => (
                  <ToolbarBadge title={e.title} onClick={handlePopup} />
                ))}
              </div>
            </div> */}
            <div className="flex items-center">
              {isSearchBarOpen && (
                <div className="max-w-md rounded-md border mx-1 flex justify-between items-center">
                  <input
                    type="text"
                    placeholder="Search"
                    className="w-full pl-[11px] rounded-full py-2"
                  />

                  <MagnifyingGlassIcon className="w-6 h-6 text-[#94A3B8] mx-2" />
                </div>
              )}
              <div className="p-2 rounded-md border" onClick={handleSearch}>
                {isSearchBarOpen ? (
                  <XMarkIcon className="w-6 h-6 text-[#94A3B8]" />
                ) : (
                  <MagnifyingGlassIcon className="w-6 h-6 text-[#94A3B8]" />
                )}
              </div>
            </div>
            <RzButton text="Discard" type="secondary" size="lg" />
            <RzButton text="Save" type="secondary" size="lg" />
            <RzButton text="Publish" type="disabled" size="lg" />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="inline-flex py-12 mt-8 flex-col justify-center items-center p-[10px] border border-dashed border-[#D1D5DB] rounded-[10px]">
            <div className="pb-[10px]">
              <img src={BotStudioFlowsSvgIcon} alt="bot-flow-icon" />
            </div>
            <div className="max-w-sm break-words px-[14px] text-gray-500 text-sm font-medium not-italic leading-5">
              Lets begin by adding steps from the toolbar or simple drag
              componets from bank
            </div>
          </div>
        </div>

        <div style={{ maxWidth: "calc(100% - 0px)" }} className=" justify-end">
          <div className="flex justify-between items-start mt-4">
            <div className="w-full flex-grow">
              <OnboardingComponentCard
                isCollapsed={isCollapsed}
                cardTitle="Split"
                icon={<img src={BotStudioSctionYellowIcon} alt="power-icon" />}
              />
              <OnboardingComponentCard
                isCollapsed={isCollapsed}
                cardTitle="GO TO"
                icon={<img src={CodeBlockIcon} alt="code-block-icon" />}
              />
            </div>

            <div
              className="flex flex-shrink-0 border rounded-md h-full p-2 items-center cursor-pointer ml-2"
              onClick={handleCollapsed}
            >
              <div className="text-[#6B7280] text-sm not-italic font-medium leading-normal">
                {isCollapsed ? "Collapse All" : " Expand All"}
              </div>

              <ChevronUpIcon
                className={`w-6 h-6 text-[#6B7280] transition duration-300 ${
                  isCollapsed ? "rotate-0" : "rotate-180"
                }`}
              />
            </div>
          </div>
        </div>
        <div className="flex justify-center mt-[10px]">
          <div
            className="border border-[#D1D5DB] inline-flex rounded-md p-2"
            onClick={handlePopup}
          >
            <PlusIcon className="w-5 h-5 text-[#94A3B8]" />
          </div>
        </div>
        <div className="flex justify-center pt-[10px] items-center relative">
          {openPopup && <OnboardDialog />}
        </div>
      </div>
    </>
  );
};

export default OnboardingFlowScreen;
