import { useState, useEffect, useRef } from "react";
const ThresholdComponent = ({ content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [position, setPosition] = useState("bottom");
  const buttonRef = useRef(null);

  useEffect(() => {
    const checkPosition = () => {
      const buttonRect = buttonRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (buttonRect.bottom + 200 > windowHeight) {
        setPosition("top");
      } else {
        setPosition("bottom");
      }
    };

    if (isOpen) {
      checkPosition();
    }
  }, [isOpen]);

  const handlePopover = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block" ref={buttonRef}>
      <button
        onClick={handlePopover}
        className="bg-blue-500 text-white px-2 py-2 rounded"
      >
        Threshold
      </button>

      {isOpen && (
        <div
          className={`absolute z-10 bg-white border p-4 rounded shadow-lg w-[300px] ${
            position === "top" ? "bottom-10" : "top-10"
          }`}
        >
          {content}
        </div>
      )}
    </div>
  );
};

export default ThresholdComponent;
