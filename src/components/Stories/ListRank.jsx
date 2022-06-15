import React from "react";
import { Link } from "react-router-dom";
import { FaMedal } from "react-icons/fa";
import { BsFillPersonFill } from "react-icons/bs";
import { MdOutlineLibraryBooks } from "react-icons/md";
import Book from "../Book/Book";

const ListRank = ({ items, text, icon, color }) => {
  return (
    <div className="h-[630px]">
      <div className="rounded-lg shadow-2xl shadow-gray-light ">
        <div className="flex justify-between items-center px-8 xl:px-4 py-4">
          <span className="text-md font-semibold line-clamp-1">{text}</span>
          <span className="text-xs hover:text-my-theme cursor-pointer">
            Xem tất cả
          </span>
        </div>
        {items.map((item, id) => (
          <div className="group flex flex-auto min-w-[120px] space-x-3 pt-2.5 px-8 xl:px-4 pb-0 ">
            <div className="flex">
              {id === 0 && <FaMedal className="text-gold w-6 h-6" />}
              {id === 1 && <FaMedal className="text-gray-light w-6 h-6" />}
              {id === 2 && <FaMedal className="text-my-theme w-6 h-6 " />}
              {id > 2 && (
                <div className="flex w-6 justify-center">
                  {" "}
                  <span className="text-sm font-bold">{id + 1}</span>
                </div>
              )}
            </div>
            <div
              className={
                "flex flex-auto justify-between border-gray-light border-opacity-30 pb-2.5 " +
                (id <= 8 ? "border-b" : "")
              }
            >
              <div className="flex flex-col space-y-1">
                <Link to="/">
                  <span
                    className={
                      "text-sm hover:text-my-theme line-clamp-1 " +
                      (id === 0 ? "font-semibold" : "group-hover:font-semibold")
                    }
                  >
                    {item.name}
                  </span>
                </Link>
                <div
                  className={
                    "flex flex-col text-xs space-y-1.5 " +
                    (id === 0 ? "block" : "hidden group-hover:flex ")
                  }
                >
                  <div
                    className={
                      "flex flex-row font-semibold items-center space-x-1 text-sm " +
                      color
                    }
                  >
                    <span className="line-clamp-1">{item.score}</span>
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
                    <span className="line-clamp-1">{item.genre}</span>
                  </Link>
                </div>
              </div>
              <div
                className={
                  "duration-300 " + (id === 0 ? "hidden" : "group-hover:hidden")
                }
              >
                <span className="text-sm">{item.score}</span>
              </div>
              <div
                className={
                  "min-w-[60px] duration-300 cursor-pointer " +
                  (id === 0 ? "block" : "hidden group-hover:block ")
                }
              >
                <Book img={"https://picsum.photos/id/1043/300/400"} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListRank;
