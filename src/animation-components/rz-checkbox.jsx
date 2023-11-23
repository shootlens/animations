import { motion } from "framer-motion";
import React, { useState } from "react";

const RzCheckBox = ({ label, checked }) => {
  const [isChecked, setChecked] = useState(checked);

  const handleChange = () => {
    setChecked(!isChecked);
  };

  return (
    <>
      <div className="inline-flex items-center">
        <label className="relative flex items-center">
          <div className="relative inline-flex p-3 rounded-full cursor-pointer">
            <input
              type="checkbox"
              className="before:content[''] peer relative h-4 w-4 cursor-pointer appearance-none rounded-[4px] border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-9 before:w-9 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-[#4F46E5] checked:bg-[#4F46E5] checked:before:bg-[#4F46E5] hover:before:opacity-10"
              id="checkbox"
              checked={isChecked}
              onChange={handleChange}
            />
            <div className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5"
                viewBox="0 0 20 20"
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="1"
              >
                <motion.path
                  fillRule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clipRule="evenodd"
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 0.4, 1], rotate: [0, 30, 0] }}
                  transition={{ duration: 0.3 }}
                  stroke="white"
                  strokeWidth={1}
                  strokeLinecap="round"
                ></motion.path>
              </svg>
            </div>
          </div>

          <span
            htmlFor="checkbox"
            className="text-[#374151] font-medium text-sm not-italic leading-5 cursor-pointer"
          >
            {label}
          </span>
        </label>
      </div>
    </>
  );
};

export default RzCheckBox;
