import React from "react";
import Divider from "../components/atoms/rz-divider";
import "../index.css";

const story = {
  title: "Components/Atoms/Divider",
  component: Divider,
};

export default story;

const Template = (args) => (
  <div className="mt-9 px-9">
    <Divider {...args} />
  </div>
);

export const Default = Template.bind({});

export const WithButton = Template.bind({});
WithButton.args = {
  dividertext: "Divider",
};
