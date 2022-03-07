import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./components/navbar/Nav";
import Home from "./components/home/Home";
import Account from "./components/Account/Account";
import Cart from "./components/Cart/Cart";
import Products from "./components/products/Products";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const url = "https://fakestoreapi.com/products";
    await axios
      .get(url)
      .then((result) => setProducts(result))
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products products={products} />} />
          <Route path="/account" element={<Account />} />
          <Route path="/cart" element={<Cart products={products} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
