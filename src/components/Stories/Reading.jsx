import React from "react";
import MiniItem from "./MiniItem";

const Reading = ({ items }) => {
  return (
    <div className="flex flex-col">
      {items.map((item) => (
        <MiniItem item={item} key={item.name} />
      ))}
    </div>
  );
};

export default Reading;
