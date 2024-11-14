import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteProduct, toggleAvailability } from '../actions/productActions';
import ProductEdit from './ProductEdit';

function ProductList() {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [editingProductId, setEditingProductId] = useState(null);

  const handleEditClick = (id) => {
    setEditingProductId(id);
  };

  const handleEditClose = () => {
    setEditingProductId(null);
  };

  return (
    <div>
      {products.map((product) => (
        <div key={product.id} className="product-item">
          <h3>{product.name}</h3>
          <p>{product.description}</p>
          <p>Цена: {product.price} руб.</p>
          <p>В наличии: {product.available ? 'Да' : 'Нет'}</p>
          <div className="product-buttons">
          <button className="button-edit" onClick={() => dispatch(deleteProduct(product.id))}>Удалить</button>
          <button className="button-edit" onClick={() => dispatch(toggleAvailability(product.id))}>
            В наличии
          </button>
          <button className="button-edit" onClick={() => handleEditClick(product.id)}>Изменить</button>
          </div>
        </div>
      ))}
      {editingProductId && (
        <ProductEdit productId={editingProductId} onClose={handleEditClose} />
      )}
    </div>
  );
}

export default ProductList;
