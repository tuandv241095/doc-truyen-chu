import React from "react";
import Reading from "../components/Section/Reading";
import RecommendList from "../components/Section/Recommend";
import Slides from "../components/Slide/Slides";
import NewUpdate from "../components/Stories/NewUpdate";
import RankCollection from "../components/Stories/RankCollection";
import RankCollection2 from "../components/Stories/RankCollection2";
import Recommend from "../components/Stories/Recommend";
import UserReading from "../components/Stories/UserReading";
import { stories } from "../data/stories";


const Home = () => {
  return (
    <div className="page flex flex-col space-y-16">
      <div className="grid grid-rows-1 grid-flow-row md:grid-flow-col grid-cols-6 gap-10">
        <div className="md:col-start-5 col-span-6 md:col-span-2">
          <Reading mini readingItems={stories.slice(0,5)} followingItems={stories.slice(3,8)}  />
        </div>
        <div className="md:col-start-1 col-span-6 md:col-span-4">
          {/* <Recommend items={stories} /> */}
          <RecommendList items={stories} />
        </div>
      </div>
      <div className="hidden sm:block">
        <RankCollection />
      </div>
      <div className="sm:hidden">
        <RankCollection2 />
      </div>
      <div>
        <NewUpdate />
      </div>
      <div className="grid grid-cols-6 gap-8">
        <div className="col-span-6 md:col-span-6 lg:col-span-2">
          <Slides />
        </div>
        <div className="col-span-6 lg:col-span-4">
          <Recommend items={stories} />
        </div>
      </div>
    </div>
  );
};

export default Home;
