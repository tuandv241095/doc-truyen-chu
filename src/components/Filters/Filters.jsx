import React, { useCallback, useState, useEffect } from "react";
import Badge from "./Badge";
import ListBadge from "./ListBadge";
import SelectedBadge from "./SelectedBadge";
import { GoSettings } from "react-icons/go";

const Filters = ({ filters }) => {
  const [selected, setSelected] = useState([]);
  const [openFilter, setOpenFilter] = useState(false);
  const handleFilter = () => {
    setOpenFilter(!openFilter);
  };

  const add = (text) => {
    setSelected([...selected.filter((s) => s !== text), text]);
  };
  const remove = (text) => {
    setSelected(selected.filter((s) => s !== text));
  };
  return (
    <div className="flex flex-col">
      <span
        className="lg:hidden text-md font-semibold text-dark dark:text-white inline-flex gap-1 items-center py-2 cursor-pointer rounded-lg"
        onClick={handleFilter}
      >
        Bộ lọc <GoSettings />
      </span>
      <div className="flex flex-col divide-y">
        {selected.length > 0 && (
          <ListBadge type={"Đã chọn"}>
            {selected.map((s) => (
              <SelectedBadge func={remove} name={s} key={s} />
            ))}
          </ListBadge>
        )}
        <div className={"flex-col divide-y "+(openFilter?"":"hidden lg:flex")}>
        {filters.map((filter) => (
          <ListBadge type={filter.type}>
            {filter.items.map((item) => (
              <Badge
                func={add}
                isSelected={selected.includes(item.name)}
                name={item.name}
                key={item.id}
              />
            ))}
          </ListBadge>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Filters;
