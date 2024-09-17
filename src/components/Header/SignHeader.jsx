import React from "react";
import IconLogoHeader from "../Icon/IconLogoHeader";
import { Link } from "react-router-dom";
import { pathDefault } from "../../common/path";

const SignHeader = ({ title }) => {
  return (
    <div className="flex space-x-4 items-center border-b-2 border-gray-500 py-3 px-3 mb-5">
      <Link to={pathDefault.homePage}>
        <IconLogoHeader />
      </Link>
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
