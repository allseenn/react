import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct } from '../actions/productActions';

function ProductEdit({ productId, onClose }) {
  const dispatch = useDispatch();
  const product = useSelector((state) =>
    state.products.find((item) => item.id === productId)
  );

  const [editedProduct, setEditedProduct] = useState({
    name: product.name,
    description: product.description,
    price: product.price,
    available: product.available,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEditedProduct({
      ...editedProduct,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateProduct(productId, editedProduct));
    onClose(); 
  };

  return (
    <div className="edit-form">
      <h2>Изменение продукта</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          value={editedProduct.name}
          onChange={handleChange}
          placeholder="Название продукта"
          required
        />
        <input
          name="description"
          value={editedProduct.description}
          onChange={handleChange}
          placeholder="Описание продукта"
          required
        />
        <input
          name="price"
          type="number"
          value={editedProduct.price}
          onChange={handleChange}
          placeholder="Цена продукта"
          required
        />
        <label>
          Наличие:
          <input
            type="checkbox"
            name="available"
            checked={editedProduct.available}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Сохранить</button>
        <button type="button" onClick={onClose}>
          Отмена
        </button>
      </form>
    </div>
  );
}

export default ProductEdit;
