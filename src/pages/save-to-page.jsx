import React, { useState } from "react";
import { ChevronRightIcon, ChevronDownIcon } from "@heroicons/react/24/solid";
import { FolderIcon } from "@heroicons/react/24/outline";

const SaveToPage = () => {
  const TreeItem = ({ item, level, onToggle }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
      setIsOpen(!isOpen);
      onToggle(item.id, !isOpen);
    };

    return (
      <div className="pt-2 relative">
        {level > 0 && (
          <div
            className="absolute left-4 top-0 bottom-0 bg-gray-400"
            style={{
              width: "1px",
              marginLeft: "-1px",
              transform: `translateX(${level * 10 - 35  }px)`,
            }}
          ></div>
        )}

        <div style={{ marginLeft: `${level * 10}px` }} className="relative">
          <div
            className="inline-flex items-center cursor-pointer"
            onClick={handleToggle}
          >
            {isOpen ? (
              <ChevronDownIcon className="h-4 w-4" />
            ) : (
              <ChevronRightIcon className="h-4 w-4" />
            )}
            <div className="inline-flex items-center cursor-pointer">
              <FolderIcon className="text-gray-300 w-5 h-5 me-1" />
              {item.name}
            </div>
          </div>
        </div>

        {item.children && isOpen && (
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
        {data.map((item, index) => (
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
      name: "Item 1",
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
                  name: "Success",
                  children: [
                    {
                      id: 1,
                      name: "ids",
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
              name: "sigma",
              children: [
                {
                  id: 1,

                  name: "hi",
                  children: [
                    {
                      id: 3,
                      name: "Item 1.1.1.1.1",
                    },
                  ],
                },
              ],
            },
          ],
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
                  name: "Success",
                  children: [
                    {
                      id: 1,
                      name: "ids",
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
              name: "sigma",
              children: [
                {
                  id: 1,

                  name: "hi",
                  children: [
                    {
                      id: 3,
                      name: "Item 1.1.1.1.1",
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
