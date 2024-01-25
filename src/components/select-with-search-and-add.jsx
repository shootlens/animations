import RzButton from "../components/atoms/rz-button";
import RzDropdown from "../components/rz-dropdown";

const SelectWithSearchAndAddComponent = () => {
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
      <div className="max-w-md mx-auto w-full my-9">
        <RzDropdown
          items={items}
          title="Select"
          isSearchable={true}
          emptyState={true}
          
          additionalContent={
            <>
              <div className="flex justify-center items-center">
                <div className="p-12">
                  <div className="my-3"> No record found</div>
                  <RzButton text="Add Requester" type="primary" />
                </div>
              </div>

              <div className="px-2 pt-4 text-start">
                <div className="flex items-center pb-[9px]">
                  <div className="w-1/3 text-sm text-black font-normal">
                    First Name
                  </div>
                  <div className="border border-[#D1D5DB] w-full rounded-md">
                    <input
                      type="text"
                      className="w-full rounded-md px-2 py-1"
                      placeholder="first name"
                    />
                  </div>
                </div>
                <div className="flex items-center pb-[9px] ">
                  <div className="w-1/3 text-sm text-black font-normal">
                    Last Name
                  </div>
                  <div className="border border-[#D1D5DB] w-full rounded-md">
                    <input
                      type="text"
                      className="w-full rounded-md px-2 py-1"
                      placeholder="last name"
                    />
                  </div>
                </div>
                <div className="flex items-center pb-[9px] ">
                  <div className="w-1/3 text-sm leading-normal text-black font-normal">
                    Email
                  </div>
                  <div className="border border-[#D1D5DB] w-full rounded-md">
                    <input
                      type="text"
                      className="w-full rounded-md px-2 py-1"
                      placeholder="emaple@email.com"
                    />
                  </div>
                </div>
                <div className="flex justify-end space-x-[10px] px-2 my-8">
                  <RzButton text="Cancel" type="secondary" />
                  <RzButton text="Save" type="primary" />
                </div>
              </div>
            </>
          }
        />
      </div>
    </>
  );
};
export default SelectWithSearchAndAddComponent;
