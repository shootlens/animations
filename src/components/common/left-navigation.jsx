import React from "react";
import Accordion from "./rz-accordion";

const LeftNavigation = () => {
  const accordionItems = [
    {
      title: "Animations",
      items: [
        { text: "Button animation", path: "./button-animation" },
        { text: "CheckBoxes and toggle", path: "/checkboxes-toggle-page" },
        { text: "Input field", path: "./input-field-page" },
        { text: "Progress bar", path: "/progresser-page" },
        { text: "Notification", path: "./notification-page" },
        { text: "Dropdown", path: "/dropdown-page" },
        { text: "Table", path: "/table-page" },
      ],
    },
    {
      title: "Components",
      items: [
        { text: "Cards", path: "/card-page" },
        { text: "Table", path: "/table-component-page" },
        { text: "Header", path: "/header-page" },
        { text: "Footer", path: "/footer-page" },
        {
          text: "Ticket requester Profile",
          path: "/ticket-requester-profile-page",
        },
        { text: "Breadcrumb", path: "/breadcrumb-page" },
        { text: "Search", path: "/search-page" },
        { text: "Popover", path: "/popover-page" },
      ],
    },
  ];

  return (
    <div className="w-1/5 bg-gray-800 text-white p-4 h-screen overflow-auto">
      <Accordion items={accordionItems} />
    </div>
  );
};

export default LeftNavigation;
