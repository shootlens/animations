import { Bars3Icon, StarIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import ArrowCarrot from "../assets/icons/caret-arrow.svg";

const ListItem = ({ text, path, subMenuIcon }) => (
  <Link
    to={path}
    className="text-[#6B7280] text-sm not-italic font-medium leading-5"
  >
    <li className="mb-2 px-2 py-1.5">
      <div className="flex justify-between w-full">
        <div>{text}</div>
        <div className="w-5 h-5 text-[#D1D5DB]">
          {subMenuIcon ? (
            subMenuIcon
          ) : (
            <StarIcon className="w-5 h-5 text-[#D1D5DB]" />
          )}
        </div>
      </div>
    </li>
  </Link>
);

const AccordionItem = ({
  title,
  items = [],
  isOpen,
  onToggle,
  titleLeftIcon,
  titleRightIcon,
  onTitleClick,
}) => {
  const zeroItems = items.length === 0;
  const handleClick = zeroItems ? onTitleClick : onToggle;

  return (
    <div className="mb-2">
      <div
        className="flex justify-between items-center py-1.5 px-4 rounded-md bg-white cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex items-center">
          <div className="me-4 text-[#94A3B8] w-6 h-6">
            {titleLeftIcon ? titleLeftIcon : <Bars3Icon className="w-5 h-5" />}
          </div>
          <h2 className="text-sm not-italic font-medium text-[#94A3B8]">
            {title}
          </h2>
        </div>
        {zeroItems ? (
          <div className="text-[#94A3B8] w-6 h-6"> {titleRightIcon ?? ""}</div>
        ) : (
          <img
            src={ArrowCarrot}
            alt="submenu-arrow"
            className={`w-5 h-5 transition-transform transform text-[#94A3B8] duration-300 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        )}
      </div>
      {isOpen && (
        <div className="py-2 pl-14 pr-2">
          <ul>
            {items.map((item, index) => (
              <ListItem
                key={index}
                text={item.text}
                path={item.path}
                subMenuIcon={item.subMenuIcon}
              />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const NavigationBar = ({ items }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          title={item.title}
          titleLeftIcon={item.titleLeftIcon}
          titleRightIcon={item.titleRightIcon}
          items={item.items}
          isOpen={index === openIndex}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default NavigationBar;
