// src/components/ProductForm.js

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../actions/productActions';

function ProductForm() {
  const dispatch = useDispatch();
  const [product, setProduct] = useState({ name: '', description: '', price: '', available: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProduct({ ...product, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product.name && product.description && product.price) {
      const newProduct = {
        ...product,
        id: Date.now(),
        price: parseFloat(product.price),
      };
      dispatch(addProduct(newProduct));
      setProduct({ name: '', description: '', price: '', available: false });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="name"
        placeholder="Название продукта"
        value={product.name}
        onChange={handleChange}
        required
      />
      <input
        name="description"
        placeholder="Описание продукта"
        value={product.description}
        onChange={handleChange}
        required
      />
      <input
        name="price"
        placeholder="Цена"
        type="number"
        value={product.price}
        onChange={handleChange}
        required
      />
      <label>
        В наличии:
        <input
          type="checkbox"
          name="available"
          checked={product.available}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Добавить продукт</button>
    </form>
  );
}

export default ProductForm;
