import React from "react";

const RzButton = ({
  size = "sm",
  type = "primary",
  disabled = false,
  onClick,
  text,
  icon,
  isIconButton = false,
  isFirst,
  isLast,
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
    if (isIconButton) {
      if (disabled) {
        return "bg-[#E5E7EB] text-[#94A3B8] border border-[#D1D5DB] cursor-not-allowed";
      } else {
        return "text-white border border-[#D1D5DB]";
      }
    } else {
      switch (type) {
        case "primary":
          return "bg-[#2563EB] text-white";
        case "secondary":
          return "bg-white text-[#6B7280] border border-[#D1D5DB]";
        case "tertiary":
          return disabled
            ? "text-[#8993A1] cursor-not-allowed"
            : "text-[#2563EB]";
        case "disabled":
          return "bg-[#E5E7EB] text-[#8993A1] cursor-not-allowed";
        default:
          return "bg-[#2563EB] text-white";
      }
    }
  };

  const getColorClass = () => {
    if (isIconButton) {
      return disabled ? "text-[#94A3B8]" : "text-[#2563EB]";
    } else {
      switch (type) {
        case "primary":
          return "text-white";
        case "secondary":
          return "text-[#6B7280]";
        case "tertiary":
          return disabled ? "text-[#8993A1]" : "text-[#2563EB]";
        case "disabled":
          return "text-[#8993A1]";
        default:
          return "text-white";
      }
    }
  };

  const getBorderRadiusClasses = () => {
    if (isFirst && isLast) {
      return "rounded-[5px]";
    } else if (isFirst) {
      return "rounded-l-lg border-r-0";
    } else if (isLast) {
      return "rounded-r-lg border-l";
    }
    return "border-r-0";
  };

  const handleClick = () => {
    if (!disabled && type !== "disabled" && onClick) {
      onClick();
    }
  };

  return (
    <>
      <button
        className={`focus:outline-none text-xs not-italic font-normal flex items-center ${getSizeClasses()} ${getTypeClasses()} ${getBorderRadiusClasses()}`}
        onClick={handleClick}
        disabled={disabled}
      >
        {icon && <div className={`w-4 h-4 ${getColorClass()}`}>{icon}</div>}
        {text && <div className="ml-[5px]">{text}</div>}
      </button>
    </>
  );
};

export default RzButton;
