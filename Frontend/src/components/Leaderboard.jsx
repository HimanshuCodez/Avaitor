import React, { useState, useEffect } from 'react';
import { Crown } from 'lucide-react';

const generateRandomPlayers = (count) => {
  const players = [];
  const names = ["Alice", "Bob", "Charlie", "David", "Eve", "Frank", "Grace", "Heidi", "Ivan", "Judy", "Kevin", "Liam", "Mia", "Noah", "Olivia", "Peter", "Quinn", "Rachel", "Sam", "Tina", "Uma", "Victor", "Wendy", "Xavier", "Yara", "Zoe"];
  for (let i = 0; i < count; i++) {
    players.push({
      id: i,
      name: names[Math.floor(Math.random() * names.length)],
      score: Math.floor(Math.random() * 10000) + 1000, // Random score between 1000 and 10999
    });
  }
  // Sort by score in descending order
  return players.sort((a, b) => b.score - a.score);
};

export default function Leaderboard() {
  const [players, setPlayers] = useState([]);

  useEffect(() => {
    // Initial load
    setPlayers(generateRandomPlayers(10));

    // Update players every 5 seconds
    const interval = setInterval(() => {
      setPlayers(generateRandomPlayers(10));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-lg mb-6">
      <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
        <Crown className="w-6 h-6 text-yellow-400" /> Top Players
      </h3>
      <div className="space-y-3">
        {players.map((player, index) => (
          <div key={player.id} className="flex items-center justify-between bg-gray-700 p-3 rounded-md">
            <div className="flex items-center gap-3">
              <span className="text-lg font-semibold text-yellow-400">{index + 1}.</span>
              <span className="text-white">{player.name}</span>
            </div>
            <span className="text-green-400 font-bold">₹{player.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
