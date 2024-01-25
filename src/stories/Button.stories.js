import React from "react";
import Button from "../components/atoms/rz-button";
import "../index.css";
import { ChevronDoubleUpIcon } from "@heroicons/react/24/outline";

const story = {
  title: "Components/Atoms/Button",
  component: Button,
  argTypes: {
    type: {
      options: ["primary", "secondary", "tertiary", "disabled"],
      control: { type: "select" },
    },
    buttonRadius: {
      options: [4, 8, 100],
      control: { type: "select" },
    },
    size: {
      options: ["sm", "md", "lg"],
      control: { type: "select" },
    },
  },
};

export default story;

const Template = (args) => (
  <div className="flex justify-center items-center w-full">
    <Button
      text="Button"
      disabled="true"
      {...args}
      onClick={() => console.log("cancel clicked")}
    />
  </div>
);

export const Default = Template.bind({});

export const ButtonWithIcon = Template.bind({});
ButtonWithIcon.args = {
  icon: <ChevronDoubleUpIcon className="w-4 h-4" />,
};
