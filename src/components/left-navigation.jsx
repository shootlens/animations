import React from "react";
import { Link } from "react-router-dom";

const LeftNavigation = () => {
  return (
    <div className="w-1/5 bg-gray-800 text-white p-4 h-screen overflow-auto">
      <ul className="space-y-2">
        <li className="font-bold">Animations</li>
        <li className="ps-2">
          <Link to="/button-animation" className="hover:text-gray-300">
            Button animation
          </Link>
        </li>
        <li className="ps-2">
          <Link to="/checkboxes-toggle-page" className="hover:text-gray-300">
            CheckBoxes and toggle
          </Link>
        </li>
        <li className="ps-2">
          <Link to="/input-field-page" className="hover:text-gray-300">
            Input field
          </Link>
        </li>
        <li className="ps-2">
          <Link to="/progresser-page" className="hover:text-gray-300">
            Progress bar
          </Link>
        </li>
        <li className="ps-2">
          <Link to="/notification-page" className="hover:text-gray-300">
            Notification
          </Link>
        </li>
        <li className="ps-2">
          <Link to="/dropdown-page" className="hover:text-gray-300">
            Dropdown
          </Link>
        </li>
        <li className="ps-2">
          <Link to="/table-page" className="hover:text-gray-300">
            Table
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default LeftNavigation;
