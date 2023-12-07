import React, { useState } from "react";
import { motion } from "framer-motion";

const RzToggle = ({ onToggle, initialToggled = false, activeColor }) => {
  const [isToggled, setToggled] = useState(initialToggled);

  const handleToggle = () => {
    setToggled((prev) => !prev);
    onToggle?.(!isToggled);
  };

  const toggleClassName = `relative w-11 h-6 rounded-full cursor-pointer bg-[${
    isToggled ? (activeColor ? activeColor : "#2563EB") : "#E5E7EB"
  }]`;

  return (
    <div className="flex items-center">
      <div className={toggleClassName} onClick={handleToggle}>
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: isToggled ? 22 : 2, y: 2 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="w-5 h-5 bg-white rounded-full shadow-md"
        />
      </div>
    </div>
  );
};

export default RzToggle;
