import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import CartCheckOut from "./components/pages/CartCheckOut";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Reviews from "./components/pages/Reviews";
import { useAppDispatch } from "./components/store/hooks";
import { getProductListLoading } from "./components/store/product/productSlice";

function App() {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(getProductListLoading());
  }, []);

  return (
    <>
      <Header />
      <div className="h-[89vh]">
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/reviews" element={<Reviews />} />
          <Route path="/checkout" element={<CartCheckOut />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
