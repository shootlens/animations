const RzStatusChip = ({
  title,
  backgroundColor,
  textColor,
  normalChip,
  chipRadius,
}) => {
  return (
    <>
      {title && (
        <div
          className={`px-[5px] py-[1px] text-sm font-normal leading-normal  inline-block`}
          style={{
            backgroundColor: !normalChip ? backgroundColor : "white",
            color: textColor ? textColor : backgroundColor,
            borderColor: backgroundColor,
            border: normalChip ? "1px solid " : "",
            borderRadius: chipRadius ? chipRadius : "4px",
          }}
        >
          {title}
        </div>
      )}
    </>
  );
};

export default RzStatusChip;
