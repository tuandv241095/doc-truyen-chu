import React, { useState } from "react";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { useMediaQuery } from "react-responsive";
import RankCard from "../RankCard/RankCard";

const Rank = ({ listRanks }) => {
  const [active, setActive] = useState(0);
  const handleOnPrevClick = () => {
    setActive((active + listRanks.length - 1) % listRanks.length);
  };
  const handleOnNextClick = () => {
    setActive((active + 1) % listRanks.length);
  };
  const handleOnSelectClick = (select) => {
    setActive(select);
  };
  const isSm = useMediaQuery({ query: "(min-width: 640px)" });
  const isLg = useMediaQuery({ query: "(min-width: 1024px)" });

  return (
    <div className="grid grid-flow-col grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-4 md:gap-6 lg:gap-8 px-8 justify-between relative">
      {listRanks.map((list, id) => (
        <div
          className={
            "h-[610px] " +
            (isLg
              ? active === id
                ? "col-start-1"
                : active === (id + listRanks.length - 1) % listRanks.length
                ? "col-start-2"
                : active === (id + listRanks.length - 2) % listRanks.length
                ? "col-start-3"
                : "hidden"
              : isSm
              ? active === id
                ? "col-start-1"
                : active === (id + listRanks.length - 1) % listRanks.length
                ? "col-start-2"
                : "hidden"
              : active === id
              ? ""
              : "hidden")
          }
        >
          <RankCard
            name={list.name}
            ranks={list.items}
            color={list.color}
            icon={list.icon}
          />
        </div>
      ))}
      {listRanks.length > (isLg ? 3 : isSm ? 2 : 1) && (
        <div className="absolute w-[38px] top-[280px] -left-2 transform -translate-y-1/2 flex justify-between items-center">
          <button
            className="text-my-theme p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
            onClick={handleOnPrevClick}
          >
            <FaArrowLeft size={30} />
          </button>
        </div>
      )}
      {listRanks.length > (isLg ? 3 : isSm ? 2 : 1) && (
        <div className="absolute w-[38px] top-[280px] -right-2 transform -translate-y-1/2 flex justify-between items-center">
          <button
            className="text-my-theme p-1 rounded-full bg-opacity-50 cursor-pointer hover:bg-opacity-100 transition"
            onClick={handleOnNextClick}
          >
            <FaArrowRight size={30} />
          </button>
        </div>
      )}
      {listRanks.length > (isLg ? 3 : isSm ? 2 : 1) && (
        <div className="flex absolute -top-4 left-1/2 space-x-3 -translate-x-1/2">
          {listRanks.map((list, id) => (
            <button
              type="button"
              onClick={() => handleOnSelectClick(id)}
              className={
                ((active === id) |
                (active === (id + listRanks.length - 1) % listRanks.length &&
                  isSm) |
                ((active === (id + listRanks.length - 1) % listRanks.length ||
                  active === (id + listRanks.length - 2) % listRanks.length) &&
                  isLg)
                  ? "bg-my-theme "
                  : "bg-gray-light ") + "w-6 h-1 rounded-full hover:bg-my-theme"
              }
            ></button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Rank;
