import React from "react";
import { useContext, useState } from "react";
import { ComicCard } from "../components/ComicCard";
import { GlobalContext } from "../context/GlobalContext";
import { FaSearch } from "react-icons/fa";

const ComicsListPage = () => {
  const { comicsList, isLoaded, error } = useContext(GlobalContext);

  const [nameFilter, setNameFilter] = useState("");

  const handleName = (e) => {
    setNameFilter(e.target.value);
  };

  const renderComics = () => {
    return comicsList
      .filter((comic) => {
        return comic.title.toLowerCase().includes(nameFilter.toLowerCase());
      })
      .map((comic) => <ComicCard key={comic.id} comic={comic} />);
  };

  return (
    <div className="px-1">
      <h1 className="text-3xl font-bold m-6">Marvel Comics</h1>

      <div className="m-6 ">
        <div className="flex items-center gap-3 p-1 mb-1 border-2 font-bold w-80">
          <FaSearch className="fill-red" />
          <input
            type="text"
            id="name"
            name="name"
            value={nameFilter}
            placeholder="SEARCH"
            onChange={handleName}
            className="outline-none"
          />
        </div>
        <p>Quantity of Comics: {renderComics().length}</p>
      </div>

      <div className="flex flex-wrap gap-4 justify-center">
        {error ? (
          <div className="font-bold text-3xl h-screen">
            Error in request, please try again later
          </div>
        ) : !isLoaded ? (
          <div className="font-bold text-3xl h-screen">
            Loading comics list...
          </div>
        ) : (
          renderComics()
        )}
      </div>
    </div>
  );
};
export default ComicsListPage;
