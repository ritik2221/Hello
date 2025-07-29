import React, { useState } from 'react';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import './admin.css';
import initialProducts from '../../data/products.json';

const AdminDashboard = () => {
  const [products, setProducts] = useState(initialProducts);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleAddProduct = () => {
    setSelectedProduct(null);
    setIsFormVisible(true);
  };

  const handleEditProduct = (product) => {
    setSelectedProduct(product);
    setIsFormVisible(true);
  };

  const handleSaveProduct = (productData) => {
    if (selectedProduct) {
      // Update existing product
      setProducts(
        products.map((p) => (p.id === selectedProduct.id ? { ...p, ...productData } : p))
      );
    } else {
      // Add new product
      setProducts([...products, { ...productData, id: Date.now() }]);
    }
    setIsFormVisible(false);
  };

  const handleDeleteProduct = (productId) => {
    setProducts(products.filter((p) => p.id !== productId));
  };

  const handleCancel = () => {
    setIsFormVisible(false);
  };

  return (
    <div className="admin-dashboard">
      <h1>Admin Dashboard</h1>
      {isFormVisible ? (
        <ProductForm
          product={selectedProduct}
          onSave={handleSaveProduct}
          onCancel={handleCancel}
        />
      ) : (
        <>
          <button onClick={handleAddProduct}>Add New Product</button>
          <ProductList
            products={products}
            onEdit={handleEditProduct}
            onDelete={handleDeleteProduct}
          />
        </>
      )}
    </div>
  );
};

export default AdminDashboard;
