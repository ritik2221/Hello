import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from '../context/CartContext';
import ProductGrid from './ProductGrid';
import App from '../App';

// Mock the axios module
jest.mock('axios', () => ({
  get: jest.fn(() =>
    Promise.resolve({
      data: [
        {
          _id: '1',
          name: 'Classic Leather Sneakers',
          price: 79.99,
          imageUrl: 'https://example.com/images/sneakers.jpg',
        },
      ],
    })
  ),
}));

test('adds a product to the cart', async () => {
  render(
    <Router>
      <CartProvider>
        <App />
      </CartProvider>
    </Router>
  );

  // Wait for the product to be displayed
  const addToCartButton = await screen.findByText('Add to Cart');

  // Click the "Add to Cart" button
  fireEvent.click(addToCartButton);

  // Open the cart
  const cartIcon = screen.getByText(/Cart/);
  fireEvent.click(cartIcon);

  // Check that the product is in the cart
  const productInCart = await screen.findByText('Classic Leather Sneakers');
  expect(productInCart).toBeInTheDocument();
});
