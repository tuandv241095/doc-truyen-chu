import React from "react";
import { Link } from "react-router-dom";

const NavRankItem = ({ href, isActive, item, func }) => {
  return (
    <li className={isActive ? "" : "border-b border-my-theme"}>
      <Link
        className={
          "inline-block py-2 px-4 font-semibold text-center text-xs h-full " +
          (isActive
            ? "text-my-theme border-l border-t border-r rounded-t border-my-theme"
            : "")
        }
        to={href}
        onClick={() => func(item)}
      >
        {item}
      </Link>
    </li>
  );
};

export default NavRankItem;
