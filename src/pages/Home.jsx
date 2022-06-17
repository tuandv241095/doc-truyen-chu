import React from "react";
import HighlyAppreciated from "../components/Section/HighlyAppreciated";
import NewStories from "../components/Section/NewStories";
import Rank from "../components/Section/Rank";
import Reading from "../components/Section/Reading";
import RecommendList from "../components/Section/Recommend";
import Trending from "../components/Section/Trending";
import NewUpdate from "../components/Section/NewUpdate";
import { stories } from "../data/stories";
import { listRanks } from "../data/listRanks";

const Home = () => {
  return (
    <div className="page flex flex-col">
      <div className="grid  grid-cols-6 gap-6 mb-16">
        <div className="md:col-start-5 col-span-6 md:col-span-2">
          <Reading
            mini
            readingItems={stories.slice(0, 5)}
            followingItems={stories.slice(3, 8)}
          />
        </div>
        <div className="col-span-6 lg:col-start-5 lg:col-span-2">
          <Trending items={stories} />
        </div>
        <div className="md:col-start-1 md:row-start-1 row-span-2 col-span-6 md:col-span-4">
          <RecommendList items={stories} />
        </div>
      </div>
      <div className="mb-4">
        <Rank
          listRanks={listRanks.map((list, id) => ({
            ...list,
            items: stories
              .sort(() => Math.random() - 0.5)
              .map((i, id) => ({
                item: i,
                rank: id,
                score: Math.floor(Math.random() * 1000),
              })),
          }))}
        />
      </div>
      <div className="mb-16">
        <NewUpdate />
      </div>
      <div className="grid grid-cols-6 gap-8">
        <div className="col-span-6 md:col-span-6 lg:col-span-2">
          <NewStories items={stories} />
        </div>
        <div className="col-span-6 lg:col-span-4">
          <HighlyAppreciated items={stories.slice(0, 6)} />
        </div>
      </div>
    </div>
  );
};

export default Home;
