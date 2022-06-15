import React from "react";

const Banner = () => {
  return (
    <div className="banner">
      <span className="absolute z-[1] left-0 w-full min-w-[350px] top-[272px] h-[188px] bg-no-repeat bg-cover bg-top bg-gradient-to-b from-[#ffffff00] to-white dark:to-dark"></span>
      <span className="absolute z-0 left-0 w-full min-w-[350px] top-[72px] h-[388px] bg-no-repeat bg-cover bg-[url('https://picsum.photos/400/800')]"></span>
    </div>
  );
};

export default Banner;
