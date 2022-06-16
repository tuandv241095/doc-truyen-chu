import React from "react";

const SectionHeader = ({ name }) => {
  return (
    <div className="flex justify-between items-center">
      <span className="text-md font-semibold">{name}</span>
      <span className="text-xs hover:text-my-theme cursor-pointer">
        Xem tất cả
      </span>
    </div>
  );
};

export default SectionHeader;
