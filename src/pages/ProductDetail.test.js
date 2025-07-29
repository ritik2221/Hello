import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import ProductDetail from './ProductDetail';

// Mock the axios module
jest.mock('axios', () => ({
  get: jest.fn(() =>
    Promise.resolve({
      data: {
        _id: '1',
        name: 'Classic Leather Sneakers',
        description: 'A pair of timeless leather sneakers.',
        price: 79.99,
        imageUrl: 'https://example.com/images/sneakers.jpg',
      },
    })
  ),
}));

test('renders product details', async () => {
  render(
    <MemoryRouter initialEntries={['/products/1']}>
      <Routes>
        <Route path="/products/:id" element={<ProductDetail />} />
      </Routes>
    </MemoryRouter>
  );

  // Wait for the product details to be displayed
  const productName = await screen.findByText('Classic Leather Sneakers');
  const productDescription = await screen.findByText('A pair of timeless leather sneakers.');
  const productPrice = await screen.findByText('$79.99');

  // Check that the product details are in the document
  expect(productName).toBeInTheDocument();
  expect(productDescription).toBeInTheDocument();
  expect(productPrice).toBeInTheDocument();
});
