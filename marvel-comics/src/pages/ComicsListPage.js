import { useContext } from "react";
import { ComicCard } from "../components/ComicCard";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { GlobalContext } from "../context/GlobalContext";

const ComicsListPage = () => {
  const { comicsList, isLoaded, error } = useContext(GlobalContext);

  return (
    <>
      <Header />
      <h1 className="text-3xl font-bold m-6">Marvel Comics</h1>
      <div className="flex flex-wrap gap-6 justify-center">
        {error
          ? "Erro na requisição, tente novamente mais tarde"
          : !isLoaded
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
