import RzButton from "../components/atoms/rz-button";
import AddImage from "../assets/icons/add-image.svg";

const RzFileUpload = () => {
  return (
    <>
      <div className=" w-full p-5 bg-white rounded-lg">
        <div className="w-full">
          <div className="flex items-center justify-center flex-col border border-dashed rounded-md px-[26] py-[11px]">
            <img src={AddImage} alt="file upload" className="w-12 h-12" />
            <div className="flex text-[#4B5563] text-sm not-italic font-medium py-1">
              <span className="text-sm not-italic font-medium leading-5 text-[#4F46E5]">
                Upload a file
              </span>
              or drag and drop
            </div>
            <div className="text-[#6B7280] text-center text-xs not-italic font-normal leading-4">
              PNG, JPG, GIF up to 50kB
            </div>
          </div>
          <div className="py-[10px] text-sm not-italic font-normal text-[#5F6D7E]">
            Or Upload from URL
          </div>
          <div className="border rounded-md border-[#D1D5DB] flex justify-between px-[13px] py-[4px]">
            <input
              type="text"
              className="flex-grow"
              placeholder="Add your URL"
            />
            <div className="ms-2">
              <RzButton text="Upload" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default RzFileUpload;
