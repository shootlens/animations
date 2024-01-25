import RzDropdown from "../components/rz-dropdown";
import { PlusCircleIcon } from "@heroicons/react/24/outline";

const SelectWithCreateAndEditComponent = () => {
  const items = [
    "item1",
    "item2",
    "item3",
    "item4",
    "item5",
    "item6",
    "item7",
    "item8",
    "item9",
    "item10",
    "item11",
    "item12",
  ];
  return (
    <>
      <div className="max-w-xl mx-auto w-full my-9">
        <RzDropdown
          items={items}
          title="SnipeItApp"
          addButton={
            <div
              className="text-[#2563EB]  py-2 border-t mt-1 text-center justify-center mx-2 flex items-center text-sm not-italic font-medium leading-5 cursor-pointer "
              onClick={() => console.log("Button clicked")}
            >
              <span className="mx-1">
                <PlusCircleIcon className="w-5 h-5" />
              </span>
              Create new connector
            </div>
          }
        />
      </div>
    </>
  );
};
export default SelectWithCreateAndEditComponent;
