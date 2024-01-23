import React from "react";
import MultiColumnSort from "../components/rz-multicol-sort";
import "../index.css";

const story = {
  title: "Components/MultiColumnSort",
  component: MultiColumnSort,
};

export default story;

const Template = (args) => (
  <div className="h-[90vh] pt-9">
    <div className="w-full flex justify-center ">
      <MultiColumnSort {...args} />
    </div>
  </div>
);

export const Default = Template.bind({});
