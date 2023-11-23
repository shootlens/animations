import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RzProgresser = () => {
  const [progressComplete, setProgressComplete] = useState(false);
  useEffect(() => {
    const progressTimer = setTimeout(() => {
      setProgressComplete(true);
    }, 3000);
    return () => clearTimeout(progressTimer);
  }, []);

  return (
    <div
      className={`${
        !progressComplete ? "bg-gray-200" : "bg-white"
      } w-80 h-4 relative my-12 rounded-lg`}
    >
      <AnimatePresence>
        {!progressComplete ? (
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0 }}
            transition={{ duration: 3 }}
            className="w-full h-full bg-[#2563EB] rounded-lg"
          />
        ) : (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="flex items-center justify-center w-full h-full border-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
            >
              <circle cx="32" cy="32" r="24" fill="#2563EB" />
              <motion.path
                d="M20 30l8 8 16-16"
                initial={{ scale: 0 }}
                animate={{ scale: [0, 1.2, 1], rotate: [0, 30, 0] }}
                transition={{ duration: 0.5 }}
                stroke="white"
                strokeWidth={4}
                strokeLinecap="round"
              />
            </svg>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
export default RzProgresser;
