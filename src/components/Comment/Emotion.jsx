import React from "react";
import { BiDislike, BiLike } from "react-icons/bi";
import {
  FaHeart,
  FaRegAngry,
  FaRegLaughSquint,
  FaRegSurprise,
} from "react-icons/fa";
import { RiEmotionSadLine } from "react-icons/ri";
import Angry from "./Icons/Angry";
import Dislike from "./Icons/Dislike";
import Haha from "./Icons/Haha";
import Heart from "./Icons/Heart";
import Like from "./Icons/Like";
import Sad from "./Icons/Sad";
import Wow from "./Icons/Wow";

const GetIcon = ({ name }) => {
  if (name === "like") return <Like />;
  else if (name === "love") return <Heart />;
  else if (name === "haha") return <Haha />;
  else if (name === "wow") return <Wow />;
  else if (name === "sad") return <Sad />;
  else if (name === "dislike") return <Dislike />;
  else if (name === "angry") return <Angry />;
};

const Emotion = ({ reactors }) => {
  const keysSorted = Object.keys(reactors).sort(function (a, b) {
    return reactors[b] - reactors[a];
  });
  return (
    <div className="flex group cursor-pointer justify-center items-center bg-gray-light text-white text-xs p-[2px] rounded-full relative">
      <div className="z-[10]">
        <GetIcon name={keysSorted[1]} />
      </div>
      <div className="z-[9] ml-[-2px]">
        <GetIcon name={keysSorted[2]} />
      </div>
      <div className="z-[8] ml-[-2px]">
        <GetIcon name={keysSorted[3]} />
      </div>
      <span className="px-1">{reactors.total}</span>
      <div className="absolute hidden group-hover:block top-[30px] bg-gray-light bg-opacity-40 rounded-xl py-2 w-full space-y-1">
        {keysSorted.map((key, id) => {
          if (reactors[key] > 0 && id != 0)
            return (
              <div className="grid grid-cols-2 justify-center items-center gap-x-2">
                <div className="justify-end items-end flex">
                  <GetIcon name={key} />
                </div>
                <span>{reactors[key]}</span>
              </div>
            );
        })}
      </div>
    </div>
  );
};

export default Emotion;
