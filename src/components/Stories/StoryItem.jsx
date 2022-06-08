import React from "react";
import { BsFillPenFill } from "react-icons/bs";
import { FaComments } from "react-icons/fa";
import StoryBadge from "./StoryBadge";

const StoryItem = ({ story }) => {
  console.log(story);
  return (
    <div className="w-full min-w-[400px] flex space-x-4 lg:space-x-4 justify-between items-center pb-2 border-b border-orange">
      <img
        src="https://picsum.photos/300/400"
        className="w-[100px] h-[125px] hover:scale-125 duration-200 cursor-pointer"
        alt="lorem ipsum"
      />
      <div className="flex flex-col">
        <div className="line-clamp-1 font-bold text-sm">{story.name}</div>
        <div className="flex items-center">
          <div className="flex items-center">
            <span className="sr-only">Star rating</span>
            <svg
              className="w-4 h-4 text-yellow"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
            </svg>
            <p className="ml-1 text-xs font-bold">{story.rate}</p>
            <span className="w-0.5 h-0.5 mx-1 bg-dark rounded-full dark:bg-gray"></span>
            <a
              href="#"
              className="text-xs text-gray-500 font-sm  underline hover:no-underline"
            >
              {story.countRate} Đánh giá
            </a>
          </div>
          <em>|</em>
          <div className="flex items-center text-xs ">
            <span className="sr-only">Comments</span>
            <FaComments className="text-blue" />
            <span className="w-0.5 h-0.5 mx-1 bg-dark rounded-full dark:bg-gray"></span>
            <a
              href="#"
              className="text-xs text-gray-500 font-sm underline hover:no-underline"
            >
              {story.countComment} Bình luận
            </a>
          </div>
        </div>
        <div className="max-h-[75px] line-clamp-3 text-sm">
          {story.description}
        </div>
        <div className="flex items-center text-xs space-x-2 pt-1">
          <div className="text-orange">{story.status}</div>
          <span className="w-0.5 h-0.5 mx-1 bg-dark rounded-full dark:bg-gray"></span>
          <div className="text-orange">{story.countChap} Chương</div>
          <span className="w-0.5 h-0.5 mx-1 bg-dark rounded-full dark:bg-gray"></span>
          <div>{story.lastChap}</div>
        </div>
        <div className="flex justify-between text-sm ">
          <div className="flex items-center space-x-2">
            <BsFillPenFill />
            <p className="max-w-[140px] lg:max-w-[200px] line-clamp-1 text-sm">
              {story.author}
            </p>
          </div>
          <div>
            <StoryBadge
              name={story.category}
              myClassName="text-[#b78a28] bg-white border-[#b78a28]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryItem;
