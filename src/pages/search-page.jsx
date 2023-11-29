import RzSearch from "../components/rz-search";

const RzSearchPage = () => {
  return (
    <>
      <div className="bg-gray-100 h-screen w-full overflow-auto">
        <div className="max-w-5xl mx-auto w-full my-9">
          <div className="text-lg font-bold text-gray-700 py-9">Search</div>
          <RzSearch />
        </div>
      </div>
    </>
  );
};

export default RzSearchPage;
