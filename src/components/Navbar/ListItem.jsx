import React from "react";

const ListItem = ({ items, show }) => {
  return (
    <ul className={!show ? "hidden" : "flex flex-col w-full"}>
      {items.map((item) => (
        <li
          key={item.id}
          className="py-2 px-4 hover:bg-gray-light text-sm font-semibold hover:cursor-pointer hover:text-white dark:hover:text-dark rounded-md"
        >
          {item.name}
        </li>
      ))}
    </ul>
  );
};

export default ListItem;
