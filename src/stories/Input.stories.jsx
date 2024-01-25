import React from "react";
import InputField from "../components/atoms/rz-input";
import "../index.css";
import { ExclamationCircleIcon } from "@heroicons/react/24/solid";

const story = {
  title: "Components/Atoms/Input",
  component: InputField,
};

export default story;

const Template = (args) => (
  <div className="h-[90vh] p-2 flex items-center bg-gray-100 ">
    <div className="w-full max-w-lg mx-auto">
      <InputField placeholderText="you@example.com" {...args} />
    </div>
  </div>
);

export const Default = Template.bind({});

export const WithLabel = Template.bind({});
WithLabel.args = {
  label: "with label",
};
export const Optional = Template.bind({});
Optional.args = {
  label: "with label",
  optional: "Optional",
};
export const WithHelpText = Template.bind({});
WithHelpText.args = {
  helpText: "Make your password short and easy to guess.",
};
export const WithErrorText = Template.bind({});
WithErrorText.args = {
  error: true,
  suffixIcon: <ExclamationCircleIcon />,
};
export const WithSuffexIcon = Template.bind({});
WithSuffexIcon.args = {
  suffixIcon: <ExclamationCircleIcon />,
};

export const Url = Template.bind({});
Url.args = {
  inputType: "url",
  placeholderText: "Enter URL",
};
