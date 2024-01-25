import React, { useRef } from "react";
import "../../styles/rz-button.css";

const RzButton = ({
  size = "sm",
  type = "primary",
  onClick,
  text,
  icon,
  isFirst,
  isLast,
  isGroup,
  buttonRadius,
}) => {
  const getSizeClasses = () => {
    switch (size) {
      case "sm":
        return "px-2 py-1 ";
      case "md":
        return "px-3 py-2";
      case "lg":
        return "px-4 py-3";
      default:
        return "px-2 py-1";
    }
  };

  const getTypeClasses = () => {
    switch (type) {
      case "primary":
        return "bg-[#2563EB] text-white";
      case "secondary":
        return "bg-white text-[#6B7280] border border-[#D1D5DB]";
      case "tertiary":
        return "text-[#2563EB]";
      case "disabled":
        return "bg-[#E5E7EB] text-[#8993A1] cursor-not-allowed";
      default:
        return "bg-[#2563EB] text-white";
    }
  };

  const getColorClass = () => {
    switch (type) {
      case "primary":
        return "text-white";
      case "secondary":
        return "text-[#6B7280]";
      case "tertiary":
        return "text-[#2563EB]";
      case "disabled":
        return "text-[#8993A1]";
      default:
        return "text-white";
    }
  };

  const getBorderRadiusClasses = () => {
    if (isGroup) {
      if (isFirst && isLast) {
        return `rounded-[5px] border`;
      } else if (isFirst) {
        return `rounded-l-[5px]  border-r`;
      } else if (isLast) {
        return `rounded-r-[5px] border-l`;
      }
    } else {
      return `${buttonRadius ? buttonRadius : "rounded-[5px]"} ${
        type === "tertiary" ? "border-none" : "border"
      }`;
    }

    return "";
  };

  const handleClick = (e) => {
    if (type !== "disabled" && onClick) {
      addRipple(e);
      onClick();
    }
  };

  const rippleContainerRef = useRef(null);

  const addRipple = (event) => {
    const rippleContainer = rippleContainerRef.current;
    const ripple = document.createElement("div");
    const rect = rippleContainer.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    ripple.classList.add("ripple");
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${event.clientY - rect.top - size / 2}px`;

    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });

    rippleContainer.appendChild(ripple);
  };

  return (
    <>
      <button
        ref={rippleContainerRef}
        className={` ripple-button overflow-hidden relative focus:outline-none text-xs not-italic font-normal flex items-center ${getSizeClasses()} ${getTypeClasses()} ${getBorderRadiusClasses()}`}
        onClick={handleClick}
        style={{ borderRadius: isGroup ? "" : buttonRadius || "5px" }}
      >
        {icon && (
          <div className={`w-4 h-4  mr-[5px] ${getColorClass()}`}>{icon}</div>
        )}
        {text && <div className=" text-sm">{text}</div>}
      </button>
    </>
  );
};

export default RzButton;
