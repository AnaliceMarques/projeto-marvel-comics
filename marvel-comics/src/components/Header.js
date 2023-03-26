import React from "react";
import MarvelLogo from "../image/marvel-logo.png";

export const Header = () => {
  return (
    <div className="w-full flex justify-between items-center mb-4 gap-1 py-1 px-4 md:px-8 bg-[#151515]">
      <a href="https://www.marvel.com" target="blank">
        <img src={MarvelLogo} alt="Logo Marvel" className="w-44 " />
      </a>

      <a
        href="https://www.marvel.com/corporate/about"
        target="blank"
        className="font-bold text-white justify-self-end"
      >
        ABOUT MARVEL
      </a>
    </div>
  );
};
