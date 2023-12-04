import {
  BarsArrowDownIcon,
  BarsArrowUpIcon,
} from "@heroicons/react/24/outline";
import RzDropdown from "../animation-components/rz-dropdown";
import { useState } from "react";

const MulticolSort = () => {
  const [isopen, setisopen] = useState(false);

  const handleopen = () => {
    setisopen(!isopen);
  };
  const items = ["Queue","Submitted On","Domain","Priority"];
  return (
    <>
      <div className="flex justify-center">
        <div className="relative inline-block justify-center">
          <div className="px-[6px] py-[6px] inline-block rounded-[10px] bg-white border border-[#94A3B8]rounded-[10px]">
            <BarsArrowDownIcon
              className="w-[22px] h-[22px] text-[#94A3B8]"
              onClick={handleopen}
            />
          </div>
          {isopen && (
            <div className="absolute top-full right-0 max-w-lg w-[384px] bg-white flex justify-between items-center rounded-[10px] p-[10px]">
              <div className=" w-5/6 mr-3">
                <RzDropdown items={items} title="Category" customizeList="w-[382px] -ml-2"/>
              </div>
              <div className="flex space-x-[10px]">
                <BarsArrowDownIcon className="w-[22px] h-[22px] text-[#94A3B8]" />
                <BarsArrowUpIcon className="w-[22px] h-[22px] text-[#94A3B8]" />
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default MulticolSort;
