import React from "react";
import Footer from "../components/rz-footer";
import "../index.css";

const story = {
  title: "Components/Footer",
  component: Footer,
};

export default story;

const Template = (args) => (
  <div className="h-[90vh] p-2 flex items-center bg-gray-100 ">
    <div className="w-full">
      <Footer {...args} />
    </div>
  </div>
);

export const Default = Template.bind({});
