import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RzDropdown = ({ customizeList, items = [], title }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleSelectItem = (item) => {
    setSelectedItem(item);
    setIsOpen(false);
  };

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  const calculateDropdownWidth = () => {
    const headerWidth = document.getElementById("dropdown-header")?.offsetWidth;
    return headerWidth ? `${headerWidth}px` : "auto";
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const dropdownVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -10 },
  };

  const itemVariants = {
    open: { opacity: 1, y: 0 },
    closed: { opacity: 0, y: -10 },
  };

  const defaultStyles =
    "py-1 absolute rounded-md w-full  mt-2 list-none bg-white border shadow-sm z-10";
  const combinedStyles = `${defaultStyles} ${customizeList || ""}`;

  return (
    <div style={{ position: "relative" }}>
      <div
        className={`flex justify-between items-center border-[#D1D5DB] border px-2 rounded-lg py-[3px] max-w-full`}
        onClick={toggleDropdown}
        ref={dropdownRef}
        id="dropdown-header"
      >
        <div className="text-sm font-semibold text-gray-600">
          {selectedItem ? selectedItem : title ? title : "Dropdown"}
        </div>
        <div>
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1"
            stroke-linecap="round"
            stroke-linejoin="round"
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
          <motion.ul
            className={combinedStyles}
            variants={dropdownVariants}
            initial="closed"
            animate="open"
            exit="closed"
            style={{
              top: "calc(100% + 10px)",
            }}
          >
            {items.map((item, index) => (
              <motion.li
                style={{ width: calculateDropdownWidth() }}
                key={index}
                className={` hover:bg-[#f0f0f0] transition-background duration-100 cursor-pointer text-sm font-normal not-italic px-2 py-1 border-none ${
                  selectedItem === item ? "bg-gray-100" : ""
                }`}
                variants={itemVariants}
                onClick={() => handleSelectItem(item)}
              >
                {item}
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RzDropdown;
