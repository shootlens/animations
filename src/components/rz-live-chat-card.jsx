import { ClockIcon } from "@heroicons/react/24/outline";
import RzAvatar from "./rz-avatar";
import RzStatusChip from "./rz-status-chip";

const RzLiveChatCard = ({
  title,
  description,
  time,
  cardStatus,
  borderStatus ="border-white",
}) => {
  return (
    <>
      <div className={`border-l-4  rounded-md ${borderStatus}`}>
        <div className="flex  bg-white border-t border-[#E2E2E2] py-[10px]">
          <div className="mx-[10px]">
            <RzAvatar firstName={title} />
          </div>
          <div className="flex-1">
            <div className="flex justify-between">
              <div className="text-black text-sm not-italic font-normal">
                {title ? title : ""}
              </div>
              <div className="font-normal text-[11px] text-[#617182]">
                {time ? time : ""}
              </div>
            </div>
            <div className="py-[10px] w-full overflow-hidden whitespace-nowrap overflow-ellipsis text-xs not-italic font-normal text-[#617182] max-w-xs">
              {description ? description : ""}
            </div>
            <div className="flex justify-between">
              <RzStatusChip
                title={
                  <div className="flex items-center mt-0.5 text-[#6B7280] text-xs not-italic font-normal">
                    <ClockIcon className="w-4 h-4 text-[#94A3B8]" />
                    01:30
                  </div>
                }
                backgroundColor="#F2F3F4"
              />
              {cardStatus ? cardStatus : null}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RzLiveChatCard;
