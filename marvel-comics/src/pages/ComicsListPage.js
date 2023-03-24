import { useEffect, useState } from "react";
import { ComicCard } from "../components/ComicCard";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { api } from "../service/api";

const ComicsListPage = () => {
  const [comicsList, setComicsList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  const getComics = async () => {
    try {
      const res = await api.get("/comics");
      console.log(res.data.data.results);
      setComicsList(res.data.data.results);
      setIsLoaded(true);
    } catch (err) {
      console.log(err.response);
    }
  };

  useEffect(() => {
    getComics();
  }, []);

  return (
    <>
      <Header />
      <h1 className="text-3xl font-bold">Marvel Comics</h1>
      <div className="flex flex-wrap gap-4 justify-center">
        {!isLoaded
          ? "Carregando lista de quadrinhos..."
          : comicsList.map((comic) => (
              <ComicCard key={comic.id} comic={comic} />
            ))}
      </div>
      <Footer />
    </>
  );
};
export default ComicsListPage;
