import RzProgressBar from "../../components/atoms/rz-progress-bar";

const ProgressBarPage = () => {
  return (
    <>
      <div className="bg-gray-200 h-screen w-full overflow-auto ">
        <div className=" max-w-5xl mx-auto w-full my-9">
          <div className="text-lg font-bold text-gray-700 py-9">
            Progress Bar
          </div>
          <div className="mb-12">
            <RzProgressBar progressColor="#2563EB" />
          </div>
          <div>
            <RzProgressBar progressColor="#DADADA" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProgressBarPage;
