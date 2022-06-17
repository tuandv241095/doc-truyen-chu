import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsBook, BsDot, BsFillPenFill } from "react-icons/bs";
import { FaComments } from "react-icons/fa";
import { MdRateReview } from "react-icons/md";
import { Link } from "react-router-dom";
import Badge from "../Badge/Badge";
import BookCover from "../BookCover/BookCover";

const Story = ({ story, size, score }) => {
  return (
    <div
      className={
        "w-full flex p-1 border-b border-opacity-10 " +
        (size > 2 ? "space-x-2" : "space-x-4")
      }
    >
      <div
        className={
          (size === 1 ? "pt-1.5 min-w-[75px] h-[100px]" : "") +
          (size === 2 ? "pt-1.5 min-w-[60px] h-[80px]" : "") +
          (size === 3 ? "w-[60px] h-[80px]" : "") +
          (size === 4 ? "w-[30px] h-[40px]" : "")
        }
      >
        <Link to="/">
          {size <= 2 && <BookCover img={story.img} />}
          {size > 2 && (
            <img
              className={
                "w-full shadow-md shadow-gray-light " +
                (size === 3 ? "min-w-[60px]" : "") +
                (size === 4 ? "min-w-[30px]" : "")
              }
              src={story.img}
            />
          )}
        </Link>
      </div>
      <div className={"flex flex-col space-y-1"}>
        <div className="line-clamp-1 dark:text-white text-dark font-bold text-sm hover:text-my-theme dark:hover:text-my-theme">
          <Link to="/">{story.name}</Link>
        </div>
        {score && (
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center text-xs hover:text-dark dark:hover:text-white space-x-1"
            >
              <span className="sr-only">Star</span>
              <span className="text-xs font-semibold">{story.rate}</span>
              <AiFillStar className="text-my-theme" />
            </Link>
            <BsDot className="w-3 -mr-1" />
            <Link
              to="/"
              className="flex items-center text-xs hover:text-dark dark:hover:text-white space-x-1"
            >
              <span className="sr-only">Rates</span>
              <span className="text-xs font-semibold">{story.countRate}</span>
              <MdRateReview />
            </Link>
            <BsDot className="w-3 -mr-1" />
            <Link
              to="/"
              className="flex items-center text-xs hover:text-dark dark:hover:text-white space-x-1"
            >
              <span className="sr-only">Comments</span>
              <span className="text-xs font-semibold">
                {story.countComment}
              </span>
              <FaComments className="text-blue" />
            </Link>
            <BsDot className="w-3 -mr-1" />
            <Link
              to="/"
              className="flex items-center text-xs hover:text-dark dark:hover:text-white space-x-1"
            >
              <span className="sr-only">Chapters</span>
              <span className="text-xs font-semibold">{story.countChap}</span>
              <BsBook className="" />
            </Link>
          </div>
        )}
        {size < 4 && (
          <div
            className={
              "max-h-[75px] text-xs " +
              (size >= 2 ? "line-clamp-2" : "line-clamp-3")
            }
          >
            {story.description}
          </div>
        )}
        <div className="flex justify-between text-xs items-center ">
          <div className="flex items-center space-x-1 group hover:text-my-theme">
            <BsFillPenFill className="group-hover:text-dark dark:group-hover:text-white" />
            <p className="w-full line-clamp-1">
              <Link to="/">{story.author}</Link>
            </p>
          </div>
          {size < 4 && (
            <div className="flex min-w-[100px] justify-end">
              <Badge name={story.category} link={"filter"} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Story;
