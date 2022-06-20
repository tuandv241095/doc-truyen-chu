import React from "react";
import { Link } from "react-router-dom";

const InfoBadge = ({ info }) => {
  return (
    <span
      className={
        "inline-block cursor-pointer m-1 px-3 py-1 border rounded-full text-sm " +
        info.color
      }
    >
      <Link to={info.link}>{info.name}</Link>
    </span>
  );
};

export default InfoBadge;
