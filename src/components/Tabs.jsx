import React from "react";

const Tabs = ({ items, select, setSelect }) => {
  return (
    <div className="flex border-b w-full justify-center">
      <ul className="list-reset flex">
        {items.map((item) => (
          <li className={"mr-1 " + item === select ? "-mb-px" : ""}>
            <a
              className={
                "bg-white inline-block py-2 px-4 font-semibold text-xs h-full " +
                (item === select
                  ? "text-blue-dark border-l border-t border-r rounded-t"
                  : "text-blue hover:text-blue-darker")
              }
              href="#"
              onClick={() => setSelect(item)}
            >
              {item}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tabs;
