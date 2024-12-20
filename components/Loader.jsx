import React from "react";

const Loader = () => (
  <div className="flex justify-center items-center h-full w-full">
    <div
      className="animate-spin border-4 border-blue-500 border-t-transparent rounded-full"
      style={{
        width: "2rem", // Default size for small screens
        height: "2rem",
        borderWidth: "0.5rem",
      }}
    ></div>
  </div>
);

export default Loader;
