import React from "react";
import Watcher from "../components/rz-watcher";
import "../index.css";

const story = {
  title: "Components/Watcher",
  component: Watcher,
};

export default story;

const Template = (args) => (
  <div className="h-[90vh] pt-9 px-9 w-full">
    <div className="flex justify-center">
      <Watcher {...args} />
    </div>
  </div>
);

export const Default = Template.bind({});
