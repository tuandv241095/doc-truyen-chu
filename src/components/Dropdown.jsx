import React from "react";

const Dropdown = ({ items }) => {
  return (
    <div
      className="hidden origin-top-left absolute left-0 top-[72px] w-64 rounded-b-md shadow-lg bg-orange dark:bg-dark ring-1 ring-orange ring-opacity-5 focus:outline-none group-hover:block"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabIndex="-1"
    >
      <div className="py-1 grid grid-cols-2" role="none">
        {items.map((item, id) => (
          <a
            href="#"
            className="text-dark dark:text-orange block px-4 py-3 text-sm hover:text-white dark:hover:text-white"
            role="menuitem"
            tabIndex="-1"
            id={"menu-item-" + id}
          >
            {item.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Dropdown;
