import { useState } from "react";
import RzSlider from "../../components/atoms/rz-slider";

const SliderPage = () => {
  const [sliderValue, setSliderValue] = useState(0);

  const handleSliderChange = (event) => {
    setSliderValue(parseFloat(event.target.value, 10));
  };

  const thumbPosition = `calc(${sliderValue}% - 10px)`;
  return (
    <>
      <div className="bg-gray-100 h-screen w-full overflow-auto ">
        <div className=" max-w-xl mx-auto w-full my-9">
          <div className="text-lg font-bold text-gray-700 py-9">
            Slider page
          </div>
          <div className="flex flex-col space-y-48">
            <RzSlider havingMarks />
            <RzSlider />
            <RzSlider rangeSlider value1={20} value2={90} havingMarks />
            <RzSlider
              rangeSlider
              value1={20}
              value2={90}
              havingMarks
              marksValueCount={11}
            />
          </div>
        </div>

        <div className="mx-9">
          <div className="mb-4">
            <div className="relative">
              <div className="flex justify-center items-center">
                <input
                  type="range"
                  className="w-full"
                  min="0"
                  max="100"
                  step="0.1"
                  value={sliderValue}
                  onChange={handleSliderChange}
                />
                <div
                  className="absolute top-[-30px] bg-white text-xs py-1 px-2 rounded shadow-md"
                  style={{ left: thumbPosition }}
                >
                  {sliderValue}
                </div>
              </div>
              <div className="flex justify-between text-xs">
                <span className="w-4">0</span>
                <span className="w-4">10</span>
                <span className="w-4">20</span>
                <span className="w-4">30</span>
                <span className="w-4">40</span>
                <span className="w-4">50</span>
                <span className="w-4">60</span>
                <span className="w-4">70</span>
                <span className="w-4">80</span>
                <span className="w-4">90</span>
                <span className="w-4">100</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default SliderPage;
