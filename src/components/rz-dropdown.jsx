import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";
import {
  ChevronDownIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import RzButton from "../animation-components/rz-button-component";

const RzDropdown = ({
  title,
  items,
  multiselect,
  customIcon,
  multiselectTitle,
  divider,
  itemsWithSearch,
  itemsWithIcon,
  listTitle,
  customClass,
  leftSideIcon,
  haveClearButton,
  customTitleClass,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const togglePopover = () => {
    if (items && items.length > 0) {
      setIsOpen(!isOpen);
    }
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  if (!items || items.length === 0) {
    return null;
  }

  const renderTitle = () => (
    <div
      className={`mx-2 text-[#6B7280] text-justify text-sm not-italic whitespace-nowrap ${customTitleClass}`}
    >
      {title}
    </div>
  );

  const renderListTitle = () => (
    <div className="px-[12px] py-[8px] text-sm not-italic font-normal leading-5 border-b text-[#111827]">
      {listTitle}
    </div>
  );

  const renderChevronIcon = () => (
    <div className="">
      {" "}
      <ChevronDownIcon
        className={`h-5 w-5 text-[#94A3B8]  ${
          isOpen
            ? "transform rotate-180 duration-300"
            : "transform rotate-0 duration-300"
        }`}
      />
    </div>
  );

  const renderCustomIcon = () => <div className="">{customIcon}</div>;

  const renderSearchInput = () => (
    <div className="border-[1px] rounded-md flex mx-[10px] items-center mt-[10px]">
      <input
        type="text"
        placeholder="Search"
        className="border rounded-md py-1 pl-[10px] pr-[10px] focus:outline-none"
      />
      <MagnifyingGlassIcon className="w-4 h-4 mr-[10px] text-gray-400 absolute right-[10px]" />
    </div>
  );

  const renderMultiselectSearch = () => (
    <>
      <div className="flex justify-between my-[10px] pb-[10px] border-b ">
        <div className="text-black text-sm font-medium mx-[10px] ">
          {multiselectTitle !== null ? multiselectTitle : ""}
        </div>
        <div className="text-[#2563EB] text-xs font-normal leading-normal mx-[10px] ">
          Restore Default
        </div>
      </div>
      {renderSearchInput()}
    </>
  );

  const renderSearch = () => renderSearchInput();

  return (
    <div
      onClick={togglePopover}
      className={`relative inline-block cursor-pointer${
        title
          ? `border-[#D1D5DB] border bg-white p-1.5 rounded-[5px] ${customClass}`
          : ""
      }`}
      ref={dropdownRef}
    >
      <button
        type="button"
        className={`flex items-center ${
          leftSideIcon ? "flex-row-reverse" : ""
        }`}
      >
        {title && renderTitle()}
        {!customIcon && renderChevronIcon()}
        {customIcon && renderCustomIcon()}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={`absolute right-0 mt-4 w-56 bg-white border border-gray-200 rounded-md shadow-lg`}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            style={{ zIndex: 9999 }}
          >
            {multiselect && renderMultiselectSearch()}

            {listTitle && renderListTitle()}

            {itemsWithSearch && !multiselect && renderSearch()}

            <ul className="py-2">
              {items.map((item, index) => (
                <li
                  key={index}
                  className={`px-4 py-2 ${divider ? "border-b" : ""} ${
                    multiselect
                      ? "flex items-center justify-between"
                      : "hover:bg-gray-100 cursor-pointer flex items-center justify-between"
                  }`}
                  onClick={() => {
                    item.onClick && item.onClick(item.label);
                  }}
                >
                  {multiselect && (
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        className="h-4 w-4 text-blue-500"
                      />
                      <div className="text-sm text-[#6B7280] not-italic">
                        {item.label}
                      </div>
                    </div>
                  )}
                  {!multiselect && (
                    <>
                      <div className="text-sm not-italic">{item.label}</div>
                      {itemsWithIcon && (
                        <div
                          onClick={() =>
                            item.iconOnClick && item.iconOnClick(item.label)
                          }
                          className="text-[#94A3B8] w-6 h-6"
                        >
                          {item.icon}
                        </div>
                      )}
                    </>
                  )}
                </li>
              ))}
              {haveClearButton && (
                <div className="justify-center flex max-w-full mt-2">
                  <RzButton buttonText="Clear Selected" secondaryButton />
                </div>
              )}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

RzDropdown.propTypes = {
  title: PropTypes.element,
  customIcon: PropTypes.element,
  listTitle: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.element.isRequired,
      onClick: PropTypes.func,
    })
  ),
  multiselect: PropTypes.bool,
};

export default RzDropdown;
