import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import './admin.css';
import axios from 'axios';

const AdminDashboard = () => {
  const [products, setProducts] = useState([]);
  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

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
      axios
        .post(`http://localhost:5000/products/update/${selectedProduct._id}`, productData)
        .then((res) => console.log(res.data));
    } else {
      axios
        .post('http://localhost:5000/products/add', productData)
        .then((res) => console.log(res.data));
    }
    setIsFormVisible(false);
  };

  const handleDeleteProduct = (productId) => {
    axios
      .delete(`http://localhost:5000/products/${productId}`)
      .then((res) => console.log(res.data));
    setProducts(products.filter((p) => p._id !== productId));
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
