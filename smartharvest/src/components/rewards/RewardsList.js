import React, { useState, useEffect } from "react";
import { API_BASE_URL } from "../../constants";

const ListRewards = () => {
  const [rewards, setRewards] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    fetch(`${API_BASE_URL}/rewards/`)
      .then((response) => response.json())
      .then(setRewards)
      .catch((err) => setError("Failed to fetch rewards."));
  }, []);

  return (
    <div>
      <h2>Available Rewards</h2>
      {<p>{error}</p>}
      <ul>
        {rewards.map((reward) => (
          <li key={reward.reward_id}>
            <strong>{reward.reward_name}</strong>: {reward.reward_description} -
            {reward.points} points
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListRewards;
