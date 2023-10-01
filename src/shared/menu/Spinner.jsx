import React from "react";
import "./Spinner.css";

const Spinner = () => {
  return (
    <div className=" flex items-center justify-center relative">
      <div className="absolute top-0 left-0 right-0 w-full  flex items-center justify-center max-h-screen h-screen">
        <div className="spinner "></div>
      </div>
    </div>
  );
};

export default Spinner;
