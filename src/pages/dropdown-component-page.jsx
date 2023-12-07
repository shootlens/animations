import { FunnelIcon, XCircleIcon } from "@heroicons/react/24/outline";
import RzPopoverMenu from "../components/rz-popover-menu";

const DropdownComponentPage = () => {
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
    },
    {
      label: "License",
    },
    {
      label: "Sign out",
    },
  ];
  return (
    <>
      <div className="bg-gray-100 h-screen w-full overflow-auto">
        <div className=" max-w-5xl mx-auto w-full my-9">
          <div className="text-lg font-bold text-gray-700 py-9">
            Dropdown page
          </div>
          <div className="max-w-md mx-auto">
            <RzPopoverMenu
              items={Items}
              // multiselectTitle="title"
              // multiselect={true}
              title="Options"
              // itemsWithSearch={true}
              // itemsWithIcon={true}
              // customIcon={<FunnelIcon className="w-5 h-5" />}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default DropdownComponentPage;
