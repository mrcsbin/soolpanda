import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductForm from "./pages/ProductInputForm";
import Update from "./pages/ProductUpdateForm";
import ProductDetail from "./pages/ProductDetail";
import Button from "./components/button";
import styled from "styled-components";
import CategoryPage from "./pages/CategoryPage";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import Header from "./components/Header";

function App() {
  return (
    <Routes>
      <Route path="/CategoryPage" />
      <Route path="/input" element={<ProductForm />} />
      <Route path="/button" element={<Button />} />
      <Route path="/update" element={<Update />} />
      <Route path="/detail" element={<ProductDetail />} />
      <Route path="/" exact={true} element={<MainPage />} />
      <Route path="/:category" element={<CategoryPage />} />
      <Route path="/:search" element={<SearchPage />} />
    </Routes>
  );
}

// {
//   <Router>
//     <Header />
//     <Routes>
//       <Route path="/" exact={true} element={<MainPage />} />
//       <Route path="/:category" element={<CategoryPage />} />
//       <Route path="/:search" element={<SearchPage />} />{" "}
//     </Routes>{" "}
//   </Router>;
// }

export default App;
