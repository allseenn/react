import React, { useState } from "react";

const CartPage = () => {
  const [cart, setCart] = useState([
    { id: 1, name: "Product 1", price: 100, quantity: 1 },
  ]);

  const updateQuantity = (id, delta) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item
      )
    );
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <h1>Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.name} - ${item.price} x {item.quantity}
            <button onClick={() => updateQuantity(item.id, 1)}>+</button>
            <button onClick={() => updateQuantity(item.id, -1)}>-</button>
          </li>
        ))}
      </ul>
      <h2>Grand Total: ${total}</h2>
    </div>
  );
};

export default CartPage;
