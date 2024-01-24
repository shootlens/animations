import React from "react";
import DndFormFieldComponent from "../components/dnd-form-field-component";
import "../index.css";

const story = {
  title: "Components/DnD form Field",
  component: DndFormFieldComponent,
};

export default story;

const Template = (args) => (
  <div className="h-[90vh] pt-9 px-9 max-w-5xl mx-auto">
    <DndFormFieldComponent />
  </div>
);

export const Default = Template.bind({});
