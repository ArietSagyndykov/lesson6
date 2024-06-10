import React, { useEffect } from "react";
import { useProducts } from "../context/ProductContextProvider";

const ProductList = () => {
  const { getProducts, products } = useProducts();
  useEffect(() => {
    getProducts();
  }, []);
  console.log(products);
  return <div></div>;
};

export default ProductList;
