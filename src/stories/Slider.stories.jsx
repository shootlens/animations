import React from "react";
import Slider from "../components/Rz-slider";
import "../index.css";

const story = {
  title: "Components/Slider",
  component: Slider,
};

export default story;

const Template = (args) => (
  <div className="h-[90vh] p-2 flex items-center">
    <div className="w-full max-w-lg mx-auto">
      <Slider {...args} />
    </div>
  </div>
);

export const Default = Template.bind({});

export const WithMarks = Template.bind({});
WithMarks.args = {
  havingMarks: true,
};
export const RangeSlider = Template.bind({});
RangeSlider.args = {
  rangeSlider: true,
  value1: 20,
  value2: 90,
  havingMarks: true,
  marksValueCount: 11,
};
export const RangeWithValues = Template.bind({});
RangeWithValues.args = {
  rangeSlider: true,
  value1: 20,
  value2: 90,
  havingMarks: true,
  marksValueCount: 11,
};
