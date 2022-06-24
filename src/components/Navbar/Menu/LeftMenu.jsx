import React from "react";
import { BiCategory } from "react-icons/bi";
import { FaAngleDown } from "react-icons/fa";
import { RiBarChart2Line } from "react-icons/ri";
import { Link } from "react-router-dom";
import Dropdown from "../Dropdown/Dropdown";

const LeftMenu = ({ genres, ranks }) => {
  return (
    <div className="hidden md:block">
      <div className="hidden md:flex md:justify-between">
        <div className="px-4 flex justify-between items-center font-bold">
          <Link to="/">DTC</Link>
        </div>
        <div className="group px-4 flex justify-between items-center font-bold relative cursor-pointer hover:text-gray dark:hover:text-white hover:shadow-lg dark:shadow-gray-light py-[24px]">
          <BiCategory className="mr-1" />
          <span className="mr-1">Thể Loại</span>
          <span className="group-hover:rotate-180 duration-300">
            <FaAngleDown />
          </span>
          <Dropdown items={genres} />
        </div>
        <div className="group px-4 flex justify-between items-center font-bold relative cursor-pointer hover:text-gray dark:hover:text-white hover:shadow-lg dark:shadow-gray-light py-[24px]">
          <RiBarChart2Line className="mr-1" />
          <span className="mr-1">Xếp Hạng</span>
          <span className="group-hover:rotate-180 duration-300">
            <FaAngleDown />
          </span>
          <Dropdown items={ranks} />
        </div>
      </div>
    </div>
  );
};

export default LeftMenu;
