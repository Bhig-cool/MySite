import React, { useState } from "react";
import { FaGift, FaUserFriends, FaCoins } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const LoyaltyProgram = () => {
  const navigate = useNavigate(); // Now correctly defined

  // State for points and rewards
  const [points, setPoints] = useState(120); 
  const [rewards, setRewards] = useState([
    { id: 1, name: "10% Off Next Cleaning", cost: 100 },
    { id: 2, name: "Free Window Cleaning", cost: 150 },
  ]);

  const [referralCode, setReferralCode] = useState("Bhig4523"); 

  const redeemReward = (cost) => {
    if (points >= cost) {
      setPoints(points - cost);
      alert("🎉 Reward Redeemed Successfully!");
    } else {
      alert("❌ Not enough points to redeem this reward.");
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-lg mx-auto mt-8">
      <h2 className="text-2xl font-bold text-blue-700 flex items-center gap-2">
        <FaGift /> Loyalty & Referral Program
      </h2>

      {/* Points Display */}
      <div className="mt-4 bg-yellow-100 p-4 rounded-lg flex items-center justify-between">
        <span className="text-lg font-semibold">Your Points:</span>
        <span className="text-2xl font-bold text-yellow-500 flex items-center">
          <FaCoins className="mr-2" /> {points}
        </span>
      </div>

      {/* Rewards Section */}
      <h3 className="mt-6 text-lg font-semibold text-gray-700">Redeem Your Points:</h3>
      <ul className="mt-3">
        {rewards.map((reward) => (
          <li key={reward.id} className="flex items-center justify-between border p-3 rounded-lg mb-2">
            <span>{reward.name} ({reward.cost} pts)</span>
            <button
              onClick={() => redeemReward(reward.cost)}
              className={`px-3 py-1 rounded text-white ${
                points >= reward.cost ? "bg-green-500 hover:bg-green-600" : "bg-gray-400 cursor-not-allowed"
              }`}
            >
              Redeem
            </button>
          </li>
        ))}
      </ul>

      {/* Referral Section */}
      <div className="mt-6 bg-blue-100 p-4 rounded-lg">
        <h3 className="text-lg font-semibold text-blue-700 flex items-center gap-2">
          <FaUserFriends /> Refer & Earn
        </h3>
        <p className="text-gray-700 mt-2">
          Invite your friends to book a cleaning & earn **50 points** for each successful referral!
        </p>
        <div className="mt-3 flex items-center">
          <input
            type="text"
            value={referralCode}
            readOnly
            className="w-full p-2 border rounded-l bg-gray-200"
          />
          <button
            onClick={() => navigator.clipboard.writeText(referralCode)}
            className="bg-blue-600 text-white px-3 py-2 rounded-r"
          >
            Copy Code
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoyaltyProgram;
