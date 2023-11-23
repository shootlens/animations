import PropTypes from "prop-types";
import "../styles/rz-button.css";

const RzButton = ({
  buttonText,
  buttonClick,
  primaryButton,
  secondaryButton,
  disabledButton,
  icon: IconComponent,
  buttonRadius,
}) => {
  const createRipple = (e) => {
    const buttonClick = e.currentTarget;
    const circle = document.createElement("div");
    buttonClick.appendChild(circle);

    const d = Math.max(buttonClick.clientWidth, buttonClick.clientHeight);

    circle.style.width = circle.style.height = `${d}px`;

    circle.style.left = `${e.clientX - buttonClick.offsetLeft - d / 2}px`;
    circle.style.top = `${e.clientY - buttonClick.offsetTop - d / 2}px`;

    circle.classList.add("ripple");
    circle.style.backgroundColor = primaryButton
      ? "rgba(255, 255, 255, 0.7)"
      : "#e3f2fd";
  };

  const handleButtonClick = (e) => {
    createRipple(e);

    if (buttonClick) {
      buttonClick(e);
    }
  };
  return (
    <button
      className={`ripple-button font-medium leading-5 not-italic text-sm py-[6px] m-2 overflow-hidden relative 
        ${IconComponent ? "px-[10px] flex flex-nowrap items-center" : "px-7"}
      ${
        primaryButton
          ? "bg-[#2563EB] text-white !px-[10px]"
          : secondaryButton
          ? "bg-white border border-solid border-[#D1D5DB] text-[#6B7280]"
          : ""
      } ${
        disabledButton
          ? "bg-[#E5E7EB] text-[#6B7280] cursor-default !px-[10px]"
          : ""
      }`}
      style={{
        borderRadius: buttonRadius || "5px",
      }}
      onClick={disabledButton ? null : handleButtonClick}
    >
      {IconComponent && (
        <span className={`h-4 w-4 ${secondaryButton ? "text-[#2563EB]" : ""}`}>
          <IconComponent />
        </span>
      )}
      <span className={`${IconComponent && buttonText ? "ml-2" : "ml-0"}`}>
        {buttonText !== "" ? buttonText : "ButtonText"}
      </span>
    </button>
  );
};

RzButton.propTypes = {
  buttonText: PropTypes.string,
  buttonClick: PropTypes.func,
  primaryButton: PropTypes.bool,
  secondaryButton: PropTypes.bool,
  disabledButton: PropTypes.bool,
  icon: PropTypes.elementType,
  size: PropTypes.string,
  buttonRadius: PropTypes.string,
};

export default RzButton;
