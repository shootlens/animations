import RzTable from "../animation-components/rz-table";

const TablePage = () => {
  const code = ` 
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RzTable = () => {
  const headers = [ add your headers data];

  const rowData = [ add your row data ];

  const [data, setData] = useState(rowData);

  const handleAddRow = () => {
    if (data.length < 10) {
      const nextRowIndexToAdd = data.length % rowData.length;
      const newRow = rowData[nextRowIndexToAdd];
      setData([...data, newRow]);
    }
  };

  const handleRemoveRow = (index) => {
    if (data.length > 1) {
      const updatedData = [...data.slice(0, index), ...data.slice(index + 1)];
      setData(updatedData);
    }
  };
  const handleShuffleRows = () => {
    if (data.length > 1) {
      const shuffledData = [...data].sort(() => Math.random() - 0.5);
      setData(shuffledData);
    }
  };

  return (
    <div className="mx-auto">
      <div className="table-container mb-8 overflow-y-hidden ">
        <table className="w-full table-auto border-collapse border-t border-r border-l border-gray-200">
          <thead>
            <tr>
              {headers.map((header, index) => (
                <th
                  key={index}
                  className="bg-gray-300 border-b text-start border-gray-200 p-2 text-sm font-medium text-gray-800"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="table-body">
            <AnimatePresence>
              {data.map((row, rowIndex) => (
                <motion.tr
                  key={rowIndex}
                  initial={{ opacity: 0.2, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0.2, scale:0  }}
                  transition={{
                    type: "spring",
                    stiffness: 220,
                    damping: 27,
                  }}
                  className="bg-gray-50"
                >
                  {row.map((cell, colIndex) => (
                    <motion.td
                      key={colIndex}
                      transition={{
                        type: "spring",
                        stiffness: 220,
                        damping: 20,
                      }}
                      className="border-b border-gray-200 text-start p-2 text-sm font-light"
                      style={{ whiteSpace: "nowrap" }}
                    >
                      {cell}
                    </motion.td>
                  ))}
                  <td className="border-b border-gray-200 p-2 text-sm font-light">
                    <div
                      className="relative top-0 right-0 text-gray-400 px-4 cursor-pointer"
                      onClick={() => handleRemoveRow(rowIndex)}
                    >
                      x
                    </div>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>
      <div className="mb-4 flex justify-end space-x-3 mt-4">
        <button
          className="text-gray-800 text-sm font-semibold border bg-gray-300 px-2 py-1 rounded-sm"
          onClick={handleAddRow}
        >
          + Row
        </button>
        <button
          className="text-gray-800 text-sm font-semibold border bg-gray-300 px-2 py-1 rounded-sm"
          onClick={handleShuffleRows}
          disabled={data.length <= 1}
        >
          Shuffle Rows
        </button>
        <button
          className="text-gray-800 text-sm font-semibold border bg-gray-300 px-2 py-1 rounded-sm"
          onClick={() => handleRemoveRow(data.length - 1)}
        >
          - Row
        </button>
      </div>
    </div>
  );
};

export default RzTable;
 `;
  return (
    <>
      {" "}
      <div className="bg-white h-screen w-full overflow-auto">
        <div className=" max-w-5xl mx-auto w-full my-9">
          <div className="text-lg font-bold text-gray-700 py-9">
            Notification
          </div>
          <div className=" space-x-9 items-center mb-8">
            <RzTable />
          </div>

          <div className="bg-gray-700 w-full rounded-md text-gray-200 max-w-7xl overflow-auto px-4">
            <pre>
              <code>{code}</code>
            </pre>
          </div>
        </div>
      </div>
    </>
  );
};

export default TablePage;
