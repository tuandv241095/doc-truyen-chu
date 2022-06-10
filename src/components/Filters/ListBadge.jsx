import React from "react";

const ListBadge = ({ type, children }) => {
  return (
    <div className="flex flex-col py-3 space-y-1">
      <div>
        <span className="text-sm font-bold">{type}</span>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default ListBadge;
