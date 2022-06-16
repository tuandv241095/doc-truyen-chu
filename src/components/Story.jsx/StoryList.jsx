import React from "react";

const StoryList = ({ children }) => {
  return (
    <div className="grid sm:grid-cols-2  gap-2 md:gap-4 lg:gap-6 xl:gap-8 divide-y-2">
      {children}
    </div>
  );
};
export default StoryList;
