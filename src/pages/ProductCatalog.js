import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import CategoryShowcase from '../components/CategoryShowcase';
import ProductGrid from '../components/ProductGrid';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const ProductCatalog = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const query = useQuery();
  const searchQuery = query.get('search');
  const categoryQuery = query.get('category');

  useEffect(() => {
    if (categoryQuery) {
      setSelectedCategory(categoryQuery);
    }
  }, [categoryQuery]);

  const handleSelectCategory = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div>
      <h1>Product Catalog</h1>
      <CategoryShowcase onSelectCategory={handleSelectCategory} />
      <ProductGrid
        selectedCategory={selectedCategory}
        searchQuery={searchQuery}
      />
    </div>
  );
};

export default ProductCatalog;
