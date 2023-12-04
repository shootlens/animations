import RzListItem from "../components/rz-list-item";
import {
  PencilSquareIcon,
  ForwardIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

const ListingPage = () => {
  const breadcrumbProps = {
    items: ["Custom", "Breadcrumb"],
    hideNavigationArrow: true,
    customArrowClassName: "w-[12px] h-[12px]",
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
      <div className="bg-gray-100 h-screen w-full overflow-auto">
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
        </div>
      </div>
    </>
  );
};

export default ListingPage;
