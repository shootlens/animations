import RzInputField from "../animation-components/rz-input-field-animation";

const InputFieldPage = () => {
  const code = `
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
  `;
  return (
    <>
      <div className="bg-white h-screen w-full overflow-auto">
        <div className=" max-w-5xl mx-auto w-full my-9">
          <div className="text-lg font-bold text-gray-700 py-9">
            Input Field
          </div>
          <div className=" space-x-9 items-center mb-8">
            <RzInputField />
          </div>

          <div className="bg-gray-700 w-full rounded-md text-gray-200 p-4">
            <pre>
              <code>{code}</code>
            </pre>
          </div>
        </div>
      </div>
    </>
  );
};
export default InputFieldPage;
