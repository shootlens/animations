import RzFileUpload from "../components/rz-file-upload";

const FileUploadPage = () => {
  return (
    <>
      <div className="bg-gray-100 h-screen w-full overflow-auto">
        <div className=" max-w-5xl mx-auto w-full my-9">
          <div className="text-lg font-bold text-gray-700 py-9">File Upload with url</div>
          <RzFileUpload />
        </div>
      </div>
    
    </>
  );
};

export default FileUploadPage;
