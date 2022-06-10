import React from "react";
import StoriesList from "./StoriesList";
import StoryItem from "./StoryItem";

const Recommend = ({ items }) => {
  return (
    <div className="space-y-2">
      <span className="font-bold text-md">Biên tập viên đề cử</span>
      <StoriesList>
        {items.map((story) => (
          <StoryItem key={story.id} story={story} />
        ))}
      </StoriesList>
    </div>
  );
};

export default Recommend;
