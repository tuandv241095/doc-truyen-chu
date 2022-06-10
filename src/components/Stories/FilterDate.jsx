import React, { useState } from "react";

const FilterDate = ({ select, children, show, setShow }) => {
  const handleShow = () => setShow(!show);
  return (
    <div className="flex flex-col text-left w-full">
      <button
        type="button"
        className="inline-flex justify-center ml-auto rounded-md border border-orange text-orange font-semibold shadow-sm px-2 py-2 text-xs"
        id="menu-button"
        onClick={handleShow}
        aria-expanded="true"
        aria-haspopup="true"
      >
        {select}
        <svg
          className="-mr-1 ml-2 h-4 w-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
        >
          <path
            fillRule="evenodd"
            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      <div
        className={
          show
            ? "origin-top-right relative w-full rounded-md shadow-lg ring-opacity-5 focus:outline-none"
            : "hidden"
        }
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="menu-button"
        tabIndex="-1"
      >
        <ul
          className="absolute right-0 py-1 mt-2 w-40 flex flex-col border-orange border rounded-md bg-white dark:bg-dark"
          role="none"
        >
          {children}
        </ul>
      </div>
    </div>
  );
};

export default FilterDate;
