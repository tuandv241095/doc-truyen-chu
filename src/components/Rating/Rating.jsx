import React from "react";

const Rating = ({ number, count }) => {
  const a = Math.round((number % 1) * 27);
  const width = "after:w-[" + a + "px]";
  const stars = [];
  for (var i = 1; i <= 5; i++) {
    stars.push(
      <span
        className={
          "before:content-['★'] inline-block text-[30px] w-[27px] " +
          (i <= number
            ? "text-[#ffc000] "
            : i === Math.ceil(number)
            ? "after:content-['★'] after:text-[#ffc000] after:text-[30px] after:ml-[-27px] after:absolute after:overflow-hidden " +
              width
            : "")
        }
      ></span>
    );
  }
  return (
    <div className="flex items-center justify-center gap-3">
      <div>{stars}</div>
      <div className="text-xs">
        {number} /5 ({count} Đánh giá)
      </div>
    </div>
  );
};

export default Rating;
