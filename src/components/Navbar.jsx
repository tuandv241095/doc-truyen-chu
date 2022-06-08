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
import useDarkMode from "../hooks/useDarkMode";

const genre = [
  {
    name: "Tat ca",
  },
  {
    name: "Tien hiep",
    id: "1",
  },
  {
    name: "Kiem hiep",
    id: "2",
  },
  {
    name: "Huyen huyen",
    id: "3",
  },
  {
    name: "He thong",
    id: "4",
  },
  {
    name: "Phan phai",
    id: "5",
  },
  {
    name: "Dong nhan",
    id: "6",
  },
  {
    name: "khoa huyen",
    id: "7",
  },
  {
    name: "Do thi",
    id: "8",
  },
  {
    name: "Da su",
    id: "9",
  },
  {
    name: "Ky ao",
    id: "10",
  },
];
const rank = [
  {
    name: "Thinh hanh",
    path: "thinh-hanh",
  },
  {
    name: "Luot doc",
    path: "luot-doc",
  },
  {
    name: "De cu",
    path: "de-cu",
  },
  {
    name: "Danh gia",
    path: "danh-gia",
  },
  {
    name: "Luot thich",
    path: "luot-thich",
  },
  {
    name: "Binh luan",
    path: "binh-luan",
  },
  {
    name: "Tang thuong",
    path: "Tang-thuong",
  },
  {
    name: "Danh gia",
    path: "danh-gia",
  },
  {
    name: "Luot thich",
    path: "luot-thich",
  },
  {
    name: "Binh luan",
    path: "binh-luan",
  },
  {
    name: "Tang thuong",
    path: "Tang-thuong",
  },
];

const Navbar = () => {
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
    <div className="fixed w-full min-w-[500px] h-[72px] bg-orange dark:bg-dark text-dark dark:text-orange">
      <div className="max-w-[1280px] mx-auto p-4 flex justify-between items-center w-full h-full">
        {/* Hamburger */}
        <div
          onClick={handleNav}
          className="flex md:hidden z-10 hover:cursor-pointer w-[48px] justify-center"
        >
          {!nav ? <FaBars /> : <FaTimes />}
        </div>

        <div className="md:hidden text-dark dark:text-orange font-bold">
          <Link to="/">DTC</Link>
        </div>

        {/* Left Menu */}
        <div className="hidden md:flex">
          <ul className="hidden md:flex">
            <li className="px-4 flex justify-between items-center w-full text-dark dark:text-orange font-bold">
              <Link to="/">DTC</Link>
            </li>
            <li className="group px-4 flex justify-between items-center w-full text-dark dark:text-orange font-bold relative cursor-pointer hover:bg-dark-orange hover:text-white dark:hover:bg-orange dark:hover:text-white hover:cursor-pointer py-[24px]">
              <BiCategory className="mr-1" />
              <span className="mr-1">Genre</span>
              <span className="group-hover:rotate-180 duration-300">
                <FaAngleDown />
              </span>

              <Dropdown items={genre} />
            </li>
            <li className="group px-4 flex justify-between items-center w-full text-dark dark:text-orange font-bold relative cursor-pointer hover:bg-dark-orange hover:text-white dark:hover:bg-orange dark:hover:text-white hover:cursor-pointer py-[24px]">
              <RiBarChart2Line className="mr-1" />
              <span className="mr-1">Rank</span>
              <span className="group-hover:rotate-180 duration-300">
                <FaAngleDown />
              </span>
              <Dropdown items={rank} />
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
              {!sun ? <BsFillSunFill /> : <BsFillCloudMoonFill />}
            </li>
            <li>
              <input
                type="search"
                className="hidden md:flex px-2 py-1 border-2 rounded-lg border-dark focus:outline-none"
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
            <li className="px-4 hidden md:flex items-center w-full text-dark dark:text-orange font-bold hover:text-white dark:hover:text-white hover:cursor-pointer py-[24px]">
              <span>Login</span>
            </li>
            <li className="px-4 hidden md:flex items-center w-full text-dark dark:text-orange font-bold hover:text-white dark:hover:text-white hover:cursor-pointer py-[24px]">
              <span>Register</span>
            </li>
          </ul>
        </div>

        {/* Mobile menu */}
        <div
          className={
            !nav
              ? "hidden"
              : "absolute md:hidden top-[72px] left-0 w-full max-w-[250px] h-[calc(100vh_-_72px)] pb-[72px] bg-orange dark:bg-dark border-t scrollbar"
          }
        >
          <ul className="px-2.5 pt-2 pb-3 space-y-1">
            <li
              onClick={() => {
                setTheme(colorTheme);
                handleTheme();
              }}
              className="flex justify-between items-center text-dark dark:text-orange hover:bg-dark-orange dark:hover:bg-dark-orange hover:text-white dark:hover:text-white hover:cursor-pointer px-3 py-2 rounded-md text-base font-bold"
            >
              <div className="flex justify-between items-center space-x-1">
                {!sun ? <BsFillSunFill /> : <BsFillCloudMoonFill />}
                <span>Dark mode</span>
              </div>
            </li>
            <li
              onClick={handleGenre}
              className="flex justify-between items-center text-dark dark:text-orange hover:bg-dark-orange dark:hover:bg-dark-orange hover:text-white dark:hover:text-white hover:cursor-pointer px-3 py-2 rounded-md text-base font-bold"
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
              <ListItem items={genre} show={mobileGenre} />
            </li>
            <li
              onClick={handleRank}
              className="flex justify-between items-center text-dark dark:text-orange hover:bg-dark-orange dark:hover:bg-dark-orange hover:text-white dark:hover:text-white hover:cursor-pointer px-3 py-2 rounded-md text-base font-bold"
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
              <ListItem items={rank} show={mobileRank} />
            </li>
            <li className="flex justify-between text-dark dark:text-orange hover:bg-dark-orange dark:hover:bg-dark-orange hover:text-white dark:hover:text-white hover:cursor-pointer px-3 py-2 rounded-md text-base font-bold">
              <div className="flex justify-between items-center space-x-1">
                <HiOutlineUser />
                <span>Login</span>
              </div>
            </li>
            <li className="flex justify-between text-dark dark:text-orange hover:bg-dark-orange dark:hover:bg-dark-orange hover:text-white dark:hover:text-white hover:cursor-pointer px-3 py-2 rounded-md text-base font-bold">
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
              : "absolute md:hidden top-[72px] right-0 w-full h-[50px] bg-orange dark:bg-dark px-2 border-t flex items-center flex-wrap" +
                (!nav ? "" : " max-w-[calc(100%_-_250px)] border-l")
          }
        >
          <div className="relative text-gray-600 flex-auto">
            <input
              className="border-2 border-gray-300  bg-white  h-10 pl-2 pr-8 rounded-lg focus:outline-none w-full"
              type="search"
              name="search"
              placeholder="Search"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 mt-3 mr-2 dark:text-gray-700"
            >
              <BsSearch />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
