import RzButton from "../animation-components/rz-button-component";
import RzDropdown from "../animation-components/rz-dropdown-animation";

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
      <div className="bg-gray-100 h-screen w-full overflow-auto">
        <div className="max-w-xl mx-auto w-full my-9">
          <div className="text-lg font-bold text-gray-700 py-9">
            Select with search and add
          </div>
          <RzDropdown
            items={items}
            title="SnipeItApp"
            isSearchable={true}
            emptyState={true}
            additionalContent={
              <>
                <div className="flex justify-center items-center">
                  <div className="p-12">
                    <div className="my-3"> No record found</div>
                    <RzButton buttonText="Add Requester" primaryButton />
                  </div>
                </div>

                <div className="px-2 pt-4 text-start">
                  <div className="flex items-center pb-[9px]">
                    <div className="w-1/5 text-sm text-black font-normal">
                      First Name
                    </div>
                    <div className="border border-[#D1D5DB] w-2/3 rounded-md">
                      <input
                        type="text"
                        className="w-full rounded-md px-2 py-1"
                        placeholder="first name"
                      />
                    </div>
                  </div>
                  <div className="flex items-center pb-[9px] ">
                    <div className="w-1/5 text-sm text-black font-normal">
                      Last Name
                    </div>
                    <div className="border border-[#D1D5DB] w-2/3 rounded-md">
                      <input
                        type="text"
                        className="w-full rounded-md px-2 py-1"
                        placeholder="last name"
                      />
                    </div>
                  </div>
                  <div className="flex items-center pb-[9px] ">
                    <div className="w-1/5 text-sm text-black font-normal">
                      Email
                    </div>
                    <div className="border border-[#D1D5DB] w-2/3 rounded-md">
                      <input
                        type="text"
                        className="w-full rounded-md px-2 py-1"
                        placeholder="emaple@email.com"
                      />
                    </div>
                  </div>
                  <div className="flex justify-end space-x-[10px] mx-16 px-2 my-8">
                    <RzButton buttonText="Cancel" secondaryButton />
                    <RzButton buttonText="Save" primaryButton />
                  </div>
                </div>
              </>
            }
          />
        </div>
      </div>
    </>
  );
};
export default SelectWithSearchAndAddComponent;
