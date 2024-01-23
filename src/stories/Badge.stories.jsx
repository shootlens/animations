import React from "react";
import Badge from "../components/atoms/rz-badge";
import "../index.css";

const story = {
  title: "Components/Atoms/Badge",
  component: Badge,
  argTypes: {
    backgroundColor: {
      options: ["green", "purple", "yellow", "orange"],
      control: { type: "select" },
    },
    textColor: {
      options: ["white"],
      control: { type: "select" },
    },
    badgeRadius: {
      options: [4, 8, 100],
      control: { type: "select" },
    },
  },
};

export default story;

const Template = (args) => (
  <div className="flex justify-center items-center w-full">
    <Badge
      title="Badge"
      backgroundColor="Green"
      textColor="white"
      badgeRadius={4}
      {...args}
    />
  </div>
);

export const Default = Template.bind({});
