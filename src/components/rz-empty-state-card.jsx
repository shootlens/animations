import { CircleStackIcon, DocumentPlusIcon } from "@heroicons/react/24/outline";
const RzEmptyStateCard = ({ databaseCard, title }) => {
  return (
    <>
      {databaseCard && (
        <div className="flex-nowrap inline-block  max-w-sm border py-16 w-full max-h-48 h-full border-[#D1D5DB] rounded-lg border-dashed text-center  items-center justify-center">
          <CircleStackIcon className="w-11 h-11 text-gray-400 text-center inline-flex" />
          <div className="text-center  leading-5 text-sm font-medium">
            {title !== "" ? title : ""}
          </div>
        </div>
      )}
      {!databaseCard && (
        <div className=" max-w-sm flex-nowrap shrink-0 inline-block border h-full py-[62px] w-full px-12 border-[#D1D5DB] rounded-lg border-dashed text-center  items-center justify-center">
          <DocumentPlusIcon className="w-11 h-11 text-gray-400 text-center inline-flex" />
          <div className="text-center  leading-5 text-sm font-medium">
            {title !== "" ? title : ""}
          </div>
        </div>
      )}
    </>
  );
};
export default RzEmptyStateCard;
