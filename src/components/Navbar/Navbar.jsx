import React, { useState } from "react";
import { FaBars, FaTimes, FaAngleDown } from "react-icons/fa";
import { HiOutlineUserAdd, HiOutlineUser } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { RiBarChart2Line } from "react-icons/ri";
import { BsFillSunFill, BsFillCloudMoonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import ListItem from "./ListItem";
import useDarkMode from "../../hooks/useDarkMode";

const Navbar = ({ genres, ranks }) => {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);

  const [search, setSearch] = useState(false);
  const handleSearch = () => setSearch(!search);

  const [mobileGenre, setMobileGenre] = useState(false);
  const handleGenre = () => setMobileGenre(!mobileGenre);

  const [mobileRank, setMobileRank] = useState(false);
  const handleRank = () => setMobileRank(!mobileRank);

  const [sun, setSun] = useState(true);
  const handleTheme = () => setSun(!sun);

  const [setTheme, colorTheme] = useDarkMode();

  return (
    <div className="fixed top-0 w-[100%] h-[72px] bg-white dark:bg-dark text-gray-light shadow-lg dark:shadow-gray-light z-10">
      <div className="max-w-[1280px] mx-auto p-4 flex justify-between items-center w-full h-full">
        {/* Hamburger */}
        <div
          onClick={handleNav}
          className="flex md:hidden z-10 hover:cursor-pointer w-[48px] justify-center"
        >
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        <div className="md:hidden font-bold">
          <Link to="/">DTC</Link>
        </div>

        {/* Left Menu */}
        <div className="hidden md:flex">
          <ul className="hidden md:flex">
            <li className="px-4 flex justify-between items-center w-full  font-bold">
              <Link to="/">DTC</Link>
            </li>
            <li className="group px-4 flex justify-between items-center w-full font-bold relative cursor-pointer hover:text-gray dark:hover:text-white hover:shadow-lg dark:shadow-gray-light py-[24px]">
              <BiCategory className="mr-1" />
              <span className="mr-1">Genre</span>
              <span className="group-hover:rotate-180 duration-300">
                <FaAngleDown />
              </span>

              <Dropdown items={genres} />
            </li>
            <li className="group px-4 flex justify-between items-center w-full font-bold relative cursor-pointer hover:text-gray dark:hover:text-white hover:shadow-lg dark:shadow-gray-light py-[24px]">
              <RiBarChart2Line className="mr-1" />
              <span className="mr-1">Rank</span>
              <span className="group-hover:rotate-180 duration-300">
                <FaAngleDown />
              </span>
              <Dropdown items={ranks} />
            </li>
          </ul>
        </div>

        {/* Right Menu */}
        <div className="md:flex">
          <ul className="md:flex justify-between items-center">
            <li
              onClick={() => {
                setTheme(colorTheme);
                handleTheme();
              }}
              className="px-4 hidden md:flex cursor-pointer"
            >
              {sun ? <BsFillSunFill /> : <BsFillCloudMoonFill />}
            </li>
            <li>
              <input
                type="search"
                className="hidden md:flex px-2 py-1 border rounded-full focus:outline-none focus:shadow-lg"
                placeholder="Search"
                aria-label="Search"
              />
            </li>
            <li
              className="md:hidden px-4 cursor-pointer"
              onClick={handleSearch}
            >
              {!search ? <BsSearch /> : <FaTimes />}
            </li>
            <li className="hidden md:block px-4 cursor-pointer">
              <BsSearch />
            </li>
            <li className="px-4 hidden md:flex items-center w-full font-bold cursor-pointer hover:text-gray dark:hover:text-white hover:shadow-lg dark:shadow-gray-light py-[24px]">
              <span>Login</span>
            </li>
            <li className="px-4 hidden md:flex items-center w-full font-bold cursor-pointer hover:text-gray dark:hover:text-white hover:shadow-lg dark:shadow-gray-light py-[24px]">
              <span>Register</span>
            </li>
          </ul>
        </div>

        {/* Mobile menu */}
        <div
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
                className={
                  mobileGenre ? "rotate-180 duration-300" : "duration-300"
                }
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
                className={
                  mobileRank ? "rotate-180 duration-300" : "duration-300"
                }
              >
                <FaAngleDown />
              </span>
            </li>
            <li className="px-3">
              <ListItem items={ranks} show={mobileRank} />
            </li>
            <li className="flex justify-between items-center cursor-pointer px-3 py-2 rounded-md text-base font-bold hover:bg-gray-light hover:text-white hover:shadow-lg dark:hover:text-dark">
              <div className="flex justify-between items-center space-x-1">
                <HiOutlineUser />
                <span>Login</span>
              </div>
            </li>
            <li className="flex justify-between items-center cursor-pointer px-3 py-2 rounded-md text-base font-bold hover:bg-gray-light hover:text-white hover:shadow-lg dark:hover:text-dark">
              <div className="flex justify-between items-center space-x-1">
                <HiOutlineUserAdd />
                <span>Register</span>
              </div>
            </li>
          </ul>
        </div>

        {/* Mobile search */}
        <div
          className={
            !search
              ? "hidden"
              : "absolute md:hidden top-[72px] right-0 w-full h-[50px] bg-white dark:bg-dark px-2 border-t border-gray-light flex items-center flex-wrap shadow-lg dark:shadow-gray-light" +
                (!nav ? "" : " max-w-[calc(100%_-_250px)] border-l")
          }
        >
          <div className="relative text-gray-light flex-auto">
            <input
              className="border bg-white h-10 pl-2 pr-8 rounded-full focus:outline-none w-full "
              type="search"
              name="search"
              placeholder="Search"
            />
            <button type="submit" className="absolute right-0 top-0 mt-3 mr-2">
              <BsSearch />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
