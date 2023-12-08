import TableVector from "../assets/icons/table-vector.svg";

import { useState } from "react";
import React from "react";
import RzBadge from "./atoms/rz-badge";
import RzAvatar from "./rz-avatar";
import {
  PencilSquareIcon,
  Square2StackIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

const GroupedTable = () => {
  const [expandedRows, setExpandedRows] = useState([]);

  const toggleRow = (index) => {
    setExpandedRows((prevRows) =>
      prevRows.includes(index)
        ? prevRows.filter((rowIndex) => rowIndex !== index)
        : [...prevRows, index]
    );
  };
  const Items = [
    {
      title: "Configuration Request",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      status: (
        <RzBadge
          title="Published"
          backgroundColor="#DFF7E9"
          textColor="#229F54"
        />
      ),
      createdBy: (
        <div className="flex items-center">
          <div className="mx-2">
            <RzAvatar firstName="Rezolve" />
          </div>
          Sudhanshu@rezolve.ai
        </div>
      ),
      lastUpdated: "Last updated",
      actions: (
        <div className="flex items-center space-x-[10px]">
          <PencilSquareIcon className="w-4 h-4 text-[#94A3B8]" />
          <TrashIcon className="w-4 h-4 text-[#94A3B8]" />
          <Square2StackIcon className="w-4 h-4 text-[#94A3B8]" />
        </div>
      ),
    },
    {
      title: "Configuration Request",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      status: (
        <RzBadge title="Draft" backgroundColor="#F7E9CE" textColor="#E79B04" />
      ),
      createdBy: (
        <div className="flex items-center">
          <div className="mx-2">
            <RzAvatar firstName="Rezolve" />
          </div>
          Sudhanshu@rezolve.ai
        </div>
      ),
      lastUpdated: "Last updated",
      actions: (
        <div className="flex items-center space-x-[10px]">
          <PencilSquareIcon className="w-4 h-4 text-[#94A3B8]" />
          <TrashIcon className="w-4 h-4 text-[#94A3B8]" />
          <Square2StackIcon className="w-4 h-4 text-[#94A3B8]" />
        </div>
      ),
    },
    {
      title: "Configuration Request",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      status: (
        <RzBadge
          title="Published"
          backgroundColor="#DFF7E9"
          textColor="#229F54"
        />
      ),
      createdBy: (
        <div className="flex items-center">
          <div className="mx-2">
            <RzAvatar firstName="Rezolve" />
          </div>
          Sudhanshu@rezolve.ai
        </div>
      ),
      lastUpdated: "Last updated",
      actions: (
        <div className="flex items-center space-x-[10px]">
          <PencilSquareIcon className="w-4 h-4 text-[#94A3B8]" />
          <TrashIcon className="w-4 h-4 text-[#94A3B8]" />
          <Square2StackIcon className="w-4 h-4 text-[#94A3B8]" />
        </div>
      ),
    },
    {
      title: "Configuration Request",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      status: (
        <RzBadge
          title="Published"
          backgroundColor="#DFF7E9"
          textColor="#229F54"
        />
      ),
      createdBy: (
        <div className="flex items-center">
          <div className="mx-2">
            <RzAvatar firstName="Rezolve" />
          </div>
          Sudhanshu@rezolve.ai
        </div>
      ),
      lastUpdated: "Last updated",
      actions: (
        <div className="flex items-center space-x-[10px]">
          <PencilSquareIcon className="w-4 h-4 text-[#94A3B8]" />
          <TrashIcon className="w-4 h-4 text-[#94A3B8]" />
          <Square2StackIcon className="w-4 h-4 text-[#94A3B8]" />
        </div>
      ),
    },
    {
      title: "Configuration Request",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      status: (
        <RzBadge
          title="Published"
          backgroundColor="#DFF7E9"
          textColor="#229F54"
        />
      ),
      createdBy: (
        <div className="flex items-center">
          <div className="mx-2">
            <RzAvatar firstName="Rezolve" />
          </div>
          Sudhanshu@rezolve.ai
        </div>
      ),
      lastUpdated: "Last updated",
      actions: (
        <div className="flex items-center space-x-[10px]">
          <PencilSquareIcon className="w-4 h-4 text-[#94A3B8]" />
          <TrashIcon className="w-4 h-4 text-[#94A3B8]" />
          <Square2StackIcon className="w-4 h-4 text-[#94A3B8]" />
        </div>
      ),
    },
    {
      title: "Configuration Request",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      status: (
        <RzBadge
          title="Published"
          backgroundColor="#DFF7E9"
          textColor="#229F54"
        />
      ),
      createdBy: (
        <div className="flex items-center">
          <div className="mx-2">
            <RzAvatar firstName="Rezolve" />
          </div>
          Sudhanshu@rezolve.ai
        </div>
      ),
      lastUpdated: "Last updated",
      actions: (
        <div className="flex items-center space-x-[10px]">
          <PencilSquareIcon className="w-4 h-4 text-[#94A3B8]" />
          <TrashIcon className="w-4 h-4 text-[#94A3B8]" />
          <Square2StackIcon className="w-4 h-4 text-[#94A3B8]" />
        </div>
      ),
    },
    {
      title: "Configuration Request",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor",
      status: (
        <RzBadge
          title="Published"
          backgroundColor="#DFF7E9"
          textColor="#229F54"
        />
      ),
      createdBy: (
        <div className="flex items-center">
          <div className="mx-2">
            <RzAvatar firstName="Rezolve" />
          </div>
          Sudhanshu@rezolve.ai
        </div>
      ),
      lastUpdated: "Last updated",
      actions: (
        <div className="flex items-center space-x-[10px]">
          <PencilSquareIcon className="w-4 h-4 text-[#94A3B8]" />
          <TrashIcon className="w-4 h-4 text-[#94A3B8]" />
          <Square2StackIcon className="w-4 h-4 text-[#94A3B8]" />
        </div>
      ),
    },
  ];
  return (
    <>
      <div className="rounded-md overflow-auto max-h-[500px] max-w-full border relative custom-scroll">
        <table className="w-full rounded-md p-2">
          <thead className="sticky top-0 bg-[#F9FAFB] text-sm not-italic font-medium leading-normal border-b z-10">
            <tr className="bg-[#F9FAFB]">
              <th className="text-start py-[13px] px-[10px]">
                Ticket Type Title
              </th>
              <th className="text-start py-[13px] px-[10px]">Description</th>
              <th className="text-start py-[13px] px-[10px]">Status</th>
              <th className="text-start py-[13px] px-[10px]">Created By</th>
              <th className="text-start py-[13px] px-[10px]">Last updated</th>
              <th className="text-start py-[13px] px-[10px]">Actions</th>
            </tr>
          </thead>
          <tbody>
            {Items.map((e, rowIndex) => (
              <React.Fragment key={rowIndex}>
                <tr
                  onClick={() => toggleRow(rowIndex)}
                  className="grouped-table"
                >
                  <td className="py-4 px-[10px] text-[#6B7280]">
                    <div className="flex items-center">
                      <img
                        src={TableVector}
                        alt="table"
                        className={`w-3 h-3 mx-2 ${
                          expandedRows.includes(rowIndex)
                            ? "1rotate-180  transform transition-all "
                            : "-rotate-90  transform "
                        }`}
                      />
                      {e.title}
                    </div>
                  </td>
                  <td className="py-2 px-4 max-w-[250px] break-words text-[#6B7280]">
                    {e.description}
                  </td>
                  <td className="py-2 px-4 text-[#6B7280]">{e.status}</td>
                  <td className="py-2 px-4 text-[#6B7280]">{e.createdBy}</td>
                  <td className="py-3 px-4 text-[#6B7280]">{e.lastUpdated}</td>
                  <td className="py-2 px-4 text-[#6B7280]">{e.actions}</td>
                </tr>

                {expandedRows.includes(rowIndex) && (
                  <tr className="bg-[#F9FAFB]">
                    <td className="py-2 px-4 text-[#6B7280]">
                      <div
                        className="flex items-center"
                        style={{ paddingLeft: "1rem" }}
                      >
                        <input type="radio" className="mx-2" />
                        {e.title}
                      </div>
                    </td>
                    <td className="py-2 px-4 max-w-[250px] break-words text-[#6B7280]">
                      <div style={{ paddingLeft: "5px" }}>{e.description}</div>
                    </td>
                    <td className="py-2 px-4 text-[#6B7280]">
                      <div style={{ paddingLeft: "5px" }}>{e.status}</div>
                    </td>
                    <td className="py-2 px-4 text-[#6B7280]">
                      <div style={{ paddingLeft: "5px" }}>{e.createdBy}</div>
                    </td>
                    <td className="py-2 px-4 text-[#6B7280]">
                      <div style={{ paddingLeft: "5px" }}>{e.lastUpdated}</div>
                    </td>
                    <td className="py-2 px-4 text-[#6B7280]">
                      <div style={{ paddingLeft: "5px" }}>{e.actions}</div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}

            <tr className="grouped-table border-l-2 border-[#2563EB]">
              <td className="py-2">
                <div className="flex items-center">
                  <input type="radio" className="mx-2" />
                  title
                </div>
              </td>
              <td className="py-2 ">description</td>
              <td className="py-2">status</td>
              <td className="py-2">createdBy</td>
              <td className="">lastUpdated</td>
              <td className="py-2">actions</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};
export default GroupedTable;
