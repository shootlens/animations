import React from "react";
import SmartTicketHistoryComponent from "../components/smart-ticket-history-component";

const SmartTicketHistoryPage = () => {
  return (
    <>
      <div className="bg-white h-screen w-full overflow-hidden">
        <div className="px-4 mx-auto w-full my-9">
          <div className="text-lg font-bold text-gray-700 py-9">
            Smart Ticket History
          </div>
          <SmartTicketHistoryComponent />
        </div>
      </div>
    </>
  );
};

export default SmartTicketHistoryPage;
