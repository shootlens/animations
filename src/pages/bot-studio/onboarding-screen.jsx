import OnboardFlowIcon from "../../assets/icons/bot-studio-flows-map.svg";
import RayStartArrow from "../../assets/icons/ray-start-arrow.svg";
import {
  PencilSquareIcon,
  DocumentDuplicateIcon,
  ArrowRightIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import RzButton from "../../components/atoms/rz-button";
import { useState } from "react";
import AntDesignApiOutlinedIcon from "../../assets/icons/ant-design-api-outlined.svg";
import BotStudioFlowsSvgIcon from "../../assets/icons/bot-studio-flows-map.svg";
import solarCardLinearIcon from "../../assets/icons/solar-card-linear.svg";
import SolarDialogLinearIcon from "../../assets/icons/solar-dialog-linear.svg";
import DragDots from "../../assets/icons/drag-vector.svg";

const OnboardingFlowScreen = () => {
  const [openPopup, setOpenPopup] = useState(false);

  const handlePopup = () => {
    setOpenPopup(!openPopup);
  };

  const ActionChip = ({ title, icon }) => {
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
        <div className="max-w-3xl w-full px-8 py-[22px] bg-white shadow-xl rounded-[10px] items-start align-sub">
          <div className="text-black text-base not-italic font-medium leading-normal pb-6">
            Select Component to Add
          </div>
          <div className="flex flex-wrap items-start space-x-[17px]">
            {dialogData.map((e) => (
              <ActionChip title={e.title} icon={e.icon} />
            ))}
          </div>
        </div>
      </>
    );
  };
  return (
    <>
      <div className="flex-grow bg-white overflow-y-auto rounded-[15px] py-[22px] px-[12px] relative">
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
            <div className="border rounded-md border-[#2563EB] items-center justify-center flex px-4 py-1.5 bg-[#F0F6FF]">
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
            </div>
            <div className="flex items-center">
              <div>Search</div>
              <div className="p-2 rounded-md border">
                <PlusIcon className="w-6 h-6 text-gray-500" />
              </div>
            </div>
            <RzButton text="Discard" type="secondary" size="lg" />
            <RzButton text="Save" type="secondary" size="lg" />
            <RzButton text="Publish" type="disabled" size="lg" />
          </div>
        </div>

        <div className="flex justify-end pt-[10px] items-center absolute right-12">
          {openPopup && <OnboardDialog />}
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
      </div>
    </>
  );
};

export default OnboardingFlowScreen;
