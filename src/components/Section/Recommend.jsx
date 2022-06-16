import React from "react";
import Story from "../Story.jsx/Story";
import SectionHeader from "./Header/SectionHeader";

const RecommendList = ({ items }) => {
  return (
    <div className="space-y-3">
      <SectionHeader name={"Biên Tập Viên Đề Cử"} />
      <div className="grid grid-rows-4 sm:grid-cols-2 md:grid-cols-1 lg:grid-cols-2 gap-2 lg:gap-3 xl:gap-6">
        {items.map((story, id) => (
          <div className={id > 3 ? "hidden sm:block md:hidden lg:block" : ""}>
            <Story key={story.id} story={story} size={1} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecommendList;
