import React from "react";

const Dropdown = ({ items }) => {
  return (
    <div
      className="hidden origin-top-left absolute left-0 top-[72px] w-64 rounded-b-md shadow-lg dark:shadow-gray-light bg-white dark:bg-dark text-gray-light ring-1 ring-gray-light ring-opacity-5 focus:outline-none group-hover:block"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="menu-button"
      tabIndex="-1"
    >
      <div className="py-1 grid grid-cols-2" role="none">
        {items.map((item, id) => (
          <a
            key={id}
            href="filter"
            className=" block px-4 py-3 text-sm hover:text-gray dark:hover:text-white"
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
