import React from "react";
import NormalList from "../components/listing/rz-list-item";
import DownloadListItem from "../components/listing/download-list-item";
import FailedUtterenceItem from "../components/listing/failed-utterence-item";
import ListWithThreedotMenu from "../components/listing/list-with-threedot-menu";
import ListItemWithTags from "../components/listing/list-item-with-tags";
import AdobeReader from "../assets/icons/Adobe.svg";
import MsWord from "../assets/icons/ms-word-icon.svg";
import MsXl from "../assets/icons/ms-xl-icon.svg";
import "../index.css";
import {
  PencilSquareIcon,
  TrashIcon,
  ForwardIcon,
  XCircleIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
export default {
  title: "Components/Listing",
};

const breadcrumbProps = {
  items: ["Custom", "Breadcrumb"],
  hideNavigationArrow: true,
  customArrowClassName: "w-[12px] h-[12px] text-[#2563EB]",
  customItemClassName:
    "text-xs not-italic font-medium text-[#2563EB] pt-[1.5px]",
  initialIcon: (
    <ForwardIcon className="w-[15px] h-[15px] text-[#2563EB] me-1" />
  ),
};

const actionIconsList = [
  {
    icon: (
      <PencilSquareIcon className="h-6 w-6 cursor-pointer text-[#94A3B8]" />
    ),
    onClick: () => console.log("clicked"),
  },
  {
    icon: <TrashIcon className="h-6 w-6 cursor-pointer text-[#94A3B8]" />,
    onClick: () => console.log("clicked"),
  },
];

const NormalItems = [
  {
    title: " What ITIL® Can and Cannot Do",
    description:
      "ITIL® and ITSM are not the same thing. (ITIL® is a registered trademark of Axelos, Limited. All rights reserved), ITIL refers to a specific framework, set of publications, and certifications. It no longer stands for “Information Technology Infrastructure Library, although that language is still used almost everywhere you look.",
  },
  {
    title: " What ITIL® Can and Cannot Do",
    description:
      "ITIL® and ITSM are not the same thing. (ITIL® is a registered trademark of Axelos, Limited. All rights reserved), ITIL refers to a specific framework, set of publications, and certifications. It no longer stands for “Information Technology Infrastructure Library, although that language is still used almost everywhere you look.",
  },
];

const DownloadListItems = [
  {
    title: "Filename.pdf",
    leadingIcon: <img src={AdobeReader} alt="adobe-reader-icon" />,
    downloadStatus: <div>20kb from 200kb</div>,
    trailingIcon: <XCircleIcon />,
  },
  {
    title: "Filename.pdf",
    leadingIcon: <img src={MsWord} alt="ms-word-icon" />,
    downloadStatus: (
      <div className="flex items-center">
        <CheckCircleIcon className="text-[#229F54] w-[17px] h-[17px]" />
        <div className="text-[#229F54]">Completed</div>
      </div>
    ),
    trailingIcon: <TrashIcon />,
  },
  {
    title: "Filename.pdf",
    leadingIcon: <img src={MsXl} alt="ms-xl-icon" />,
    downloadStatus: (
      <div className="flex items-center">
        <ExclamationTriangleIcon className="text-[#CF3626] w-[17px] h-[17px]" />
        <div className="text-[#CF3626]">Upload Failed</div>
      </div>
    ),
    trailingIcon: <ArrowPathIcon />,
  },
];

const FailedUtteranceItems = [
  {
    title:
      "Whats the shortest route between the office building A and building B",
  },
  {
    title: "System not booting post OS update",
  },
  {
    title: "Laptop is freezing every hour",
  },
];

const ListWithThreeDotsItems = [
  {
    title: "Company_policy.pdf",
    leadingIcon: (
      <img
        src={AdobeReader}
        alt="adobe-reader-icon"
        className="justify-center"
        width="46px"
        height="46px"
      />
    ),
  },
  {
    title: "File_name.doc",
    leadingIcon: (
      <img
        src={MsWord}
        alt="ms-word-icon"
        className="justify-center"
        width="46px"
        height="46px"
      />
    ),
  },
];

const ListWithTagsItems = [
  {
    title: "Laptop freezing every  now and then",
    description:
      " Context of the failed utterance in the conversation. Chatgpt summary of conversation leading to failed utteranec. if initial, indidcatte initial.",
  },
  {
    title: "Laptop freezing every  now and then",
    description:
      " Context of the failed utterance in the conversation. Chatgpt summary of conversation leading to failed utteranec. if initial, indidcatte initial.",
  },
];

export const NormalListStory = () => (
  <div className="h-[90vh] pt-9 px-9">
    {NormalItems.map((item) => (
      <NormalList
        cardTitle={item.title}
        cardDescription={item.description}
        actionIconsList={actionIconsList}
        breadcrumbProps={breadcrumbProps}
      />
    ))}
  </div>
);
NormalListStory.storyName = "Normal List";

export const DownloadListItemStory = () => (
  <div className="h-[90vh] pt-9 px-9">
    {DownloadListItems.map((item) => (
      <DownloadListItem
        title={item.title}
        leadingIcon={item.leadingIcon}
        downloadStatus={item.downloadStatus}
        trailingIcon={item.trailingIcon}
      />
    ))}
  </div>
);
DownloadListItemStory.storyName = "Download List Item";

export const FailedUtterenceItemStory = () => (
  <div className="h-[90vh] pt-9 px-9">
    {FailedUtteranceItems.map((item) => (
      <FailedUtterenceItem title={item.title} />
    ))}
  </div>
);
FailedUtterenceItemStory.storyName = "Failed Utterance Item";

export const ListWithThreedotMenuStory = () => (
  <div className="h-[90vh] pt-9 px-9">
    {ListWithThreeDotsItems.map((item) => (
      <ListWithThreedotMenu title={item.title} leadingIcon={item.leadingIcon} />
    ))}
  </div>
);
ListWithThreedotMenuStory.storyName = "List with Three Dot Menu";

export const ListItemWithTagsStory = () => (
  <div className="h-[90vh] pt-9 px-9">
    {ListWithTagsItems.map((item) => (
      <ListItemWithTags title={item.title} description={item.description} />
    ))}
  </div>
);
ListItemWithTagsStory.storyName = "List Item with Tags";
