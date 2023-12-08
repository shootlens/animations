import {
  ArrowPathIcon,
  BellAlertIcon,
  BellSlashIcon,
  ChevronLeftIcon,
  MagnifyingGlassIcon,
  SpeakerWaveIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import RzLiveChatCard from "../components/rz-live-chat-card";
import RzToggle from "../components/atoms/rz-toggle";
import RzStatusChip from "../components/atoms/rz-badge";
import { useState } from "react";
import { XCircleIcon } from "@heroicons/react/24/outline";
import { AnimatePresence, motion } from "framer-motion";
import PulseAnimationButton from "../animation-components/pulse-animation-button";

const LiveChatPage = () => {
  const cardData = [
    {
      title: "Title1",
      description:
        "The subject of the ticket would be displaye The subject of the ticket would be displaye..The subject of the ticket would be displaye..",
      time: "December 21st 2022, 12:22 PM",
      status: <PulseAnimationButton title="Incoming.." />,
    },
    {
      title: "Title1",
      description:
        "The subject of the ticket would be displaye The subject of the ticket would be displaye..The subject of the ticket would be displaye..",
      time: "December 21st 2022, 12:22 PM",
      status: (
        <RzStatusChip
          title="Resolved "
          textColor="#6B7280"
          backgroundColor="#F2F3F4"
        />
      ),
      borderStatus: "border-gray-200",
    },
    {
      title: "Title1",
      description:
        "The subject of the ticket would be displaye The subject of the ticket would be displaye..The subject of the ticket would be displaye..",
      time: "December 21st 2022, 12:22 PM",
      status: (
        <RzStatusChip
          title="Missed "
          textColor="#CF3626"
          backgroundColor="#F8E1DE"
        />
      ),
      borderStatus: "border-[#CF3626]",
    },
    {
      title: "Title1",
      description:
        "The subject of the ticket would be displaye The subject of the ticket would be displaye..The subject of the ticket would be displaye..",
      time: "December 21st 2022, 12:22 PM",
      status: <PulseAnimationButton title="Incoming.." />,
    },
  ];

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [isMuted, setIsMuted] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearchText("");
  };

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const clearSearch = () => {
    setSearchText("");
  };

  const handleBellClick = () => {
    setIsMuted(!isMuted);
  };
  return (
    <>
      <AnimatePresence>
        <div className="flex h-screen bg-[#DEE8FC]">
          <div className="w-6/12 border h-full bg-white overflow-y-auto rounded-[15px] m-5 px-3 py-[22px]">
            <div className="flex justify-between">
              <div className="text-black text-base not-italic font-medium">
                Live Chat
              </div>
              <div className="flex space-x-[10px] items-center">
                <div>
                  <RzToggle activeColor="green" />
                </div>
                <div className="text-sm not-italic font-medium text-[#6B7280]">
                  Make yourself available
                </div>
                <div className="rounded-full border border-[#94A3B8] p-0.5">
                  <ChevronLeftIcon className="w-4 h-4 text-[#94A3B8]" />
                </div>
              </div>
            </div>

            <div className="py-[18px] flex justify-between">
              <div className="flex space-x-[4px]">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative inline-block cursor-pointer"
                >
                  {isMuted ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.8 }}
                      transition={{ duration: 0.3 }}
                    >
                      <BellSlashIcon
                        className="w-7 h-7 p-1 border border-[#DBDDE0] rounded-md text-[#94A3B8]"
                        onClick={handleBellClick}
                      />
                    </motion.div>
                  ) : (
                    <BellAlertIcon
                      className="w-7 h-7 p-1 border border-[#DBDDE0] rounded-md text-[#94A3B8]"
                      onClick={handleBellClick}
                    />
                  )}
                </motion.div>

                <SpeakerWaveIcon className="w-7 h-7 p-1 border border-[#DBDDE0] rounded-md text-[#94A3B8] cursor-pointer" />
              </div>
              <div className="flex space-x-[4px]">
                <div>
                  {isSearchOpen ? (
                    <XMarkIcon
                      className="w-7 h-7 p-1 border border-[#DBDDE0] rounded-md text-[#94A3B8] cursor-pointer"
                      onClick={toggleSearch}
                    />
                  ) : (
                    <MagnifyingGlassIcon
                      className="w-7 h-7 p-1 border border-[#DBDDE0] rounded-md text-[#94A3B8] cursor-pointer"
                      onClick={toggleSearch}
                    />
                  )}
                </div>
                <ArrowPathIcon className="w-7 h-7 p-1 border border-[#DBDDE0] rounded-md text-[#94A3B8] cursor-pointer" />
              </div>
            </div>
            <AnimatePresence>
              {isSearchOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    transition: { duration: 0.1, ease: "easeInOut" },
                  }}
                  transition={{ duration: 0.3 }}
                  className="mb-2"
                >
                  <div className="relative border rounded-[5px]">
                    <input
                      type="text"
                      value={searchText}
                      onChange={handleInputChange}
                      className="w-full border h-9 items-center flex px-[15px] focus:outline-none rounded-[5px]"
                      placeholder="Search"
                    />
                    {searchText && (
                      <div
                        className="absolute right-4 top-3 cursor-pointer"
                        onClick={clearSearch}
                      >
                        <XCircleIcon className="h-[15px] w-[15px] text-[#94A3B8]  items-center transition duration-300" />
                      </div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {cardData.map((card) => (
              <RzLiveChatCard
                title={card.title}
                description={card.description}
                time={card.time}
                cardStatus={card.status}
                borderStatus={card.borderStatus}
              />
            ))}
          </div>
          <div className="w-full"></div>
        </div>
      </AnimatePresence>
    </>
  );
};

export default LiveChatPage;
