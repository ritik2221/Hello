import React, { useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import AdminDashboard from './pages/Admin/AdminDashboard';
import HomePage from './pages/HomePage';
import ProductCatalog from './pages/ProductCatalog';
import ProductDetail from './pages/ProductDetail';
import Cart from './components/Cart';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import AuthModal from './components/AuthModal';
import DashboardPage from './pages/DashboardPage';
import SecureRoute from './components/SecureRoute';
import FloatingActionButton from './components/FloatingActionButton';
import QuickActionsRail from './components/QuickActionsRail';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { CartContext } from './context/CartContext';
import { AuthContext } from './context/AuthContext';

const App = () => {
  const { cartItems, isCartOpen, toggleCart } = useContext(CartContext);
  const { user, logout } = useContext(AuthContext);
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  const handleLoginClick = () => {
    setIsAuthModalOpen(true);
  };

  const handleLogoutClick = () => {
    logout();
  };

  return (
    <Router>
      <header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          {user && <Link to="/dashboard">Dashboard</Link>}
        </nav>
        <div className="user-actions">
          {user ? (
            <>
              <span>Welcome, {user.name}</span>
              <button onClick={handleLogoutClick}>Logout</button>
            </>
          ) : (
            <button onClick={handleLoginClick}>Login</button>
          )}
          <div className="cart-icon" onClick={toggleCart}>
            <span>Cart ({cartItems.length})</span>
          </div>
        </div>
      </header>
      <AuthModal isOpen={isAuthModalOpen} onClose={() => setIsAuthModalOpen(false)} />
      <Cart isOpen={isCartOpen} onClose={toggleCart} />
      <FloatingActionButton />
      <QuickActionsRail />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductCatalog />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route
          path="/dashboard"
          element={
            <SecureRoute>
              <DashboardPage />
            </SecureRoute>
          }
        />
        <Route
          path="/admin"
          element={
            <SecureRoute>
              <AdminDashboard />
            </SecureRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
