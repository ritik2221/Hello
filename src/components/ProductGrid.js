import React from 'react';
import products from '../data/products.json';
import './ProductGrid.css';

const ProductGrid = ({ selectedCategory }) => {
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="product-grid">
      {filteredProducts.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.imageUrl} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <div className="quick-actions">
            <button>Quick View</button>
            <button>Add to Wishlist</button>
          </div>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
