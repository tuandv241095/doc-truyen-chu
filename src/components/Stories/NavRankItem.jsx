import React from "react";

const NavRankItem = ({ href, isActive, item, func }) => {
  return (
    <li className={isActive ? "" : "border-b border-orange"}>
      <a
        className={
          "bg-white inline-block py-2 px-4 font-semibold text-xs h-full " +
          (isActive
            ? "text-orange border-l border-t border-r rounded-t border-orange"
            : "text-gray-dark hover:text-blue-darker")
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
