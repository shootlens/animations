import React from "react";
import Gallery from "../components/gallery-component";
import "../index.css";

const story = {
  title: "Components/Gallery",
  component: Gallery,
};

export default story;

const Template = (args) => (
  <div className="h-[90vh] pt-9 px-9 w-full">
    <div className="flex justify-center">
      <Gallery {...args} />
    </div>
  </div>
);

export const Default = Template.bind({});
