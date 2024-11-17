import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Dashboard from './components/PointsDashboard';
import RewardsCatalog from './components/RewardsCatalog';
import RedemptionTracker from './components/RedemptionTracker';
import UserProfile from './components/UserProfile';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/rewards" element={<RewardsCatalog />} />
          <Route path="/redemption" element={<RedemptionTracker />} />
          <Route path="/profile" element={<UserProfile />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
