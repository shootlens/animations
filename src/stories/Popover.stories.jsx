import React from "react";
import Popover from "../components/rz-popover";
import "../index.css";
import {
  DocumentDuplicateIcon,
  PhotoIcon,
  PowerIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";
import { CheckCircleIcon } from "@heroicons/react/24/solid";

const story = {
  title: "Components/Popover",
  component: Popover,
};

export default story;

const Items = [
  {
    label: "Account settings",
    icon: <XCircleIcon />,
    iconOnClick: () => {
      console.log("printed1");
    },
  },
  {
    label: "Support",
    icon: <CheckCircleIcon />,
    iconOnClick: () => {
      console.log("printed1");
    },
  },
  {
    label: "License",
    icon: <DocumentDuplicateIcon />,
    iconOnClick: () => {
      console.log("printed1");
    },
  },
  {
    label: "Sign out",
    icon: <PowerIcon />,
    iconOnClick: () => {
      console.log("printed1");
    },
  },
];

const Template = (args) => (
  <div className="h-[90vh] pt-9 px-9 w-full">
    <div className="flex justify-center">
      <Popover title="Popover" items={Items} {...args} />
    </div>
  </div>
);

export const Default = Template.bind({});
export const WithCustomIcon = Template.bind({});
WithCustomIcon.args = {
  customIcon: <PhotoIcon className="w-5 h-5 text-gray-400" />,
};
export const IconOnLeft = Template.bind({});
IconOnLeft.args = {
  leftSideIcon: true,
};

export const ItemsWithTitle = Template.bind({});
ItemsWithTitle.args = {
  listTitle: "List Title",
};

export const WithSearch = Template.bind({});
WithSearch.args = {
  itemsWithSearch: true,
};
export const ItemsWithIcon = Template.bind({});
ItemsWithIcon.args = {
  itemsWithIcon: true,
};

export const MultiSelect = Template.bind({});
MultiSelect.args = {
  multiselect: true,
  multiselectTitle: "Multi Select",
};
export const WithDivider = Template.bind({});
WithDivider.args = {
  divider: true,
  multiselect: true,
  multiselectTitle: "Multi Select",
};
export const WithClearButton = Template.bind({});
WithClearButton.args = {
  divider: true,
  multiselect: true,
  multiselectTitle: "Multi Select",
  haveClearButton: true,
};
