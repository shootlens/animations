import React, { useState } from "react";
import { motion } from "framer-motion";

const RzToggle = ({ onToggle, initialToggled = false }) => {
  const [isToggled, setToggled] = useState(initialToggled);

  const handleToggle = () => {
    setToggled((prev) => !prev);
    onToggle && onToggle(!isToggled);
  };

  return (
    <div className="flex items-center p-2">
      <div
        className={`relative w-12 h-7 rounded-full cursor-pointer m-[2px] ${
          isToggled ? "bg-[#2563EB]" : "bg-[#E5E7EB] "
        }`}
        onClick={handleToggle}
      >
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: isToggled ? 22 : 2, y: 2 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-6 h-6 bg-white rounded-full shadow-md cursor-pointer"
        />
      </div>
    </div>
  );
};

export default RzToggle;
