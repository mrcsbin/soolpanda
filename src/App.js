import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CategoryPage from "./CategoryPage";
import MainPage from "./MainPage";
import SearchPage from "./SearchPage";
import Header from "./Header";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" exact={true} element={<MainPage />} />
        <Route path="/:category" element={<CategoryPage />} />
        <Route path="/:search" element={<SearchPage />} />
      </Routes>
    </Router>
  );
}

export default App;
