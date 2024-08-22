import React from "react";
import { Link } from "react-router-dom";

const JobCard = ({ img, text, text2, className }) => {
  return text2 == null ? (
    <Link className="JobCard ">
      <div className={className}>
        <div className="p-5">
          <div className="mb-5">{img}</div>
          <p className="font-bold">{text}</p>
        </div>
      </div>
    </Link>
  ) : (
    <div className="JobCard ">
      <div className={className}>
        <div className="p-5">
          <div className="mb-5">{img}</div>
          <p className="text-2xl">{text}</p>
          <p className="mt-12 text-gray-500">{text2}</p>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
