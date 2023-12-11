import PropTypes from "prop-types";
import "../styles/rz-button.css";
import { useRef } from "react";

const RzButtonRippleComponent = ({
  buttonText,
  buttonClick,
  primaryButton,
  secondaryButton,
  disabledButton,
  icon: IconComponent,
  buttonRadius,
}) => {
  const handleButtonClick = (e) => {
    addRipple(e);
    if (buttonClick) {
      buttonClick(e);
    }
  };

  const rippleContainerRef = useRef(null);

  const addRipple = (event) => {
    const rippleContainer = rippleContainerRef.current;
    const ripple = document.createElement("div");
    const rect = rippleContainer.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);

    ripple.classList.add("ripple");
    ripple.style.width = ripple.style.height = `${size}px`;
    ripple.style.left = `${event.clientX - rect.left - size / 2}px`;
    ripple.style.top = `${event.clientY - rect.top - size / 2}px`;

    ripple.addEventListener("animationend", () => {
      ripple.remove();
    });

    rippleContainer.appendChild(ripple);
  };
  return (
    <button
      ref={rippleContainerRef}
      className={`ripple-button font-normal leading-noraml not-italic text-sm py-[6px] overflow-hidden relative
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

RzButtonRippleComponent.propTypes = {
  buttonText: PropTypes.string,
  buttonClick: PropTypes.func,
  primaryButton: PropTypes.bool,
  secondaryButton: PropTypes.bool,
  disabledButton: PropTypes.bool,
  icon: PropTypes.elementType,
  size: PropTypes.string,
  buttonRadius: PropTypes.string,
};

export default RzButtonRippleComponent;
