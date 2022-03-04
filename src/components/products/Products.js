import React, { useEffect, useState } from "react";
import { CardGroup } from "reactstrap";
import axios from "axios";
import Cards from "../card/Cards";
import "./Products.css";
import SideNav from "../sidenav/SideNav";
import { useSelector } from "react-redux";

function Products() {
  const search = useSelector((state) => state.search);
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
  console.log(products.data);
  const filteredSearch = products.data?.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div className="page-container">
      <div className="first-child">
        <SideNav />
      </div>
      <div className="second-child">
        <div className="product-container">
          <CardGroup>
            {filteredSearch?.map((item) => (
              <Cards
                key={item.id}
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating.rate}
              />
            ))}
          </CardGroup>
        </div>
      </div>
    </div>
  );
}

export default Products;
