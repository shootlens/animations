import RzHeader from "../components/rz-header";

const HeaderPage = () => {
  return (
    <>
      <>
        <div className="bg-gray-100 h-screen w-full overflow-auto">
          <div className=" max-w-5xl mx-auto w-full my-9">
            <div className="text-lg font-bold text-gray-700 py-9">Header</div>
            <RzHeader />
          </div>
        </div>
      </>
    </>
  );
};
export default HeaderPage;
