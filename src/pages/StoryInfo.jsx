import React from "react";
import { useParams } from "react-router-dom";
import ChapterList from "../components/ChapterList/ChapterList";
import Description from "../components/Description/Description";
import {
  randomInterval,
  randomText,
} from "../components/RandomData/RandomData";
import Reviews from "../components/Reviews/Reviews";
import StoryFullInfo from "../components/Section/StoryFullInfo";
import { stories } from "../data/stories";

const StoryInfo = () => {
  const { id } = useParams();
  let listChapter = [];
  for (var i = 1; i <= stories.find((s) => s.id === id).countChap; i++) {
    listChapter.push(
      "Chương " + i + ": " + randomText(1, randomInterval(2, 12))
    );
  }
  return (
    <div className="page">
      {/* <StoryFullInfo info={stories.find((s) => s.id === id)} /> */}
      {/* <Description
        text={stories.find((s) => s.id === id).description}
        list1={stories}
        list2={stories}
      /> */}
      {/* <ChapterList list={listChapter} /> */}
      <Reviews />
    </div>
  );
};

export default StoryInfo;
