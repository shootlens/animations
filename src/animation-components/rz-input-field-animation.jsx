import React, { useState } from "react";
import { motion, useAnimation } from "framer-motion";

const RzInputField = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const controls = useAnimation();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim() === "") {
      setError("Input is required");
      controls.start({
        x: [0, -5, 5, -5, 5, 0],
        transition: { duration: 0.5 },
      });
    } else {
      setError("");
    }
  };

  return (
    <div className="flex max-w-md mx-auto justify-between">
      <motion.div
        animate={controls}
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "start",
          margin: "20px",
        }}
      >
        <motion.input
          type="text"
          className="rounded-md p-1"
          value={inputValue}
          onChange={handleInputChange}
          style={{
            border: error ? "2px solid red" : "2px solid #ccc",
            outline: "none",
          }}
        />
        {error && (
          <motion.p
            className="text-xs"
            style={{ color: "red", margin: "1px 0" }}
          >
            {error}
          </motion.p>
        )}
      </motion.div>

      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default RzInputField;
