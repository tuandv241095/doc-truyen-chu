import React from "react";
import { Link } from "react-router-dom";

const UserDropdown = () => {
  const logout = () => {
    return localStorage.removeItem("user");
  };
  const userInterfaces = [
    {
      text: "Thông tin cá nhân",
      link: "/user/info",
    },
    {
      text: "Tủ truyện",
      link: "/user/tu-truyen",
    },
    {
      text: "Cài đặt",
      link: "/user/setup",
    },
  ];
  return (
    <div className="hidden origin-top-left absolute right-0 top-[72px] w-56 rounded-b-md shadow-lg dark:shadow-gray-light bg-white dark:bg-dark text-gray-light ring-1 ring-gray-light ring-opacity-5 focus:outline-none group-hover:block">
      <div className="py-1 grid grid-cols-1" role="none">
        {userInterfaces.map((item, id) => (
          <Link
            key={id}
            to={{ pathname: item.link }}
            className=" block px-4 py-3 text-sm hover:text-gray dark:hover:text-white"
            id={"menu-item-" + id}
          >
            {item.text}
          </Link>
        ))}
        <Link
          key={4}
          to={{}}
          className=" block px-4 py-3 text-sm hover:text-gray dark:hover:text-white"
          onClick={logout}
        >
          Đăng xuất
        </Link>
      </div>
    </div>
  );
};

export default UserDropdown;
