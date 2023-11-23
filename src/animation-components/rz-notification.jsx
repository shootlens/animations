import { motion } from "framer-motion";
import { useState } from "react";

const RzNotification = () => {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count < 100) {
      setCount((currentCount) => currentCount + 1);
    }
  };
  return (
    <>
      <div className="flex justify-between items-center my-9 max-w-xs mx-auto">
        <div>
          <motion.div
            key={count}
            initial={{ opacity: 1 }}
            animate={{
              scale: [1, 0.4, 1],
              opacity: [1, 0, 1],
            }}
            transition={{
              duration: 0.7,
              ease: "easeInOut",
            }}
            className="bg-red-600 relative inset-x-5 w-[18px] h-[18px] rounded-full justify-center items-center flex text-xs font-semibold text-white top-3 z-10"
          >
            {count}
          </motion.div>
          <div className="w-9 h-9 relative">
            <motion.svg
              key={count}
              animate={{
                rotateZ: [0, -20, 20, -20, 20, -20, 20, 0],
                transition: { duration: 0.5 },
              }}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0M3.124 7.5A8.969 8.969 0 015.292 3m13.416 0a8.969 8.969 0 012.168 4.5"
              />
            </motion.svg>
          </div>
        </div>
        <div className="text-sm font-semibold cursor-pointer" onClick={handleIncrement}>+ add Notification</div>
      </div>
    </>
  );
};

export default RzNotification;
