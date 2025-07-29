import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { CartProvider } from '../context/CartContext';
import ProductGrid from './ProductGrid';

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
        {
          _id: '2',
          name: 'Rugged Hiking Boots',
          price: 129.99,
          imageUrl: 'https://example.com/images/boots.jpg',
        },
      ],
    })
  ),
}));

test('renders a list of products', async () => {
  render(
    <Router>
      <CartProvider>
        <ProductGrid />
      </CartProvider>
    </Router>
  );

  // Wait for the products to be displayed
  const product1 = await screen.findByText('Classic Leather Sneakers');
  const product2 = await screen.findByText('Rugged Hiking Boots');

  // Check that the products are in the document
  expect(product1).toBeInTheDocument();
  expect(product2).toBeInTheDocument();
});
