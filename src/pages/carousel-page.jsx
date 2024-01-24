import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";

const CarouselPage = () => {
  const sliderRef = useRef(null);

  const next = () => {
    sliderRef.current.slickNext();
  };

  const previous = () => {
    sliderRef.current.slickPrev();
  };

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    className: "center",
    centerMode: true,
    centerPadding: "4%",
  };

  return (
    <div className="flex items-center h-full">
      <div className="max-w-xl mx-auto">
        <div className="slider-container">
          <Slider ref={sliderRef} {...settings} className="parent-container">
            <div className="card-container">
              <div
                key={1}
                className="card-item bg-black h-80 mx-2 rounded-lg"
              ></div>
            </div>
            <div className="card-container">
              <div
                key={2}
                className="card-item bg-black h-80 mx-2 rounded-lg"
              ></div>
            </div>
            <div className="card-container">
              <div
                key={3}
                className="card-item bg-black h-80 mx-2 rounded-lg"
              ></div>
            </div>
            <div className="card-container">
              <div
                key={4}
                className="card-item bg-black h-80 mx-2 rounded-lg"
              ></div>
            </div>
            <div className="card-container">
              <div key={5} className="card-item bg-black h-80 mx-2 rounded-lg">
                <h3>5</h3>
              </div>
            </div>
          </Slider>
        </div>
        <div className="flex justify-evenly cursor-pointer mt-4 button-container items-center">
          <div>
            <button
              className="button slick-carousel-button "
              onClick={previous}
            >
              <ArrowLeftIcon className="w-[18px] h-[18px] text-[#999999]" />
            </button>
          </div>
          <div>
            <button
              className="button slick-carousel-button text-[#999999]"
              onClick={next}
            >
              <ArrowRightIcon className="w-[18px] h-[18px]" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarouselPage;
