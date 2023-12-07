import React, { useState } from "react";
import { Range } from "react-range";

const RzSlider = () => {
  const [values, setValues] = useState([50]);

  return (
    <Range
      step={0.1}
      min={0}
      max={100}
      values={values}
      onChange={(newValues) => setValues(newValues)}
      renderTrack={({ props, children }) => (
        
        <div
          {...props}
          style={{
            ...props.style,
            height: "6px",
            width: "100%",
          }}
        >
          {children}
        </div>
      )}
      renderThumb={({ props }) => (
        <div
          className="shadow-lg"
          {...props}
          style={{
            ...props.style,
            height: "20px",
            width: "20px",
            backgroundColor: "#FFF",
            borderRadius: "100px",
          }}
        />
      )}
    />
  );
};

export default RzSlider;
