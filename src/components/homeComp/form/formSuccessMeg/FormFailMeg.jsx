import React from "react";
import { RxCross2 } from "react-icons/rx";
import { TbCheck } from "react-icons/tb";
import { Link } from "react-router-dom";

const FormFailMeg = () => {
  const userSuccess = {
    success: false,
    message: "Fail submitted!!!",
  };
  return (
    <div className="text-center flex items-center justify-center flex-col mt-7 h-screen">
      <span className="w-11 h-11 rounded-full border bg-blue-600 text-white flex items-center justify-center text-3xl ">
        {userSuccess.success ? <TbCheck /> : <RxCross2 />}
      </span>
      <h1>{userSuccess.success ? userSuccess.message : userSuccess.message}</h1>
      <Link to="/" className="mt-2">
        <button className="px-9 py-2 rounded-md text-gray-500 mx-4 bg-gray-200 hover:bg-pink-600 transition-all duration-300 hover:text-white">
          Home
        </button>
      </Link>
    </div>
  );
};

export default FormFailMeg;
