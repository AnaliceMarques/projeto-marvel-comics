import { createContext, useEffect, useState } from "react";
import { api } from "../service/api";

export const GlobalContext = createContext();

export function GlobalContextProvider({ children }) {
  const [comicsList, setComicsList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState(false);

  const getComics = async () => {
    try {
      const res = await api.get("/comics");
      setComicsList(res.data.data.results);
      setIsLoaded(true);
    } catch (err) {
      setError(true);
      console.log(err.response);
    }
  };

  useEffect(() => {
    getComics();
  }, []);

  return (
    <GlobalContext.Provider value={{ comicsList, isLoaded, error }}>
      {children}
    </GlobalContext.Provider>
  );
}
