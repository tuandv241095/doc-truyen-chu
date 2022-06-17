import { AiFillEye } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";
import { FaComment } from "react-icons/fa";
import { GiRose } from "react-icons/gi";
import { MdSportsScore } from "react-icons/md";

export const listRanks = [
  {
    name: "Thịnh hành tuần",
    icon: <BiTrendingUp />,
    color: "text-red",
  },
  {
    name: "Đọc nhiều tuần",
    icon: <AiFillEye />,
    color: "text-blue",
  },
  {
    name: "Đề cử tuần",
    icon: <GiRose />,
    color: "text-green",
  },
  {
    name: "Đánh giá tuần",
    icon: <MdSportsScore />,
    color: "text-my-theme",
  },
  {
    name: "Bình luận tuần",
    icon: <FaComment />,
    color: "text-my-theme",
  },
];
