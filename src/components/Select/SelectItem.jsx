import React from "react";
import { Link } from "react-router-dom";

const SelectItem = ({ item, isActive, func, showOff }) => {
  return (
    <li>
      <Link
        to="#"
        className={
          "text-xs block px-4 py-2 font-semibold " +
          (isActive ? "bg-my-theme text-white" : "")
        }
        id={"menu-item-" + item}
        onClick={() => {
          func(item);
          showOff();
        }}
      >
        {item}
      </Link>
    </li>
  );
};

export default SelectItem;
