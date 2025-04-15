import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "../layout/MainLayout";
import { Home } from "../pages/Home";
import { List } from "../pages/List";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/details/:id" element={<List />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};
