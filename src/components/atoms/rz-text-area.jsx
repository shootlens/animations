const RzTextArea = ({
  placeholder,
  inputText,
  rowCount,
  colCount,
  label,
  helpText,
}) => {
  return (
    <>
      <div className="relative">
        <div className="text-sm text-[#374151] font-medium not-italic leading-5 pb-1">
          {label ? label : ""}
        </div>
        <textarea
          rows={rowCount ? rowCount : "4"}
          cols={colCount ? colCount : "50"}
          placeholder={placeholder}
          className="border-[2px] rounded-md px-[13px] py-[9px]"
        >
          {inputText ? inputText : ""}
        </textarea>
        <div className="text-sm text-[#6B7280] font-normal not-italic leading-5">
          {helpText ? helpText : ""}
        </div>
      </div>
    </>
  );
};
export default RzTextArea;
