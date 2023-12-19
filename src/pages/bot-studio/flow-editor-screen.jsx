import React, { useState } from "react";
import RzButton from "../../components/atoms/rz-button";
import { XMarkIcon } from "@heroicons/react/24/outline";
import BotStudioFlowsSvgIcon from "../../assets/icons/bot-studio-flows-map.svg";

const FlowEditorScreen = ({ onCreateClick }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  const Modal = ({ isOpen, onClose, onCreateClick }) => {
    return (
      <>
        {isOpen && (
          <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
            <div className="bg-white rounded-lg max-w-lg w-full px-[19px] pb-[20px]">
              <div className="flex justify-between py-[15px]">
                <div className="text-base font-medium not-italic">
                  Create Flow
                </div>
                <div onClick={onClose} className="cursor-pointer">
                  <XMarkIcon className="w-6 h-6 text-[#94A3B8]" />
                </div>
              </div>
              <div
                className="pb-[17px] overflow-y-auto max-h-96 custom-scroll"
                style={{ height: "calc(100% - 85px)" }}
              >
                <div className="input-field py-1">
                  <div className="pb-1 text-sm not-italic font-medium text-[#374151] leading-5">
                    Name Space
                  </div>
                  <div className="rounded-[6px] border w-full">
                    <input
                      type="text"
                      placeholder="Name space"
                      className="w-full rounded-[6px] p-2"
                    />
                  </div>
                </div>
                <div className="input-field py-1">
                  <div className="pb-1 text-sm not-italic font-medium text-[#374151] leading-5">
                    Name
                  </div>
                  <div className="rounded-[6px] border w-full">
                    <input
                      type="text"
                      placeholder="Name space"
                      className="w-full rounded-[6px] p-2"
                    />
                  </div>
                </div>
                <div className="input-field py-1">
                  <div className="pb-1 text-sm not-italic font-medium text-[#374151] leading-5">
                    Condition
                  </div>
                  <div className="rounded-[6px] border w-full">
                    <input
                      type="text"
                      placeholder="Name space"
                      className="w-full rounded-[6px] p-2"
                    />
                  </div>
                </div>
                <div className="input-field py-1">
                  <div className="pb-1 text-sm not-italic font-medium text-[#374151] leading-5">
                    Full Name
                  </div>
                  <div className="rounded-[6px] border w-full">
                    <input
                      type="text"
                      placeholder="Name space"
                      className="w-full rounded-[6px] p-2"
                    />
                  </div>
                </div>
              </div>

              <div className="flex justify-end border-t pt-[17px]">
                <div className="flex space-x-[10px]">
                  <RzButton
                    text="Cancel"
                    type="secondary"
                    size="md"
                    onClick={handleCloseModal}
                  />
                  <RzButton text="Create" size="md" onClick={onCreateClick} />
                </div>
              </div>
            </div>
          </div>
        )}
      </>
    );
  };
  return (
    <>
      <div className="flex-grow bg-white overflow-y-auto rounded-[15px] py-[22px] px-[12px]">
        <div className="text-black text-base font-medium not-italic leading-normal pb-[14px] border-b">
          Flow Editor
        </div>
        <div
          className="] flex justify-center items-center"
          style={{ height: "calc(100% - 100px)" }}
        >
          <div className="max-w-md border-[#D1D5DB] border-dashed border-[1px] rounded-md items-center flex flex-col px-28 p-9">
            <RzButton
              text="Create New Flow"
              size="lg"
              type="primaryButton"
              onClick={handleOpenModal}
            />
            <div className="my-[10px]">Or</div>
            <div className="flex">
              <img src={BotStudioFlowsSvgIcon} alt="bot-studio-flows-icon" />
              <span>Select Existing Flow</span>
            </div>
          </div>

          <Modal
            isOpen={isModalOpen}
            onClose={handleCloseModal}
            onCreateClick={onCreateClick}
          />
        </div>
      </div>
    </>
  );
};

export default FlowEditorScreen;
