import React, { useState } from 'react';
import CategoryShowcase from '../components/CategoryShowcase';
import ProductGrid from '../components/ProductGrid';

const ProductCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <h1>Product Catalog</h1>
      <CategoryShowcase onSelectCategory={handleSelectCategory} />
      <ProductGrid selectedCategory={selectedCategory} />
    </div>
  );
};

export default ProductCatalog;
