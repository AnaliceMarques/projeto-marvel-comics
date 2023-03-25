import React from "react";

export const Modal = ({ onOpen, onClose, comic }) => {
  if (!onOpen) {
    return null;
  } else {
    return (
      <div className="fixed inset-0 bg-neutral-200/20 backdrop-blur-md flex justify-center items-center">
        <div className="bg-white p-4 rounded-md w-4/5 h-4/5 flex flex-col justify-center items-start md:flex-row md:items-center gap-4   z-10">
          <img
            src={`${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}`}
            alt={`Capa do quadrinho ${comic.title}`}
            className="w-32 md:w-80 border-2"
          />
          <div className="flex flex-col md:gap-2 overflow-y-auto">
            <p className="font-bold uppercase">{comic.title}</p>
            <p>
              <strong>Data de Publicação: </strong>ANO
            </p>
            <p>
              <strong>Escritor: </strong>ESCRITOR
            </p>
            <p>
              <strong>Desenhista: </strong>DESENHISTA
            </p>
            <strong>Descrição: </strong>
            <text className="overflow-y-auto h-3/5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatum optio repellat quas modi autem sapiente magni
              voluptates, est quasi temporibus totam similique dolor vitae
              quisquam nemo itaque ipsam id aut?Lorem ipsum dolor sit, amet
              consectetur adipisicing elit. Repell quidem! Lorem ipsum dolor sit
              amet, consectetur adipisicing elit. Aliquid temporibus laborum,
              expedita mollitia minima fugiat aperiam inventore unde aliquam
              facilis pariatur, consequatur, rem eligendi nostrum numquam eius
              possimus illo quisquam. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Repellendus laudantium dolorem accusamus aperiam
              fuga, molestias ut vel id officiis ipsa assumenda aspernatur
              possimus, cumque ipsum reprehenderit, deserunt corporis eum ab.
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
              ad minus, vel soluta maiores atque quia et sapiente officia neque
              consectetur, numquam debitis expedita pariatur! Totam nobis magnam
              minima ea.
            </text>

            <button
              onClick={onClose}
              className="w-20 p-1 text-[#FEFEFE]  bg-[#EC1D24] hover:bg-[#9F0013] mt-2"
            >
              Voltar
            </button>
          </div>
        </div>
      </div>
    );
  }
};
