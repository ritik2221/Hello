import React, { useContext } from 'react';
import { CartContext } from '../context/CartContext';
import './CartPage.css';

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Product</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Total</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {cartItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>
                  <input
                    type="number"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                    min="1"
                  />
                </td>
                <td>${item.price * item.quantity}</td>
                <td>
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                  <button>Save for Later</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default CartPage;
