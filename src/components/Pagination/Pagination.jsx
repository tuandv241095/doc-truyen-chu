import React from "react";
import {
  FaAngleDoubleLeft,
  FaAngleLeft,
  FaAngleDoubleRight,
  FaAngleRight,
} from "react-icons/fa";

const Pagination = () => {
  return (
    <div className="">
      <ul className="flex justify-end list-reset font-sans gap-1 items-center">
        <li>
          <button
            className="border p-2 hover:text-white hover:bg-gray-dark dark:hover:bg-gray-light disabled:opacity-20"
            disabled
          >
            <FaAngleDoubleLeft />
          </button>
        </li>
        <li>
          <button className="border p-2 hover:text-white hover:bg-gray-dark dark:hover:bg-gray-light disabled:opacity-20">
            <FaAngleLeft />
          </button>
        </li>
        <li>
          <button className="border p-2 hover:text-white hover:bg-gray-dark dark:hover:bg-gray-light disabled:opacity-20">
            <FaAngleRight />
          </button>
        </li>
        <li>
          <button className="border p-2 hover:text-white hover:bg-gray-dark dark:hover:bg-gray-light disabled:opacity-20">
            <FaAngleDoubleRight />
          </button>
        </li>
        <li className="text-sm">
          <span>Page </span>
          <span className="font-semibold">1 of 10</span>
          <span>| Go to: </span>
          <input
            className="w-[60px] border p-1 font-bold rounded-md focus:outline-none dark:bg-dark"
            type="number"
            defaultValue="1"
          />
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
