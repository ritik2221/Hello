import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products.json';
import { CartContext } from '../context/CartContext';
import './ProductGrid.css';

const ProductGrid = ({ selectedCategory }) => {
  const { addToCart } = useContext(CartContext);

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory)
    : products;

  return (
    <div className="product-grid">
      {filteredProducts.map((product) => (
        <div key={product.id} className="product-card">
          <Link to={`/products/${product.id}`}>
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>${product.price}</p>
          </Link>
          <div className="quick-actions">
            <button>Quick View</button>
            <button>Add to Wishlist</button>
          </div>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
