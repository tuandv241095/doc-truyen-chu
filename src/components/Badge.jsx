import React from "react";

const Badge = ({ name, myClassName }) => {
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

export default Badge;
