import React from "react";
import BreadCrumb from "../components/rz-breadcrumb";
import "../index.css";
import { HomeIcon } from "@heroicons/react/24/solid";

export default {
  title: "Components/BreadCrumb",
  component: BreadCrumb,
};

const breadcrumbItems = ["Home", "Category", "Subcategory", "Current Page"];

const Template = (args) => (
  <div className="h-[90vh] pt-9">
    <div className="w-full flex justify-center ">
      <BreadCrumb
        hideNavigationArrow="true"
        items={breadcrumbItems}
        {...args}
      />
    </div>
  </div>
);
export const Default = Template.bind({});

export const WithTitleAndNavigation = Template.bind({});
WithTitleAndNavigation.args = {
  hideNavigationArrow: false,
  title: "BreadCrumb",
};

export const CustomInitialIcon = Template.bind({});
CustomInitialIcon.args = {
  initialIcon: (
    <div className="mr-2">
      <HomeIcon className="w-5 h-5 text-gray-400" />
    </div>
  ),
};
