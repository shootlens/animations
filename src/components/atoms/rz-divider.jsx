import { PlusIcon } from "@heroicons/react/24/outline";
import RzButton from "./rz-button";

const RzDivider = ({ dividertext, buttonType }) => {
  return (
    <>
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-[#D1D5DB]" />
        </div>
        {dividertext && (
          <div className="relative flex justify-center">
            <RzButton
              text={dividertext}
              size="sm"
              type={buttonType ? buttonType : "secondary"}
              buttonRadius="rounded-full"
              icon={<PlusIcon className="w-4 h-4" />}
            />
          </div>
        )}
      </div>
    </>
  );
};
export default RzDivider;
