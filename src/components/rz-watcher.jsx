import {
  ChevronDownIcon,
  EyeIcon,
  MagnifyingGlassIcon,
  UserPlusIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import RzAvatar from "../components/rz-avatar";
import RzButton from "../components/atoms/rz-button";

const RzWatcher = () => {
  const [toggle, setToggle] = useState(false);
  const [addWatcher, setAddWatcher] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const handleToggle = () => {
    setToggle((prev) => !prev);
    setIsDropdownOpen(false);
  };
  const handleAddWatcher = () => {
    setAddWatcher(true);
  };
  const handleDropdownToggle = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const calculateDropdownWidth = () => {
    const headerWidth = document.getElementById("dropdown-header")?.offsetWidth;
    return headerWidth ? `${headerWidth}px` : "auto";
  };
  return (
    <>
      <AnimatePresence>
        <div className="border rounded-[10px] max-w-sm w-full px-2 bg-white ">
          <div
            className="px-2 py-3 flex justify-between"
            onClick={handleToggle}
          >
            <div className="text-sm font-medium text-[#617182] ">Watchers</div>
            <div>
              <ChevronDownIcon
                className={`w-5 h-5 text-[#617182] ${
                  toggle
                    ? "transform rotate-180 duration-300"
                    : "transform rotate-0 duration-300"
                }`}
              />
            </div>
          </div>

          {toggle && (
            <motion.div
              initial={{ opacity: 0, y: -5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 0 }}
              transition={{ duration: 0.4 }}
              className="pt-2 pb-2 border-t"
            >
              <div className="flex justify-between py-2">
                <div className="text-gray-700 text-sm  font-normal leading-normal">
                  To Watchers
                </div>
                <div className="text-[#2563EB] flex items-center">
                  <EyeIcon className=" w-6 h-6" />
                  <span className="ms-[5px]">2</span>
                </div>
              </div>
              <div className="flex justify-between py-2">
                <div className="text-gray-700 text-sm  font-normal leading-normal">
                  To Watchers
                </div>
                <div className="text-[#2563EB] flex items-center">
                  <EyeIcon className=" w-6 h-6" />
                  <span className="ms-[5px]">2</span>
                </div>
              </div>

              {!addWatcher && (
                <div
                  className="rounded-[5px] text-xs border w-full px-2 py-[7px] text-center items-center justify-center flex text-[#94A3B8]"
                  onClick={handleAddWatcher}
                >
                  <span className="mx-1">
                    <UserPlusIcon className="w-4 h-4" />
                  </span>
                  Add Watcher
                </div>
              )}
              {addWatcher && (
                <div className="relative" id="dropdown-header">
                  <div
                    className="w-full px-2 py-[3px] rounded-[5px] border text-[#94A3B8] text-xs font-normal flex justify-between"
                    onClick={handleDropdownToggle}
                  >
                    <input className="w-full" placeholder="search" />
                    <div className="ml-4">
                      <MagnifyingGlassIcon className="w-6 h-6" />
                    </div>
                  </div>

                  {isDropdownOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 0 }}
                      className="absolute top-0 mt-9"
                      style={{ width: calculateDropdownWidth() }}
                    >
                      <div className="bg-white border rounded shadow-md  overflow-y-auto  custom-scroll">
                        <div className="flex items-center p-2">
                          <div className="flex items-center me-[18px]">
                            <input type="radio" className="w-4 h-4 me-3" />
                            <span>To</span>
                          </div>
                          <div className="flex items-center me-[18px]">
                            <input type="radio" className="w-4 h-4 me-3" />
                            <span>CC</span>
                          </div>
                        </div>

                        <div className="max-h-[222px] overflow-auto custom-scroll-gray p-2">
                          <div>
                            <div className="flex items-start pt-[18px] ">
                              <input
                                type="checkbox"
                                className="text-[#D1D5DB] w-4 h-4 me-[10px] "
                              />
                              <RzAvatar
                                firstName="Tom Cook"
                                customRadius={24}
                              />
                              <div className="ml-[8px]">
                                <div className="text-sm not-italic font-normal">
                                  Tom Cook
                                </div>
                                <div className="text-xs font-normal not-italic text-[#6B7280]">
                                  tom.cook@rezolve.ai
                                </div>
                              </div>
                            </div>
                            <div className="flex items-start pt-[18px] ">
                              <input
                                type="checkbox"
                                className="text-[#D1D5DB] w-4 h-4 me-[10px] "
                              />
                              <RzAvatar
                                firstName="Tom Cook"
                                customRadius={24}
                              />
                              <div className="ml-[8px]">
                                <div className="text-sm not-italic font-normal">
                                  Tom Cook
                                </div>
                                <div className="text-xs font-normal not-italic text-[#6B7280]">
                                  tom.cook@rezolve.ai
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="justify-center items-center text-center h-full p-12">
                            <div className="inline-flex justify-center items-centers flex-col">
                              <div className="text-sm not-italic font-normal mb-3">
                                No results found
                              </div>
                              <RzButton text="Add Watcher" />
                            </div>
                          </div>

                          <div className="px-2 pt-4 ">
                            <div className="flex items-center pb-[9px]">
                              <div className="w-1/3 text-sm text-black font-normal">
                                First Name
                              </div>
                              <div className="border border-[#D1D5DB] w-2/3 rounded-md">
                                <input
                                  type="text"
                                  className="w-full rounded-md px-2 py-1"
                                  placeholder="first name"
                                />
                              </div>
                            </div>
                            <div className="flex items-center pb-[9px] ">
                              <div className="w-1/3 text-sm text-black font-normal">
                                Last Name
                              </div>
                              <div className="border border-[#D1D5DB] w-2/3 rounded-md">
                                <input
                                  type="text"
                                  className="w-full rounded-md px-2 py-1"
                                  placeholder="last name"
                                />
                              </div>
                            </div>
                            <div className="flex items-center pb-[9px] ">
                              <div className="w-1/3 text-sm text-black font-normal">
                                Email
                              </div>
                              <div className="border border-[#D1D5DB] w-2/3 rounded-md">
                                <input
                                  type="text"
                                  className="w-full rounded-md px-2 py-1"
                                  placeholder="emaple@email.com"
                                />
                              </div>
                            </div>
                            <div className="flex justify-end space-x-[10px]">
                              <RzButton text="Cancel" type="secondary" />
                              <RzButton text="Save" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              )}
            </motion.div>
          )}
        </div>
      </AnimatePresence>
    </>
  );
};
export default RzWatcher;
