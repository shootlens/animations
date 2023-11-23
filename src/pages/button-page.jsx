import React from "react";
import RzButton from "../components/rz-button";
import {
  ArrowUpTrayIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";

const ButtonAnimationPage = () => {
  const code = `
  import PropTypes from "prop-types";
  import "../styles/rz-button.css";
  
  const RzButton = ({
    buttonText,
    buttonClick,
    primaryButton,
    secondaryButton,
    disabledButton,
    icon: IconComponent,
    size,
    buttonRadius,
  }) => {
    //animation part
    const createRipple = (e) => {
      const buttonClick = e.currentTarget;
      const circle = document.createElement("div");
      buttonClick.appendChild(circle);
  
      const d = Math.max(buttonClick.clientWidth, buttonClick.clientHeight);
  
      circle.style.width = circle.style.height = {d}px;
  
      circle.style.left = {e.clientX - buttonClick.offsetLeft - d / 2}px;
      circle.style.top = {e.clientY - buttonClick.offsetTop - d / 2}px;
  
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
  
    const sizeClasses =
      size === "sm"
        ? "text-sm leading-normal !px-[17px] !py-[4px]"
        : size === "md"
        ? "!py-[9px] !px-[17px] "
        : "";
  
    return (
      <button
        className={ripple-button font-medium leading-5 not-italic text-sm py-[6px] m-2 overflow-hidden relative 
          {IconComponent ? "px-[10px] flex flex-nowrap items-center" : "px-7"}
      {
          primaryButton
            ? "bg-[#2563EB] text-white !px-[10px]"
            : secondaryButton
            ? "bg-white border border-solid border-[#D1D5DB] text-[#6B7280]"
            : ""
        } {
          disabledButton
            ? "bg-[#E5E7EB] text-[#6B7280] cursor-default !px-[10px]"
            : ""
        } {sizeClasses}}
        style={{
          borderRadius: buttonRadius || "5px",
        }}
        onClick={disabledButton ? null : handleButtonClick}
      >
        {IconComponent && (
          <span className={h-4 w-4 {secondaryButton ? "text-[#2563EB]" : ""}}>
            <IconComponent />
          </span>
        )}
        <span className={{IconComponent && buttonText ? "ml-2" : "ml-0"}}>
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
  


  //css part

  .ripple-button .ripple {
    border-radius: 50%;
    background-color: rgba(255, 255, 255, 0.7);
    position: absolute;
    transform: scale(0);
    animation: ripple 0.6s linear;
  }

  @keyframes ripple {
    to {
        transform: scale(2.5);
        opacity: 0;
    }
  }
  export default RzButton;
  
  `;

  return (
    <div className="bg-white h-screen w-full overflow-auto">
      <div className="w-full max-w-5xl mx-auto my-9">
        <div className="text-lg font-bold text-gray-700 py-9">RZButton</div>
        <div className="flex space-x-9">
          <RzButton
            buttonText="Button Text"
            buttonClick={() => console.log("Button Clicked")}
            disabledButton
          />
          <RzButton
            buttonText="Button Text"
            buttonClick={() => console.log("Button Clicked")}
            secondaryButton
          />
          <RzButton
            buttonText="Button Text"
            buttonClick={() => console.log("Button Clicked")}
            secondaryButton
            icon={WrenchScrewdriverIcon}
          />
          <RzButton
            buttonText="Button Text"
            buttonClick={() => console.log("Button Clicked")}
            primaryButton
          />
          <RzButton
            buttonText="Button Text"
            buttonClick={() => console.log("Button Clicked")}
            primaryButton
            icon={WrenchScrewdriverIcon}
          />
        </div>

        <div className="flex space-x-9 pt-8">
          <RzButton
            buttonClick={() => console.log("Button Clicked")}
            icon={ArrowUpTrayIcon}
            disabledButton
          />
          <RzButton
            buttonClick={() => console.log("Button Clicked")}
            icon={ArrowUpTrayIcon}
            secondaryButton
          />
          <RzButton
            buttonClick={() => console.log("Button Clicked")}
            icon={ArrowUpTrayIcon}
            primaryButton
          />
        </div>
        <div className="text-lg font-semibold text-gray-700 p-4">Usage:</div>
        <div className="bg-gray-700 w-full rounded-md text-gray-200">
          <pre>
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  );
};

export default ButtonAnimationPage;
