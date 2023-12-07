const RzBadge = ({
  title,
  backgroundColor,
  textColor,
  normalBadge,
  badgeRadius,
}) => {
  return (
    <>
      {title && (
        <div
          className={`px-3 py-[1px] text-sm font-normal leading-normal  inline-block`}
          style={{
            backgroundColor: !normalBadge ? backgroundColor : "",
            color: textColor ? textColor : backgroundColor,
            borderColor: backgroundColor,
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
