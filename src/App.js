import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AdminDashboard from './pages/Admin/AdminDashboard';
import HeroSlider from './components/HeroSlider';
import ProductCatalog from './pages/ProductCatalog';
import ProductDetail from './pages/ProductDetail';
import Cart from './components/Cart';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import { CartContext } from './context/CartContext';

const App = () => {
  const { cartItems, isCartOpen, toggleCart } = useContext(CartContext);

  return (
    <Router>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
        </nav>
        <div className="cart-icon" onClick={toggleCart}>
          <span>Cart ({cartItems.length})</span>
        </div>
      </header>
      <Cart isOpen={isCartOpen} onClose={toggleCart} />
      <Routes>
        <Route path="/" element={<HeroSlider />} />
        <Route path="/products" element={<ProductCatalog />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;
