import { useState } from "react";
import "toolcool-range-slider";


const RzSlider = () => {
  const [values, setValues] = useState([50]);

  return (
    <tc-range-slider
      min="10"
      max="50"
      step="1"
      generate-labels="true"
      round="0"
    ></tc-range-slider>
  );
};

export default RzSlider;
