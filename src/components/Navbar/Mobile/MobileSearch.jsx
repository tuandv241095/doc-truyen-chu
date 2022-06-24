import React from "react";
import { BsSearch } from "react-icons/bs";

const MobileSearch = ({ nav, search, mobileSearchRef }) => {
  return (
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
  );
};

export default MobileSearch;
