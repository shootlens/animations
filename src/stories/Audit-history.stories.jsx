import React from "react";
import AuditHistory from "../components/audit-hisory-item";
import "../index.css";

const story = {
  title: "Components/AuditHistory",
  component: AuditHistory,
};

export default story;

const AuditHitoryData = [
  {
    title: "Admin",
    time: "00:00 PM",
    description: "Deployed KiteTail (5c1fd07f in master) to production",
  },
  {
    title: "Admin",
    time: "00:00 PM",
    description: "Deployed KiteTail (5c1fd07f in master) to production",
  },
  {
    title: "Admin",
    time: "00:00 PM",
    description: "Deployed KiteTail (5c1fd07f in master) to production",
  },
  {
    title: "Admin",
    time: "00:00 PM",
    description: "Deployed KiteTail (5c1fd07f in master) to production",
  },
  {
    title: "Admin",
    time: "00:00 PM",
    description: "Deployed KiteTail (5c1fd07f in master) to production",
  },
  {
    title: "Admin",
    time: "00:00 PM",
    description: "Deployed KiteTail (5c1fd07f in master) to production",
  },
  {
    title: "Admin",
    time: "00:00 PM",
    description: "Deployed KiteTail (5c1fd07f in master) to production",
  },
  {
    title: "Admin",
    time: "00:00 PM",
    description: "Deployed KiteTail (5c1fd07f in master) to production",
  },
  {
    title: "Admin",
    time: "00:00 PM",
    description: "Deployed KiteTail (5c1fd07f in master) to production",
  },
];

const Template = (args) => (
  <div className="h-[90vh] pt-9 px-9 w-full">
    {AuditHitoryData.map((item) => (
      <AuditHistory
        title={item.title}
        Description={item.description}
        time={item.time}
        {...args}
      />
    ))}
  </div>
);

export const Default = Template.bind({});
