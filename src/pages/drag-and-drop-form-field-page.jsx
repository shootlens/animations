import React from "react";

import DragAndDropFormFieldComponent from "../components/dnd-form-field-component";

const DragAndDropList = () => {
  return (
    <div className="bg-gray-100 h-screen w-full overflow-auto">
      <div className="max-w-3xl mx-auto w-full my-9">
        <div className="text-lg font-bold text-gray-700 py-9">
          Drag and Drop field page
        </div>
        <DragAndDropFormFieldComponent />
      </div>
    </div>
  );
};

export default DragAndDropList;
