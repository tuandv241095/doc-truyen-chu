import React from "react";
import { Link } from "react-router-dom";

const Badge = ({ name, link }) => {
  return (
    <span
      className={
        "inline-block m-1 px-1 py-1 font-[0.5rem] leading-[0.7rem] border text-my-theme border-my-theme"
      }
    >
      <Link to={link}>{name}</Link>
    </span>
  );
};

export default Badge;
