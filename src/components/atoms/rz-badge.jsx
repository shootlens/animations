const RzBadge = ({
  title,
  backgroundColor,
  textColor,
  borderColor,
  badgeRadius,
  horizontalPadding,
  verticalPadding,
  textSize,
}) => {
  const defaultHorizontalPadding = "12px";
  const defaultVerticalPadding = "1px";
  const defaultTextSize = "14px";

  return (
    <>
      {title && (
        <div
          className="font-normal leading-normal inline-block"
          style={{
            backgroundColor: backgroundColor || "",
            color: textColor || backgroundColor,
            borderColor,
            border: borderColor ? `1px solid ${borderColor}` : "",
            borderRadius: badgeRadius || "4px",
            padding: `${verticalPadding || defaultVerticalPadding} ${
              horizontalPadding || defaultHorizontalPadding
            }`,
            fontSize: textSize || defaultTextSize,
          }}
        >
          {title}
        </div>
      )}
    </>
  );
};

export default RzBadge;
