import { XMarkIcon } from "@heroicons/react/24/outline";
import AlertIcon from "../assets/icons/alert-icon.svg";

const InformativeAlertPopupComponent = ({
  title,
  haveTrailing = false,
  onTrailingClick,
  onLeadingClick,
  leadingIcon,
  backgroundColor,
  borderColor,
  textColor,
  trailing,
  trailingIconColor,
  titleStyle,
  borderOnlyOnLeft = false,
  description,
}) => {
  return (
    <>
      <div
        className={`w-full m-1 p-[14px] rounded-lg relative ${
          borderColor
            ? borderOnlyOnLeft
              ? "border-l-4 rounded-r-lg rounded-l-none"
              : "border"
            : ""
        }`}
        style={{
          backgroundColor: backgroundColor ? backgroundColor : "#F7E9CE",
          borderColor: borderColor ? borderColor : "#E79B04",
        }}
      >
        <div
          className={`flex ${
            haveTrailing
              ? "items-start"
              : description
              ? "items-start"
              : "items-center"
          } space-x-[10px]`}
        >
          <div className="flex " onClick={onLeadingClick}>
            {leadingIcon ? (
              <div className="w-6 h-6">{leadingIcon}</div>
            ) : (
              <div className="w-6 h-6">
                <img src={AlertIcon} alt="" style={{ color: "green" }} />
              </div>
            )}
          </div>

          <div className="flex-grow ">
            <div
              className={`text-sm not-italic font-normal leading-normal !${titleStyle}`}
              style={{ color: textColor ? textColor : "#E79B04" }}
            >
              {title ? title : ""}
            </div>
            <div>{description ? description : ""}</div>
          </div>

          {haveTrailing && (
            <div className="cursor-pointer" onClick={onTrailingClick}>
              {trailing ? (
                trailing
              ) : (
                <XMarkIcon
                  className="w-[18px] h-[18px]"
                  style={{
                    color: trailingIconColor ? trailingIconColor : "#E79B04",
                  }}
                />
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default InformativeAlertPopupComponent;
