import React from "react";
import { Link } from "react-router-dom";

const ListItem = ({ items, show }) => {
  return (
    <ul className={!show ? "hidden" : "flex flex-col w-full"}>
      {items.map((item) => (
        <Link to="/filter">
          <li
            key={item.id}
            className="py-2 px-4 hover:bg-gray-light text-sm font-semibold hover:cursor-pointer hover:text-white dark:hover:text-dark rounded-md"
          >
            {item.name}
          </li>
        </Link>
      ))}
    </ul>
  );
};

export default ListItem;
