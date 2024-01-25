import React from "react";
import ButtonChoiceGroup from "../components/atoms/button-choice-group";
import "../index.css";

const story = {
  title: "Components/Atoms/ButtonChoiceGroup",
  component: ButtonChoiceGroup,
  parameters: {
    controls: { disable: true },
  },
};

export default story;

const buttons = [
  { text: "Button 1", type: "secondary", size: "md" },
  { text: "Button 2", type: "secondary", size: "md" },
  { text: "Button 3", type: "secondary", size: "md" },
];

const Template = (args) => (
  <div className="flex justify-center items-center w-full">
    <ButtonChoiceGroup
      buttons={buttons}
      {...args}
      onClick={() => console.log("cancel clicked")}
    />
  </div>
);

export const Default = Template.bind({});
