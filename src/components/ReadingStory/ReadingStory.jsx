import React from "react";
import { AiFillRead } from "react-icons/ai";
import { FaBell, FaTrash } from "react-icons/fa";
import { Link } from "react-router-dom";

const ReadingStory = ({ story, type }) => {
  return (
    <div className="flex p-[8px] justify-between space-x-4">
      <div className="flex space-x-2">
        <div className="">
          <img
            className="h-[40px] min-w-[30px] shadow-md shadow-gray-light"
            src={story.img}
          />
        </div>
        <div className="flex flex-col space-y-1">
          <Link
            to="/"
            className="dark:text-white text-dark hover:text-my-theme dark:hover:text-my-theme font-semibold text-xs line-clamp-1"
          >
            {story.name}
          </Link>
          {type === 1 && (
            <span className="text-xs line-clamp-1">
              Đã đọc: {story.read}/{story.countChap}
            </span>
          )}
          {type === 2 && (
            <span className="text-xs line-clamp-1">
              Số chương: {story.countChap}
            </span>
          )}
        </div>
      </div>
      <div className="flex space-x-2 justify-end items-center">
        <Link to="/">
          <AiFillRead className="cursor-pointer w-3 h-3 hover:text-my-theme" />
        </Link>
        <FaBell className="cursor-pointer w-3 h-3 hover:text-my-theme" />
        <FaTrash className="cursor-pointer w-3 h-3 hover:text-my-theme" />
      </div>
    </div>
  );
};

export default ReadingStory;
