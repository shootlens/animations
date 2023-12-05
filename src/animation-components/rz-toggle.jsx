import React, { useState } from "react";
import { motion } from "framer-motion";

const RzToggle = ({ onToggle, initialToggled = false, activeColor }) => {
  const [isToggled, setToggled] = useState(initialToggled);

  const handleToggle = () => {
    setToggled((prev) => !prev);
    onToggle && onToggle(!isToggled);
  };

  return (
    <div className="flex items-center">
      <div
        className={`relative w-11 h-6 rounded-full cursor-pointer ${
          isToggled
            ? activeColor
              ? activeColor
              : "bg-[#2563EB]"
            : "bg-[#E5E7EB] "
        }`}
        onClick={handleToggle}
      >
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: isToggled ? 22 : 2, y: 2 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-5 h-5 bg-white rounded-full shadow-md cursor-pointer"
        />
      </div>
    </div>
  );
};

export default RzToggle;
