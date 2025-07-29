import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [activeTab, setActiveTab] = useState('reviews');

  useEffect(() => {
    axios
      .get(`http://localhost:5000/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
      <div className="product-detail-content">
        <div className="product-images">
          <img src={product.imageUrl} alt={product.name} className="main-image" />
          {/* Thumbnails would go here */}
        </div>
        <div className="product-info">
          <h1>{product.name}</h1>
          <p>{product.description}</p>
          <p className="price">${product.price}</p>
          <div className="selectors">
            <label>
              Size:
              <select>
                <option>S</option>
                <option>M</option>
                <option>L</option>
              </select>
            </label>
            <label>
              Color:
              <select>
                <option>Black</option>
                <option>White</option>
                <option>Brown</option>
              </select>
            </label>
          </div>
          <div className="actions">
            <button>Add to Cart</button>
            <button>Add to Wishlist</button>
            <button>Compare</button>
            <button>Share</button>
          </div>
        </div>
      </div>
      <div className="product-tabs">
        <div className="tab-headers">
          <h3
            className={activeTab === 'reviews' ? 'active' : ''}
            onClick={() => setActiveTab('reviews')}
          >
            Reviews
          </h3>
          {/* Other tab headers would go here */}
        </div>
        <div className="tab-content">
          {activeTab === 'reviews' && (
            <div className="reviews">
              {/* Mock reviews */}
              <p>No reviews yet.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
