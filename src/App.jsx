import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout/Layout";
import Homepage from "./Components/Homepage/Homepage";

import MainCategories from "./Components/Categories/MainCategories";
import ProductPage from "./Components/Categories/Items/ProductPage";
import ScrollToTop from "./ScrollToTop";
import CartPage from "./Components/Cart/cart";
import Login from "./Components/Login/Login";
import Signup from "./Components/Login/signup";
import About from "./Components/About/about";

const App = () => {
  return (
    <BrowserRouter>
      <Layout>
        <ScrollToTop />
        <Routes>
          <Route path="/vastraverse" element={<Homepage />} />
          <Route path="/categories" element={<MainCategories />} />
          <Route path="/product/:id" element={<ProductPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
