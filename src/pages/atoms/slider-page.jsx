import RzSlider from "../../components/atoms/rz-slider";

const SliderPage = () => {
  return (
    <>
      <div className="bg-gray-100 h-screen w-full overflow-auto ">
        <div className=" max-w-xl mx-auto w-full my-9">
          <div className="text-lg font-bold text-gray-700 py-9">
            Slider page
          </div>
          <RzSlider />
        </div>
      </div>
    </>
  );
};
export default SliderPage;
