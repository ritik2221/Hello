import React, { useState, useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import './AuthModal.css';

const AuthModal = ({ isOpen, onClose }) => {
  const { login, register } = useContext(AuthContext);
  const [activeTab, setActiveTab] = useState('login');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  if (!isOpen) {
    return null;
  }

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    login({ email: loginEmail, name: 'Test User' }); // Mock login
    onClose();
  };

  const handleRegisterSubmit = (e) => {
    e.preventDefault();
    register({ name: registerName, email: registerEmail });
    onClose();
  };

  return (
    <div className="auth-modal-overlay">
      <div className="auth-modal">
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="auth-modal-tabs">
          <button
            className={activeTab === 'login' ? 'active' : ''}
            onClick={() => setActiveTab('login')}
          >
            Login
          </button>
          <button
            className={activeTab === 'register' ? 'active' : ''}
            onClick={() => setActiveTab('register')}
          >
            Register
          </button>
        </div>
        <div className="auth-modal-content">
          {activeTab === 'login' ? (
            <form className="login-form" onSubmit={handleLoginSubmit}>
              <h2>Login</h2>
              <input
                type="email"
                placeholder="Email"
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
                required
              />
              <a href="#" className="forgot-password">
                Forgot Password?
              </a>
              <button type="submit">Login</button>
              <div className="social-login">
                <p>Or login with:</p>
                <button className="social-button google">Google</button>
                <button className="social-button facebook">Facebook</button>
              </div>
            </form>
          ) : (
            <form className="register-form" onSubmit={handleRegisterSubmit}>
              <h2>Register</h2>
              <input
                type="text"
                placeholder="Full Name"
                value={registerName}
                onChange={(e) => setRegisterName(e.target.value)}
                required
              />
              <input
                type="email"
                placeholder="Email"
                value={registerEmail}
                onChange={(e) => setRegisterEmail(e.target.value)}
                required
              />
              <input
                type="password"
                placeholder="Password"
                value={registerPassword}
                onChange={(e) => setRegisterPassword(e.target.value)}
                required
              />
              <button type="submit">Register</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
