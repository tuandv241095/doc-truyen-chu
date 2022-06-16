import React from "react";
import { BsFillPenFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Badge from "../Badge/Badge"

const SlideInfo = ({ slide }) => {
  return (
    <div className="text-xs">
      <div className="text-center md:text-left lg:text-center text-sm font-semibold pb-2">
        <Link to="/">
          <span className="hover:text-my-theme">{slide.title}</span>
        </Link>
      </div>
      <div>
        <span className="line-clamp-3">{slide.description}</span>
      </div>
      <div className="flex justify-between pt-1">
        <div className="flex items-center space-x-1 group hover:text-my-theme">
          <BsFillPenFill className="group-hover:text-dark dark:group-hover:text-white" />
          <p className="w-full line-clamp-1 ">
            <Link to="/">{slide.author}</Link>
          </p>
        </div>
        <div className="flex min-w-[140px] justify-end">
          <Badge name={slide.subtitle} link={"filter"} />
        </div>
      </div>
    </div>
  );
};

export default SlideInfo;
