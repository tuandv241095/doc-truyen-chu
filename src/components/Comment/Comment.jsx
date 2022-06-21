import React, { useState } from "react";
import { Link } from "react-router-dom";
import { comments } from "../../data/comments";
import { HiReply } from "react-icons/hi";
import RenderText from "../RenderText/RenderText";
import { RiEmotionHappyLine } from "react-icons/ri";
import { BiSend } from "react-icons/bi";
import Emotion from "./Emotion";

const Comment = ({ cm }) => {
  const [reply, setReply] = useState(false);
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-row relative">
      {cm.level >= 2 && (
        <div className="absolute left-[-25px] top-[0px] h-[20px] w-[24px] border-b-[2px] border-l-[2px] rounded-bl-2xl border-gray-light"></div>
      )}
      <div className="mr-2">
        <Link to={{ pathname: cm.author.url }}>
          <img
            src={cm.author.image}
            className={"rounded-full min-w-[32px] h-[32px]"}
          />
        </Link>
      </div>
      <div className="flex flex-col">
        <div className="mb-2 relative">
          <div className="flex flex-col p-2.5 rounded-3xl bg-gray-light bg-opacity-75 text-white w-fit">
            <span>
              <div className="font-semibold hover:underline decoration-2 cursor-pointer w-fit text-sm ">
                {cm.author.name}
              </div>
            </span>
            <span className="text-sm">
              <RenderText text={cm.body.text} />
            </span>
          </div>
          <div className="absolute bottom-[-14px] right-1">
            <Emotion reactors={cm.feedback.reactors} />
          </div>
        </div>
        <div className="flex text-xs font-semibold space-x-4 pl-2.5 pb-1">
          <span className="hover:underline cursor-pointer">Thích</span>
          <span
            className="hover:underline cursor-pointer"
            onClick={() => setReply(true)}
          >
            Phản hồi
          </span>
          <span className="hover:underline cursor-pointer">26 phút</span>
        </div>
        {cm.feedback.comments.length > 0 && !show && (
          <div className="flex flex-row p-2.5 space-x-2 relative">
            <HiReply className="rotate-180" />
            <span
              className="text-sm font-medium hover:underline cursor-pointer"
              onClick={() => {
                setShow(true);
                setReply(true);
              }}
            >
              {cm.feedback.comments.length} phản hồi
            </span>
            <div className="absolute left-[-33px] top-[0px] h-[20px] w-[24px] border-b-[2px] border-l-[2px] rounded-bl-2xl border-gray-light"></div>
          </div>
        )}
        {show &&
          cm.feedback.comments.map((cm) => <Comment cm={comments[cm - 1]} />)}
        <div
          className={
            "flex flex-row relative space-x-2 p-2.5 " + (reply ? "" : "hidden")
          }
        >
          <input
            className="border text-sm bg-white h-8 pl-4 pr-8 rounded-full focus:outline-none w-full "
            type="search"
            name="search"
            placeholder={"Trả lời " + cm.author.name}
          />
          <button
            type="submit"
            className="absolute right-12 text-xl top-1 mt-3 mr-2"
          >
            <RiEmotionHappyLine />
          </button>
          <button
            type="submit"
            className="absolute right-6 text-xl top-1 mt-3 mr-2"
          >
            <BiSend />
          </button>
          <div className="absolute left-[-33px] top-[0px] h-[26px] w-[24px] border-b-[2px] border-l-[2px] rounded-bl-2xl border-gray-light"></div>
        </div>
      </div>
      {(cm.feedback.comments.length > 0 || reply) && (
        <div className="absolute w-[2px] left-[15px] top-[35px] h-[calc(100%_-_75px)] bg-gray-light"></div>
      )}
    </div>
  );
};

export default Comment;
