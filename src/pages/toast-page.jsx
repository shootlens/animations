import { XMarkIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

const ToastPage = () => {
  const ToastCard = ({ title, description }) => {
    return (
      <>
        <div className="bg-white shadow-2xl rounded-lg p-4 flex items-start justify-between">
          <div className="mr-3">
            <CheckCircleIcon className="text-[#34D399] w-6 h-6" />
          </div>
          <div className="flex flex-grow mr-4">
            <div>
              <div className="text-sm text-black font-medium leading-5 not-italic">
                {title ? title : ""}
              </div>
              <div className="text-sm text-[#6B7280] font-normal leading-normal">
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
  return (
    <>
      <div className="bg-white h-screen w-full overflow-auto custom-scroll">
        <div className=" max-w-5xl mx-auto w-full my-9">
          <div className="text-lg font-bold text-gray-700 py-9">Toast Page</div>
          <div className="max-w-md">
            <ToastCard
              title=" Successfully saved!"
              description="Anyone with a link can now view this file."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ToastPage;
