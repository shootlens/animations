import RzCheckBox from "../../animation-components/rz-checkbox";
import RzToggle from "../../components/atoms/rz-toggle";

const ToggleAndCheckboxPage = () => {
  return (
    <>
      <div className="bg-gray-100 h-screen w-full overflow-auto ">
        <div className=" max-w-5xl mx-auto w-full my-9">
          <div className="text-lg font-bold text-gray-700 py-9">
            Input field
          </div>
          <div className="flex justify-evenly my-9">
            <RzToggle initialToggled={true} />
            <RzCheckBox label="Checkbox label" checked={true} />
          </div>
        </div>
      </div>
    </>
  );
};
export default ToggleAndCheckboxPage;
