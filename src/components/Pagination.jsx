import React from "react";

const Pagination = () => {
  return (
    <div className="flex flex-col items-center mb-8 px-4 mx-auto mt-8">
      <div className="font-sans flex justify-end space-x-1 select-none">
        <a
          href="#"
          className="flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md"
        >
          Previous
        </a>
        <a
          href="#"
          className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-teal-400 hover:text-white"
          style={{ transition: "all 0.2s ease" }}
        >
          1
        </a>
        <a
          href="#"
          className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-teal-400 hover:text-white"
          style={{ transition: "all 0.2s ease" }}
        >
          2
        </a>
        <a
          href="#"
          className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-teal-400 hover:text-white"
          style={{ transition: "all 0.2s ease" }}
        >
          3
        </a>
        <span className="px-4 py-2 text-gray-700  rounded-md">...</span>
        <a
          href="#"
          className="px-4 py-2 text-gray-700 bg-gray-200 rounded-md hover:bg-teal-400 hover:text-white"
          style={{ transition: "all 0.2s ease" }}
        >
          10
        </a>
        <a
          href="#"
          className="px-4 py-2 font-bold text-gray-500 bg-gray-300 rounded-md hover:bg-teal-400 hover:text-white"
          style={{ transition: "all 0.2s ease" }}
        >
          Next
        </a>
      </div>
    </div>
  );
};

export default Pagination;
