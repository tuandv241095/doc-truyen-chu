import React from "react";

const StoryBadge = ({ name, myClassName }) => {
  return (
    <span
      className={
        "inline-block rounded-full m-1 px-2 py-1 text-xs font-bold border-2 " +
        myClassName
      }
    >
      {name}
    </span>
  );
};

export default StoryBadge;
