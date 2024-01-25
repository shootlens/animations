import React from "react";
import SelectWithCreateEdit from "../components/select-with-create-edit";
import "../index.css";

const story = {
  title: "Components/SelectWithCreateEdit",
  component: SelectWithCreateEdit,
};

export default story;

const Template = (args) => (
  <div className="h-[90vh] pt-9 px-9 w-full">
    <div className="flex justify-center">
      <SelectWithCreateEdit {...args} />
    </div>
  </div>
);

export const Default = Template.bind({});
