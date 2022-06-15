import React from "react";
import StoriesList from "./StoriesList";
import StoryItem from "./StoryItem";

const Recommend = ({ items }) => {
  return (
    <div className="space-y-3">
      {/* <span className="font-semibold text-md">Biên tập viên đề cử</span> */}
      <div className="flex justify-between items-center">
        <span className="text-md font-semibold">Biên tập viên đề cử</span>
        <span className="text-xs hover:text-my-theme cursor-pointer">
          Xem tất cả
        </span>
      </div>
      <StoriesList>
        {items.map((story, id) => (
          <div className={id > 3 ? "hidden xl:block" : ""}>
            <StoryItem key={story.id} story={story} mini={true} />
          </div>
        ))}
      </StoriesList>
    </div>
  );
};

export default Recommend;
