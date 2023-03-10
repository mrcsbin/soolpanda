import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProductForm from "./pages/ProductInputForm";
import Update from "./pages/ProductUpdateForm";
import ProductDetail from "./pages/ProductDetail";
import CategoryPage from "./pages/CategoryPage";
import MainPage from "./pages/MainPage";
import SearchPage from "./pages/SearchPage";
import Header from "./components/Header";
import Button from "./components/button";
import Footer from "./components/Footer";
// import ProductDetail2 from "./pages/ProductDetail2";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact={true} element={<MainPage />} />
        <Route path="/input" element={<ProductForm />} />
        <Route path="/button" element={<Button />} />
        <Route path="/update" element={<Update />} />
        <Route exact path="/products/:id" element={<ProductDetail />} />
        <Route exact path="/:category" element={<CategoryPage />} />
        <Route path="/products" element={<SearchPage />} />
        <Route path="/butt" element={<Button />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
