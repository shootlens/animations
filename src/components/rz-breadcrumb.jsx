import {
  ArrowLeftCircleIcon,
  Bars3Icon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";
import React from "react";

const RzBreadCrumb = ({ items, navigationArrow }) => {
  return (
    <div>
      {navigationArrow && (
        <div className="flex items-center">
          <ArrowLeftCircleIcon className="w-[26px] h-[26px] text-[#94A3B8]" />
          <div className="font-medium text-base ms-[10px]">Crawled URLs</div>
        </div>
      )}
      <div className="flex items-center ms-9">
        <div>
          <Bars3Icon className="w-[17px] h-[17px] text-[#94A3B8] me-[10px]" />
        </div>
        {items.map((item, index) => (
          <div className="flex items-center" key={index}>
            {index !== 0 && (
              <ChevronRightIcon className="w-4 h-4 text-[#6B7280]" />
            )}
            <div className="pb-[3px]">{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RzBreadCrumb;
