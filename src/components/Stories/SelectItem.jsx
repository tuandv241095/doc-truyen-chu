import React from "react";

const SelectItem = ({ item, isActive, func, showOff }) => {
  return (
    <li>
      <a
        href="#"
        className={
          "text-gray-700 block px-4 py-2 text-sm " +
          (isActive ? "bg-yellow text-white" : "")
        }
        role="menuitem"
        tabindex="-1"
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
