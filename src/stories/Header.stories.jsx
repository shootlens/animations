import React from "react";
import Header from "../components/rz-header";
import HeaderLogo from "../stories/assets/header-logo.svg";
import "../index.css";

const story = {
  title: "Components/Header",
  component: Header,
};

export default story;

const Template = (args) => (
  <div className="h-[90vh] p-2 flex items-center bg-gray-100 ">
    <div className="w-full">
      <Header {...args} />
    </div>
  </div>
);

export const Default = Template.bind({});

export const HeaderWithLogo = Template.bind({});
HeaderWithLogo.args = {
  leftSideChildren: (
    <div className="w-10 h-10">
      <img src={HeaderLogo} alt="Header-logo" />
    </div>
  ),
};
