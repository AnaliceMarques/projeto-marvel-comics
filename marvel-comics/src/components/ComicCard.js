import React, { useState } from "react";
import { Modal } from "./Modal";

export const ComicCard = ({ comic }) => {
  const [showModal, setShowModal] = useState(false);

  const handleOnClose = () => {
    setShowModal(false);
  };

  return (
    <div className="flex flex-col  border-2 p-3 justify-between">
      <div className="flex flex-col justify-center hover:text-[#EC1D24]">
        <img
          src={`${comic.thumbnail.path}/portrait_fantastic.${comic.thumbnail.extension}`}
          alt={`Capa do quadrinho ${comic.title}`}
          className="hover:-translate-y-2 shadow-xl"
        />
        <strong className="flex flex-wrap w-52 uppercase">{comic.title}</strong>
      </div>
      <div className="flex justify-evenly">
        <button
          onClick={() => setShowModal(true)}
          className="w-20 p-1 text-[#FEFEFE]  bg-[#EC1D24] hover:bg-[#9F0013] "
        >
          Detalhes
        </button>
        <button className="w-20 p-1 text-[#FEFEFE]  bg-[#EC1D24] hover:bg-[#9F0013]">
          Enviar
        </button>
      </div>
      <Modal onOpen={showModal} onClose={handleOnClose} comic={comic} />
    </div>
  );
};
