import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes, FaAngleDown, FaBell } from "react-icons/fa";
import { HiOutlineUserAdd, HiOutlineUser } from "react-icons/hi";
import { BsSearch } from "react-icons/bs";
import { BiCategory } from "react-icons/bi";
import { RiBarChart2Line } from "react-icons/ri";
import { BsFillSunFill, BsFillCloudMoonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown/Dropdown";
import ListItem from "./ListItem";
import useDarkMode from "../../hooks/useDarkMode";
import useClickOutside from "../../hooks/useClickOutside";
import Authentication from "../Authentication/Authentication";
import UserDropdown from "./Dropdown/UserDropdown";

const Navbar = ({ genres, ranks, userInterfaces }) => {
  const [leftInit, setLeftInit] = useState(true);
  const [auth, setAuth] = useState(false);
  const closeAuth = () => setAuth(false);
  const authenRef = useRef(null);
  useClickOutside(authenRef, closeAuth);

  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);
  const closeNav = () => setNav(false);

  const sideBarRef = useRef(null);
  useClickOutside(sideBarRef, closeNav);

  const [search, setSearch] = useState(false);
  const handleSearch = () => setSearch(!search);
  const closeSearch = () => setSearch(false);

  const mobileSearchRef = useRef(null);
  useClickOutside(mobileSearchRef, closeSearch);

  const [mobileGenre, setMobileGenre] = useState(false);
  const handleGenre = () => setMobileGenre(!mobileGenre);

  const [mobileRank, setMobileRank] = useState(false);
  const handleRank = () => setMobileRank(!mobileRank);

  const [sun, setSun] = useState(true);
  const handleTheme = () => setSun(!sun);

  const [setTheme, colorTheme] = useDarkMode();

  const [user, setUser] = useState({});
  useEffect(() => {
    setInterval(() => {
      const userString = localStorage.getItem("user");
      const user = JSON.parse(userString);
      setUser(user);
    }, []);
  }, 5000);

  return (
    <div className="fixed top-0 w-[100%] h-[72px] bg-white dark:bg-dark text-gray-light shadow-lg dark:shadow-gray-light z-50 font-roboto">
      <div className="max-w-[1280px] mx-auto p-4 md:px-2 flex justify-between items-center w-full h-full">
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

        {/* Right Menu */}
        <div className="md:flex">
          <ul className="md:flex justify-between items-center">
            <li
              onClick={() => {
                setTheme(colorTheme);
                handleTheme();
              }}
              className="px-4 md:px-2 lg:px-4 hidden md:flex cursor-pointer"
            >
              {sun ? <BsFillSunFill /> : <BsFillCloudMoonFill />}
            </li>
            <li>
              <input
                type="search"
                className="hidden md:flex md:w-[150px] lg:w-[200px] flex-auto px-4 py-1 border rounded-full focus:outline-none focus:shadow-lg"
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
            <li className="hidden md:block px-4 md:px-2 lg:px-4 cursor-pointer">
              <BsSearch />
            </li>
            {user && (
              <li>
                <FaBell className="mr-4 w-5 h-5 cursor-pointer" />
              </li>
            )}
            {user && (
              <li className="px-4 group relative hidden md:flex items-center w-full font-bold cursor-pointer hover:text-gray dark:hover:text-white hover:shadow-lg dark:shadow-gray-light py-[24px]">
                <span className="mr-2">
                  <img src={user.photo} className="w-7 h-7 rounded-full" />
                </span>
                {user.name}
                <UserDropdown />
              </li>
            )}
            {!user && (
              <li className="px-4 hidden md:flex items-center w-full font-bold cursor-pointer hover:text-gray dark:hover:text-white hover:shadow-lg dark:shadow-gray-light py-[24px]">
                <span
                  onClick={() => {
                    setAuth(true);
                    setLeftInit(true);
                  }}
                >
                  Login
                </span>
              </li>
            )}
            {!user && (
              <li className="px-4 hidden md:flex items-center w-full font-bold cursor-pointer hover:text-gray dark:hover:text-white hover:shadow-lg dark:shadow-gray-light py-[24px]">
                <span
                  onClick={() => {
                    setAuth(true);
                    setLeftInit(false);
                  }}
                >
                  Register
                </span>
              </li>
            )}
          </ul>
        </div>

        {/* Mobile menu */}
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
          ref={mobileSearchRef}
          className={
            !search
              ? "hidden"
              : "absolute md:hidden top-[72px] right-0 w-full h-[50px] bg-white dark:bg-dark px-2 border-t border-gray-light flex items-center flex-wrap shadow-lg dark:shadow-gray-light" +
                (!nav ? "" : " max-w-[calc(100%_-_250px)] border-l")
          }
        >
          <div className="relative text-gray-light flex-auto">
            <input
              className="border bg-white h-10 pl-4 pr-8 rounded-full focus:outline-none w-full "
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
      {auth && <Authentication authenRef={authenRef} leftInit={leftInit} />}
    </div>
  );
};

export default Navbar;
