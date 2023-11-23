import RzCard from "../components/rz-card";
import {
  UserGroupIcon,
  PencilSquareIcon,
  DeviceTabletIcon,
} from "@heroicons/react/24/outline";

const CardPage = () => {
  const code = ``;

  const handleIconClick1 = () => {
    console.log("Icon clicked!");
  };

  const handleIconClick = () => {
    console.log("Icon clicked!");
  };

  const iconsList = [
    {
      icon: <UserGroupIcon className="w-5 h-5 shrink-0 cursor-pointer" />,
      onClick: handleIconClick,
    },
    {
      icon: <PencilSquareIcon className="h-5 w-5 cursor-pointer" />,
      onClick: handleIconClick,
    },
    {
      icon: <DeviceTabletIcon className="h-5 w-5 cursor-pointer" />,
      onClick: handleIconClick1,
    },
  ];
  const workflowActionsList = [
    {
      icon: <UserGroupIcon className="w-5 h-5 shrink-0 cursor-pointer" />,
      onClick: handleIconClick,
    },
    {
      icon: <PencilSquareIcon className="h-5 w-5 cursor-pointer" />,
      onClick: handleIconClick,
    },
    {
      icon: <DeviceTabletIcon className="h-5 w-5 cursor-pointer" />,
      onClick: handleIconClick1,
    },
  ];

  return (
    <>
      <div className="bg-white h-screen w-full overflow-auto">
        <div className=" max-w-5xl mx-auto w-full my-9">
          <div className="text-lg font-bold text-gray-700 py-9">Card</div>
          <div className="mb-4">
            <RzCard
              title="Uploaded Documents"
              description="This release focuses on visual improvement of existing cards in the password reset flow; and introduces a new flow to automate O365 license allocation"
              showActiveSubscriptions={false}
            
              showUsrAvatar={true}
            />
          </div>

          <div className="bg-gray-700 w-full rounded-md text-gray-200 max-w-7xl overflow-auto px-4">
            <pre>
              <code>{code}</code>
            </pre>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardPage;
