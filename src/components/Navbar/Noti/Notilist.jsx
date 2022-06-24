import React from "react";

const Notilist = ({ notiList, notiRef }) => {
  return (
    <div
      ref={notiRef}
      className="absolute origin-t top-[72px] max-h-[calc(100vh_-_80px)] scrollbar -translate-x-1/2 bg-white dark:bg-dark rounded-b-xl ring-1 ring-gray-light ring-opacity-5"
    >
      {notiList.map((noti) => (
        <div className="m-2 p-2 flex rounded-md hover:bg-gray-light hover:bg-opacity-50 cursor-pointer">
          <span className="mr-2 flex justify-center items-center ">
            {noti.user && (
              <img
                src={noti.user.photo}
                className="w-[30px] h-[30px] m-1 rounded-full"
              />
            )}
            {noti.story && (
              <img
                src={noti.story.poster.poster150}
                className="w-[30px] h-10 m-1 shadow-md"
              />
            )}
          </span>
          <div className=" text-sm w-[250px]">
            <span className="line-clamp-2">{noti.text}</span>
            <span className="line-clamp-1">{noti.time}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Notilist;
