import React from "react";
import { FaTimes } from "react-icons/fa";

const SelectedBadge = ({ name, func }) => {
  return (
    <span
      className={
        "inline-flex items-center justify-between gap-1 rounded-md mr-1.5 mb-1.5 px-2 py-1 text-xs border border-dark cursor-pointer bg-gray text-white dark:border-white"
      }
    >
      {name}
      <FaTimes onClick={() => func(name)} />
    </span>
  );
};

export default SelectedBadge;
