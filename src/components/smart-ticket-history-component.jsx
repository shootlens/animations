import { ChevronDownIcon, UserPlusIcon } from "@heroicons/react/24/outline";
import SmartTicketHistoryItem from "./smart-ticket-history-item";
import { useState } from "react";

const SmartTicketHistoryComponent = () => {
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
    {
      name: "Theme",
      description: "Faucibus nec enim leo et.",
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
    {
      name: "Preview",
      description: "Iusto et officia maiores porro ad non quas.",
      backgroundColor: "#FD6B5C",
    },
  ];
  return (
    <>
      <div>
        {" "}
        <div className="max-h-[600px] overflow-auto custom-scroll">
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
        </div>
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
  );
};
export default SmartTicketHistoryComponent;
