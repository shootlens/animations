import React from "react";
import {
  ArrowLeftCircleIcon,
  Bars3Icon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

const RzBreadCrumb = ({
  title,
  items,
  hideNavigationArrow,
  customNavigationIcon,
  initialIcon,
  customtitleClass,
  customArrowClassName,
  customItemClassName,
}) => (
  <div>
    {!hideNavigationArrow && (
      <div className={`flex items-center`}>
        {customNavigationIcon || (
          <ArrowLeftCircleIcon className={`w-[26px] h-[26px] text-[#94A3B8]`} />
        )}
        <div className={`font-medium text-base ms-[10px] ${customtitleClass}`}>
          {title}
        </div>
      </div>
    )}
    <div className={`flex items-center ${!hideNavigationArrow ? "ms-9" : ""}`}>
      <div>
        {initialIcon || (
          <Bars3Icon className={`w-[17px] h-[17px] text-[#94A3B8] me-[10px]`} />
        )}
      </div>
      {items.map((item, index) => (
        <div className={`flex items-center ${customItemClassName}`} key={index}>
          {index !== 0 && (
            <ChevronRightIcon className={`w-4 h-4  !${customArrowClassName}`} />
          )}
          <div className={`pb-[3px] text-sm ${customItemClassName}`}>
            {item}
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default RzBreadCrumb;
