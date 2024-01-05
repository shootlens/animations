import RzBadge from "../atoms/rz-badge";
import RzAvatar from "../rz-avatar";
import { EllipsisVerticalIcon } from "@heroicons/react/24/outline";

const ListWithThreedotMenu = ({ title, leadingIcon }) => {
  return (
    <>
      <div className="flex  w-full bg-white border-b-[1px]">
        <div className=" bg-gray-100 min-h-full flex justify-center">
          <div className="flex justify-center w-full h-full mx-2 items-center">
            {leadingIcon ? leadingIcon : ""}
          </div>
        </div>
        <div className=" flex-grow items-center space-x-[10px]">
          <div className="flex flex-grow justify-between p-[10px]">
            <div className="text-base not-italic font-medium leading-normal">
              {title ?? "Card Title"}
            </div>
            <div className="flex items-center space-x-[10px]">
              <RzAvatar firstName="empty" isSingleLetter={true} />
              <div className="text-xs font-medium not-italic leading-normal">
                name
              </div>
              <EllipsisVerticalIcon className="w-6 h-6 text-[#6B7280]" />
            </div>
          </div>

          <div className="flex flex-grow justify-between pb-[10px] pr-[10px]">
            <div className="flex items-center space-x-[10px]">
              <RzBadge
                title={
                  <div>
                    <span className="font-medium">Modified at:</span> 7/31/2023,
                    11:48 AM
                  </div>
                }
                backgroundColor="#DEE8FC"
                textColor="#6B7280"
              />
              <RzBadge
                title={
                  <div>
                    <span className="font-medium">Modified at:</span> 7/31/2023,
                    11:48 AM
                  </div>
                }
                backgroundColor="#DEE8FC"
                textColor="#6B7280"
              />
            </div>
            <div>
              <RzBadge
                title={
                  <div>
                    <span className="font-medium">Modified by: </span>
                    Jitender
                  </div>
                }
                backgroundColor="#EDE8FE"
                textColor="#6B7280"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default ListWithThreedotMenu;
