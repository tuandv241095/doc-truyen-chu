import React from "react";
import Story from "../Story.jsx/Story";

const FilterResults = ({ items }) => {
  return (
    <div className="grid sm:grid-cols-2 gap-2 lg:gap-3 xl:gap-4">
      {items.map((story, id) => (
        <div className={id > 4 ? "hidden sm:block md:hidden lg:block" : ""}>
          <Story key={story.id} story={story} size={1} score />
        </div>
      ))}
    </div>
  );
};

export default FilterResults;
