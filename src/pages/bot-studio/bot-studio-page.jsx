import React, { useState } from "react";
import RzHeader from "../../components/rz-header";
import RzFooter from "../../components/rz-footer";
import RzButton from "../../components/atoms/rz-button";
import {
  MagnifyingGlassIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  ArrowUpOnSquareIcon,
  EyeSlashIcon,
  PlayCircleIcon,
  EyeIcon,
  PencilSquareIcon,
  ArchiveBoxArrowDownIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";
import BotStudioFlowsSvgIcon from "../../assets/icons/bot-studio-flows-map.svg";
import BotStudioSctionsYellowIcon from "../../assets/icons/bot-studio-power-yellow.svg";
import BotStudioSctionsPurpleIcon from "../../assets/icons/bot-studio-power-purple.svg";
import solarCardLinearIcon from "../../assets/icons/solar-card-linear.svg";
import CarbonTemplateIcon from "../../assets/icons/carbon-template.svg";
import AntDesignApiOutlinedIcon from "../../assets/icons/ant-design-api-outlined.svg";
import PrimeServerIcon from "../../assets/icons/prime-server.svg";
import SolarDialogLinearIcon from "../../assets/icons/solar-dialog-linear.svg";
import FolderYellowOutlineIcon from "../../assets/icons/folder-yellow-outline.svg";
import OnboardingFlowScreen from "./onboarding-screen";
import FlowEditorScreen from "./flow-editor-screen";
import IconoirPackegeIcon from "../../assets/icons/iconoir-packages-icon.svg";
import RzToggle from "../../components/atoms/rz-toggle";
import RzBadge from "../../components/atoms/rz-badge";
import RzAvatar from "../../components/rz-avatar";

const BotStudioPage = () => {
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);
  const [isComponentBankOpen, setIsComponentBankOpen] = useState(true);

  const handleOpenOnboarding = () => {
    setIsOnboardingOpen(!isOnboardingOpen);
  };

  const handleComponentBank = () => {
    setIsComponentBankOpen(!isComponentBankOpen);
  };

  const flowComponents = [
    {
      title: "Flows",
      leadingIcon: (
        <img src={BotStudioFlowsSvgIcon} alt="bot-studio-flows-icon" />
      ),
    },
    {
      title: "Actions",
      leadingIcon: (
        <img src={BotStudioSctionsYellowIcon} alt="bot-studio-flows-icon" />
      ),
    },
    {
      title: "Scripts",
      leadingIcon: (
        <img src={BotStudioSctionsPurpleIcon} alt="bot-studio-flows-icon" />
      ),
    },
    {
      title: "Slot",
      leadingIcon: (
        <img src={BotStudioSctionsYellowIcon} alt="bot-studio-flows-icon" />
      ),
    },
    {
      title: "Cards",
      leadingIcon: (
        <img src={solarCardLinearIcon} alt="bot-studio-flows-icon" />
      ),
    },
    {
      title: "Card Templates",
      leadingIcon: <img src={CarbonTemplateIcon} alt="bot-studio-flows-icon" />,
    },
    {
      title: "Apis",
      leadingIcon: (
        <img src={AntDesignApiOutlinedIcon} alt="bot-studio-flows-icon" />
      ),
    },
    {
      title: "Api Servers",
      leadingIcon: <img src={PrimeServerIcon} alt="bot-studio-flows-icon" />,
    },
    {
      title: "Dialogs",
      leadingIcon: (
        <img src={SolarDialogLinearIcon} alt="bot-studio-flows-icon" />
      ),
    },
    {
      title: "Default Setting",
      leadingIcon: (
        <img src={BotStudioSctionsYellowIcon} alt="bot-studio-flows-icon" />
      ),
    },
    {
      title: "Packages",
      leadingIcon: (
        <img src={FolderYellowOutlineIcon} alt="bot-studio-flows-icon" />
      ),
    },
  ];

  const FlowComponentsItem = ({ title, leadingIcon }) => {
    const [isFlowComponentOpen, setIsFlowCOmponentOpen] = useState(false);

    const handleFLowComponent = () => {
      setIsFlowCOmponentOpen(!isFlowComponentOpen);
    };

    const FlowComponentsSubItemCard = () => {
      return (
        <>
          <div className="border rounded-[10px] p-[10px] m-[5px]">
            <div className="flex justify-between items-center pb-[10px]">
              <div className="flex items-center space-x-[10px]">
                <div className="text-sm not-italic font-medium leading-normal">
                  September Release
                </div>
                <RzBadge
                  title="Deployed"
                  backgroundColor="#DFF7E9"
                  size="small"
                  textColor="#229F54"
                  normalBadge={true}
                />
              </div>
              <div className="flex items-center space-x-[10px]">
                <PencilSquareIcon className="text-[#94A3B8] w-5 h-5" />
                <TrashIcon className="text-[#94A3B8] w-5 h-5" />
                <ArchiveBoxArrowDownIcon className="text-[#94A3B8] w-5 h-5" />
              </div>
            </div>
            <div className="flex justify-between">
              <div
                className="text-[#6B7280] text-sm not-italic font-normal leading-normal truncate overflow-hidden"
                style={{ maxWidth: "calc(100% - 100px)" }}
              >
                This release focuses on visual improvement truncated text
              </div>
              <div className="flex items-center space-x-[10px]">
                <RzBadge
                  title="3 Flow"
                  backgroundColor="#EDE8FE"
                  textColor="#8463F9"
                  size="small"
                  normalBadge
                />
                <RzAvatar
                  firstName="Avatar"
                  customRadius={24}
                  isSingleLetter={true}
                />
              </div>
            </div>
          </div>
        </>
      );
    };

    return (
      <>
        <div className="border rounded-[5px] my-[5px]">
          <div
            className=" flex justify-between  px-[10px] py-[9px]"
            onClick={handleFLowComponent}
          >
            <div className="flex items-center space-x-[5px]">
              {leadingIcon}
              <div className="text-black text-sm not-italic font-medium leading-normal">
                {title ?? ""}
              </div>
            </div>
            <div className="flex items-center space-x-[5px]">
              <div className="px-2 py-0.5 rounded-full border border-[#A0A4A8] text-xs text-[#A0A4A8]">
                9
              </div>
              <div>
                <ChevronDownIcon className="text-[#94A3B8] w-[19px] h-[19px]" />
              </div>
            </div>
          </div>
          {isFlowComponentOpen && (
            <div className="mx-2 border-t">
              <div className="flex justify-end py-[10px]">
                <div className="mx-2">Show Archived</div>
                <RzToggle />
              </div>
              <FlowComponentsSubItemCard />
              <FlowComponentsSubItemCard />
              <FlowComponentsSubItemCard />
            </div>
          )}
        </div>
      </>
    );
  };
  return (
    <>
      <div className="bg-blue-100 h-screen flex flex-col">
        <RzHeader />
        <div className="flex justify-between py-5 px-[30px] border-t bg-white">
          <div className="text-black text-xl not-italic font-semibold leading-normal">
            Bot Studio
          </div>
          <div className="flex space-x-[10px]">
            <RzButton
              icon={<Cog6ToothIcon />}
              text="Settings"
              type="secondary"
              size="md"
            />
            <RzButton
              icon={<ArrowUpOnSquareIcon />}
              text="Train and Publish QNA"
              type="secondary"
              size="md"
            />
            <RzButton
              icon={isComponentBankOpen ? <EyeSlashIcon /> : <EyeIcon />}
              text={
                isComponentBankOpen
                  ? "Hide Component Bank"
                  : "Show Component Bank"
              }
              type="secondary"
              size="md"
              onClick={handleComponentBank}
            />
            {!isOnboardingOpen && (
              <RzButton
                icon={
                  <img src={IconoirPackegeIcon} alt="iconoir-package-icon" />
                }
                text="Create Package"
                size="md"
              />
            )}
            <RzButton
              icon={<PlayCircleIcon />}
              text="Live Preview"
              type="disabled"
            />
          </div>
        </div>
        <div className="flex-grow flex overflow-hidden m-5">
          {isComponentBankOpen && (
            <div className="w-1/3 me-[15px] py-[22px] px-[12px] bg-white rounded-[15px]">
              <div className="sticky top-0 bg-white">
                <div className="text-black text-base font-medium not-italic leading-normal pb-[14px] border-b">
                  Flow Components
                </div>
                <div className="py-[10px] border-b">
                  <div className="relative border rounded-[5px] flex justify-between items-center px-[15px] py-2">
                    <input
                      type="text"
                      className="w-full border items-center flex focus:outline-none rounded-[5px]"
                      placeholder="Search"
                    />

                    <div>
                      <MagnifyingGlassIcon className="w-5 h-5 text-[#617182]" />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="overflow-y-auto custom-scroll mt-[10px] pb-4"
                style={{ height: "calc(100% - 85px)" }}
              >
                {flowComponents.map((e) => (
                  <FlowComponentsItem
                    title={e.title}
                    leadingIcon={e.leadingIcon}
                  />
                ))}
              </div>
            </div>
          )}

          {isOnboardingOpen ? (
            <OnboardingFlowScreen />
          ) : (
            <FlowEditorScreen
              onCreateClick={() => {
                handleOpenOnboarding();
              }}
            />
          )}
        </div>
        <RzFooter />
      </div>
    </>
  );
};
export default BotStudioPage;
