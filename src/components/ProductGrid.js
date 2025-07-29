import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { CartContext } from '../context/CartContext';
import './ProductGrid.css';

const ProductGrid = ({ selectedCategory, searchQuery }) => {
  const { addToCart } = useContext(CartContext);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:5000/products/')
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const filteredProducts = products
    .filter((product) => {
      if (selectedCategory) {
        return product.category === selectedCategory;
      }
      return true;
    })
    .filter((product) => {
      if (searchQuery) {
        return product.name.toLowerCase().includes(searchQuery.toLowerCase());
      }
      return true;
    });

  return (
    <div className="product-grid">
      {filteredProducts.map((product) => (
        <div key={product._id} className="product-card">
          <Link to={`/products/${product._id}`}>
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
