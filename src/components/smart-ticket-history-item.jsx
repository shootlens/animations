import { CheckCircleIcon } from "@heroicons/react/24/outline";
import React from "react";

const SmartTicketHistoryItem = ({ step, isLast }) => {
  return (
    <div>
      {isLast ? null : (
        <div
          className={`absolute left-4 top-4 border-t-[22px] border-b-[22px] border-white -ml-px mt-0.5 h-full w-px bg-[#E5E7EB]`}
        />
      )}

      <div className="group relative flex items-start">
        <span className="flex h-9 items-center">
          <span
            className={`relative  flex h-[33px] w-[33px] items-center justify-center rounded-full border-1`}
            style={{
              backgroundColor: step.backgroundColor
                ? step.backgroundColor
                : "#E5E7EB",
            }}
          >
            <div className="h-5 w-5 font-bold text-white ">
              {step.icon ? step.icon : <CheckCircleIcon />}
            </div>
          </span>
        </span>
        <span className="ml-4 flex min-w-0 flex-col">
          <span
            className={`text-sm font-medium ${
              step.status === "complete" ? "" : "text-gray-500"
            }`}
          >
            {step.name}
          </span>
          <span className="text-sm text-[#6B7280]">{step.description}</span>
          <span className="text-xs font-medium not-italic text-[#6B7280]">
            {step.timeStamp}
          </span>
        </span>
      </div>
    </div>
  );
};

export default SmartTicketHistoryItem;
