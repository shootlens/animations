import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import RzTableComponent from "./table-component-page";

const MultilevelTablePage = () => {
  return (
    <>
      <DndProvider backend={HTML5Backend}>
        <RzTableComponent
          draggable
          tableActions
          tableTitle={"Table Title"}
          enableColumnSearch
          showCheckboxes
        />
      </DndProvider>
    </>
  );
};
export default MultilevelTablePage;
