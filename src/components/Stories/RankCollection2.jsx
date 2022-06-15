import React, { useEffect, useRef, useState } from "react";
import {
  AiFillEye,
  AiOutlineVerticalLeft,
  AiOutlineVerticalRight,
} from "react-icons/ai";
import ListRank from "./ListRank";

const items = [
  {
    name: "Đây là cái tên thứ nhất này",
    author: "Đây là tác giả",
    genre: "Tiên hiệp",
    score: 8000,
  },
  {
    name: "Đây là cái tên",
    author: "Đây là tác giả",
    genre: "Tiên hiệp",
    score: 8000,
  },
  {
    name: "Đây là cái tên",
    author: "Đây là tác giả",
    genre: "Tiên hiệp",
    score: 8000,
  },
  {
    name: "Đây là cái tên",
    author: "Đây là tác giả",
    genre: "Tiên hiệp",
    score: 8000,
  },
  {
    name: "Đây là cái tên",
    author: "Đây là tác giả",
    genre: "Tiên hiệp",
    score: 8000,
  },
  {
    name: "Đây là cái tên",
    author: "Đây là tác giả",
    genre: "Tiên hiệp",
    score: 8000,
  },
  {
    name: "Đây là cái tên",
    author: "Đây là tác giả",
    genre: "Tiên hiệp",
    score: 8000,
  },
  {
    name: "Đây là cái tên",
    author: "Đây là tác giả",
    genre: "Tiên hiệp",
    score: 8000,
  },
  {
    name: "Đây là cái tên",
    author: "Đây là tác giả",
    genre: "Tiên hiệp",
    score: 8000,
  },
  {
    name: "Đây là cái tên",
    author: "Đây là tác giả",
    genre: "Tiên hiệp",
    score: 8000,
  },
];

const work = [
  {
    text: "Thinh hành tuần",
  },
  {
    text: "Đọc nhiều tuần",
  },
  {
    text: "Đề cử tuần",
  },
  {
    text: "Bình luận nhiều tuần",
  },
];

let count = 0;
let slideInterval;

const RankCollection2 = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slideRef = useRef();
  const removeAnimation = () => {
    slideRef.current.classList.remove("fade-anim");
  };

  useEffect(() => {
    slideRef.current.addEventListener("animationend", removeAnimation);
    slideRef.current.addEventListener("mouseenter", pauseSlider);
    slideRef.current.addEventListener("mouseleave", startSlider);

    startSlider();
    return () => {
      pauseSlider();
    };
    // eslint-disable-next-line
  }, []);

  const startSlider = () => {
    slideInterval = setInterval(() => {
      handleOnNextClick();
    }, 3000);
  };

  const pauseSlider = () => {
    clearInterval(slideInterval);
  };

  const handleOnNextClick = () => {
    count = (count + 1) % work.length;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };
  const handleOnPrevClick = () => {
    const productsLength = work.length;
    count = (currentIndex + productsLength - 1) % productsLength;
    setCurrentIndex(count);
    slideRef.current.classList.add("fade-anim");
  };

  const handleOnSelectClick = (select) => {
    setCurrentIndex(select);
    slideRef.current.classList.add("fade-anim");
  };
  return (
    <div>
      <div ref={slideRef} className="w-full select-none relative ">
        <div className="h-[635px] px-6">
          <ListRank
            items={items}
            text={work[currentIndex].text}
            color="text-my-theme"
            icon={<AiFillEye />}
          />
        </div>
        <div className="absolute w-[38px] top-1/2 -left-2 transform -translate-y-1/2 flex justify-between items-center">
          <button
            className="text-my-theme p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
            onClick={handleOnPrevClick}
          >
            <AiOutlineVerticalRight size={30} />
          </button>
        </div>
        <div className="absolute w-[38px] top-1/2 -right-2 transform -translate-y-1/2 flex justify-between items-center">
          <button
            className="text-my-theme p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
            onClick={handleOnNextClick}
          >
            <AiOutlineVerticalLeft size={30} />
          </button>
        </div>
        <div className="flex absolute -top-4 left-1/2 space-x-3 -translate-x-1/2">
          {work.map((w, i) => (
            <button
              type="button"
              onClick={() => handleOnSelectClick(i)}
              className={
                (currentIndex !== i ? "bg-gray-light " : "bg-my-theme ") +
                "w-6 h-1 rounded-full hover:bg-my-theme"
              }
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RankCollection2;
