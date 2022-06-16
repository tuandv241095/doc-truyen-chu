import React, { useState } from 'react'
import Pagination from '../Pagination/Pagination';
import ReadingStory from '../ReadingStory/ReadingStory';

const Reading = ({readingItems, followingItems, mini}) => {
  const [active, setActive] = useState(0);
  return (
    <div className="space-y-3">
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
      {active ===0 && <div className="flex flex-col">
        {readingItems.map((item) => (
          <ReadingStory story={item} type={1} />
        ))}
      </div>}
      {active ===1 && <div className="flex flex-col">
        {followingItems.map((item) => (
          <ReadingStory story={item} type={2} />
        ))}
      </div>}
      {mini ? (
        <div className="flex justify-end text-xs hover:text-my-theme pr-[8px]">
          <span className="cursor-pointer">Xem tất cả</span>
        </div>
      ) : (
        <Pagination />
      )}
    </div>
  )
}

export default Reading