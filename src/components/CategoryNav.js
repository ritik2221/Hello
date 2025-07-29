import React from 'react';
import { Link } from 'react-router-dom';
import './CategoryNav.css';

const categories = [
  { name: 'Flip-Flops', image: 'https://via.placeholder.com/150' },
  { name: 'Heels', image: 'https://via.placeholder.com/150' },
  { name: 'Slippers', image: 'https://via.placeholder.com/150' },
  { name: 'Shoes', image: 'https://via.placeholder.com/150' },
  { name: 'Sandals', image: 'https://via.placeholder.com/150' },
  { name: 'New Arrivals', image: 'https://via.placeholder.com/150' },
];

const CategoryNav = () => {
  return (
    <div className="category-nav">
      {categories.map((category) => (
        <Link to={`/products?category=${category.name}`} key={category.name} className="category-item">
          <img src={category.image} alt={category.name} />
          <span>{category.name}</span>
        </Link>
      ))}
    </div>
  );
};

export default CategoryNav;
