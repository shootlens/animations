import {
  BarsArrowDownIcon,
  BarsArrowUpIcon,
} from "@heroicons/react/24/outline";
import RzDropdown from "../animation-components/rz-dropdown";
import { useState } from "react";
import RzButton from "../animation-components/rz-button-component";

const MulticolSort = () => {
  const [isopen, setisopen] = useState(false);

  const handleopen = () => {
    setisopen(!isopen);
  };
  const items = ["Queue", "Submitted On", "Domain", "Priority"];
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
            <div className="absolute justify-between top-full right-0 max-w-lg w-[484px] bg-white  items-center rounded-[10px] p-[10px]">
              <div className="flex py-4 border-b">
                <div className="flex-grow flex items-center shrink-0 text-black text-sm not-italic font-normal">
                  Sort By
                  <div className="ml-3 flex-grow me-16">
                    <RzDropdown items={items} title="Category" />
                  </div>
                </div>
                <div>
                  <div className="flex space-x-4">
                    <div className="flex space-x-[10px] items-center">
                      <input type="radio" />
                      <BarsArrowDownIcon className="w-[22px] h-[22px] text-[#94A3B8]" />
                    </div>
                    <div className="flex space-x-[10px] items-center">
                      <input type="radio" />
                      <BarsArrowUpIcon className="w-[22px] h-[22px] text-[#94A3B8]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex py-4 border-b">
                <div className="flex-grow flex items-center shrink-0 text-black text-sm not-italic font-normal">
                  Then By
                  <div className="ml-3 flex-grow me-16">
                    <RzDropdown items={items} title="Category" />
                  </div>
                </div>
                <div>
                  <div className="flex space-x-4">
                    <div className="flex space-x-[10px] items-center">
                      <input type="radio" />
                      <BarsArrowDownIcon className="w-[22px] h-[22px] text-[#94A3B8]" />
                    </div>
                    <div className="flex space-x-[10px] items-center">
                      <input type="radio" />
                      <BarsArrowUpIcon className="w-[22px] h-[22px] text-[#94A3B8]" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="pb-10 pt-2">
                <RzButton
                  buttonText="Add another sort column"
                  secondaryButton
                />
              </div>
              <div className="flex justify-end space-x-[10px]">
                <RzButton buttonText="Cancel" secondaryButton />
                <RzButton buttonText="Save" primaryButton />
              </div>

              {/* <div className=" w-5/6 mr-3">
                <RzDropdown items={items} title="Category"/>
              </div> */}
              {/* <div className="flex space-x-[10px]">
                <BarsArrowDownIcon className="w-[22px] h-[22px] text-[#94A3B8]" />
                <BarsArrowUpIcon className="w-[22px] h-[22px] text-[#94A3B8]" />
              </div> */}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default MulticolSort;
