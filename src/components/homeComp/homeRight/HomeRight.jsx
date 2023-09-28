import React from "react";
import { PiListBold } from "react-icons/pi";
import Form from "../form/Form";

const HomeRight = () => {
  return (
    <div>
      <div className="offcanvas-menu flex items-center justify-end w-full">
        <a
          href="#"
          className="w-11 h-11 rounded-full p-2 bg-gray-200 flex items-center justify-center text-xl "
        >
          <PiListBold />
        </a>
      </div>

      {/* form */}
      <Form />
    </div>
  );
};

export default HomeRight;
