import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './Cart.css';

const Cart = ({ isOpen, onClose }) => {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className={`cart ${isOpen ? 'open' : ''}`}>
      <div className="cart-header">
        <h2>Shopping Cart</h2>
        <button onClick={onClose}>Close</button>
      </div>
      <div className="cart-body">
        {cartItems.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartItems.map((item) => (
              <li key={item.id}>
                <span>{item.name}</span>
                <span>${item.price}</span>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Cart;
