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
  ArrowLeftCircleIcon,
  UserPlusIcon,
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
import RzPopoverMenu from "../../components/rz-popover-menu";
import AuditHistoryItem from "../../components/audit-hisory-item";
import RzDrawer from "../../components/rz-drawer";
import SmartTicketHistoryItem from "../../components/smart-ticket-history-item";
import FlowComponentsAccordionListCard from "./flow-components-accordion-list-card";
import FlatWorkflowIcon from "../../assets/icons/flat-color-icons-workflow.svg";
import DeployExistingPackageCard from "./deploy-existing-package-card";

const BotStudioPage = () => {
  const [isOnboardingOpen, setIsOnboardingOpen] = useState(false);
  const [isComponentBankOpen, setIsComponentBankOpen] = useState(true);
  const [isOpenDeploymentHistory, setisOpenDeploymentHistory] = useState(false);
  const openDeploymentHistory = () => setisOpenDeploymentHistory(true);
  const closeDeploymentHistory = () => setisOpenDeploymentHistory(false);
  const [isOpenCreatePackageModal, setIsOpenCreatePackageModal] =
    useState(false);
  const openCreatePackageModal = () => setIsOpenCreatePackageModal(true);
  const closeCreatePackageModal = () => setIsOpenCreatePackageModal(false);
  const [
    isOpenDeployExistingPackageModal,
    setIsOpenDeployExistingPackageModal,
  ] = useState(false);
  const openDeployExistingPackageModal = () =>
    setIsOpenDeployExistingPackageModal(true);
  const closeDelpoyExistingPackageModal = () =>
    setIsOpenDeployExistingPackageModal(false);

  const handleOpenOnboarding = () => {
    setIsOnboardingOpen(!isOnboardingOpen);
  };

  const handleComponentBank = () => {
    setIsComponentBankOpen(!isComponentBankOpen);
  };

  const initialDisplayedSteps = 4;
  const [displayedSteps, setDisplayedSteps] = useState(initialDisplayedSteps);
  const showAllSteps = () => setDisplayedSteps(steps.length);
  const steps = [
    {
      name: (
        <div>
          <span className="text-sm not-italic font-medium text-[#2563EB] me-1">
            User Firstname
          </span>
          reported the incident
          <span className="text-sm not-italic font-medium text-[#2563EB] me-1">
            #ASC101
          </span>
        </div>
      ),
      description: "Heading: User Firstname reported the incident #ASC101",
      timeStamp: "<Capture timestamp>",
      icon: <UserPlusIcon />,
      backgroundColor: "#8EC1F3",
    },
    {
      name: "Theme",
      description: "Faucibus nec enim leo et.",
      backgroundColor: "#FD6B5C",
    },
    {
      name: (
        <div>
          <span className="text-sm not-italic font-medium text-[#2563EB] me-1">
            User Firstname / Agent Firstname
          </span>{" "}
          edited the{" "}
          <span className="text-sm not-italic font-medium text-[#2563EB] me-1">
            [Subject / Description / / Domain / Category / Subcategory / Queue /
            Requestor / StateMovement / Miscellaneous CaseFields ]
          </span>
        </div>
      ),
      description: "detail - [only if not already captured in heading ]",
      timeStamp: "<Capture timestamp>",
      backgroundColor: "#8EC1F3",
    },

    {
      name: "Preview",
      description: "Iusto et officia maiores porro ad non quas.",
      backgroundColor: "#FD6B5C",
    },
    {
      name: (
        <div>
          <span className="text-sm not-italic font-medium text-[#2563EB] me-1">
            User Firstname
          </span>
          reported the incident
          <span className="text-sm not-italic font-medium text-[#2563EB] me-1">
            #ASC101
          </span>
        </div>
      ),
      description: "Heading: User Firstname reported the incident #ASC101",
      timeStamp: "<Capture timestamp>",
      icon: <UserPlusIcon />,
      backgroundColor: "#8EC1F3",
    },
  ];

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

  const deploymentItems = [
    { label: "Create Packege", onClick: openCreatePackageModal },
    {
      label: "Deploy Existing Package",
      onClick: openDeployExistingPackageModal,
    },
    { label: "Deployment History", onClick: openDeploymentHistory },
  ];

  const FlowComponentsItem = ({ title, leadingIcon }) => {
    const [isFlowComponentOpen, setIsFlowCOmponentOpen] = useState(false);

    const handleFLowComponent = () => {
      setIsFlowCOmponentOpen(!isFlowComponentOpen);
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
              <FlowComponentsAccordionListCard />
              <FlowComponentsAccordionListCard />
              <FlowComponentsAccordionListCard />
            </div>
          )}
        </div>
      </>
    );
  };
  return (
    <>
      <div className="bg-blue-100 h-screen flex flex-col">
        <RzHeader
          leftSideChildren={
            <>
              <RzToggle backgroundColor="#DEE8FC" withIConOnHead size="large" />
            </>
          }
          rightSideChildren={
            <div className="flex items-center space-x-[10px]">
              <div className="text-base text-black not-italic font-normal leading-normal">
                Switch to classic
              </div>
              <RzToggle />
            </div>
          }
        />
        <div className="flex justify-between py-5 px-[30px] border-t bg-white">
          <div className="text-black text-xl not-italic font-semibold leading-normal">
            Bot Studio
          </div>
          <div className="flex items-center space-x-[10px]">
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
            <RzPopoverMenu
              title="Deployments"
              items={deploymentItems}
              multiselectTitle="Column"
              customIcon={
                <ArrowUpOnSquareIcon className="w-4 h-4 text-[#6B7280]" />
              }
              leftSideIcon={true}
              customTitleClass="text-[#6B7280]"
              customClass="p-2 border-[#D1D5DB]"
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
            <RzButton icon={<PlayCircleIcon />} text="Live Preview" size="md" />
          </div>
        </div>
        <div className="create-package-modal">
          <RzDrawer
            isOpen={isOpenCreatePackageModal}
            onClose={closeCreatePackageModal}
            header={[
              <div>
                <div className="flex items-center py-[10px]">
                  <ArrowLeftCircleIcon
                    className="text-[#2563EB] w-6 h-6 me-1"
                    onClick={closeCreatePackageModal}
                  />
                  <div className="text-base text-black not-italic font-medium leading-normal">
                    Create Package
                  </div>
                </div>
                <div>
                  <div className="pb-[10px]">Package Name</div>
                  <div className="px-[13px] py-[5px] border rounded-md text-sm font-normal text-[#6B7280] leading-normal">
                    September 02 release
                  </div>
                  <div className="pt-[15px] pb-[10px] text-sm font-normal text-black leading-normal">
                    Package description
                  </div>
                  <div className="border px-[13px] py-[5px] rounded-md text-sm text-[#6B7280] font-normal leading-normal not-italic text-ellipsis overflow-auto custom-scroll max-h-44">
                    This release focuses on visual improvement of existing cards
                    in the password reset flow; and introduces a new flow to
                    automate O365 license allocation
                  </div>
                </div>
                <div className="py-5 bg-white ">
                  <div className="border rounded-md flex justify-between items-center">
                    <input
                      type="text"
                      placeholder="search"
                      className="w-full p-1.5 rounded-md"
                    />
                    <MagnifyingGlassIcon className="w-6 h-6 text-gray-500 mx-2" />
                  </div>
                </div>
              </div>,
            ]}
            content={
              <div className="">
                <div className="flex items-start space-x-[10px] my-[15px]">
                  <div>
                    <input type="checkbox" className="w-4 h-4" />
                  </div>
                  <div className="w-6 h-6">
                    <img
                      src={FlatWorkflowIcon}
                      alt="flat-workflow-icon"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col space-y-[10px]">
                    <div className="text-sm font-medium not-italic leading-normal">
                      Password reset
                    </div>
                    <div className="text-sm text-[#6B7280] font-normal leading-normal not-italic">
                      This flow would help the user change / reset their
                      organisation credentials
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-[10px] my-[15px]">
                  <div>
                    <input type="checkbox" className="w-4 h-4" />
                  </div>
                  <div className="w-6 h-6">
                    <img
                      src={FlatWorkflowIcon}
                      alt="flat-workflow-icon"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col space-y-[10px]">
                    <div className="text-sm font-medium not-italic leading-normal">
                      Password reset
                    </div>
                    <div className="text-sm text-[#6B7280] font-normal leading-normal not-italic">
                      This flow would help the user change / reset their
                      organisation credentials
                    </div>
                  </div>
                </div>
                <div className="flex items-start space-x-[10px] my-[15px]">
                  <div>
                    <input type="checkbox" className="w-4 h-4" />
                  </div>
                  <div className="w-6 h-6">
                    <img
                      src={FlatWorkflowIcon}
                      alt="flat-workflow-icon"
                      className="w-full h-full"
                    />
                  </div>
                  <div className="flex flex-col space-y-[10px]">
                    <div className="text-sm font-medium not-italic leading-normal">
                      Password reset
                    </div>
                    <div className="text-sm text-[#6B7280] font-normal leading-normal not-italic">
                      This flow would help the user change / reset their
                      organisation credentials
                    </div>
                  </div>
                </div>
              </div>
            }
          />
        </div>
        <div className="deploy-existing-package-modal">
          <RzDrawer
            isOpen={isOpenDeployExistingPackageModal}
            onClose={closeDelpoyExistingPackageModal}
            header={[
              <div>
                <div className="flex items-center py-[10px]">
                  <ArrowLeftCircleIcon
                    className="text-[#2563EB] w-6 h-6 me-1"
                    onClick={closeDelpoyExistingPackageModal}
                  />
                  <div className="text-base text-black not-italic font-medium leading-normal">
                    Deploy Existing Package
                  </div>
                </div>
                <div className="pb-2 bg-white ">
                  <div className="border rounded-md flex justify-between items-center">
                    <input
                      type="text"
                      placeholder="search"
                      className="w-full p-1.5 rounded-md"
                    />
                    <MagnifyingGlassIcon className="w-6 h-6 text-gray-500 mx-2" />
                  </div>
                </div>
              </div>,
            ]}
            content={
              <>
                <div>
                  <DeployExistingPackageCard />
                </div>
              </>
            }
          />
        </div>
        <div className="deployment-history-modal">
          <RzDrawer
            isOpen={isOpenDeploymentHistory}
            onClose={closeDeploymentHistory}
            header={[
              <div>
                <div className="flex items-center py-[10px]">
                  <ArrowLeftCircleIcon
                    className="text-[#2563EB] w-6 h-6 me-1"
                    onClick={closeDeploymentHistory}
                  />
                  <div className="text-base text-black not-italic font-medium leading-normal">
                    Deployment History
                  </div>
                </div>
                <div className="pb-2 bg-white ">
                  <div className="border rounded-md flex justify-between items-center">
                    <input
                      type="text"
                      placeholder="search"
                      className="w-full p-1.5 rounded-md"
                    />
                    <MagnifyingGlassIcon className="w-6 h-6 text-gray-500 mx-2" />
                  </div>
                </div>
              </div>,
            ]}
            content={
              <>
                <div className="w-full">
                  {steps.slice(0, displayedSteps).map((step, stepIdx) => (
                    <div
                      key={step.name}
                      className={`${
                        stepIdx !== displayedSteps - 1 ? "pb-10" : ""
                      } relative`}
                    >
                      <SmartTicketHistoryItem
                        step={step}
                        isLast={stepIdx === displayedSteps - 1}
                      />
                    </div>
                  ))}

                  {displayedSteps < steps.length && (
                    <div
                      className="rounded-full mt-7 p-2 text-xs not-italic border text-[#6B7280] border-[#D1D5DB] bg-white inline-flex items-center"
                      onClick={showAllSteps}
                    >
                      <span>
                        <ChevronDownIcon className="w-5 h-5 text-[#94A3B8] me-px" />
                      </span>
                      Show More
                    </div>
                  )}
                </div>
              </>
            }
          />
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
