import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductForm from "./pages/ProductInputForm";
import Update from "./pages/ProductUpdateForm";
import ProductDetail from "./pages/ProductDetail ";
import Button from "./components/button";

function App() {
  return (
    <Routes>
      <Route path="/" element={<ProductForm />} />
      <Route path="/button" element={<Button />} />
      <Route path="/update" element={<Update />} />
      <Route path="/detail" element={<ProductDetail />} />
    </Routes>
  );
}

export default App;
