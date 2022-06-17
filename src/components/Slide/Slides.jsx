import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import SectionHeader from "../Section/Header/SectionHeader";
import Slide from "./Slide";
import SlideInfo from "./SlideInfo";

const Slides = ({ items, name }) => {
  const [slideIndex, setSlideIndex] = useState(0);

  const prev = () => {
    setSlideIndex(slideIndex === 0 ? items.length - 1 : slideIndex - 1);
  };

  const next = () => {
    setSlideIndex((slideIndex + 1) % items.length);
  };

  return (
    <div className="grid grid-cols-6 bg-gray-light bg-opacity-20 rounded-md h-full">
      <div className="col-span-6 p-4">
        <SectionHeader name={name} />
      </div>
      <div className="col-span-6 md:col-span-3 lg:col-span-6 p-4">
        <div className="flex justify-center overflow-hidden h-[150px] items-center ">
          <div className="slides relative grid">
            <button
              className="absolute top-[40%] w-[20%] h-[20%] left-[-50%] bg-opacity-0 text-white  border-none focus:outline-none z-10 "
              onClick={prev}
            >
              <FaArrowLeft />
            </button>

            {[...items, ...items, ...items].map((slide, i) => {
              let offset = items.length + (slideIndex - i);
              return <Slide slide={slide} offset={offset} key={i} />;
            })}
            <button
              className="absolute top-[40%] w-[20%] h-[20%] right-[-50%] bg-opacity-0 text-white  border-none focus:outline-none z-10 "
              onClick={next}
            >
              <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="col-span-6 md:col-span-3 lg:col-span-6 p-4 flex items-center">
        <SlideInfo slide={items[slideIndex]} />
      </div>
    </div>
  );
};

export default Slides;
