import React from 'react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => (
  <div>
    <header style={{ backgroundColor: '#4CAF50', padding: '10px', color: 'white' }}>
      <h1>SmartHarvest Rewards</h1>
      <nav>
        <Link to="/" style={{ margin: '10px', color: 'white', textDecoration: 'none' }}>Dashboard</Link>
        <Link to="/rewards" style={{ margin: '10px', color: 'white', textDecoration: 'none' }}>Rewards Catalog</Link>
        <Link to="/redemption" style={{ margin: '10px', color: 'white', textDecoration: 'none' }}>Redemption Tracker</Link>
        <Link to="/profile" style={{ margin: '10px', color: 'white', textDecoration: 'none' }}>User Profile</Link>
      </nav>
    </header>
    <main style={{ padding: '20px' }}>{children}</main>
  </div>
);

export default Layout;
