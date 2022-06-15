import React from "react";
import ListRank from "./ListRank";
import { AiFillEye } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";

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
const RankCollection = () => {
  return (
    <div className="px-16 sm:px-0 md:px-10 xl:px-0 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 md:gap-10 lg:gap-16 xl:gap-6 justify-between">
      <ListRank
        items={items}
        text="Đọc nhiều tuần"
        color="text-my-theme"
        icon={<AiFillEye />}
      />
      <ListRank
        items={items}
        text="Đọc nhiều tuần"
        color="text-[#ba3535]"
        icon={<BiTrendingUp />}
      />
      <ListRank
        items={items}
        text="Đọc nhiều tuần"
        color="text-my-theme"
        icon={<AiFillEye />}
      />
      <ListRank
        items={items}
        text="Đọc nhiều tuần"
        color="text-my-theme"
        icon={<AiFillEye />}
      />
    </div>
  );
};

export default RankCollection;
