import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopNav from "./components/TopNav/TopNav";

import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <TopNav/>
        <Routes>
          <Route path="/products/:handle" element={<ProductPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <div>Footer</div>
      </BrowserRouter>
    </div>
  );
}

export default App;
