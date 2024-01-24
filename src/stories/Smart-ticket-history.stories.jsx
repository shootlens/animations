import React from "react";
import SmartTicketHistory from "../components/smart-ticket-history-component";
import "../index.css";

const story = {
  title: "Components/SmartHistory",
  component: SmartTicketHistory,
};

export default story;

const Template = (args) => (
  <div className="h-[90vh] pt-9 px-9 w-full">
    <SmartTicketHistory />
  </div>
);

export const Default = Template.bind({});
