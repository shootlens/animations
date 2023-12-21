const RzInput = ({
  placeholderText,
  helpText,
  error,
  suffixIcon,
  inputType,
  label,
  optional,
}) => {
  const showGrayBox = inputType === "url";
  return (
    <>
      <div className="relative">
        <div className="flex justify-between">
          <div className="text-sm text-[#374151] font-medium not-italic leading-5">
            {label ? label : ""}
          </div>
          <div className="text-sm text-[#6B7280] font-medium not-italic leading-5">
            {optional ? optional : ""}
          </div>
        </div>
        <div
          className={`max-w-full border  bg-white ${
            error === true ? "border-[#FCA5A5]" : "border-[#D1D5DB]"
          } rounded-md flex items-center`}
        >
          {showGrayBox && (
            <div className="bg-[#F9FAFB] border-r-2 text-[#6B7280] text-base not-italic leading-6 rounded-l-md px-3 py-2">
              http://
            </div>
          )}
          <input
            type="text"
            className={`w-full  ${
              error === true ? "text-[#7F1D1D]" : ""
            } text-sm not-italic font-normal leading-5 px-[13px] py-[9px] rounded-md bg-white`}
            placeholder={placeholderText ?? ""}
          />

          <div
            className={`mx-[13px]  ${
              error ? "text-[#EF4444] " : "text-[#abacad]"
            } w-6 h-6`}
          >
            {suffixIcon && suffixIcon}
          </div>
        </div>
        {helpText && (
          <div
            className={`text-sm not-italic font-normal leading-5 text-[#6B7280] mt-2`}
          >
            {helpText}
          </div>
        )}
      </div>
    </>
  );
};

export default RzInput;
