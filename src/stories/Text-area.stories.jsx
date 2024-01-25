import React from "react";
import TextArea from "../components/atoms/rz-text-area";
import "../index.css";

const story = {
  title: "Components/Atoms/TextArea",
  component: TextArea,
};

export default story;

const Template = (args) => (
  <div className="h-[90vh] p-2 flex items-center bg-gray-100 ">
    <div className="w-full max-w-lg mx-auto">
      <TextArea {...args} />
    </div>
  </div>
);

export const Default = Template.bind({});
export const WithPlaceHolder = Template.bind({});
WithPlaceHolder.args = {
  placeholder: "placeholder Text",
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "with label",
};
export const WithHelpText = Template.bind({});
WithHelpText.args = {
  label: "with label",
  helpText: "with help text",
};
