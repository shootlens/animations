import { ArrowDownTrayIcon } from "@heroicons/react/24/outline";
import RzProgressBar from "../atoms/rz-progress-bar";

const DownloadListItem = ({
  title,
  leadingIcon,
  trailingIcon,
  downloadStatus,
}) => {
  return (
    <>
      <div className="flex items-center justify-between bg-white p-[10px]">
        <div className="flex items-center space-x-[14px]">
          <div className="bg-[#F0F6FF] rounded-[10px]">
            {leadingIcon ? (
              <div className="w-[25px] h-[24px] m-[10px]">{leadingIcon}</div>
            ) : (
              <ArrowDownTrayIcon className="w-[25px] h-[25px] m-[10px]" />
            )}
          </div>
          <div className="text-sm font-normal text-[#617182] not-italic leading-normal">
            {title ?? "title"}
          </div>
        </div>
        <div className="flex items-center space-x-[22px]">
          <div className="relative">
            <div className="flex justify-end">
              <div className="text-xs not-italic font-normal leading-6">
                {downloadStatus ? downloadStatus : ""}
              </div>
            </div>
            <div className="w-72">
              <RzProgressBar progressColor="#DADADA" progresserHeight="10px" />
            </div>
          </div>
          {trailingIcon && (
            <div>
              {<div className="w-6 h-6 text-[#94A3B8]">{trailingIcon}</div> ??
                ""}
            </div>
          )}
        </div>
      </div>
    </>
  );
};
export default DownloadListItem;
