import React from "react";
import ToastCard from "../components/toast-card";
import "../index.css";

const story = {
  title: "Components/Toast",
  component: ToastCard,
};

export default story;

const Template = (args) => (
  <div className="h-[90vh] pt-9 px-9 w-full">
    <div className="flex justify-center">
      <ToastCard
        title=" Successfully saved!"
        description="Anyone with a link can now view this file."
        {...args}
      />
    </div>
  </div>
);

export const Default = Template.bind({});
