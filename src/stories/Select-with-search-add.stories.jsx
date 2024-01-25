import React from "react";
import SelectWithSearchAdd from "../components/select-with-search-and-add";
import "../index.css";

const story = {
  title: "Components/SelectWithSeachAdd",
  component: SelectWithSearchAdd,
};

export default story;

const Template = (args) => (
  <div className="h-[90vh] pt-9 px-9 w-full">
    <div className="flex justify-center">
      <SelectWithSearchAdd {...args} />
    </div>
  </div>
);

export const Default = Template.bind({});
