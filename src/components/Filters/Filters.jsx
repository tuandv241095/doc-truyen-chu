import React, { useCallback, useState, useEffect } from "react";
import Badge from "./Badge";
import ListBadge from "./ListBadge";
import SelectedBadge from "./SelectedBadge";
import { GoSettings } from "react-icons/go";
import { FaTimes } from "react-icons/fa";

const Filters = ({ filters }) => {
  const [selected, setSelected] = useState([]);
  const [openFilter, setOpenFilter] = useState(false);
  const handleFilter = () => {
    if (!openFilter) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
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
      <div className="hidden lg:flex flex-col divide-y">
        {selected.length > 0 && (
          <ListBadge type={"Đã chọn"}>
            {selected.map((s) => (
              <SelectedBadge func={remove} name={s} key={s} />
            ))}
          </ListBadge>
        )}
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

      {/* Mobile */}
      <div className="lg:hidden">
        <span
          className="text-xs font-bold inline-flex gap-1 items-center border px-2 py-2 cursor-pointer rounded-lg"
          onClick={handleFilter}
        >
          <GoSettings /> Bộ lọc
        </span>
        {selected.length > 0 && (
          <ListBadge type={""}>
            {selected.map((s) => (
              <SelectedBadge func={remove} name={s} key={s} />
            ))}
          </ListBadge>
        )}
      </div>

      <div
        className={
          "fixed top-[72px] left-0 bg-white dark:bg-dark h-screen w-full lg:hidden scrollbar " +
          (openFilter ? "" : "hidden")
        }
      >
        <div className="fixed z-50 top-[72px] bg-white dark:bg-dark shadow-lg dark:shadow-gray-light left-0 w-full h-[72px] grid grid-cols-3 items-center">
          <span></span>
          <span className="font-bold text-center">Bộ lọc</span>
          <span>
            <FaTimes
              className="float-right mr-5 w-4 h-4 hover:cursor-pointer"
              onClick={handleFilter}
            />
          </span>
        </div>
        <div className="flex flex-col p-10 pt-[72px] divide-y">
          {selected.length > 0 && (
            <ListBadge type={"Đã chọn"}>
              {selected.map((s) => (
                <SelectedBadge func={remove} name={s} key={s} />
              ))}
            </ListBadge>
          )}
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
