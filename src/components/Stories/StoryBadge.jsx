import React from "react";

const StoryBadge = ({ name }) => {
  return (
    <span
      className={
        "inline-block rounded-full m-1 px-2 py-1 text-xs font-bold border-2 text-my-theme border-my-theme"
      }
    >
      {name}
    </span>
  );
};

export default StoryBadge;
