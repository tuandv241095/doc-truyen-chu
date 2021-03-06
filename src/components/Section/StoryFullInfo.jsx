import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { BiGlassesAlt } from "react-icons/bi";
import { AiFillFlag } from "react-icons/ai";
import { GiRose } from "react-icons/gi";
import InfoBadge from "../Badge/InfoBadge";
import Rating from "../Rating/Rating";

const StoryFullInfo = ({ info }) => {
  return (
    <div className="flex flex-col md:flex-row p-2 px-4 md:px-8 gap-6">
      <div className="flex items-center justify-center">
        <img
          className="min-w-[120px] md:min-w-[210px] cursor-pointer shadow-xl shadow-gray dark:shadow-gray-light"
          src={info.img}
          alt=""
        />
      </div>
      <div className="flex flex-col items-center justify-center md:items-start md:justify-start space-y-2">
        <span className="text-md md:text-xl font-bold cursor-pointer hover:text-my-theme ">
          {info.name}
        </span>
        <div className="flex items-center space-x-1 hover:text-dark dark:hover:text-white cursor-pointer">
          <BsFillPersonFill />
          <span>{info.author}</span>
        </div>
        <div className="text-center md:text-left">
          {info.badges.map((badge) => (
            <InfoBadge info={badge} />
          ))}
        </div>
        <div className="grid grid-cols-4 gap-12 text-center text-sm">
          <div>
            <span className="block">{info.countChap}</span>
            <span className="block">Chương</span>
          </div>
          <div>
            <span className="block">{info.countChap}</span>
            <span className="block">Chương/ tuần</span>
          </div>
          <div>
            <span className="block">{info.countChap}</span>
            <span className="block">Lượt đọc</span>
          </div>
          <div>
            <span className="block">{info.countChap}</span>
            <span className="block">Đề cử</span>
          </div>
        </div>
        <div className="space-y-1">
          <div className="flex justify-center md:justify-start">
            <Rating number={5} count={100} />
          </div>
          <div className="flex flex-col md:flex-row space-x-3 space-y-3 md:space-y-0">
            <div className="text-center md:col-span-1">
              <span className="py-2 px-16 md:px-6 border cursor-pointer hover:text-my-theme hover:bg-white border-my-theme bg-my-theme text-white rounded-xl flex justify-center items-center gap-1">
                <BiGlassesAlt />
                Đọc truyện
              </span>
            </div>
            <div className="flex !mx-0 md:!ml-3 space-x-3">
              <span className="py-2 px-6 border cursor-pointer hover:text-white hover:bg-my-theme border-my-theme text-my-theme rounded-xl flex justify-center items-center gap-1">
                <AiFillFlag /> Đánh dấu
              </span>
              <span className="py-2 px-6 border cursor-pointer hover:text-white hover:bg-my-theme border-my-theme text-my-theme rounded-xl flex justify-center items-center gap-1">
                <GiRose /> Đề cử
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StoryFullInfo;
