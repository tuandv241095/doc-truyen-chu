import React from "react";
import { BiCategory } from "react-icons/bi";
import { BsFillCloudMoonFill, BsFillSunFill } from "react-icons/bs";
import { FaAngleDown } from "react-icons/fa";
import { HiOutlineUser, HiOutlineUserAdd } from "react-icons/hi";
import { RiBarChart2Line } from "react-icons/ri";
import ListItem from "./ListItem";

const SideBar = ({
  nav,
  sideBarRef,
  setTheme,
  colorTheme,
  handleTheme,
  sun,
  handleGenre,
  handleRank,
  mobileRank,
  ranks,
  mobileGenre,
  genres,
  login,
  register,
  user,
}) => {
  return (
    <div
      ref={sideBarRef}
      className={
        !nav
          ? "hidden"
          : "absolute md:hidden top-[72px] left-0 w-full min-w-[175px] max-w-[250px] h-[calc(100vh_-_72px)] pb-[72px] scrollbar bg-white dark:bg-dark text-gray-light dark:text-white border-t border-gray-light shadow-lg dark:shadow-gray-light"
      }
    >
      <ul className="px-2.5 pt-2 pb-3 space-y-1">
        <li
          onClick={() => {
            setTheme(colorTheme);
            handleTheme();
          }}
          className="flex justify-between items-center cursor-pointer px-3 py-2 rounded-md text-base font-bold hover:bg-gray-light hover:text-white hover:shadow-lg dark:hover:text-dark"
        >
          <div className="flex justify-between items-center space-x-1">
            {!sun ? <BsFillSunFill /> : <BsFillCloudMoonFill />}
            <span>Dark mode</span>
          </div>
        </li>
        <li
          onClick={handleGenre}
          className="flex justify-between items-center cursor-pointer px-3 py-2 rounded-md text-base font-bold hover:bg-gray-light hover:text-white hover:shadow-lg dark:hover:text-dark"
        >
          <div className="flex justify-between items-center space-x-1">
            <BiCategory />
            <span>Genre</span>
          </div>
          <span
            className={mobileGenre ? "rotate-180 duration-300" : "duration-300"}
          >
            <FaAngleDown />
          </span>
        </li>
        <li className="px-3">
          <ListItem items={genres} show={mobileGenre} />
        </li>
        <li
          onClick={handleRank}
          className="flex justify-between items-center cursor-pointer px-3 py-2 rounded-md text-base font-bold hover:bg-gray-light hover:text-white hover:shadow-lg dark:hover:text-dark"
        >
          <div className="flex justify-between items-center space-x-1">
            <RiBarChart2Line />
            <span>Rank</span>
          </div>
          <span
            className={mobileRank ? "rotate-180 duration-300" : "duration-300"}
          >
            <FaAngleDown />
          </span>
        </li>
        <li className="px-3">
          <ListItem items={ranks} show={mobileRank} />
        </li>
        {!user && (
          <li
            onClick={login}
            className="flex justify-between items-center cursor-pointer px-3 py-2 rounded-md text-base font-bold hover:bg-gray-light hover:text-white hover:shadow-lg dark:hover:text-dark"
          >
            <div className="flex justify-between items-center space-x-1">
              <HiOutlineUser />
              <span>Login</span>
            </div>
          </li>
        )}
        {!user && (
          <li
            onClick={register}
            className="flex justify-between items-center cursor-pointer px-3 py-2 rounded-md text-base font-bold hover:bg-gray-light hover:text-white hover:shadow-lg dark:hover:text-dark"
          >
            <div className="flex justify-between items-center space-x-1">
              <HiOutlineUserAdd />
              <span>Register</span>
            </div>
          </li>
        )}
      </ul>
    </div>
  );
};

export default SideBar;
