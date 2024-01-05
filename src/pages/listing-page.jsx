import DownloadListItem from "../components/listing/download-list-item";
import RzListItem from "../components/listing/rz-list-item";
import {
  PencilSquareIcon,
  ForwardIcon,
  TrashIcon,
  XCircleIcon,
  CheckCircleIcon,
  ExclamationTriangleIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
import AdobeReader from "../assets/icons/adobe-reader.svg";
import MsWord from "../assets/icons/ms-word-icon.svg";
import MsXl from "../assets/icons/ms-xl-icon.svg";
import ListWithThreedotMenu from "../components/listing/list-with-threedot-menu";
import FailedUtterenceItem from "../components/listing/failed-utterence-item";
import ListItemWithTags from "../components/listing/list-item-with-tags";

const ListingPage = () => {
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

  return (
    <>
      <div className="bg-gray-100 h-screen w-full overflow-auto custom-scroll">
        <div className=" max-w-5xl mx-auto w-full my-9">
          <div className="text-lg font-bold text-gray-700 py-9">Listing</div>
          <RzListItem
            cardTitle=" What ITIL® Can and Cannot Do"
            cardDescription="ITIL® and ITSM are not the same thing. (ITIL® is a registered
              trademark of Axelos, Limited. All rights reserved), ITIL refers to a
              specific framework, set of publications, and certifications. It no
              longer stands for “Information Technology Infrastructure Library,
              although that language is still used almost everywhere you look."
            breadcrumbProps={breadcrumbProps}
            actionIconsList={actionIconsList}
          />
          <RzListItem
            cardTitle=" What ITIL® Can and Cannot Do"
            cardDescription="ITIL® and ITSM are not the same thing. (ITIL® is a registered
            trademark of Axelos, Limited. All rights reserved), ITIL refers to a
            specific framework, set of publications, and certifications. It no
            longer stands for “Information Technology Infrastructure Library,
            although that language is still used almost everywhere you look."
            breadcrumbProps={breadcrumbProps}
            actionIconsList={actionIconsList}
          />
          <RzListItem
            cardTitle=" What ITIL® Can and Cannot Do"
            cardDescription="ITIL® and ITSM are not the same thing. (ITIL® is a registered
          trademark of Axelos, Limited. All rights reserved), ITIL refers to a
          specific framework, set of publications, and certifications. It no
          longer stands for “Information Technology Infrastructure Library,
          although that language is still used almost everywhere you look."
            breadcrumbProps={breadcrumbProps}
            actionIconsList={actionIconsList}
          />

          <div className="my-12">
            <DownloadListItem
              title="Filename.pdf"
              leadingIcon={<img src={AdobeReader} alt="adobe-reader-icon" />}
              downloadStatus="20kb from 200kb"
              trailingIcon={<XCircleIcon />}
            />
            <DownloadListItem
              title="Filename.pdf"
              leadingIcon={<img src={MsWord} alt="ms-word-icon" />}
              downloadStatus={
                <div className="flex items-center">
                  <CheckCircleIcon className="text-[#229F54] w-[17px] h-[17px]" />
                  <div className="text-[#229F54]">Completed</div>
                </div>
              }
              trailingIcon={<TrashIcon />}
            />
            <DownloadListItem
              title="Filename.pdf"
              leadingIcon={<img src={MsXl} alt="ms-xl-icon" />}
              downloadStatus={
                <div className="flex items-center">
                  <ExclamationTriangleIcon className="text-[#CF3626] w-[17px] h-[17px]" />
                  <div className="text-[#CF3626]">Upload Failed</div>
                </div>
              }
              trailingIcon={<ArrowPathIcon />}
            />
          </div>
          <div className="my-12">
            <ListWithThreedotMenu
              title="Company_policy.pdf"
              leadingIcon={
                <img
                  src={AdobeReader}
                  alt="adobe-reader-icon"
                  className="justify-center"
                  width="46px"
                  height="46px"
                />
              }
            />
            <ListWithThreedotMenu
              title="File_name.doc"
              leadingIcon={
                <img
                  src={MsWord}
                  alt="ms-word-icon"
                  className="justify-center"
                  width="46px"
                  height="46px"
                />
              }
            />
          </div>
          <div className="my-12">
            <FailedUtterenceItem title="Whats the shortest route between the office building A and building B" />
            <FailedUtterenceItem title="System not booting post OS update" />
            <FailedUtterenceItem title="Laptop is freezing every hour" />
          </div>
          <div className="my-12">
            <ListItemWithTags
              title="Laptop freezing every  now and then"
              description=" Context of the failed utterance in the conversation. Chatgpt summary
            of conversation leading to failed utteranec. if initial, indidcatte
            initial."
            />
            <ListItemWithTags
              title="Laptop freezing every  now and then"
              description=" Context of the failed utterance in the conversation. Chatgpt summary
            of conversation leading to failed utteranec. if initial, indidcatte
            initial."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingPage;
