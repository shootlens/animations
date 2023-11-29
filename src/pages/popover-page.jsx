import { ChevronDoubleUpIcon } from "@heroicons/react/24/outline";
import RzPopover from "../components/rz-popover";

const PopoverPage = () => {
  const items = [
    {
      label: "item1",
      onClick: (label) => console.log(`Clicked ${label}`),
    },
    {
      label: "item2",
      onClick: (label) => console.log(`Clicked ${label}`),
    },
    {
      label: "item3",
      onClick: (label) => console.log(`Clicked ${label}`),
    },
    {
      label: "item4",
      onClick: (label) => console.log(`Clicked ${label}`),
    },
  ];
  return (
    <>
      <div className="bg-gray-100 h-screen w-full overflow-auto">
        <div className=" max-w-4xl mx-auto w-full my-9">
          <div className="text-lg font-bold text-gray-700 py-9">Popover</div>
          <div className="max-w-sm justify-center inline-flex px-2 py-1.5 border rounded-md">
            <RzPopover
              title="Popover"
              items={items}
              multiselect={true}
              mulriselectTitle="Column"
              titleIcon={false}
            />
          </div>
        </div>
      </div>
    </>
  );
};
export default PopoverPage;
