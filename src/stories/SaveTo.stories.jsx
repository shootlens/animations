import React from "react";
import SaveToComponent from "../components/save-to-component";
import "../index.css";

const story = {
  title: "Components/SaveToComponent",
  component: SaveToComponent,
};

export default story;

const Template = (args) => (
  <div className="h-[90vh] pt-9 px-9 w-full">
    <SaveToComponent />
  </div>
);

export const Default = Template.bind({});
