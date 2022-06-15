import React from "react";
import Book from "../Book/Book";

const Carousel = ({ imgs }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <div className="m-auto w-[90px] perspective-1000 relative pt-[80px] h-[300px]">
        <div className="w-full absolute transform-preserve-3d animate-rotar-slow hover:pause cursor-pointer ">
          {imgs.map((img, id) => (
            <figure
              className="group w-full h-[120px] absolute"
              style={{
                transform: `rotateY(${id * 40}deg) translateZ(150px)`,
              }}
            >
              <img
                className="object-fill duration-300 w-full h-full group-hover:scale-110 transform border-2 shadow-lg"
                src={img}
                alt=""
              />
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
