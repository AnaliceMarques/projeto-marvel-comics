export const ComicCard = ({ comic }) => {
  return (
    <div className="flex flex-col hover:scale-110">
      <img
        src={`${comic.thumbnail.path}/portrait_fantastic.${comic.thumbnail.extension}`}
        alt={`Capa do quadrinho ${comic.title}`}
      />
      <div className=" flex flex-wrap font-bold w-52  ">{comic.title}</div>
      <div className="flex justify-evenly">
        <button>Detalhes</button>
        <button>Enviar</button>
      </div>
    </div>
  );
};
