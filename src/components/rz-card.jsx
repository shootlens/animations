import {
  UserGroupIcon,
  InformationCircleIcon,
} from "@heroicons/react/24/outline";
import RzChip from "./rz-chip";

const RzCard = ({
  workflowCard,
  iconsList = [],
  showUsrAvatar,
  showActiveSubscriptions,
  showActions,
  title,
  description,
  workflowTitle,
  workflowActionsList = [],
}) => {
  return (
    <>
      <div className="flex mx-auto">
        <div
          className={`border w-full max-w-[400px] rounded-[10px] border-gray-300 px-[15px] pt-[15px] pb-[25px] bg-white ${
            workflowCard ? "!p-0" : ""
          }`}
        >
          {!workflowCard && (
            <div>
              <div>
                <div className="flex justify-between items-start">
                  <div className="bg-[#DEE8FC] rounded-[5px] p-2">
                    <UserGroupIcon className="w-5 h-5 shrink-0" />
                  </div>
                  {showActions && (
                    <div className="flex items-center text-[#94A3B8] space-x-[10px] shrink-0">
                      {iconsList.map((iconProps, index) => (
                        <div key={index} onClick={iconProps.onClick}>
                          {iconProps.icon}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="text-black text-base font-medium leading-normal not-italic shrink-0 pt-4">
                  {title !== "" ? title : ""}
                </div>
                <div className="text-[#6B7280] font-normal text-sm not-italic leading-normal py-4 ">
                  {description !== "" ? description : ""}
                </div>
              </div>
              <div className="flex justify-between">
                {!showActiveSubscriptions && (
                  <div className="flex space-x-[10px]">
                    <RzChip title="2 documents" />{" "}
                    <RzChip title="2 documents" />
                  </div>
                )}
                {showUsrAvatar && !showActiveSubscriptions && (
                  <div className="flex h-6 w-6 rounded-full bg-[#41A1A4] justify-center text-center text-xs  text-white leading-3 items-center">
                    S
                  </div>
                )}
              </div>
              {showActiveSubscriptions && (
                <div className="flex justify-between">
                  <div className="text-sm not-italic font-normal leading-normal text-black">
                    Active Subscriptions:
                  </div>
                  <div className="flex space-x-4">
                    <RzChip title="Live Chat" />
                    <RzChip title="ITSM" />
                  </div>
                </div>
              )}
            </div>
          )}

          {workflowCard && (
            <div>
              <div className=" flex items-center px-[27px] py-[31px]">
                <div className="bg-[#F8E1DE] rounded-[10px] pt-[14px] pr-[14px] pl-[15px] pb-[15px]">
                  Div 3
                </div>

                <div className="flex-grow mx-[21px] flex items-center">
                  <div className="bg-[#D9D9D9] h-2 w-2 rounded-full"></div>
                  <div className="flex-grow h-0.5 bg-[#D9D9D9] mx-0.5"></div>
                  <div className="bg-[#D9D9D9] h-2 w-2 rounded-full"></div>
                </div>

                <div className="bg-[#DFF7E9] rounded-[10px] pt-[14px] pr-[14px] pl-[15px] pb-[15px]">
                  Div 3
                </div>
              </div>
              <div className="bg-gray-100 p-[10px] rounded-b-[10px]">
                <div className="flex justify-between items-center pb-[10px]">
                  <div className="flex justify-start space-x-[10px]">
                    <div className="text-[#6B7280] text-sm font-medium leading-normal">
                      {workflowTitle !== "" ? workflowTitle : ""}
                    </div>
                    <RzChip title="Published" />
                  </div>
                  {workflowActionsList !== null && (
                    <div className="flex items-center text-[#94A3B8] space-x-[10px] shrink-0">
                      {workflowActionsList.map((workflowIcons, index) => (
                        <div key={index} onClick={workflowIcons.onClick}>
                          {workflowIcons.icon}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
                <div className="flex justify-between items-center ">
                  <div className="text-[#6B7280] text-sm font-medium leading-normal">
                    Description
                  </div>
                  <div className="flex space-x-[10px] items-center">
                    <div className="flex h-6 w-6 rounded-full bg-[#41A1A4] justify-center text-center text-xs  text-white leading-3 items-center">
                      S
                    </div>

                    <div>
                      <div
                        id="tooltip-top"
                        role="tooltip"
                        class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
                      >
                        Tooltip on top
                        <div class="tooltip-arrow" data-popper-arrow></div>
                      </div>
                      <InformationCircleIcon
                        className="h-6 w-6 text-[#94A3B8]"
                        data-tooltip-placement="top"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default RzCard;
