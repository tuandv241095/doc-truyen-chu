import React, { useMemo, useState } from "react";
import { FaSortNumericDown, FaSortNumericUp } from "react-icons/fa";

const ChapterList = ({ list }) => {
  const [sort, setsort] = useState(true);
  return (
    <div className="p-8 space-y-2">
      <div className="flex justify-between items-center text-lg">
        <span>Danh sách chương</span>
        {sort ? (
          <FaSortNumericDown
            className="cursor-pointer"
            onClick={() => {
              setsort(!sort);
            }}
          />
        ) : (
          <FaSortNumericUp
            className="cursor-pointer"
            onClick={() => setsort(!sort)}
          />
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
        {sort &&
          list.map((c) => <span className="line-clamp-1 text-sm">{c}</span>)}
        {!sort &&
          []
            .concat(list)
            .reverse()
            .map((c) => <span className="line-clamp-1 text-sm">{c}</span>)}
      </div>
    </div>
  );
};

export default ChapterList;
