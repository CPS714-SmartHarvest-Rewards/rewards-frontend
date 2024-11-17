import React from 'react';

const RedemptionTracker = () => {
  const redemptions = [
    { id: 1, reward: '10% Discount', status: 'Completed' },
    { id: 2, reward: 'Sustainability Donation', status: 'In Progress' },
  ];

  return (
    <div>
      <h2>Redemption Tracker</h2>
      <ul>
        {redemptions.map((item) => (
          <li key={item.id} style={{ marginBottom: '10px' }}>
            {item.reward} - <strong>{item.status}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RedemptionTracker;
