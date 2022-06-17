import React, { useState } from "react";
import Pagination from "../Pagination/Pagination";
import ReadingStory from "../ReadingStory/ReadingStory";

const Reading = ({ readingItems, followingItems, mini }) => {
  const [active, setActive] = useState(0);
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center border-b border-dark dark:border-white">
        <div className="flex space-x-2 items-center">
          <div
            className={
              "text-md font-semibold cursor-pointer pb-1 border-b-[3px] " +
              (active === 0
                ? "border-dark dark:border-white text-dark dark:text-white"
                : "border-white dark:border-dark")
            }
            onClick={() => setActive(0)}
          >
            <span>Đang đọc</span>
          </div>
          <div
            className={
              "text-md font-semibold cursor-pointer pb-1 border-b-[3px] " +
              (active === 1
                ? "border-dark dark:border-white text-dark dark:text-white"
                : "border-white dark:border-dark")
            }
            onClick={() => setActive(1)}
          >
            <span>Đánh dấu</span>
          </div>
        </div>
        {mini && (
          <div className="flex justify-end text-xs hover:text-my-theme">
            <span className="cursor-pointer">Xem tất cả</span>
          </div>
        )}
      </div>
      {active === 0 && (
        <div className="flex flex-col">
          {readingItems.map((item) => (
            <ReadingStory story={item} type={1} />
          ))}
        </div>
      )}
      {active === 1 && (
        <div className="flex flex-col">
          {followingItems.map((item) => (
            <ReadingStory story={item} type={2} />
          ))}
        </div>
      )}
      {!mini && <Pagination />}
    </div>
  );
};

export default Reading;
