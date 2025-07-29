import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminDashboard from './pages/Admin/AdminDashboard';
import HeroSlider from './components/HeroSlider';
import ProductCatalog from './pages/ProductCatalog';
import ProductDetail from './pages/ProductDetail';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HeroSlider />} />
        <Route path="/products" element={<ProductCatalog />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
