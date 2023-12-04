import { useState } from "react";
import MulticolFilter from "../components/rz-multicol-filter";

const MulticolFilterPage = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const openSidebar = () => setSidebarOpen(true);
  const closeSidebar = () => setSidebarOpen(false);
  return (
    <>
      <div className="bg-gray-100 h-screen w-full overflow-auto">
        <div className=" max-w-3xl mx-auto w-full my-9">
          <div className="text-lg font-bold text-gray-700 py-9">
            Multi-column filter
          </div>
          <div>
            <div onClick={openSidebar} className="cursor-pointer">click me</div>
            <MulticolFilter isOpen={isSidebarOpen} onClose={closeSidebar} />
          </div>
        </div>
      </div>
    </>
  );
};
export default MulticolFilterPage;
