import React, { useState } from "react";
// import Accordion from "./accordion";
import NavigationBar from "../navigation-bar";
import {
  Bars3Icon,
  ChevronLeftIcon,
  ChevronRightIcon,
  HomeIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

const LeftNavigation = () => {
  const [isSidenavBarOpen, setIsSidenavBarOpen] = useState(true);

  const handleSidenavBar = () => {
    setIsSidenavBarOpen(!isSidenavBarOpen);
  };
  const accordionItems = [
    {
      title: "Animations",
      titleLeftIcon: <Bars3Icon />,
      items: [
        { text: "Button animation", path: "./button-animation" },
        { text: "CheckBoxes and toggle", path: "/checkboxes-toggle-page" },
        { text: "Input field", path: "./input-field-animation-page" },
        { text: "Progress bar", path: "/progresser-page" },
        { text: "Notification", path: "./notification-page" },
        { text: "Dropdown", path: "/dropdown-page" },
        { text: "Table", path: "/table-page" },
        {
          text: "Pulse Animation Button",
          path: "/pulse-animation-button-page",
        },
      ],
    },
    {
      title: "Atoms",
      titleLeftIcon: <HomeIcon />,
      items: [
        {
          text: "Button",
          path: "./button-page-atoms",
        },
        {
          text: "Choice-group",
          path: "./button-group-page",
        },
        {
          text: "Input field",
          path: "./input-field-page",
        },
        {
          text: "Toggle",
          path: "./toggle-checkbox-page",
        },
        {
          text: "Badges",
          path: "./badges-page",
        },
        {
          text: "Slider",
          path: "./slider-page",
        },
        {
          text: "Progress bar",
          path: "./progressbar-page",
        },
        {
          text: "Divider",
          path: "./divider-page",
        },
        {
          text: "Profile picture",
          path: "./profile-picture-placeholder-page",
        },
      ],
    },
    {
      title: "Components",
      titleLeftIcon: <UserIcon />,
      items: [
        { text: "Cards", path: "/card-page" },
        { text: "Header", path: "/header-page" },
        {
          text: "Footer",
          path: "/footer-page",
        },
        {
          text: "Ticket requester Profile",
          path: "/ticket-requester-profile-page",
        },
        { text: "Breadcrumb", path: "/breadcrumb-page" },
        { text: "Search", path: "/search-page" },
        { text: "Popover", path: "/popover-page" },
        { text: "Multi-column sort", path: "/multicolumn-sort-page" },
        { text: "Listing", path: "/listing-page" },
        { text: "Accordion", path: "/accordion-page" },
        { text: "Watchers", path: "/watcher-page" },
        { text: "Multi-column filter", path: "/multicolumn-filter-page" },
        { text: "Live-chat card", path: "/live-chat-card-page" },
        { text: "file upload", path: "/file-upload-page" },
        { text: "Dropdown", path: "/dropdown-component-page" },
        {
          text: "select-with create and edit",
          path: "/select-with-create-and-edit",
        },
        {
          text: "select-with search and add",
          path: "/select-with-search-and-add",
        },
        {
          text: "Carousel",
          path: "/carousel-page",
        },
        {
          text: "Stepper",
          path: "/stepper-page",
        },
        {
          text: "Grouped Table",
          path: "/grouped-table-page",
        },
        {
          text: "Multi-level Table",
          path: "/multi-level-table-page",
        },
        {
          text: "Audit history",
          path: "/audit-history-page",
        },
      ],
    },
  ];

  return (
    <div
      className={`p-4 h-screen overflow-y-auto custom-scroll overflow-x-hidden left-navigation relative border-r border-[#D1D5DB] ${
        isSidenavBarOpen ? "w-1/5" : "w-[69px]"
      }`}
    >
      <div
        className="absolute -right-1 rounded-full border p-0.5 cursor-pointer bg-gray-100"
        onClick={handleSidenavBar}
      >
        {isSidenavBarOpen ? (
          <ChevronLeftIcon className="w-4 h-4" />
        ) : (
          <ChevronRightIcon className="w-4 h-4" />
        )}
      </div>

      <NavigationBar items={accordionItems} />
    </div>
  );
};

export default LeftNavigation;
