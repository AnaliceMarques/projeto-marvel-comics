import { BrowserRouter, Route, Routes } from "react-router-dom";
import ComicsListPage from "../pages/ComicsListPage";
import ErrorPage from "../pages/ErrorPage";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<ComicsListPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </BrowserRouter>
  );
};
