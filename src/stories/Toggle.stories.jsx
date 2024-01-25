import React from "react";
import Toggle from "../components/atoms/rz-toggle";
import "../index.css";

const story = {
  title: "Components/Atoms/Toggle",
  component: Toggle,
  argTypes: {
    backgroundColor: {
      options: ["gray", "green", "purple"],
      control: { type: "select" },
    },
    size: {
      options: ["small", "large"],
      control: { type: "select" },
    },
    withIConOnHead: {
      control: { type: "boolean" },
    },
    initialToggled: {
      control: {
        type: "boolean",
      },
    },
  },
};

export default story;

const Template = (args) => (
  <div className="h-[90vh] p-2 flex items-center bg-gray-100 ">
    <div className="w-full max-w-lg mx-auto">
      <Toggle withIConOnHead="true" backgroundColor="" {...args} />
    </div>
  </div>
);

export const Default = Template.bind({});
