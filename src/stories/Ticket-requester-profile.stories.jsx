import React from "react";
import TicketRequesterProfile from "../components/ticket-requester-profile";
import "../index.css";

export default {
  title: "Components/TicketRequesterProfile",
  component: TicketRequesterProfile,
};

const Template = (args) => (
  <div className="h-[90vh] pt-9">
    <div className="w-full flex justify-center ">
      <TicketRequesterProfile {...args} />
    </div>
  </div>
);

export const Default = Template.bind({});
