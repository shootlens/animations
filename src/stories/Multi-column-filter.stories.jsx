import React from "react";
import MultiColumnFilter from "../components/multi-column-filter";
import "../index.css";

const story = {
  title: "Components/MultiColumnFilter",
  component: MultiColumnFilter,
};

export default story;

const Template = (args) => (
  <div className="h-[90vh] pt-9 px-9">
    <div className="w-full flex justify-center items-center h-full">
      <MultiColumnFilter {...args} />
    </div>
  </div>
);

export const Default = Template.bind({});
