const RzStatusChip = ({ title }) => {
  let bgColor, textColor;

  switch (title) {
    case "Assign":
      bgColor = "#F7E9CE";
      textColor = "#E79B04";
      break;
    case "Default":
      bgColor = "#2AC76933";
      textColor = "#41A1A4";
      break;
    case "DefaultUser":
      bgColor = "#C4C4C433";
      textColor = "#617182";
      break;
    default:
      bgColor = "#CCCCCC";
      textColor = "#000000";
  }

  return (
    <>
      {title && (
        <div
          className={`px-[5px] py-[2px] text-sm font-normal leading-normal rounded-[4px] inline-block`}
          style={{ backgroundColor: bgColor, color: textColor }}
        >
          {title}
        </div>
      )}
    </>
  );
};

export default RzStatusChip;
