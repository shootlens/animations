// Accordion.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

const ListItem = ({ text, path }) => (
  <Link to={path} className="text-gray-200">
    <li className="mb-2 hover:bg-gray-900  rounded-md px-2 py-1.5">{text}</li>
  </Link>
);

const AccordionItem = ({ title, items, isOpen, onToggle }) => {
  return (
    <div className="mb-2">
      <div
        className="flex justify-between items-center py-1.5 px-4 rounded-md bg-gray-700 cursor-pointer"
        onClick={onToggle}
      >
        <h2 className="text-md font-semibold">{title}</h2>
        <svg
          className={`w-5 h-5 transition-transform transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      {isOpen && (
        <div className="py-2">
          <ul>
            {items.map((item, index) => (
              <ListItem key={index} text={item.text} path={item.path} />
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const Accordion = ({ items }) => {
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
          items={item.items}
          isOpen={index === openIndex}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default Accordion;
