import React, { useState } from "react";
import Pagination from "../Pagination/Pagination";
import FilterDate from "./FilterDate";
import NavRank from "./NavRank";
import NavRankItem from "./NavRankItem";
import SelectItem from "./SelectItem";
import StoriesList from "./StoriesList";
import StoryItem from "./StoryItem";

const Stories = ({ stories, ranks, filters }) => {
  const [selectRank, setSelectRank] = useState(ranks[0]);
  const [selectRange, setSelectRange] = useState(filters[0]);
  const [showSelect, setShowSelect] = useState(false);
  return (
    <div className="space-y-2">
      <NavRank>
        {ranks.map((rank) => (
          <NavRankItem
            key={rank}
            href="#"
            func={setSelectRank}
            isActive={rank === selectRank}
            item={rank}
          />
        ))}
      </NavRank>
      <FilterDate
        select={selectRange}
        show={showSelect}
        setShow={setShowSelect}
      >
        {filters.map((filter) => (
          <SelectItem
            key={filter}
            func={setSelectRange}
            item={filter}
            isActive={filter === selectRange}
            showOff={() => setShowSelect(false)}
          />
        ))}
      </FilterDate>
      <StoriesList>
        {stories.map((story) => (
          <StoryItem key={story.id} story={story} />
        ))}
      </StoriesList>
      <Pagination />
    </div>
  );
};

export default Stories;
