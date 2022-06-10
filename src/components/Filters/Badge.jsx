import React from "react";

const Badge = ({ name, isSelected, func }) => {
  return (
    <span
      className={
        "inline-block rounded-md mr-2 mb-2 px-2 py-1 text-xs border border-dark cursor-pointer " +
        (isSelected
          ? "bg-gray text-white dark:border-white"
          : "dark:border-gray-light")
      }
      onClick={() => {
        if (!isSelected) func(name);
      }}
    >
      {name}
    </span>
  );
};

export default Badge;
