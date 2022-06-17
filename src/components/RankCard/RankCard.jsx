import React from "react";
import SectionHeader from "../Section/Header/SectionHeader";
import CardItem from "./CardItem";

const RankCard = ({ ranks, name, icon, color }) => {
  return (
    <div className="bg-gray-light bg-opacity-20 rounded-md">
      <div className="px-4 py-3">
        <SectionHeader name={name} />
      </div>

      {ranks.map((r) => (
        <CardItem {...r} icon={icon} color={color} />
      ))}
    </div>
  );
};

export default RankCard;
