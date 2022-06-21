import React from "react";

const Rating = ({ number, count }) => {
  const stars = [];
  for (var i = 1; i <= 5; i++) {
    if (i <= number)
      stars.push(<span className="text-my-theme text-2xl">★</span>);
    else {
      if (number % 1 > 0.5)
        stars.push(<span className="text-my-theme text-2xl">✯</span>);
      else stars.push(<span className="text-my-theme text-2xl">☆</span>);
    }
  }
  return (
    <div className="flex items-center justify-center gap-3">
      <div>{stars}</div>
      <div className="text-sm">
        {number} /5 ({count} Đánh giá)
      </div>
    </div>
  );
};

export default Rating;
