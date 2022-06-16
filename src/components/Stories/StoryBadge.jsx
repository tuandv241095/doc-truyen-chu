import React from "react";
import { Link } from "react-router-dom";

const StoryBadge = ({ name }) => {
  return (
    <span
      className={
        "inline-block rounded-full m-1 px-1 py-1 text-xs border text-my-theme border-my-theme"
      }
    >
      <Link to="/">{name}</Link>
    </span>
  );
};

export default StoryBadge;
