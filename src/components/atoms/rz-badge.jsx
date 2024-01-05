const RzBadge = ({
  title,
  backgroundColor,
  textColor,
  borderColor,
  badgeRadius,
  size,
}) => {
  const smallBadge = size === "sm";
  return (
    <>
      {title && (
        <div
          className={`px-${smallBadge ? 1 : 3} py-[1px] text-${
            smallBadge ? "xs" : "sm"
          } font-normal leading-normal inline-block`}
          style={{
            backgroundColor: backgroundColor ? backgroundColor : "",
            color: textColor ? textColor : backgroundColor,
            borderColor: borderColor,
            border: borderColor ? `1px solid ${borderColor}` : "",
            borderRadius: badgeRadius ? badgeRadius : "4px",
          }}
        >
          {title}
        </div>
      )}
    </>
  );
};

export default RzBadge;
