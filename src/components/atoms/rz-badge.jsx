const RzBadge = ({
  title,
  backgroundColor,
  textColor,
  normalBadge,
  badgeRadius,
  size,
}) => {
  const isSmall = size === "small";
  return (
    <>
      {title && (
        <div
          className={`px-${isSmall ? 1 : 3} py-[1px] text-${
            isSmall ? "xs" : "sm"
          } font-normal leading-normal inline-block`}
          style={{
            backgroundColor: backgroundColor ,
            color: textColor ? textColor : backgroundColor,
            borderColor: textColor,
            border: normalBadge ? "1px solid " : "",
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
