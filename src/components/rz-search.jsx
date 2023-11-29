import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  MagnifyingGlassIcon,
  XMarkIcon,
  XCircleIcon,
} from "@heroicons/react/24/outline";

const RzSearch = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setSearchText("");
  };

  const handleInputChange = (e) => {
    setSearchText(e.target.value);
  };

  const clearSearch = () => {
    setSearchText("");
  };

  return (
    <div className="relative">
      <div className="inline-flex p-1 rounded-lg items-center cursor-pointer border " onClick={toggleSearch}>
        {isSearchOpen ? (
          <XMarkIcon className="h-[18px] w-[18px] text-[#94A3B8] transition duration-300" />
        ) : (
          <MagnifyingGlassIcon className="h-[18px] w-[18px] text-[#94A3B8] transition duration-300" />
        )}
      </div>

      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="absolute w-full mt-2"
          >
            <div className="relative border rounded-[5px]">
              <input
                type="text"
                value={searchText}
                onChange={handleInputChange}
                className="w-full border h-9 items-center flex px-[15px] py-2 focus:outline-none rounded-[5px]"
                placeholder="Search"
              />
              {searchText && (
                <div
                  className="absolute right-4 top-3 cursor-pointer"
                  onClick={clearSearch}
                >
                  <XCircleIcon className="h-[15px] w-[15px] text-[#94A3B8]  items-center transition duration-300" />
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default RzSearch;
