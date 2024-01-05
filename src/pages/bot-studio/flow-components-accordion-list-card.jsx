import RzBadge from "../../components/atoms/rz-badge";
import {
  PencilSquareIcon,
  TrashIcon,
  ArchiveBoxArrowDownIcon,
} from "@heroicons/react/24/outline";
import RzAvatar from "../../components/rz-avatar";

const FlowComponentsAccordionListCard = () => {
  return (
    <>
      <div className="border rounded-[10px] p-[10px] m-[5px]">
        <div className="flex justify-between items-center pb-[10px]">
          <div className="flex items-center space-x-[10px]">
            <div className="text-sm not-italic font-medium leading-normal">
              September Release
            </div>
            <RzBadge
              title="Deployed"
              backgroundColor="#DFF7E9"
              size="sm"
              textColor="#229F54"
              normalBadge={true}
            />
          </div>
          <div className="flex items-center space-x-[10px]">
            <PencilSquareIcon className="text-[#94A3B8] w-5 h-5" />
            <TrashIcon className="text-[#94A3B8] w-5 h-5" />
            <ArchiveBoxArrowDownIcon className="text-[#94A3B8] w-5 h-5" />
          </div>
        </div>
        <div className="flex justify-between">
          <div
            className="text-[#6B7280] text-sm not-italic font-normal leading-normal truncate overflow-hidden"
            style={{ maxWidth: "calc(100% - 100px)" }}
          >
            This release focuses on visual improvement truncated text
          </div>
          <div className="flex items-center space-x-[10px]">
            <RzBadge
              title="3 Flow"
              backgroundColor="#EDE8FE"
              textColor="#8463F9"
              size="sm"
              normalBadge
            />
            <RzAvatar
              firstName="Avatar"
              customRadius={24}
              isSingleLetter={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FlowComponentsAccordionListCard;
