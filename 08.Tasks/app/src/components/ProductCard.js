import React from "react";

const ProductCard = ({ product, onAddToCart }) => (
  <div className="product-card">
    <img src={product.img} alt={product.name} />
    <h3>{product.name}</h3>
    <p>Size: {product.size}</p>
    <p>Price: ${product.price}</p>
    <button onClick={() => onAddToCart(product)}>Add to Cart</button>
  </div>
);

export default ProductCard;
