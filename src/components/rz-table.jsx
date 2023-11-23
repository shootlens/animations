import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RzTable = () => {
  const headers = [
    "Name",
    "Mobile",
    "Age",
    "Column 4",
    "Column 5",
    "Column 6",
    "Column 7",
    "Column 8",
    "Column 9",
    "Column 10",
    "Actions",
  ];

  const rowData = [
    [
      "Alice",
      "123-456-7890",
      25,
      "Value 4",
      "Value 5",
      "Value 6",
      "Value 7",
      "Value 8",
      "Value 9",
      "Value 10",
    ],
    [
      "Bob",
      "987-654-3210",
      30,
      "Value 4",
      "Value 5",
      "Value 6",
      "Value 7",
      "Value 8",
      "Value 9",
      "Value 10",
    ],
    [
      "Charlie",
      "555-123-4567",
      22,
      "Value 4",
      "Value 5",
      "Value 6",
      "Value 7",
      "Value 8",
      "Value 9",
      "Value 10",
    ],
    [
      "David",
      "444-222-3333",
      35,
      "Value 4",
      "Value 5",
      "Value 6",
      "Value 7",
      "Value 8",
      "Value 9",
      "Value 10",
    ],
    [
      "Emma",
      "666-777-8888",
      28,
      "Value 4",
      "Value 5",
      "Value 6",
      "Value 7",
      "Value 8",
      "Value 9",
      "Value 10",
    ],
    [
      "Frank",
      "999-111-2222",
      40,
      "Value 4",
      "Value 5",
      "Value 6",
      "Value 7",
      "Value 8",
      "Value 9",
      "Value 10",
    ],
    [
      "GraceGraceGraceGraceGrace",
      "777-888-9999",
      21,
      "Value 4",
      "Value 5",
      "Value 6",
      "Value 7",
      "Value 8",
      "Value 9",
      "Value 10",
    ],
    [
      "Henry",
      "333-444-5555",
      32,
      "Value 4",
      "Value 5",
      "Value 6",
      "Value 7",
      "Value 8",
      "Value 9",
      "Value 10",
    ],
    [
      "Ivy abcedhkjadm h,n",
      "222-555-6666 222-555-6666 222-555-6666 222-555-6666 222-555-6666",
      27,
      "Value 4",
      "Value 5",
      "Value 6",
      "Value 7",
      "Value 8",
      "Value 9",
      "Value 10",
    ],
    [
      "Jack",
      "888-999-0000",
      33,
      "Value 4",
      "Value 5",
      "Value 6",
      "Value 7",
      "Value 8",
      "Value 9",
      "Value 10",
    ],
  ];

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
