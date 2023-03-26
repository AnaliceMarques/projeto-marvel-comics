import React from "react";
import MarvelLogo from "../image/marvel-logo.png";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-2 mt-4 p-2 bg-[#151515]">
      <img src={MarvelLogo} alt="Logo Marvel" className="w-28" />

      <p className="text-xs text-white">© 2023 MARVEL. All rights reserved.</p>
      <p className="text-xs text-white">Developed by Analice Marques.</p>
      <div className="flex">
        <a href="https://github.com/AnaliceMarques" target="blank">
          <FaGithub className="mr-3 fill-white" />
        </a>
        <a href="https://www.linkedin.com/in/analicemarquessl" target="blank">
          <FaLinkedin className=" fill-white" />
        </a>
      </div>
    </div>
  );
};
