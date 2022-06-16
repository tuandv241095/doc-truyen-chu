import React from "react";
import { BsFillPenFill } from "react-icons/bs";
import { FaComments } from "react-icons/fa";
import { Link } from "react-router-dom";
import BookCover from "../BookCover/BookCover";
import StoryBadge from "./StoryBadge";

const StoryItem = ({ story, mini, supermini }) => {
  return (
    <div className="w-full flex space-x-4 lg:space-x-4 justify-between pb-4 border-b border-orange">
      <div
        className={
          "pt-1.5 " +
          (mini | supermini
            ? "min-w-[60px] h-[80px]"
            : "min-w-[90px] h-[120px]")
        }
      >
        <Link to="/">
          <BookCover img={"https://picsum.photos/300/400"} />
        </Link>
      </div>
      <div className="flex flex-col">
        <div className="line-clamp-1 font-bold text-sm hover:text-my-theme">
          <Link to="/">{story.name}</Link>
        </div>
        {!supermini && (
          <div className="flex items-center space-x-1">
            <div className="flex items-center">
              <span className="sr-only">Star rating</span>
              <svg
                className="w-4 h-4 text-gold"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
              <p className="ml-1 text-xs font-bold">{story.rate}</p>
              <span className="w-0.5 h-0.5 mx-1 bg-dark rounded-full dark:bg-gray-light"></span>
              <Link
                to="#"
                className="text-xs text-gray-500 font-sm  underline hover:no-underline hover:text-dark dark:hover:text-white line-clamp-1"
              >
                {story.countRate} Đánh giá
              </Link>
            </div>
            <em>| </em>
            <div className="flex items-center text-xs hover:text-dark dark:hover:text-white">
              <span className="sr-only">Comments</span>
              <FaComments className="text-blue" />
              <span className="w-0.5 h-0.5 mx-1 bg-dark rounded-full dark:bg-gray-light"></span>
              <Link
                to="#"
                className="text-xs text-gray-500 font-sm underline hover:no-underline line-clamp-1"
              >
                {story.countComment} Bình luận
              </Link>
            </div>
          </div>
        )}
        <div
          className={
            "max-h-[75px] text-xs " +
            (mini | supermini ? "line-clamp-2" : "line-clamp-3")
          }
        >
          {story.description}
        </div>
        <div className="flex items-center text-xs space-x-2 pt-1 md:hidden lg:flex">
          <div className="text-my-theme">{story.status}</div>
          <span className="w-0.5 h-0.5 mx-1 bg-dark rounded-full dark:bg-gray-light"></span>
          <div className="text-my-theme hover:underline">
            <Link to="/">{story.countChap} Chương</Link>
          </div>
        </div>
        <div className="flex justify-between text-xs items-center ">
          <div className="flex items-center space-x-1 group hover:text-my-theme">
            <BsFillPenFill className="group-hover:text-dark dark:group-hover:text-white" />
            <p className="w-full line-clamp-1">
              <Link to="/">{story.author}</Link>
            </p>
          </div>
          <div className="flex min-w-[100px] justify-end">
            <StoryBadge name={story.category} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryItem;
