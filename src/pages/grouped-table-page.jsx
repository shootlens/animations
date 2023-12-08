import GroupedTable from "../components/grouped-table";

const GroupedTablePage = () => {
  return (
    <>
      <div className="bg-white h-screen w-full overflow-hidden">
        <div className="px-4 mx-auto w-full my-9">
          <div className="text-lg font-bold text-gray-700 py-9">
            Grouped Table
          </div>

          <GroupedTable />
        </div>
      </div>
    </>
  );
};
export default GroupedTablePage;
