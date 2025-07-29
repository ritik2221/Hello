import React from 'react';
import './CategoryShowcase.css';

const categories = ['Sneakers', 'Boots', 'Heels'];

const CategoryShowcase = ({ onSelectCategory }) => {
  return (
    <div className="category-showcase">
      {categories.map((category) => (
        <div
          key={category}
          className="category-tile"
          onClick={() => onSelectCategory(category)}
        >
          <h3>{category}</h3>
        </div>
      ))}
    </div>
  );
};

export default CategoryShowcase;
