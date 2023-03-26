import React from "react";

export const Modal = ({ onOpen, onClose, comic }) => {
  const datePublishedComic = () => {
    const onsaleDate = comic.dates.find(
      (item) => item.type === "onsaleDate"
    ).date;
    const datePublished = onsaleDate
      .slice(0, 10)
      .split("-")
      .reverse()
      .join("/");
    return datePublished;
  };

  const writerComic = comic.creators.items.filter(
    (item) => item.role === "writer"
  );

  const pencilerComic = comic.creators.items.filter(
    (item) => item.role === "penciler" || item.role === "penciller"
  );

  const coverArtistComic = comic.creators.items.filter((item) =>
    item.role.includes("cover")
  );

  if (!onOpen) {
    return null;
  } else {
    return (
      <div className="fixed inset-0 bg-neutral-200/20 backdrop-blur-md flex justify-center items-center">
        <div className="bg-white p-4 rounded-md w-4/5 h-4/5 flex flex-col justify-center items-start md:flex-row md:items-center md:justify-start gap-4   z-10">
          <img
            src={`${comic.thumbnail.path}/portrait_uncanny.${comic.thumbnail.extension}`}
            alt={`Comic cover ${comic.title}`}
            className="w-32 md:w-80 border-2"
          />
          <div className="flex flex-col md:gap-2 overflow-y-auto text-justify">
            <p className="font-bold uppercase">{comic.title}</p>
            <p>
              <strong>Published: </strong>
              {datePublishedComic()}
            </p>
            {writerComic.length > 0 ? (
              <p>
                <strong>Writer: </strong>
                {writerComic.map((item) => `${item.name}; `)}
              </p>
            ) : (
              ""
            )}
            {pencilerComic.length > 0 ? (
              <p>
                <strong>Penciler: </strong>
                {pencilerComic.map((item) => `${item.name}; `)}
              </p>
            ) : (
              ""
            )}
            {coverArtistComic.length > 0 ? (
              <p>
                <strong>Cover Artist: </strong>
                {coverArtistComic.map((item) => `${item.name}; `)}
              </p>
            ) : (
              ""
            )}
            <div className="overflow-y-auto h-3/5">{comic.description}</div>

            <button
              onClick={onClose}
              className="w-20 p-1 text-[#FEFEFE]  bg-[#EC1D24] hover:bg-[#9F0013] mt-2"
            >
              Back
            </button>
          </div>
        </div>
      </div>
    );
  }
};
