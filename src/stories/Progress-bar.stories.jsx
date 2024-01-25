import React from "react";
import ProgressBar from "../components/atoms/rz-progress-bar";
import "../index.css";

const story = {
  title: "Components/Atoms/ProgressBar",
  component: ProgressBar,
  argTypes: {
    progressColor: {
      options: ["green", "blue", "yellow", "orange"],
      control: { type: "select" },
    },
  },
};

export default story;

const Template = (args) => (
  <div className="flex justify-center items-center w-full">
    <div className="w-full mt-9 max-w-xl mx-auto">
      <ProgressBar progressColor="#2563EB" {...args} />
    </div>
  </div>
);

export const Default = Template.bind({});
