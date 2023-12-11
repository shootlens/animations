import RzAvatar from "./rz-avatar";

const AuditHistoryItem = ({ title, Description, time }) => {
  return (
    <>
      {title && (
        <div className="flex border-b p-4">
          <div className="mx-3">
            <RzAvatar firstName="Admin" />
          </div>
          <div className="flex flex-grow justify-between w-full">
            <div>
              <div className="text-sm leading-5 font-medium">{title ?? ""}</div>
              <div className="text-[#6B7280] text-sm leading-5 font-normal">
                {Description ?? ""}
              </div>
            </div>
            <div className="text-[#6B7280]  text-sm font-normal leading-5">
              {time ?? ""}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AuditHistoryItem;
