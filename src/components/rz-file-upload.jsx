import AddImage from "../assets/icons/add-image.svg";

const RzFileUpload = () => {
  return (
    <>
      <div className="max-w-lg w-full p-5 bg-white rounded-md">
        <div className="w-full border border-dashed rounded-md px-[26] py-[11px]">
          <div className="flex flex-col justify-center">
            <img src={AddImage} alt="file upload" />
          </div>
        </div>
      </div>
    </>
  );
};
export default RzFileUpload;
