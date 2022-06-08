import React from "react";
import Badge from "./Badge";

const ListBadge = ({ items }) => {
  return (
    <div className="border-b pb-2">
      <p className="text-sm font-semibold">Da chon</p>
      <div className="flex w-full flex-wrap">
        {items.map((item) => (
          <Badge
            name={item}
            color={"text-[#b78a28]"}
            bg={"bg-white"}
            border={"border-[#b78a28]"}
          />
        ))}
      </div>
    </div>
  );
};

export default ListBadge;
