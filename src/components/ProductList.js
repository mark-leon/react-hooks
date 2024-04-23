// ProductList.js
import React from "react";
import ProductItem from "./ProductItem";

const ProductList = ({ products }) => {
  console.log("ProductList render");
  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
