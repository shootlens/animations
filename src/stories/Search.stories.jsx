import React from "react";
import Search from "../components/rz-search";
import "../index.css";

const story = {
  title: "Components/Search",
  component: Search,
};

export default story;

const Template = (args) => (
  <div className=" flex justify-center items-center h-[96vh] wfull">
   <div className="w-full max-w-xl "> <Search {...args} /></div>
  </div>
);

export const Default = Template.bind({});
