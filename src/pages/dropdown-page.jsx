import RzDropdown from "../components/rz-dropdown";

const DropdownPage = () => {
  const code = `
  import React, { useState, useRef, useEffect } from "react";
  import { motion, AnimatePresence } from "framer-motion";
  
  const RzDropdown = () => {
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
    const items = ["Item 1", "Item 2", "Item 3"];
  
    return (
      <div>
        <div
          className="flex justify-between items-center border-gray-400 border px-4 rounded-lg py-[3px] max-w-xs"
          onClick={toggleDropdown}
          ref={dropdownRef}
        >
          <div className="text-sm font-semibold text-gray-600">
            {selectedItem ? selectedItem : "Dropdown"}
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
              className={transition-transform duration-75 text-gray-400 {
                isOpen ? "rotate-180" : "rotate-0"
              }}
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
              className=" px-1 py-1 rounded-md max-w-xs mt-2 list-none bg-white border border-[#ccc] shadow-sm z-10"
              variants={dropdownVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              {items.map((item, index) => (
                <div onClick={() => handleSelectItem(item)}>
                  <motion.li
                    key={index}
                    className={ hover:bg-[#f0f0f0] transition-background duration-100 cursor-pointer px-2 py-1 border-none {
                      selectedItem === item ? "bg-gray-300" : ""
                    }}
                    variants={itemVariants}
                  >
                    {item}
                  </motion.li>
                </div>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
    );
  };
  
  export default RzDropdown;
  

    `;
  return (
    <>
      <div className="bg-white h-screen w-full overflow-auto">
        <div className=" max-w-5xl mx-auto w-full my-9">
          <div className="text-lg font-bold text-gray-700 py-9">Dropdown</div>
          <div className=" max-w-md mx-auto mb-9 h-[9rem]">
            <RzDropdown />
          </div>

          <div className="bg-gray-700 w-full rounded-md text-gray-200 max-w-7xl overflow-auto px-4">
            <pre>
              <code>{code}</code>
            </pre>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropdownPage;
