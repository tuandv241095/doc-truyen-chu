import React from "react";

const Banner = () => {
  return (
    <div className="h-[500px] min-w-[350px] pt-[72px]">
      <span></span>
      <span className="absolute z-10 left-0 w-full min-w-[350px] top-[72px] h-[400px] bg-no-repeat bg-cover bg-[url(https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ)]"></span>
      <span className="absolute z-20 left-0 w-full min-w-[350px] top-[272px] h-[200px] bg-no-repeat bg-cover bg-top bg-gradient-to-b from-[#ffffff00] to-white dark:to-dark"></span>
      <span className="absolute z-20 left-0 w-full min-w-[350px] top-[472px] h-[150px] bg-no-repeat bg-cover bg-top bg-white dark:bg-dark"></span>
      <span className="absolute z-20 left-0 w-full min-w-[350px] top-[622px] h-[500px] bg-no-repeat bg-cover bg-top bg-gradient-to-b to-[#ffffff00] from-white dark:from-dark"></span>
      <span className="bg-[url(https://images.unsplash.com/photo-1571771019784-3ff35f4f4277?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=800&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ)] 
        fixed top-0 bottom-0 left-[-10%] right-[-10%] z-[1] bg-cover bg-center opacity-[20%] pointer-events-none"
      ></span>
            
    </div>
  );
};

export default Banner;
