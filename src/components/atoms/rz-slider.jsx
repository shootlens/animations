import "toolcool-range-slider/dist/plugins/tcrs-marks.min.js";
import "toolcool-range-slider/dist/plugins/tcrs-moving-tooltip.min.js";
import "toolcool-range-slider";

const RzSlider = ({
  sliderWidth,
  havingMarks = false,
  marksValueCount,
  value1,
  value2,
  rangeSlider,
}) => {
  return (
    <>
      <div className="p-2">
        <tc-range-slider
          theme="traget"
          marks={havingMarks}
          marks-values-count={marksValueCount ? marksValueCount : "2"}
          slider-width={sliderWidth ? sliderWidth : "500px"}
          {...(rangeSlider && {
            value1: value1 ? value1 : "10",
            value2: value2 ? value2 : "80",
          })}
          round="0"
          step="10"
          moving-tooltip="true"
          moving-tooltip-distance-to-pointer="40"
          moving-tooltip-width="35"
          moving-tooltip-height="30"
          moving-tooltip-bg="#6B7280"
          moving-tooltip-text-color="white"
          css-links="/styles/slider.css"
        ></tc-range-slider>
      </div>
    </>
  );
};

export default RzSlider;
