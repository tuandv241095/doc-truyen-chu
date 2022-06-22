import React from "react";
import Stars from "./Stars";

const Rating = ({ number, count }) => {
  return (
    <div className="flex items-center justify-center gap-3">
      <Stars number={number} size={"text-2xl"} />
      <div className="text-sm">
        {number} /5 ({count} Đánh giá)
      </div>
    </div>
  );
};

export default Rating;
