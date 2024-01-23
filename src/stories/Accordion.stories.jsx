import React from "react";
import Accordion from "../components/rz-accordion";
import "../index.css";
import {
  PencilSquareIcon,
  QuestionMarkCircleIcon,
} from "@heroicons/react/24/outline";

const story = {
  title: "Components/Accordion",
  component: Accordion,
};

export default story;

const AccordionItems = [
  {
    title: "Do you know other chatbots?",
    description: (
      <div className="bg-[#F8F9FD] rounded-[10px] p-4">
        <div className="flex justify-between">
          <div className="text-base font-medium mb-4">Question Variants:</div>
          <PencilSquareIcon className="w-4 h-4" />
        </div>
        <ul>
          <li>Do you know Alexa?</li>
          <li>Do you know Alexa?</li>
          <li>Do you know Alexa?</li>
          <li>Do you know Alexa?</li>
          <li>Do you know Alexa?</li>
        </ul>
      </div>
    ),
    titleIcon: (
      <div className="p-1 bg-[#F7E9CE] rounded-lg">
        <QuestionMarkCircleIcon className="text-[#E79B04] w-6 h-6" />
      </div>
    ),
  },
  {
    title: "Do you know other chatbots?",
    description: (
      <div className="bg-[#F8F9FD] rounded-[10px] p-4">
        <div className="flex justify-between">
          <div className="text-base font-medium mb-4">Question Variants:</div>
          <PencilSquareIcon className="w-4 h-4" />
        </div>
        <ul>
          <li>Do you know Alexa?</li>
          <li>Do you know Alexa?</li>
          <li>Do you know Alexa?</li>
          <li>Do you know Alexa?</li>
          <li>Do you know Alexa?</li>
        </ul>
      </div>
    ),
    titleIcon: (
      <div className="p-1 bg-[#F7E9CE] rounded-lg">
        <QuestionMarkCircleIcon className="text-[#E79B04] w-6 h-6" />
      </div>
    ),
  },
  {
    title: "Do you know other chatbots?",
    description: (
      <div className="bg-[#F8F9FD] rounded-[10px] p-4">
        <div className="flex justify-between">
          <div className="text-base font-medium mb-4">Question Variants:</div>
          <PencilSquareIcon className="w-4 h-4" />
        </div>
        <ul>
          <li>Do you know Alexa?</li>
          <li>Do you know Alexa?</li>
          <li>Do you know Alexa?</li>
          <li>Do you know Alexa?</li>
          <li>Do you know Alexa?</li>
        </ul>
      </div>
    ),
    titleIcon: (
      <div className="p-1 bg-[#F7E9CE] rounded-lg">
        <QuestionMarkCircleIcon className="text-[#E79B04] w-6 h-6" />
      </div>
    ),
  },
  {
    title: "Do you know other chatbots?",
    description: (
      <div className="bg-[#F8F9FD] rounded-[10px] p-4">
        <div className="flex justify-between">
          <div className="text-base font-medium mb-4">Question Variants:</div>
          <PencilSquareIcon className="w-4 h-4" />
        </div>
        <ul>
          <li>Do you know Alexa?</li>
          <li>Do you know Alexa?</li>
          <li>Do you know Alexa?</li>
          <li>Do you know Alexa?</li>
          <li>Do you know Alexa?</li>
        </ul>
      </div>
    ),
    titleIcon: (
      <div className="p-1 bg-[#F7E9CE] rounded-lg">
        <QuestionMarkCircleIcon className="text-[#E79B04] w-6 h-6" />
      </div>
    ),
  },
];

const Template = (args) => (
  <div className="h-[90vh] pt-9 px-9">
    <Accordion items={AccordionItems} {...args} />
  </div>
);

export const Default = Template.bind({});
