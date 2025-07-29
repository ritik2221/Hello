import React from 'react';
import './CheckoutPage.css';

const CheckoutPage = () => {
  return (
    <div className="checkout-page">
      <h1>Checkout</h1>
      <div className="checkout-progress">
        <span>Cart</span> &gt; <span>Details</span> &gt; <span>Payment</span> &gt; <span>Confirm</span>
      </div>
      <div className="checkout-content">
        <div className="shipping-form">
          <h2>Shipping Information</h2>
          {/* Shipping form will go here */}
        </div>
        <div className="order-summary">
          <h2>Order Summary</h2>
          {/* Order summary will go here */}
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
