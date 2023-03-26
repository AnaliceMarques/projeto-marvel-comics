import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import ComicsListPage from "../pages/ComicsListPage";
import ErrorPage from "../pages/ErrorPage";
import MapPage from "../pages/MapPage/MapPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route index element={<ComicsListPage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};
