import RzTextArea from "../../components/atoms/rz-text-area";

const TextAreaPage = () => {
  return (
    <>
      <div className="bg-gray-100 h-screen w-full overflow-auto custom-scroll">
        <div className=" max-w-5xl mx-auto w-full my-9">
          <div className="text-lg font-bold text-gray-700 py-9">Text area</div>
          <div className="grid grid-cols-2 gap-32">
            <div className="w-1/2">
              <RzTextArea />
            </div>
            <div className="w-1/2">
              <RzTextArea placeholder="Write about yourself" />
            </div>
            <div className="w-1/2">
              <RzTextArea label="with Label" />
            </div>
            <div className="w-1/2">
              <RzTextArea label="with Label" helpText="with help text" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default TextAreaPage;
