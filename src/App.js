import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import CartPage from "./pages/CartPage";

import Home from "./pages/Home";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/products/:handle" element={<ProductPage />} />
            <Route path="/cart" element={<CartPage/>} />
            <Route path="/" element={<Home />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
