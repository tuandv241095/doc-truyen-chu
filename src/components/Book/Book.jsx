import React from "react";

const Book = ({ img }) => {
  return (
    <div className="flex flex-col justify-center translate-z-none">
      <div className="flex items-center transform-preserve-3d perspective-500">
        <div className="-rotate-y-20 z-[5] shadow-md shadow-gray-light clear-both pt-[128%] w-[100%] h-[100%] before:absolute before:block before:top-0 before:left-0 before:w-[100%] before:h-[100%] before:border-2 before:z-10 before:opacity-90">
          <img
            className="absolute block min-w-[60px] w-full h-full top-0"
            src={img}
          />
        </div>
        <div
          className="absolute z-[4] shadow shadow-gray-light rounded-[1px] w-[calc(100%_-_20px)] h-[calc(100%_-_1px)] right-[0px] bg-white"
          style={{
            transform: "rotateY(-20deg) translateZ(-1px)",
          }}
        ></div>
        <div
          className="absolute z-[4] shadow shadow-gray-light rounded-[1px] w-[calc(100%_-_20px)] h-[calc(100%_-_2px)] right-[-1px] bg-white"
          style={{
            transform: "rotateY(-20deg) translateZ(-1px)",
          }}
        ></div>
        <div
          className="absolute z-[3] shadow shadow-gray-light rounded-[1px] w-[calc(100%_-_20px)] h-[calc(100%_-_3px)] right-[-2px] bg-white"
          style={{
            transform: "rotateY(-20deg) translateZ(-1px)",
          }}
        ></div>
        <div
          className="absolute z-[2] shadow shadow-gray-light rounded-[1px] w-[calc(100%_-_20px)] h-[calc(100%_-_4px)] right-[-3px] bg-white"
          style={{
            transform: "rotateY(-20deg) translateZ(-1px)",
          }}
        ></div>
        <div
          className="absolute z-[1] shadow shadow-gray-light rounded-[1px] w-[calc(100%_-_20px)] h-[calc(100%_-_5px)] right-[-4px] bg-white"
          style={{
            transform: "rotateY(-20deg) translateZ(-1px)",
          }}
        ></div>
        <div
          className="absolute z-[0] shadow shadow-gray-light rounded-[1px] w-[calc(100%_-_20px)] h-[calc(100%_-_6px)] right-[-5px] bg-white"
          style={{
            transform: "rotateY(-20deg) translateZ(-1px)",
          }}
        ></div>
        <div
          className="absolute z-[-1] shadow shadow-gray-light rounded-[1px] w-[calc(100%_-_20px)] h-[calc(100%_-_7px)] right-[-6px] bg-white"
          style={{
            transform: "rotateY(-20deg) translateZ(-1px)",
          }}
        ></div>
        <div
          className="absolute z-[-2] shadow shadow-gray-light rounded-[1px] w-[calc(100%_-_20px)] h-[calc(100%_-_8px)] right-[-7px] bg-white"
          style={{
            transform: "rotateY(-20deg) translateZ(-1px)",
          }}
        ></div>
        <div
          className="absolute z-[-3] right-[-9px] shadow-md shadow-gray-light clear-both pt-[128%] w-[100%] h-[100%] before:absolute before:block before:top-0 before:left-0 before:w-[100%] before:h-[100%] before:border-2 before:z-10 before:border-gray-light"
          style={{
            transform: "rotateY(-18deg) translateZ(-5px) scale(0.95)",
          }}
        >
          <img
            className="absolute block min-w-[60px] w-full h-full top-0"
            src={img}
          />
        </div>
      </div>
    </div>
  );
};

export default Book;
