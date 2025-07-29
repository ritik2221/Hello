import React from 'react';
import './DashboardPage.css';

const DashboardPage = () => {
  return (
    <div className="dashboard-page">
      <h1>User Dashboard</h1>
      <div className="dashboard-content">
        <div className="dashboard-menu">
          <ul>
            <li>Orders</li>
            <li>Wishlist</li>
            <li>Address Book</li>
            <li>Profile</li>
          </ul>
        </div>
        <div className="dashboard-main">
          {/* Dashboard content will go here */}
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
