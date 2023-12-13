import React, { useState } from "react";

import { FolderIcon } from "@heroicons/react/24/outline";
import ArrowCarrot from "../assets/icons/caret-arrow.svg";
import TrailLine from "../assets/icons/trail-line.svg";
import FlatWorkflowIcon from "../assets/icons/flat-color-icons-workflow.svg";
const SaveToPage = () => {
  const TreeItem = ({ item, level, onToggle }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
      setIsOpen(!isOpen);
      onToggle(item.id, !isOpen);
    };

    const hasChildren = item.children && item.children.length > 0;

    return (
      <div className="pt-2 relative">
        {level > 0 && (
          <div
            className="absolute left-4 top-0 bottom-0 bg-[#E4E7EC]"
            style={{
              width: "1px",
              marginLeft: "-1px",
              transform: `translateX(${level * 10 - 35}px)`,
            }}
          ></div>
        )}

        <div style={{ marginLeft: `${level * 10}px` }} className="relative">
          <div
            className="inline-flex items-center cursor-pointer"
            onClick={handleToggle}
          >
            {level > 0 && (
              <>
                <img
                  src={TrailLine}
                  alt="trail line"
                  className="transform duration-300 transition-all   block"
                />
              </>
            )}
            {hasChildren && (
              <div>
                {isOpen ? (
                  <img
                    src={ArrowCarrot}
                    alt="arrow-icon"
                    className="h-4 w-4 transform duration-300"
                  />
                ) : (
                  <img
                    src={ArrowCarrot}
                    alt="arrow-icon"
                    className="h-4 w-4 transform -rotate-90 duration-300"
                  />
                )}
              </div>
            )}
            <div className="inline-flex">
              <div className="inline-flex items-center cursor-pointer">
                {hasChildren ? (
                  <FolderIcon className="text-[#98A2B3] w-5 h-5 me-1" />
                ) : (
                  <img
                    src={FlatWorkflowIcon}
                    alt="workflow-icon"
                    className="w-5 h-5 me-1"
                  />
                )}
                <span className="text-gray-800 text-sm not-italic font-normal">
                  {item.name}
                </span>
              </div>
            </div>
          </div>
        </div>

        {hasChildren && isOpen && (
          <div className="ml-4">
            {item.children.map((child, index) => (
              <TreeItem
                key={child.id}
                item={child}
                level={level + 1}
                onToggle={onToggle}
                isFirstChild={index === 0}
              />
            ))}
          </div>
        )}
      </div>
    );
  };

  const TreeView = ({ data }) => {
    const [openItems, setOpenItems] = useState([]);

    const handleToggle = (itemId, isOpen) => {
      if (isOpen) {
        setOpenItems((prevOpenItems) => [...prevOpenItems, itemId]);
      } else {
        setOpenItems((prevOpenItems) =>
          prevOpenItems.filter((id) => id !== itemId)
        );
      }
    };

    return (
      <div>
        {data.map((item) => (
          <TreeItem
            key={item.id}
            item={item}
            level={0}
            onToggle={handleToggle}
          />
        ))}
      </div>
    );
  };

  const data = [
    {
      id: 1,
      name: "IT-Service Team",
      children: [
        {
          id: 2,
          name: "Software",
          children: [
            {
              id: 3,
              name: "OS",
              children: [
                {
                  id: 3,
                  name: "Apps",
                  children: [
                    {
                      id: 1,
                      name: "Micrsoft",
                    },
                    {
                      id: 2,
                      name: "Jira",
                    },
                    {
                      id: 3,
                      name: "DropBox",
                    },
                    {
                      id: 4,
                      name: "WorkDay",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 5,
          name: "Hardware",
          children: [{ id: 1, name: "Hardware 1" }],
        },
        {
          id: 5,
          name: "Services",
          children: [{ id: 1, name: "service 1" }],
        },
        {
          id: 5,
          name: "Vendors",
          children: [{ id: 1, name: "vendor 1" }],
        },
      ],
    },
    {
      id: 1,
      name: "Item 2",
      children: [
        {
          id: 2,
          name: "Item 1.1",
          children: [
            {
              id: 3,
              name: "Item 1.1.1",
              children: [
                {
                  id: 3,
                  name: "Item 1.1.1.1",
                  children: [
                    {
                      id: 3,
                      name: "Item 1.1.1.1.1",
                    },
                  ],
                },
              ],
            },
            {
              id: 4,
              name: "Item 1.1.2",
              children: [
                {
                  id: 7,
                  name: "Item 1.1.2.1",
                  children: [
                    {
                      id: 1,
                      name: "Item 1.1.2.1.1",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          id: 5,
          name: "Item 1.2",
          children: [
            {
              id: 1,
              name: "Item 1.2.1",
              children: [
                {
                  id: 1,

                  name: "Item 1.2.1.1",
                  children: [
                    {
                      id: 3,
                      name: "Item 1.2.1.1.1",
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ];
  return (
    <>
      <div>
        <TreeView data={data} />
      </div>
    </>
  );
};
export default SaveToPage;
