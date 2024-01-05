import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const RzProgressBar = ({ progressColor, progresserHeight }) => {
  const [progressComplete, setProgressComplete] = useState(false);
  useEffect(() => {
    const progressTimer = setTimeout(() => {
      setProgressComplete(true);
    }, 3000);
    return () => clearTimeout(progressTimer);
  }, []);

  return (
    <>
      <div
        className={`${
          !progressComplete ? "bg-[#F2F3F4]" : "bg-white"
        } relative rounded-lg`}
        style={{ height: progresserHeight ? progresserHeight : "16px" }}
      >
        <AnimatePresence>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ width: 0 }}
            transition={{ duration: 3 }}
            className={`w-full h-full rounded-lg`}
            style={{ backgroundColor: progressColor }}
          />
        </AnimatePresence>
      </div>
    </>
  );
};
export default RzProgressBar;
