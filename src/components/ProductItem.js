// ProductItem.js
import React from "react";

const ProductItem = ({ product }) => {
  console.log("ProductItem render");

  return (
    <div className="border border-gray-300 p-4">
      <img src={product.image} alt={product.title} className="mb-2" />
      <h2 className="text-xl font-bold mb-2">{product.title}</h2>
      <p className="text-gray-700 mb-2">{product.description}</p>
      <p className="text-gray-800 font-bold">${product.price}</p>
      <p className="text-gray-500">{product.category}</p>
    </div>
  );
};

export default React.memo(ProductItem);
