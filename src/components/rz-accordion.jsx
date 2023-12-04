import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const AccordionItem = ({ title, description, isOpen, onToggle, titleIcon }) => {
  return (
    <AnimatePresence>
      <div className="bg-white px-2">
        <div
          className="flex justify-between items-center px-[15px]  border-b py-[13px] cursor-pointer "
          onClick={onToggle}
        >
          <div className="flex items-center">
            <div className="me-[10px]">{titleIcon && titleIcon}</div>
            <div className="text-base font-medium">{title}</div>
          </div>
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
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 0 }}
            transition={{ duration: 0.4 }}
            className="py-2 px-2"
          >
            {description}
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
};

const RzAccordion = ({ items }) => {
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
          titleIcon={item.titleIcon}
          description={item.description}
          isOpen={index === openIndex}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
};

export default RzAccordion;
