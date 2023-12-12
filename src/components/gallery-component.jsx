import { UserGroupIcon } from "@heroicons/react/24/outline";
import RzCard from "./rz-card";
import TableActionHeader from "./table-action-header";
import {
  DevicePhoneMobileIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";

const GalleryComponent = () => {
  const ActionsList = [
    {
      icon: <PencilSquareIcon />,
    },
    {
      icon: <UserGroupIcon />,
    },
    { icon: <DevicePhoneMobileIcon /> },
  ];

  const GalleryData = [
    {
      title: "Uploaded Documents",
      titleIcon: <UserGroupIcon className="w-5 h-5 text-gray-500" />,
      description:
        "This release focuses on visual improvement of existing cards in the password reset flow; and introduces a new flow to automate O365 license allocation",
      showActions: true,
      ActionIconsList: ActionsList,
      showActiveSubscriptions: true,
      showUsrAvatar: true,
    },
    {
      title: "Uploaded Documents",
      titleIcon: <UserGroupIcon className="w-5 h-5 text-gray-500" />,
      description:
        "This release focuses on visual improvement of existing cards in the password reset flow; and introduces a new flow to automate O365 license allocation",
      showActions: true,
      ActionIconsList: ActionsList,
      showActiveSubscriptions: false,
      showUsrAvatar: true,
    },
    {
      title: "Uploaded Documents",
      titleIcon: <UserGroupIcon className="w-5 h-5 text-gray-500" />,
      description:
        "This release focuses on visual improvement of existing cards in the password reset flow; and introduces a new flow to automate O365 license allocation",
      showActions: false,
      ActionIconsList: ActionsList,
      showActiveSubscriptions: true,
      showUsrAvatar: true,
    },
    {
      title: "Uploaded Documents",
      titleIcon: <UserGroupIcon className="w-5 h-5 text-gray-500" />,
      description:
        "This release focuses on visual improvement of existing cards in the password reset flow; and introduces a new flow to automate O365 license allocation",
      showActions: true,
      ActionIconsList: ActionsList,
      showActiveSubscriptions: false,
      showUsrAvatar: true,
    },
    {
      title: "Uploaded Documents",
      titleIcon: <UserGroupIcon className="w-5 h-5 text-gray-500" />,
      description:
        "This release focuses on visual improvement of existing cards in the password reset flow; and introduces a new flow to automate O365 license allocation",
      showActions: true,
      ActionIconsList: ActionsList,
      showActiveSubscriptions: true,
      showUsrAvatar: true,
    },
    {
      title: "Uploaded Documents",
      titleIcon: <UserGroupIcon className="w-5 h-5 text-gray-500" />,
      description:
        "This release focuses on visual improvement of existing cards in the password reset flow; and introduces a new flow to automate O365 license allocation",
      showActions: true,
      ActionIconsList: ActionsList,
      showActiveSubscriptions: true,
      showUsrAvatar: true,
    },
    {
      title: "Uploaded Documents",
      titleIcon: <UserGroupIcon className="w-5 h-5 text-gray-500" />,
      description:
        "This release focuses on visual improvement of existing cards in the password reset flow; and introduces a new flow to automate O365 license allocation",
      showActions: true,
      ActionIconsList: ActionsList,
      showActiveSubscriptions: false,
      showUsrAvatar: true,
    },
    {
      title: "Uploaded Documents",
      titleIcon: <UserGroupIcon className="w-5 h-5 text-gray-500" />,
      description:
        "This release focuses on visual improvement of existing cards in the password reset flow; and introduces a new flow to automate O365 license allocation",
      showActions: true,
      ActionIconsList: ActionsList,
      showActiveSubscriptions: true,
      showUsrAvatar: true,
    },
    {
      title: "Uploaded Documents",
      titleIcon: <UserGroupIcon className="w-5 h-5 text-gray-500" />,
      description:
        "This release focuses on visual improvement of existing cards in the password reset flow; and introduces a new flow to automate O365 license allocation",
      showActions: true,
      ActionIconsList: ActionsList,
      showActiveSubscriptions: true,
      showUsrAvatar: true,
    },
    {
      title: "Uploaded Documents",
      titleIcon: <UserGroupIcon className="w-5 h-5 text-gray-500" />,
      description:
        "This release focuses on visual improvement of existing cards in the password reset flow; and introduces a new flow to automate O365 license allocation",
      showActions: true,
      ActionIconsList: ActionsList,
      showActiveSubscriptions: true,
      showUsrAvatar: true,
    },
    {
      title: "Uploaded Documents",
      titleIcon: <UserGroupIcon className="w-5 h-5 text-gray-500" />,
      description:
        "This release focuses on visual improvement of existing cards in the password reset flow; and introduces a new flow to automate O365 license allocation",
      showActions: true,
      ActionIconsList: ActionsList,
      showActiveSubscriptions: false,
      showUsrAvatar: true,
    },
  ];
  return (
    <>
      <div>
        <TableActionHeader tableTitle="Gallery" />
        <div className="flex flex-wrap mx-8 gap-4 my-9 max-h-[600px] custom-scroll overflow-y-auto ">
          {GalleryData.map((card) => (
            <RzCard
              title={card.title}
              titleIcon={card.titleIcon}
              description={card.description}
              showActions={card.showActions}
              showActiveSubscriptions={card.showActiveSubscriptions}
              showUsrAvatar={card.showUsrAvatar}
              ActionIconsList={card.ActionIconsList}
            />
          ))}
        </div>
      </div>
    </>
  );
};
export default GalleryComponent;
