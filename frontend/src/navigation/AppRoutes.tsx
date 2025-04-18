import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "../layout/MainLayout";
import { Details } from "../pages/Details";
import { Home } from "../pages/Home";
import { List } from "../pages/List";
import { Contact } from "../pages/Contact";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/list" element={<List />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
};
