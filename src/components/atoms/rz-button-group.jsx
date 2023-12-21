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
          isFirst={index === 0}
          isLast={index === buttons.length - 1}
          isGroup={true}
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
    })
  ).isRequired,
};

export default RzButtonGroup;
