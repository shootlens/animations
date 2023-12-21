import React, { useState } from "react";
import { motion } from "framer-motion";
import BrightnessIndicator from "../../assets/icons/brightness-indicator.svg";

const RzToggle = ({
  onToggle,
  initialToggled = false,
  activeColor,
  backgroundColor,
  size,
  withIConOnHead,
}) => {
  const [isToggled, setToggled] = useState(initialToggled);

  const handleToggle = () => {
    setToggled((prev) => !prev);
    onToggle?.(!isToggled);
  };

  return (
    <div className="flex items-center">
      <div
        className="relative rounded-full cursor-pointer"
        onClick={handleToggle}
        style={{
          backgroundColor: isToggled
            ? activeColor
              ? activeColor
              : "#2563EB"
            : backgroundColor
            ? backgroundColor
            : "#E5E7EB",

          width: size === "large" ? "66px" : "46px",
          height: size === "large" ? "33px" : "26px",
        }}
      >
        <motion.div
          initial={{ x: 0 }}
          animate={{ x: isToggled ? (size === "large" ? 35 : 22) : 2, y: 2 }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className=" bg-white rounded-full shadow-md flex justify-center items-center"
          style={{
            width: size === "large" ? "29px" : "22px",
            height: size === "large" ? "29px" : "22px",
          }}
        >
          {withIConOnHead && (
            <img
              src={BrightnessIndicator}
              alt="hi-hello"
              style={{
                height:  "16px",
                width:"16px",
              }}
            />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default RzToggle;
