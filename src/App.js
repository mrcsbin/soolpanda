import React from "react";
import { Route, Routes } from "react-router-dom";
import ProductForm from "./pages/ProductInputForm";
import Get from "./pages/Get";
import Put from "./pages/Put";
import Delete from "./pages/Delete";
import Update from "./pages/ProductUpdateForm";
import Button from "./components/button";

function App() {
  return (
    // <div className="App">
    <Routes>
      <Route path="/" element={<ProductForm />} />
      <Route path="/button" element={<Button />} />
      <Route path="/update" element={<Update />} />
      <Route path="/get" element={<Get />} />
      <Route path="/put" element={<Put />} />
      <Route path="/delete" element={<Delete />} />
    </Routes>

    // </div>
  );
}

export default App;
