import { CheckCircleIcon, XMarkIcon } from "@heroicons/react/24/outline";

const ToastCard = ({ title, description }) => {
  return (
    <>
      <div className="bg-white max-w-lg min-w-[400px] shadow-2xl rounded-lg p-4 flex items-start justify-between">
        <div className="mr-3">
          <CheckCircleIcon className="text-[#34D399] w-6 h-6" />
        </div>
        <div className="flex flex-grow mr-4">
          <div>
            <div className="text-sm text-black font-medium leading-5 not-italic">
              {title ? title : ""}
            </div>
            <div className="text-sm text-[#6B7280] font-normal leading-normal line-clamp-2">
              {description ? description : ""}
            </div>
          </div>
        </div>
        <div className="cursor-pointer">
          <XMarkIcon className="text-[#9CA3AF] w-5 h-5" />
        </div>
      </div>
    </>
  );
};

export default ToastCard;
