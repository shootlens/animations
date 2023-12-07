import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PencilSquareIcon } from "@heroicons/react/24/outline";

const RzDropdown = ({
  customizeList,
  items = [],
  title,
  isSearchable,
  addButton,
  emptyState,
  additionalContent,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setIsOpen(!isOpen);
  };

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  const calculateDropdownWidth = () => {
    const headerWidth = dropdownRef.current?.offsetWidth;
    return headerWidth ? `${headerWidth}px` : "auto";
  };

  const dropdownVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -10 },
  };

  const itemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -10 },
  };

  const defaultStyles =
    "py-1 absolute dropdown-scroll rounded-md w-full mt-2 list-none bg-white border shadow-sm z-10 flex flex-col justify-between";
  const combinedStyles = `${defaultStyles} ${customizeList || ""}`;

  return (
    <div style={{ position: "relative" }}>
      <div
        className={`flex justify-between items-center border-[#D1D5DB] border px-2 rounded-md py-[3px] max-w-full bg-white`}
        onClick={toggleDropdown}
        ref={dropdownRef}
        id="dropdown-header"
      >
        <div className="text-sm not-italic font-normal text-[#6B7280]">
          {selectedItem ? selectedItem : title ? title : "Options"}
        </div>
        <div>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`transition-transform duration-75 text-gray-400 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
            initial={false}
            animate={{ rotate: !isOpen ? 180 : 0 }}
          >
            <path d="M18 15l-6-6-6 6" />
          </motion.svg>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={combinedStyles}
            variants={dropdownVariants}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              position: "relative",
              maxHeight: "400px",
              height: "100%",
            }}
          >
            {isSearchable && (
              <motion.div
                key="search-input"
                className="rounded-md mb-1 border border-[#D1D5DB] px-2 mx-2 mt-2"
              >
                <input
                  type="text"
                  placeholder="Search..."
                  className="py-0.5 w-full flex-grow"
                />
              </motion.div>
            )}
            <div className="h-full overflow-y-auto overflow-x-hidden dropdown-scroll">
              {emptyState ? (
                <div className="text-center">{additionalContent ?? "empty"}</div>
              ) : (
                <div>
                  {items.map((item, index) => (
                    <motion.li
                      style={{ width: calculateDropdownWidth() }}
                      key={index}
                      className={` hover:bg-[#f0f0f0] transition-background duration-100 cursor-pointer text-sm not-italic font-normal leading-5 text-[#374151] px-2 border-none flex justify-between items-center ${
                        selectedItem === item ? "bg-gray-100" : ""
                      }`}
                      variants={itemVariants}
                      onClick={() => handleSelectItem(item)}
                      onMouseEnter={() => handleMouseEnter(item)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <span className="py-1.5 px-1">{item}</span>
                      {hoveredItem === item && (
                        <div
                          className="inline-flex text-[#2563EB] items-center"
                          onClick={() => console.log("clicked")}
                        >
                          <PencilSquareIcon className="ml-2 w-6 h-6" />
                          Edit
                        </div>
                      )}
                    </motion.li>
                  ))}
                </div>
              )}
            </div>
            <motion.div>{addButton ?? ""}</motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RzDropdown;
