import React from "react";
import Threshold from "../components/threshold-component";
import "../index.css";

const story = {
  title: "Components/Threshold",
  component: Threshold,
};

export default story;

const Template = (args) => (
  <div className="h-[90vh] pt-9 px-9 w-full">
    <div className="flex justify-center">
      <Threshold
        content="The simplest thresholding methods replace each pixel in an image with a black pixel if the image intensity"
        {...args}
      />
    </div>
  </div>
);

export const Default = Template.bind({});
