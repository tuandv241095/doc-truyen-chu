import React from "react";
import { Link } from "react-router-dom";
import { FaBell, FaTrash } from "react-icons/fa";
import { AiFillRead } from "react-icons/ai";

const MiniItem = ({ item }) => {
  return (
    <div className="flex p-[8px] justify-between">
      <div className="flex space-x-2">
        <div className="">
          <img
            className="h-[44px] min-w-[33px] shadow-md shadow-gray-light"
            src="https://picsum.photos/id/1043/300/400"
          />
        </div>
        <div className="flex flex-col space-y-1">
          <Link
            to="/"
            className="hover:text-my-theme font-semibold text-sm line-clamp-1"
          >
            {item.name}
          </Link>
          <span className="text-sm line-clamp-1">{item.text}</span>
        </div>
      </div>
      <div className="flex space-x-2 justify-end items-center">
        <Link to="/">
          <AiFillRead className="cursor-pointer w-3.5 h-3.5 hover:text-my-theme" />
        </Link>
        <FaBell className="cursor-pointer w-3.5 h-3.5 hover:text-my-theme" />
        <FaTrash className="cursor-pointer w-3.5 h-3.5 hover:text-my-theme" />
      </div>
    </div>
  );
};

export default MiniItem;
