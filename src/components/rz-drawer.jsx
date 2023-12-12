import React from "react";

const RzDrawer = ({
  isOpen,
  onClose,
  header,
  footer,
  content,
  openOnLeftside,
}) => {
  const directionClass = openOnLeftside ? "left-0" : "right-0";
  const transformClass = isOpen
    ? "translate-x-0"
    : openOnLeftside
    ? "-translate-x-full"
    : "translate-x-full";

  return (
    <>
      <div>
        <div
          className={`fixed inset-0 bg-black opacity-50 z-50 ${
            isOpen ? "block" : "hidden"
          }`}
          onClick={onClose}
        ></div>
        <div
          className={`fixed inset-y-0 ${directionClass} w-full max-w-[551px] bg-white text-gray-800 p-[10px] ${transformClass} transform transition-transform ease-in-out duration-300 z-50 flex flex-col justify-between`}
        >
          <div className="flex flex-col h-full">
            <div>
              <div className="text-base text-black not-italic font-normal leading-normal">
                {header}
              </div>
            </div>

            <div className="flex-1 overflow-y-auto p-4 custom-scroll">
              {content}
            </div>

            <div className="flex items-center spacex-[23px] justify-end space-x-[10px]">
              {footer}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RzDrawer;
