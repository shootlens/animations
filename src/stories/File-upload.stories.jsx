import React from "react";
import FileUpload from "../components/rz-file-upload";
import "../index.css";

const story = {
  title: "Components/FileUpload",
  component: FileUpload,
};

export default story;

const Template = (args) => (
  <div className="h-[90vh] pt-9 px-9">
    <div className="w-full max-w-5xl h-full mx-auto">
      <FileUpload {...args} />
    </div>
  </div>
);

export const Default = Template.bind({});
