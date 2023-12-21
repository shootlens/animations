import {
  TrashIcon,
  PencilSquareIcon,
  ArchiveBoxArrowDownIcon,
  FolderIcon,
} from "@heroicons/react/24/outline";
import RzBadge from "../../components/atoms/rz-badge";
import RzAvatar from "../../components/rz-avatar";

const DeployExistingPackageCard = () => {
  return (
    <>
      <div className="flex w-full border rounded-md p-[15px]">
        <div className="inline-flex space-x-4 mr-2 h-full">
          <div>
            <input type="checkbox" className="w-[21px] h-[21px]" />
          </div>
          <div className="bg-[#DEE8FC] p-2 rounded-md">
            <FolderIcon className="text-yellow-500 w-6 h-6" />
          </div>
        </div>
        <div className="flex-grow">
          <div className="flex-grow flex justify-between">
            <div className="inline-flex items-center space-x-[10px]">
              <div className="text-xl not-italic font-semibold leading-normal">
                September 02 release
              </div>
              <RzBadge
                title="Deployed"
                textColor="#229F54"
                backgroundColor="#DFF7E9"
                normalBadge={true}
                size="small"
              />
            </div>
            <div className="flex space-x-[10px]">
              <PencilSquareIcon className="w-5 h-5 text-[#94A3B8]" />
              <TrashIcon className="w-5 h-5 text-[#94A3B8]" />
              <ArchiveBoxArrowDownIcon className="w-5 h-5 text-[#94A3B8]" />
            </div>
          </div>
          <div className="flex-grow  flex justify-between pt-[4px]">
            <div
              className="text-sm  text-[#6B7280] font-normal leading-normal not-italic"
              style={{ maxWidth: "calc(100% - 110px)" }}
            >
              This release focuses on visual improvement of existing cards in
              the password reset flow; and introduces a new flow to automate
              O365 license allocation
            </div>
            <div className="flex items-center space-x-5">
              <RzBadge
                title="3 flow"
                textColor="#8463F9"
                backgroundColor="#EDE8FE"
                size="small"
                normalBadge={true}
              />
              <RzAvatar
                firstName="Hello"
                isSingleLetter={true}
                customRadius={23}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DeployExistingPackageCard;
