import React from 'react';

const Dashboard = () => {
  const userPoints = 1200;

  return (
    <div>
      <h2>Welcome to SmartHarvest Rewards</h2>
      <p>Your current points: <strong>{userPoints}</strong></p>
      <p>Earn points by completing actions like purchases, feedback, and more!</p>
    </div>
  );
};

export default Dashboard;
