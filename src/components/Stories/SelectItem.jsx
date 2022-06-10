import React from "react";

const SelectItem = ({ item, isActive, func, showOff }) => {
  return (
    <li>
      <a
        href="#"
        className={
          "text-xs block px-4 py-2 " +
          (isActive ? "bg-gray-light text-white" : "")
        }
        role="menuitem"
        tabIndex="-1"
        id={"menu-item-" + item}
        onClick={() => {
          func(item);
          showOff();
        }}
      >
        {item}
      </a>
    </li>
  );
};

export default SelectItem;
