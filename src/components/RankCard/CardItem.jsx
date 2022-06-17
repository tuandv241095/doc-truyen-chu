import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { FaMedal } from "react-icons/fa";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { Link } from "react-router-dom";
import BookCover from "../BookCover/BookCover";

const CardItem = ({ item, rank, score, icon, color }) => {
  return (
    <div className="group flex flex-auto min-w-[120px] space-x-3 pt-2.5 px-4 pb-0 ">
      <div className="flex">
        {rank === 0 && <FaMedal className="text-gold w-6 h-6" />}
        {rank === 1 && <FaMedal className="text-gray-light w-6 h-6" />}
        {rank === 2 && <FaMedal className="text-my-theme w-6 h-6 " />}
        {rank > 2 && (
          <div className="flex w-6 justify-center">
            {" "}
            <span className="text-sm font-bold">{rank + 1}</span>
          </div>
        )}
      </div>
      <div
        className={
          "flex flex-auto justify-between border-gray-light border-opacity-30 pb-2.5 space-x-6 " +
          (rank <= 8 ? "border-b" : "")
        }
      >
        <div className="flex flex-col space-y-1">
          <Link to="/">
            <span
              className={
                "text-xs text-dark dark:text-white hover:text-my-theme line-clamp-1 " +
                (rank === 0 ? "font-semibold" : "group-hover:font-semibold")
              }
            >
              {item.name}
            </span>
          </Link>
          <div
            className={
              "flex flex-col text-xs space-y-1.5 " +
              (rank === 0 ? "block" : "hidden group-hover:flex ")
            }
          >
            <div
              className={
                "flex flex-row font-semibold items-center space-x-1 text-xs " +
                color
              }
            >
              <span className=" line-clamp-1">{score}</span>
              {icon}
            </div>
            <Link
              to="/"
              className="flex space-x-1 items-center hover:text-my-theme"
            >
              <BsFillPersonFill />
              <span className="line-clamp-1">{item.author}</span>
            </Link>
            <Link
              to="/"
              className="flex space-x-1 items-center hover:text-my-theme"
            >
              <MdOutlineLibraryBooks />
              <span className="line-clamp-1">{item.category}</span>
            </Link>
          </div>
        </div>
        <div
          className={
            "duration-300 " + (rank === 0 ? "hidden" : "group-hover:hidden")
          }
        >
          <span className="text-sm">{score}</span>
        </div>
        <div
          className={
            "min-w-[60px] duration-300 cursor-pointer " +
            (rank === 0 ? "block" : "hidden group-hover:block ")
          }
        >
          <BookCover img={item.img} />
        </div>
      </div>
    </div>
  );
};

export default CardItem;
