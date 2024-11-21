import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../utils/data";

const ProductPage = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) return <p>Product not found</p>;

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.img} alt={product.name} />
      <p>Size: {product.size}</p>
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductPage;
