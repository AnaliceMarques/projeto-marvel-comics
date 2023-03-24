export const ComicCard = ({ comic }) => {
  return (
    <div className="flex flex-col hover:scale-110 border-2 p-2 justify-between">
      <div className="flex flex-col justify-center">
        <img
          src={`${comic.thumbnail.path}/portrait_fantastic.${comic.thumbnail.extension}`}
          alt={`Capa do quadrinho ${comic.title}`}
        />
        <p className="flex flex-wrap font-bold w-52 uppercase">{comic.title}</p>
      </div>
      <div className="flex justify-evenly">
        <button className="w-20 rounded-md p-1 text-[#FEFEFE]  bg-[#EC1D24] hover:bg-[#9F0013] ">
          Detalhes
        </button>
        <button className="w-20 rounded-md p-1 text-[#FEFEFE]  bg-[#EC1D24] hover:bg-[#9F0013]">
          Enviar
        </button>
      </div>
    </div>
  );
};
