import DraggableTable from "../components/draggable-table";

const DraggableTablePage = () => {
  return (
    <>
      <div className="bg-white h-screen w-full overflow-hidden">
        <div className="px-4 mx-auto w-full my-9">
          <div className="text-lg font-bold text-gray-700 py-9    ">
            Draggable Table
          </div>
          <DraggableTable  enableColumnSearch={true}/>
        </div>
      </div>
    </>
  );
};
export default DraggableTablePage;
