import React from "react";
import PropTypes from "prop-types";
import RzButton from "../atoms/rz-button";

const RzButtonGroup = ({ buttons }) => {
  return (
    <div className="flex">
      {buttons.map((button, index) => (
        <RzButton
          key={index}
          size={button.size}
          type={button.type}
          disabled={button.disabled}
          onClick={button.onClick}
          text={button.text}
          icon={button.icon}
          isIconButton={button.isIconButton}
          isFirst={index === 0}
          isLast={index === buttons.length - 1}
        />
      ))}
    </div>
  );
};

RzButtonGroup.propTypes = {
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      size: PropTypes.string,
      type: PropTypes.string,
      disabled: PropTypes.bool,
      onClick: PropTypes.func,
      text: PropTypes.string,
      icon: PropTypes.element,
      isIconButton: PropTypes.bool,
    })
  ).isRequired,
};

export default RzButtonGroup;
