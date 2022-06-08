import React from "react";

const NavRank = ({ children }) => {
  return (
    <div className="flex w-full justify-center">
      <div className="border-b flex-auto border-orange">
        <span className="sr-only">left</span>
      </div>
      <ul className="list-reset flex">{children}</ul>
      <div className="border-b flex-auto border-orange">
        <span className="sr-only">right</span>
      </div>
    </div>
  );
};

export default NavRank;
