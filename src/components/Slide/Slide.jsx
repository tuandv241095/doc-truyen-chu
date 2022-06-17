import React from "react";
import useTilt from "../../hooks/useTilt";

const Slide = ({ slide, offset }) => {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide row-start-1 row-end-[-1] col-start-1 col-end-[-1]"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      <div
        className={
          " slideContent group border border-white w-[90px] h-[120px] grid content-center bg-cover bg-center transform-preserve-3d ease-in-out duration-500 perspective-750 opacity-50"
        }
        style={{ backgroundImage: `url('${slide.img}')` }}
      >
        <div className="slideContentInner transform-preserve-3d translate-z-2rem opacity-0">
          <h2 className="uppercase m-0 text-sm text-white">{slide.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default Slide;
