// import { EyeIcon, ForwardIcon, StarIcon } from "@heroicons/react/24/outline";
// import RzStatusChip from "./rz-status-chip";
// import RzBreadCrumb from "./rz-breadcrumb";

// const RzListItem = ({ iconcList = [], cardTitle, cardDescription }) => {
//   const breadcrumbItems = ["Home", "Category", "Subcategory", "Current Page"];
//   return (
//     <>
//       <div className="bg-white p-4 w-full rounded-[10px] m-1">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center">
//             <div className="text-sm font-medium not-italic leading-normal">
//               {cardTitle ? cardTitle : "title"}
//             </div>
//             <div className="mx-[5px]">
//               <RzStatusChip
//                 title="Scripted Answer"
//                 backgroundColor="#8463F9"
//                 textColor="#8463F9"
//                 chipRadius={100}
//                 normalChip={true}
//               />
//             </div>
//           </div>
//           <div className="flex items-center space-x-[10px]">
//             <RzStatusChip
//               title={
//                 <div className="flex items-center">
//                   <EyeIcon className="w-[15px] h-[15px] text-[#2563EB]" />
//                   <div className="ms-[4px] text-xs font-medium leading-normal text-[#2563EB]">
//                     32
//                   </div>
//                 </div>
//               }
//               backgroundColor="#2563EB"
//               normalChip={true}
//             />
//             <RzStatusChip
//               title={
//                 <div className="flex items-center">
//                   <StarIcon className="w-[15px] h-[15px] text-[#E79B04]" />
//                   <div className="ms-[4px] text-xs font-medium leading-normal text-[#E79B04]">
//                     4.8/5
//                   </div>
//                 </div>
//               }
//               backgroundColor="#E79B04"
//               normalChip={true}
//             />
//           </div>
//         </div>
//         <div className="text-sm not-italic font-normal w-4/5 py-[10px] text-[#6B7280]">
//           {cardDescription ? cardDescription : "Add description"}
//         </div>
//         <div className="flex justify-between ]">
//           <div className="border border-[#2563EB] rounded-[2px] px-[5px]">
//             <RzBreadCrumb
//               className="text-[#2563EB] text-sm"
//               items={breadcrumbItems}
//               hideNavigationArrow={true}
//               customArrowClassName="w-[12px] h-[12px]"
//               customItemClassName="text-xs not-italic font-medium text-[#2563EB] pt-[1.5px]"
//               initialIcon={
//                 <ForwardIcon className="w-[15px] h-[15px] text-[#2563EB] me-1" />
//               }
//             />
//           </div>

//           <div className="flex space-x-1">
//             {iconcList.map((iconProps, index) => (
//               <div key={index} onClick={iconProps.onClick}>
//                 {iconProps.icon}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default RzListItem;

import React from "react";
import { EyeIcon, StarIcon } from "@heroicons/react/24/outline";
import RzBreadCrumb from "../rz-breadcrumb";
import RzBadge from "../atoms/rz-badge";

const renderIcons = (actionIconsList) => (
  <div className="flex space-x-1">
    {actionIconsList.map((iconProps, index) => (
      <div key={index} onClick={iconProps.onClick}>
        {iconProps.icon}
      </div>
    ))}
  </div>
);

const RzListItem = ({
  actionIconsList = [],
  cardTitle,
  cardDescription,
  breadcrumbProps = {},
}) => {
  const renderRatings = () => (
    <div className="space-x-2">
      <RzBadge
        size="sm"
        title={
          <div className="flex items-center space-x-[5px]">
            <EyeIcon className="w-[18px] h-[18px] text-[#2563EB]" />
            <div className="text-[#2563EB] text-xs font-medium not-italic leading-normal">
              37
            </div>
          </div>
        }
        borderColor="#2563EB"
      />

      <RzBadge
        title={
          <div className="flex items-center space-x-[5px]">
            <StarIcon className="w-[18px] h-[18px] text-[#E79B04]" />
            <div className="text-[#E79B04] text-xs font-medium not-italic leading-normal">
              4.8/5
            </div>
          </div>
        }
        borderColor="#E79B04"
      />
    </div>
  );

  return (
    <div className="bg-white p-4 w-full border-b-[1px]">
      <div className="flex justify-between items-center">
        <div className="flex items-center">
          <div className="flex items-center">
            <div className="text-sm font-medium not-italic leading-normal mr-[5px]">
              {cardTitle || "title"}
            </div>
            <RzBadge
              title="Scripted Answer"
              textColor="#8463F9"
              badgeRadius={100}
              borderColor="#8463F9"
            />
          </div>
        </div>
        <div className="mx-[5px]">{renderRatings()}</div>
      </div>
      <div className="text-sm not-italic font-normal w-4/5 py-[10px] text-[#6B7280]">
        {cardDescription || "Add description"}
      </div>
      <div className="flex justify-between">
        <div className="border border-[#2563EB] rounded-[2px] px-[5px]">
          <RzBreadCrumb {...breadcrumbProps} />
        </div>
        {renderIcons(actionIconsList)}
      </div>
    </div>
  );
};

export default RzListItem;
