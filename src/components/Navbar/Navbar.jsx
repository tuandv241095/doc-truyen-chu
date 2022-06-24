import React, { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes, FaAngleDown, FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import useDarkMode from "../../hooks/useDarkMode";
import useClickOutside from "../../hooks/useClickOutside";
import Authentication from "../Authentication/Authentication";
import MobileSearch from "./Mobile/MobileSearch";
import SideBar from "./Mobile/SideBar";
import LeftMenu from "./Menu/LeftMenu";
import RightMenu from "./Menu/RightMenu";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../stores/slices/user.slice";

const Navbar = ({ genres, ranks }) => {
  const dispatch = useDispatch();

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

  const [notiHidden, setNotiHidden] = useState(true);
  const handleNoti = () => setNotiHidden(!notiHidden);
  const closeNoti = () => setNotiHidden(true);

  const notiRef = useRef(null);
  const bellRef = useRef(null);
  useClickOutside(notiRef, closeNoti, bellRef);

  const [sun, setSun] = useState(true);
  const handleTheme = () => setSun(!sun);

  const [setTheme, colorTheme] = useDarkMode();

  const login = () => {
    setAuth(true);
    setLeftInit(true);
  };

  const register = () => {
    setAuth(true);
    setLeftInit(false);
  };

  const user = useSelector((state) => state.user.user);

  const logout = () => {
    localStorage.removeItem("user");
    dispatch(removeUser());
    console.log(user);
    // user =
  };

  // const [user, setUser] = useState({});
  // const [userString, setUserString] = useState("");
  // useEffect(() => {
  //   setInterval(() => {
  //     const userString = localStorage.getItem("user");
  //     if (JSON.stringify(user) !== userString) {
  //       console.log(user);
  //       console.log(userString);
  //       const newUser = JSON.parse(userString);
  //       setUser(newUser);
  //     }
  //   }, 1000);
  // }, 5000);

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
        <LeftMenu genres={genres} ranks={ranks} />
        {/* Right Menu */}
        <RightMenu
          colorTheme={colorTheme}
          handleSearch={handleSearch}
          handleTheme={handleTheme}
          login={login}
          register={register}
          user={user}
          search={search}
          setTheme={setTheme}
          sun={sun}
          logout={logout}
          notiHidden={notiHidden}
          handleNoti={handleNoti}
          notiRef={notiRef}
          bellRef={bellRef}
        />

        {/* Mobile menu */}
        <SideBar
          colorTheme={colorTheme}
          genres={genres}
          handleGenre={handleGenre}
          handleRank={handleRank}
          handleTheme={handleTheme}
          mobileGenre={mobileGenre}
          mobileRank={mobileRank}
          nav={nav}
          ranks={ranks}
          setTheme={setTheme}
          sideBarRef={sideBarRef}
          sun={sun}
          login={login}
          register={register}
          user={user}
        />
        {/* Mobile search */}
        <MobileSearch
          nav={nav}
          search={search}
          mobileSearchRef={mobileSearchRef}
        />
      </div>
      {/* Signin/Signup */}
      {auth && (
        <Authentication
          authenRef={authenRef}
          leftInit={leftInit}
          closeFunc={closeAuth}
        />
      )}
    </div>
  );
};

export default Navbar;
