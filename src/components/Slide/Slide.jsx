import React from "react";
import useTilt from "../../hooks/useTilt";

const Slide = ({ slide, offset }) => {
  const active = offset === 0 ? true : null;
  const ref = useTilt(active);

  return (
    <div
      ref={ref}
      className="slide"
      data-active={active}
      style={{
        "--offset": offset,
        "--dir": offset === 0 ? 0 : offset > 0 ? 1 : -1,
      }}
    >
      {/* <div
        className="slideBackground"
        style={{
          backgroundImage: `url('${slide.image}')`,
        }}
      /> */}
      <div
        className="slideContent"
        style={{
          backgroundImage: `url('${slide.image}')`,
        }}
      >
        <div className="slideContentInner">
          <h2 className="slideTitle">{slide.title}</h2>
          <h3 className="slideSubtitle">{slide.subtitle}</h3>
          <p className="slideDescription">Nhĩ Căn</p>
          {/* <p className="slideDescription line-clamp-4">{slide.description}</p> */}
        </div>
      </div>
    </div>
  );
};

export default Slide;
