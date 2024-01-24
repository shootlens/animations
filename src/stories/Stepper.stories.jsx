import React from "react";
import Stepper from "../components/atoms/rz-stepper";
import "../index.css";

const story = {
  title: "Components/Stepper",
  component: Stepper,
};

export default story;

const Template = (args) => (
  <div className="h-[90vh] pt-9 px-9 w-full">
    <div className="flex justify-center">
      <Stepper {...args} />
    </div>
  </div>
);

export const Default = Template.bind({});
