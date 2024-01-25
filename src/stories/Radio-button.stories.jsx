import React from "react";
import RadioButton from "../components/atoms/rz-radio-button";
import RadioButtonWithCard from "../components/atoms/rz-radio-button-card";
import "../index.css";

export default {
  title: "Components/Atoms/RadioButton",
};

const cards = [
  {
    title: "Public access",
    description: "This project would be available to anyone who has the link",
  },
  {
    title: "Private to Project Members",
    description: "Only members of this project would be able to access",
  },
  {
    title: "Private to you",
    description: "You are the only one able to access this project",
  },
];

export const NormalRadioButton = () => (
  <div className="h-[90vh] pt-9 px-9">
    <div className="flex justify-center items-center h-full w-full">
      <RadioButton title="Radio button" />
    </div>
  </div>
);
NormalRadioButton.storyName = "Radio button";

export const WithCard = () => (
  <div className="h-[90vh] pt-9 px-9">
    <RadioButtonWithCard cards={cards} />
  </div>
);
WithCard.storyName = "Download List Item";
