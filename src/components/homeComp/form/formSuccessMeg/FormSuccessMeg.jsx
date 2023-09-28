import React from "react";
import { TbCheck } from "react-icons/tb";

const FormSuccessMeg = () => {
  return (
    <div className="text-center flex items-center justify-center flex-col h-full mt-7">
      <span className="w-11 h-11 rounded-full border bg-blue-600 text-white flex items-center justify-center text-3xl ">
        <TbCheck />
      </span>
      <h1>Successfully submitted!</h1>
      <a href="../../../pages/home" className="mt-2">
        <button className="px-9 py-2 rounded-md text-gray-500 mx-4 bg-gray-200 hover:bg-pink-600 transition-all duration-300 hover:text-white">
          Home
        </button>
      </a>
    </div>
  );
};

export default FormSuccessMeg;
