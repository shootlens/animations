import { ChevronDownIcon } from "@heroicons/react/24/outline";
import RzAvatar from "./rz-avatar";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import microsoftTeamsCallSvg from "../assets/icons/microsoft-teams.svg";
import microsoftTeamsChatSvg from "../assets/icons/microsoft-teams-chat.svg";

const TicketRequesterProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCard = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <AnimatePresence>
        <div className="bg-white max-w-sm w-full rounded-[10px] h-auto">
          <div
            className="flex justify-between items-center p-[10px] cursor-pointer"
            onClick={toggleCard}
          >
            <div className="flex items-center">
              <RzAvatar firstName="hi" />
              <div className="ps-4">
                <div className="text-black text-sm not-italic font-medium">
                  Sudhanshu Joshi
                </div>
                <div className="text-sm text-[#787878] not-italic font-normal">
                  rezolvegv123@outlook.com
                </div>
              </div>
            </div>
            <div className="flex space-x-[10px] mr-2">
              <ChevronDownIcon
                className={`text-gray-400 w-[18px] h-[18px] transform cursor-pointer
                 ${
                   isOpen ? "rotate-180 duration-300" : "rotate-0 duration-300"
                 }`}
              />
            </div>
          </div>

          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: "auto" }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: 10, height: 0 }}
              transition={{ duration: 0.2 }}
              className="border-t space-y-[6px]"
            >
              <div className=" p-[10px]">
                <div className="flex justify-between">
                  <div className="text-black text-sm font-medium">
                    First Name
                  </div>
                  <div className="text-sm text-[#617182] ">first name</div>
                </div>
                <div className="flex justify-between">
                  <div className="text-black text-sm font-medium">
                    Last Name
                  </div>
                  <div className="text-sm text-[#617182]">last name</div>
                </div>
                <div className="flex justify-between">
                  <div className="text-black text-sm font-medium">Email</div>
                  <div className="text-sm text-[#617182]">
                    example@email.com
                  </div>
                </div>
              </div>
              <div className="flex border-t w-full divide-x-2">
                <div className="flex-grow text-center px-3 flex py-2 pb-[14px]">
                  <img
                    src={microsoftTeamsCallSvg}
                    alt="microsoft-teams-call"
                    className="me-[6px]"
                  />
                  <span className="text-sm not-italic font-normal leading-5 text-[#374151]">
                    Initiate MS Teams Call
                  </span>
                </div>
                <div className="flex-grow text-center px-3 flex py-2 pb-[14px]">
                  <img
                    src={microsoftTeamsChatSvg}
                    alt="microsoft-teams-chat"
                    className="me-[6px]"
                  />
                  <span className="text-sm not-italic font-normal leading-5 text-[#374151]">
                    Initiate MS Teams Chat
                  </span>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </AnimatePresence>
    </>
  );
};

export default TicketRequesterProfile;
