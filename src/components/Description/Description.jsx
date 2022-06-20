import React from "react";
import { randomText } from "../RandomData/RandomData";
import SectionHeader from "../Section/Header/SectionHeader";
import Slides from "../Slide/Slides";
import Story from "../Story.jsx/Story";

const Description = ({ text, list1, list2 }) => {
  return (
    <div className="grid grid-cols-6">
      <div className="col-span-6 lg:col-span-4 space-y-2 p-8">
        {randomText(5, 120)
          .split("{'\n'}")
          .map((i, key) => {
            return <div key={key}>{i}</div>;
          })}
      </div>
      <div className="col-span-6 lg:col-span-2">
        <div>
          <Slides items={list1} name={"Cùng tác giả"} />
        </div>
        <div className="p-4 space-y-4">
          <SectionHeader name={"Cùng đăng bởi Dark Knight"} />
          {list2.slice(0, 5).map((s) => (
            <Story score={false} size={4} story={s} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Description;
