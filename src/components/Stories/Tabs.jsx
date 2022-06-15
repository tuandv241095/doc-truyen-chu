import React, { useState } from "react";

const Tabs = ({ items }) => {
  const [active, setActive] = useState(0);
  return (
    <div className="flex space-x-5 border-b border-my-theme">
      <div
        className={
          "text-md font-semibold cursor-pointer hover:text-my-theme pb-1 " +
          (active === 0 ? "border-b-[3px] border-my-theme text-my-theme" : "")
        }
        onClick={() => setActive(0)}
      >
        <span>Đang đọc</span>
      </div>
      <div
        className={
          "text-md font-semibold cursor-pointer hover:text-my-theme pb-1 " +
          (active === 1 ? "border-b-[3px] border-my-theme text-my-theme" : "")
        }
        onClick={() => setActive(1)}
      >
        <span>Đánh dấu</span>
      </div>
    </div>
  );
};

export default Tabs;
