import React from 'react';

const RewardsCatalog = () => {
  const rewards = [
    { id: 1, name: '10% Discount', cost: 500 },
    { id: 2, name: 'Sustainability Donation', cost: 1000 },
    { id: 3, name: 'Free Product', cost: 1500 },
  ];

  return (
    <div>
      <h2>Rewards Catalog</h2>
      <ul>
        {rewards.map((reward) => (
          <li key={reward.id} style={{ marginBottom: '10px' }}>
            {reward.name} - {reward.cost} points
            <button style={{ marginLeft: '10px', padding: '5px 10px' }}>Redeem</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RewardsCatalog;
