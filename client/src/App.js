

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Details from "./pages/Details";
import Cart from "./pages/Cart";
import Navbar from "./components/Navbar";
import React, { useEffect } from "react";
import { useDispatch } from 'react-redux'
import { getTotal } from "./feature/cartSlice";
import CheckOut from "./pages/CheckOut";


function App() {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getTotal())
  }, [])
  return (
    <BrowserRouter>
      <div>
        <Navbar />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/details/:id" element={<Details />} />
        <Route path="/product/cart" element={<Cart />} />
        <Route path="/product/checkout" element={<CheckOut />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
