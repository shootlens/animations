import {
  PencilSquareIcon,
  DocumentDuplicateIcon,
  TrashIcon,
  PlusIcon,
} from "@heroicons/react/24/outline";
import DragDots from "../../assets/icons/drag-vector.svg";
import CodeBlockIcon from "../../assets/icons/code-block-icon.svg";
import { motion, AnimatePresence } from "framer-motion";
import RzBadge from "../../components/atoms/rz-badge";
import BotStudioFlowsSvgIcon from "../../assets/icons/bot-studio-flows-map.svg";

const OnboardingComponentCard = ({ isCollapsed, cardTitle, icon }) => {
  return (
    <>
      <AnimatePresence>
        <div className="border border-dashed border-[#E2E2E2] rounded-[10px] w-full flex mb-[10px]">
          <div className=" border-r border-r-[#E2E2E2] p-2 inline-flex cursor-default">
            <img
              src={DragDots}
              alt="drag-dots-svg"
              className="cursor-pointer inline-flex"
            />
          </div>
          <div className="flex-grow pt-[10px] pr-[10px]">
            <div
              className={`flex justify-between ${
                isCollapsed ? "border-b" : "border-none"
              } border-[#E2E2E2] pb-[10px]`}
            >
              <div className="flex space-x-[5px]">
                <div className="w-6 h-6 ml-1">{icon ? icon : ""}</div>
                <div className="text-sm font-medium not-italic leading-normal flex items-center">
                  <div className="text-black text-sm not-italic font-medium leading-normal">
                    {cardTitle ? cardTitle : ""}
                  </div>
                  {!isCollapsed && (
                    <motion.div
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4 }}
                      className="flex items-center space-x-[10px] mx-[10px]"
                    >
                      <div className="text-black text-sm font-medium leading-normal not-italic">
                        IF
                      </div>
                      <RzBadge
                        title={`genAI=="activated" `}
                        backgroundColor="#F7E9CE"
                        textColor="#E79B04"
                        badgeRadius="5px"
                      />
                      <RzBadge
                        title="flowGenAI"
                        backgroundColor="#DEE8FC"
                        textColor="#2563EB"
                        badgeRadius="5px"
                      />
                      <div className="text-black text-sm font-medium not-italic leading-normal">
                        ELSE IF
                      </div>
                      <RzBadge
                        title={`genAI=="activated" `}
                        backgroundColor="#F7E9CE"
                        textColor="#E79B04"
                        badgeRadius="5px"
                      />
                      <RzBadge
                        title="flowQnA"
                        backgroundColor="#DEE8FC"
                        textColor="#2563EB"
                        badgeRadius="5px"
                      />
                    </motion.div>
                  )}
                </div>
              </div>
              <div className="flex items-center space-x-1">
                <PencilSquareIcon className="w-[21px] h-[21px] text-[#94A3B8] cursor-pointer" />
                <DocumentDuplicateIcon className="w-[21px] h-[21px] text-[#94A3B8] cursor-pointer" />
                <TrashIcon className="w-[21px] h-[21px] text-[#94A3B8] cursor-pointer" />
              </div>
            </div>
            {isCollapsed && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="px-[26px]">
                  <div className="py-[10px] flex h-full items-center space-x-[14px]">
                    <div>IF</div>
                    <div>
                      <RzBadge
                        title={`genAI=="activated" `}
                        backgroundColor="#F7E9CE"
                        textColor="#E79B04"
                      />
                    </div>
                  </div>
                  <div className="border rounded-md border-dashed p-[18px]">
                    <div className="border rounded-md px-[18px] py-[13px] flex justify-between">
                      <div className="flex space-x-[10px]">
                        <div>
                          <img
                            src={BotStudioFlowsSvgIcon}
                            alt="bot-flow-svg-icon"
                          />
                        </div>
                        <div className="text-sm font-normal text-[#6B7280] not-italic leading-normal">
                          flowGenAI
                        </div>
                      </div>
                      <div className="flex space-x-[10px]">
                        <PencilSquareIcon className="w-[21px] h-[21px] text-[#94A3B8]" />
                        <TrashIcon className="w-[21px] h-[21px] text-[#94A3B8]" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-[14px] py-[10px]">
                    <div>ELSE IF</div>
                    <RzBadge
                      title={`genAI === "deActivated"`}
                      backgroundColor="#F7E9CE"
                      textColor="#E79B04"
                    />
                  </div>
                  <div className="border rounded-md border-dashed p-[18px]">
                    <div className="border rounded-md px-[18px] py-[13px] flex justify-between">
                      <div className="flex space-x-[10px]">
                        <div>
                          <img
                            src={BotStudioFlowsSvgIcon}
                            alt="bot-flow-svg-icon"
                          />
                        </div>
                        <div className="text-sm font-normal text-[#6B7280] not-italic leading-normal">
                          flowQnA
                        </div>
                      </div>
                      <div className="flex space-x-[10px]">
                        <PencilSquareIcon className="w-[21px] h-[21px] text-[#94A3B8]" />
                        <TrashIcon className="w-[21px] h-[21px] text-[#94A3B8]" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-end py-[10px]">
                    <div className="border border-[#D1D5DB] inline-flex rounded-md p-2">
                      <PlusIcon className="w-5 h-5 text-[#94A3B8]" />
                    </div>
                  </div>
                  <div className="pb-[10px]">ELSE</div>
                  <div className="h-14 rounded-md border border-dashed mb-[15px]"></div>
                </div>
                {/* <div>
                  <div className="ml-[19px] border-b border-[#E2E2E2] py-[10px] flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      <img src={CodeBlockIcon} alt="code-braces-svg" />
                      <div className="text-sm font-medium text-[#6B7280] not-italic leading-normal">
                        cardSlotScript
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <PencilSquareIcon className="w-[21px] h-[21px] text-[#94A3B8] cursor-pointer" />
                      <DocumentDuplicateIcon className="w-[21px] h-[21px] text-[#94A3B8] cursor-pointer" />
                    </div>
                  </div>
                  <div className="ml-[19px] bg-blue-100 rounded-md pb-7 p-[18px] mt-5 mb-[10px] relative">
                    {`async ({ data, userData, conversationData, botHelpers, message, body }) => {}`}
                    <div className="absolute bottom-1 right-4 text-sm text-[#2563EB] font-medium leading-normal not-italic cursor-pointer">
                      Expand
                    </div>
                  </div>
                </div> */}
              </motion.div>
            )}
          </div>
        </div>
      </AnimatePresence>
    </>
  );
};
export default OnboardingComponentCard;
