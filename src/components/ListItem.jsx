import React from "react";

const ListItem = ({ items, show }) => {
  return (
    <ul
      className={
        !show ? "hidden" : "flex flex-col w-full bg-orange dark:bg-dark"
      }
    >
      {items.map((item) => (
        <li className="py-2 px-4 hover:bg-gray-700 text-sm font-semibold hover:text-white hover:cursor-pointer rounded-md">
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default ListItem;
