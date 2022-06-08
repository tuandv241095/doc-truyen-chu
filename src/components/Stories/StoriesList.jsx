import React from "react";

const StoriesList = ({ children }) => {
  return (
    <div className="grid xl:grid-cols-2 gap-2 md:gap-4 lg:gap-9">
      {children}
    </div>
  );
};

export default StoriesList;
