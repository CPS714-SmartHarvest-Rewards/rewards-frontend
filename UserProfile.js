import React from 'react';

const UserProfile = () => {
  const user = {
    name: 'Jane Doe',
    email: 'jane.doe@example.com',
    points: 1200,
  };

  return (
    <div>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Points:</strong> {user.points}</p>
    </div>
  );
};

export default UserProfile;
