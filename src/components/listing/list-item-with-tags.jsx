import RzBadge from "../atoms/rz-badge";
import RzAvatar from "../rz-avatar";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

const ListItemWithTags = ({ description, title }) => {
  return (
    <>
      <div className="bg-white border-b-[1px]">
        <div className="flex justify-between items-center px-[10px] pt-[10px]">
          <div className="text-base font-medium not-italic leading-normal">
            {title ?? ""}
          </div>
          <div className="flex items-center space-x-[10px]">
            <RzAvatar firstName="Hello" isSingleLetter={true} />
            <div className="text-black text-xs font-medium not-italic leading-normal">
              name
            </div>
            <div className="text-xs font-normal text-[#A0A4A8] not-italic leading-normal">
              time
            </div>
            <EllipsisVerticalIcon className="w-6 h-6 text-[#6B7280]" />
          </div>
        </div>
        <div className="flex items-center justify-between p-[10px]">
          <div className="text-sm font-normal not-italic leading-normal text-[#6B7280] truncate max-w-2xl">
            {description ?? ""}
          </div>
          <div className="flex items-center space-x-[10px]">
            <RzBadge
              title="#india"
              textColor="#6B7280"
              backgroundColor="#DEE8FC"
            />
            <RzBadge
              title="#usa"
              textColor="#6B7280"
              backgroundColor="#DEE8FC"
            />
            <RzBadge
              title="#uk"
              textColor="#6B7280"
              backgroundColor="#DEE8FC"
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default ListItemWithTags;
