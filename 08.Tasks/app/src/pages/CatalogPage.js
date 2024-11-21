import React, { useState } from "react";
import { products } from "../utils/data";
import ProductCard from "../components/ProductCard";

const CatalogPage = () => {
  const [filter, setFilter] = useState("");

  const filteredProducts = filter
    ? products.filter((product) => product.size === filter)
    : products;

  return (
    <div>
      <h1>Catalog</h1>
      <div>
        <button onClick={() => setFilter("")}>All</button>
        <button onClick={() => setFilter("S")}>S</button>
        <button onClick={() => setFilter("M")}>M</button>
        <button onClick={() => setFilter("L")}>L</button>
        <button onClick={() => setFilter("XS")}>XS</button>
      </div>
      <div className="product-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default CatalogPage;
