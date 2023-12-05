import { useState } from "react";
const Tab = ({ title, isActive, onClick }) => {
  return (
    <div
      className={`w-full mx-2 my-2 py-[5px] text-center rounded-[5px] cursor-pointer text-base text-[#6B7280] not-italic ${
        isActive ? "bg-white " : ""
      }`}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

const RzTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0);

  const handleTabChange = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  return (
    <>
      <div className=" mt-8 flex flex-col">
        <div className="flex justify-evenly bg-[#F2F3F4] rounded-[10px]">
          {tabs.map((tab, index) => (
            <Tab
              key={index}
              title={tab.title}
              isActive={activeTab === index}
              onClick={() => handleTabChange(index)}
            />
          ))}
        </div>
        <div className="p-4">{tabs[activeTab].content}</div>
      </div>
    </>
  );
};

export default RzTabs;
