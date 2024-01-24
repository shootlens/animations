import React from "react";
import Carousel from "../pages/carousel-page";
import "../index.css";

const story = {
  title: "Components/Carousel",
  component: Carousel,
};

export default story;

const Template = (args) => (
  <div className="h-[90vh] pt-9 px-9 w-full">
    <div className="flex justify-center">
      <Carousel {...args} />
    </div>
  </div>
);

export const Default = Template.bind({});
