import React from "react";
import ProductForm from "./components/product-form/ProductForm";
import { Route, Routes } from "react-router-dom";
import Get from "./pages/Get";
import Put from "./pages/Put";
import Delete from "./pages/Delete";
import Update from "./pages/ProductUpdateForm";
import Button from "./components/product-form/button";
function App() {
  return (
    // <div className="App">
    <Routes>
      <Route path="/butt" element={<Button />} />
      <Route path="/updateform" element={<Update />}></Route>

      <Route path="/" element={<ProductForm />} />
      <Route path="/get" element={<Get />} />
      <Route path="/put" element={<Put />} />
      <Route path="/delete" element={<Delete />} />
    </Routes>

    // </div>
  );
}

export default App;
