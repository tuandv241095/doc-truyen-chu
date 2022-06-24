import React from "react";
import { BsFillCloudMoonFill, BsFillSunFill, BsSearch } from "react-icons/bs";
import { FaBell, FaTimes } from "react-icons/fa";
import UserDropdown from "../Dropdown/UserDropdown";
import Noti from "../Noti/Noti";

const RightMenu = ({
  setTheme,
  colorTheme,
  handleTheme,
  sun,
  handleSearch,
  search,
  user,
  login,
  register,
  logout,
  notiHidden,
  handleNoti,
  notiRef,
  bellRef,
}) => {
  return (
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
        <li className="md:hidden px-4 cursor-pointer" onClick={handleSearch}>
          {!search ? <BsSearch /> : <FaTimes />}
        </li>
        <li className="hidden md:block px-4 md:px-2 lg:px-4 cursor-pointer">
          <BsSearch />
        </li>
        {user && (
          <li className="hidden md:block px-2">
            {/* <FaBell className="w-5 h-5 cursor-pointer" /> */}
            <Noti
              notiHidden={notiHidden}
              handleNoti={handleNoti}
              bellRef={bellRef}
              notiRef={notiRef}
            />
          </li>
        )}
        {user && (
          <li className="px-4 group relative hidden md:flex items-center w-full font-bold cursor-pointer hover:text-gray dark:hover:text-white hover:shadow-lg dark:shadow-gray-light py-[24px]">
            <span className="mr-2">
              <img
                src={user.photo.toString()}
                className="w-7 h-7 rounded-full"
                alt=""
              />
            </span>
            {user.name}
            <UserDropdown logout={logout} />
          </li>
        )}
        {!user && (
          <li
            onClick={login}
            className="px-4 hidden md:flex items-center w-full font-bold cursor-pointer hover:text-gray dark:hover:text-white hover:shadow-lg dark:shadow-gray-light py-[24px]"
          >
            <span>Login</span>
          </li>
        )}
        {!user && (
          <li
            onClick={register}
            className="px-4 hidden md:flex items-center w-full font-bold cursor-pointer hover:text-gray dark:hover:text-white hover:shadow-lg dark:shadow-gray-light py-[24px]"
          >
            <span>Register</span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default RightMenu;
