import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import axios from "axios";

export default function Shop() {
  const [products, setProducts] = useState("");
  const dummyProduct = [
    {
      _id: "61300e508ffcd10c5570e234",
      title: "Dummy Data",
      type: "dairy",
      description: "Raw organic brown eggs in a basket",
      filename: "0.jpg",
      height: 600,
      width: 400,
      price: 28.1,
      rating: 4,
    },
  ];
  useEffect(() => {
    async function fetchMyAPI() {
      let res = await axios.get("/product/products");
      let data = await res.data;
      setProducts(data);
    }
    fetchMyAPI();
  }, []);
  const productData = products.data || dummyProduct;
  console.log(dummyProduct);
  return (
    <div>
      <div className="shopHeader">
        <h3>SHOP</h3>
      </div>
      <div className="shopContent">
        {productData.map((item) => {
          return <ProductCard item={item} />;
        })}
      </div>
    </div>
  );
}
