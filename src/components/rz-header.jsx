import {
  BellIcon,
  QuestionMarkCircleIcon,
  UserGroupIcon,
  Cog8ToothIcon,
  PowerIcon,
} from "@heroicons/react/24/outline";
import RzPopoverMenu from "./rz-popover-menu";
import RzAvatar from "./rz-avatar";

const RzHeader = ({ leftSideChildren, rightSideChildren }) => {
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
      <div className="w-full flex items-center justify-between px-5 py-3 bg-white">
        <div>{leftSideChildren ? leftSideChildren : null}</div>
        <div className="flex items-center space-x-4">
          <div>{rightSideChildren ? rightSideChildren : null}</div>
          <div>
            <QuestionMarkCircleIcon className="text-[#94A3B8] w-6 h-6" />
          </div>
          <div>
            <BellIcon className="text-[#94A3B8] w-6 h-6" />
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
