import PulseAnimationButton from "../animation-components/pulse-animation-button";

const PulseAnimationButtonPage = () => {
  return (
    <>
      <div className="bg-gray-100 h-screen w-full overflow-auto">
        <div className=" max-w-4xl mx-auto w-full my-9">
          <div className="text-lg font-bold text-gray-700 py-9">
            Pulse Animation
          </div>
          <div className="w-3/5">
            <PulseAnimationButton />
          </div>
        </div>
      </div>
    </>
  );
};

export default PulseAnimationButtonPage;
