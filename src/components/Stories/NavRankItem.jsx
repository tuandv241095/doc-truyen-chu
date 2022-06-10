import React from "react";

const NavRankItem = ({ href, isActive, item, func }) => {
  return (
    <li className={isActive ? "" : "border-b border-orange"}>
      <a
        className={
          "inline-block py-2 px-4 font-semibold text-center text-xs h-full " +
          (isActive
            ? "text-gray-dark dark:text-white border-l border-t border-r rounded-t border-gray-dark dark:border-gray-light"
            : "")
        }
        href={href}
        onClick={() => func(item)}
      >
        {item}
      </a>
    </li>
  );
};

export default NavRankItem;
