import {
  BellIcon,
  QuestionMarkCircleIcon,
  UserGroupIcon,
  Cog8ToothIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";
import RzPopoverMenu from "./rz-popover-menu";
import RzAvatar from "./rz-avatar";

const RzHeader = () => {
  const userItems = [
    {
      label: "Profile",
      icon: <UserGroupIcon className="text-[#94A3B8] w-[19.5px] h-[19.5px]" />,
      onClick: (label) => console.log(`Clicked ${label}`),
    },
    {
      label: "Personalised Settings",
      icon: <Cog8ToothIcon className="text-[#94A3B8] w-[19.5px] h-[19.5px]" />,
      onClick: (label) => console.log(`Clicked ${label}`),
    },
    {
      label: "Logout",
      icon: <PowerIcon className="text-[#94A3B8] w-[19.5px] h-[19.5px]" />,
      onClick: (label) => console.log(`Clicked ${label}`),
    },
  ];
  return (
    <>
      <div className="w-full flex justify-between px-5 py-3 bg-white">
        <div className="content-none"></div>
        <div className="flex space-x-4 items-center">
          <div>
            <QuestionMarkCircleIcon className="text-[#13452F] w-6 h-6" />
          </div>
          <div>
            <BellIcon className="text-[#13452F] w-6 h-6" />
          </div>
          <div>
            <RzPopoverMenu
              title={
                <div className="flex items-center">
                  <div className="me-[10px]">
                    <RzAvatar firstName="Hello Avatar" />
                  </div>
                  <div className="text-sm font-normal not-italic">Name</div>
                </div>
              }
              itemsWithIcon={true}
              items={userItems}
              customClass="border-none"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default RzHeader;
