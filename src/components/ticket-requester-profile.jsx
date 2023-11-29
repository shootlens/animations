import { ChevronDownIcon, PencilSquareIcon } from "@heroicons/react/24/outline";
import RzAvatar from "./rz-avatar";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const TicketRequesterProfile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleCard = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      <div className="bg-white max-w-md w-full rounded-[10px] h-auto">
        <div className="flex justify-between items-center p-[10px]">
          <div className="flex items-center">
            <RzAvatar firstName="hi" />
            <div className="ps-4">
              <div className="text-black text-sm not-italic font-normal">
                Sudhanshu Joshi
              </div>
              <div className="text-sm text-[#787878] not-italic font-normal">
                rezolvegv123@outlook.com
              </div>
            </div>
          </div>
          <div className="flex space-x-[10px]">
            <PencilSquareIcon className="text-gray-400 w-[18px] h-[18px]" />
            <ChevronDownIcon
              className={`text-gray-400 w-[18px] h-[18px] transform cursor-pointer
                 ${
                   isOpen ? "rotate-180 duration-300" : "rotate-0 duration-300"
                 }`}
              onClick={toggleCard}
            />
          </div>
        </div>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10, height: "auto" }}
              animate={{ opacity: 1, y: 0, height: "auto" }}
              exit={{ opacity: 0, y: -30, height: 0 }}
              transition={{ duration: 0.2 }}
              className="border-t space-y-[6px] p-[10px]"
            >
              <div className="flex justify-between">
                <div className="text-black text-sm">First Name</div>
                <div className="text-sm text-[#617182] ">Name</div>
              </div>
              <div className="flex justify-between">
                <div className="text-black text-sm"> Last Name</div>
                <div className="text-sm text-[#617182]">Name</div>
              </div>
              <div className="flex justify-between">
                <div className="text-black text-sm">Email</div>
                <div className="text-sm text-[#617182]">Name</div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
};

export default TicketRequesterProfile;
