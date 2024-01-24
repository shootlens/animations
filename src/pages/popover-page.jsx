import { HashtagIcon } from "@heroicons/react/24/outline";
import RzPopoverMenu from "../components/rz-dropdown";
import React from "react";

const DropdownPage = () => {
  const items = [
    {
      label: "item1",
      onClick: (label) => console.log(`Clicked ${label}`),
    },
    {
      label: "item2",
      onClick: (label) => console.log(`Clicked ${label}`),
    },
    {
      label: "item3",
      onClick: (label) => console.log(`Clicked ${label}`),
    },
    {
      label: "item4",
      onClick: (label) => console.log(`Clicked ${label}`),
    },
  ];

  return (
    <>
      <div className="bg-gray-100 h-screen w-full overflow-auto">
        <div className=" max-w-4xl mx-auto w-full my-9">
          <div className="text-lg font-bold text-gray-700 py-9">Dropdown</div>
          <RzPopoverMenu
            title="Popover"
            items={items}
            multiselect={false}
            multiselectTitle="Column"
            hideTitleIcon={true}
            divider={false}
            customIcon={<HashtagIcon className="w-4 h-4" />}
          />
        </div>
      </div>
    </>
  );
};
export default DropdownPage;
