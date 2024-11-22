import React from 'react';
import ListOffers from '../components/offers/OffersList';
import ListRewards from '../components/rewards/RewardsList';
import "../pages/HarvestRewards.css";

const RewardsDashboard = () => {
  return (
    <div className="container">
      <h1>Rewards Dashboard</h1>
      <div className="container">
        <ListOffers />
      </div>
      <div className="container">
        <ListRewards />
      </div>
    </div>
  );
};

export default RewardsDashboard;