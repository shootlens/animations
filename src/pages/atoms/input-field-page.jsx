import { ExclamationCircleIcon } from "@heroicons/react/24/solid";
import RzInput from "../../components/atoms/rz-input";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const InputFieldPage = () => {
  return (
    <>
      <div className="bg-gray-100 h-screen w-full overflow-auto ">
        <div className=" max-w-5xl mx-auto w-full my-9">
          <div className="text-lg font-bold text-gray-700 py-9">
            Input field
          </div>
          <div className="flex flex-col space-y-16">
            <div className="w-1/2">
              <RzInput placeholderText="you@example.com" />
            </div>
            <div className="w-1/2">
              <RzInput helpText="Make your password short and easy to guess." />
            </div>
            <div className="w-1/2">
              <RzInput error={true} suffixIcon={<ExclamationCircleIcon />} />
            </div>
            <div className="w-1/2">
              <RzInput suffixIcon={<ChevronDownIcon />} />
            </div>

            <div className="w-1/2">
              <RzInput inputType="url" placeholderText="Enter URL" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default InputFieldPage;
