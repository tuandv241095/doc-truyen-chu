import React from "react";
import StoryItem from "../Stories/StoryItem";
import Story from "../Story.jsx/Story";
import StoryList from "../Story.jsx/StoryList";
import SectionHeader from "./Header/SectionHeader";

const RecommendList = ({ items }) => {
  return (
    <div className="space-y-3">
      {/* <span className="font-semibold text-md">Biên tập viên đề cử</span> */}
      <SectionHeader name={"Biên Tập Viên Đề Cử"} />
      <StoryList>
        {items.map((story, id) => (
          <div className={id > 3 ? "hidden xl:block" : ""}>
            <Story key={story.id} story={story} size={1} />
          </div>
        ))}
      </StoryList>
    </div>
  );
};

export default RecommendList;
