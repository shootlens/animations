import React from "react";
import CheckBox from "../components/atoms/rz-checkbox";
import "../index.css";

const story = {
  title: "Components/Atoms/Checkbox",
  component: CheckBox,
  argTypes: {
    
  },
};

export default story;

const Template = (args) => (
  <div className="h-[90vh] p-2 flex items-center bg-gray-100 ">
    <div className="w-full max-w-lg mx-auto">
      <CheckBox label="Please Confirm" checked="false" {...args} />
    </div>
  </div>
);

export const Default = Template.bind({});
