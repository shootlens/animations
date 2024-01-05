import RzButton from "../atoms/rz-button";
import {
  ChatBubbleLeftRightIcon,
  QuestionMarkCircleIcon,
  FolderOpenIcon,
  XCircleIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

const FailedUtterenceItem = ({ title }) => {
  return (
    <>
      <div className="flex items-center justify-between py-[20px] border-b-[1px] bg-white px-4">
        <div className="flex items-center space-x-[10px]">
          <div>
            <QuestionMarkCircleIcon className="w-[26px] h-[26px] text-[#2EC1C5]" />
          </div>
          <div className="text-black text-sm font-medium not-italic leading-normal flex-grow">
            {title ?? ""}
          </div>
        </div>
        <div className="flex space-x-[10px]">
          <RzButton
            text="View Chat"
            type="secondary"
            icon={<ChatBubbleLeftRightIcon />}
            buttonRadius="6px"
          />
          <RzButton
            text="Assign to TeamSpace"
            type="secondary"
            icon={<FolderOpenIcon />}
            buttonRadius="6px"
          />
          <RzButton
            text="Fix Now"
            buttonRadius="6px"
            icon={<WrenchScrewdriverIcon />}
          />
          <RzButton
            type="secondary"
            icon={<XCircleIcon className="text-[#94A3B8]" />}
            buttonRadius="6px"
          />
        </div>
      </div>
    </>
  );
};
export default FailedUtterenceItem;
