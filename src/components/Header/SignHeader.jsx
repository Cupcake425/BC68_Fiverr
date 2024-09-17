import React from "react";
import IconLogoHeader from "../Icon/IconLogoHeader";

const SignHeader = ({ title }) => {
  return (
    <div className="flex space-x-4 items-center border-b-2 border-gray-500 py-3 px-3 mb-5">
      <IconLogoHeader />
      <span className="text-2xl">|</span>
      <span
        className="text-3xl mt-2 inline-block font-semibold"
        style={{ color: "#013A12" }}
      >
        {title}
      </span>
    </div>
  );
};

export default SignHeader;
