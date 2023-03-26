import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import MarvelLogo from "../image/marvel-logo.png";

export const Header = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const goToHomePage = () => {
    navigate("/");
  };

  return (
    <div className="w-full flex justify-between items-center mb-4 gap-1 py-1 px-4 md:px-8 bg-[#151515]">
      <a href="https://www.marvel.com" target="blank">
        <img src={MarvelLogo} alt="Logo Marvel" className="w-44 " />
      </a>
      <div className="font-bold text-white flex flex-col md:flex-row md:gap-4 items-end">
        <a href="https://www.marvel.com/corporate/about" target="blank">
          ABOUT MARVEL
        </a>
        {location.pathname === "/" ? (
          ""
        ) : (
          <button onClick={goToHomePage}>HOME</button>
        )}
      </div>
    </div>
  );
};
