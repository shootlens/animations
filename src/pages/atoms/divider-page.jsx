import RzDivider from "../../components/atoms/rz-divider";

const DividerPage = () => {
  return (
    <>
      <div className="bg-gray-100 h-screen w-full overflow-auto ">
        <div className="max-w-3xl mx-auto w-full my-9">
          <div className="text-lg font-bold text-gray-700 py-9">
            Divider page
          </div>
          <div className="mt-16">
            <RzDivider dividerColor="green" dividertext="Button Text" />
          </div>
        </div>
      </div>
    </>
  );
};
export default DividerPage;
