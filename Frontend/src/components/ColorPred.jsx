import React, { useState, useEffect } from 'react';
import { Wallet, Gift, Clock, Users, TrendingUp, Volume2, User } from 'lucide-react';
import Leaderboard from './Leaderboard';

export default function ColorPredictionGame() {
  const [balance, setBalance] = useState(1000);
  const [selectedAmount, setSelectedAmount] = useState(10);
  const [selectedColor, setSelectedColor] = useState(null);
  const [timer, setTimer] = useState(180);
  const [gameNumber, setGameNumber] = useState('202511041000112345');
  const [history, setHistory] = useState([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) {
          return 180;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const amounts = [1, 10, 100, 1000];

  const handleBet = () => {
    if (selectedColor && balance >= selectedAmount) {
      setBalance(prev => prev - selectedAmount);
      // Simulate game logic here
      setTimeout(() => {
        const win = Math.random() > 0.5;
        if (win) {
          setBalance(prev => prev + selectedAmount * 2);
        }
      }, 1000);
    }
  };

  const getColorClass = (num) => {
    if ([0, 5].includes(num)) return 'bg-gradient-to-r from-red-500 to-purple-500';
    if ([1, 3, 7, 9].includes(num)) return 'bg-green-500';
    return 'bg-red-500';
  };

  const getColorBadge = (color) => {
    if (color === 'Green') return 'bg-green-500';
    if (color === 'Violet') return 'bg-purple-500';
    return 'bg-red-500';
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white pb-24">
      {/* Header */}
      <div className="bg-gradient-to-r from-red-600 to-red-500 p-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <img src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%23ef4444'/%3E%3Ctext x='50' y='60' font-size='40' text-anchor='middle' fill='white' font-weight='bold'%3EOK%3C/text%3E%3C/svg%3E" alt="OK Win" className="w-8 h-8" />
          </div>
          <span className="text-xl font-bold">OK.Win</span>
        </div>
        <div className="flex items-center gap-3">
          <Volume2 className="w-6 h-6" />
          <User className="w-6 h-6" />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-4 flex gap-3">
        <button className="flex-1 bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 rounded-full font-semibold shadow-lg">
          Withdraw
        </button>
        <button className="flex-1 bg-gradient-to-r from-green-600 to-green-500 text-white py-3 rounded-full font-semibold shadow-lg">
          Deposit
        </button>
      </div>

      {/* Notice Banner */}
      <div className="mx-4 mb-4 bg-gradient-to-r from-orange-100 to-red-100 border-2 border-orange-300 rounded-lg p-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Volume2 className="w-5 h-5 text-orange-600" />
          <p className="text-orange-800 text-sm">
            Safeguard against scams. Crimes beyond site made only through our official OK.Win
          </p>
        </div>
        <button className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
          Close
        </button>
      </div>

      {/* Quick Access Icons */}
      <div className="grid grid-cols-4 gap-4 px-4 mb-6">
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 bg-gradient-to-br from-pink-500 to-red-500 rounded-2xl flex items-center justify-center mb-2">
            <Wallet className="w-7 h-7" />
          </div>
          <span className="text-xs text-gray-300">Wallet</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center mb-2">
            <TrendingUp className="w-7 h-7" />
          </div>
          <span className="text-xs text-gray-300">Win</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center mb-2">
            <Users className="w-7 h-7" />
          </div>
          <span className="text-xs text-gray-300">Me</span>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-14 h-14 bg-gradient-to-br from-gray-600 to-gray-700 rounded-2xl flex items-center justify-center mb-2">
            <Gift className="w-7 h-7" />
          </div>
          <span className="text-xs text-gray-300">Me</span>
        </div>
      </div>

      {/* Timer Section */}
      <div className="mx-4 mb-6">
        <div className="bg-gradient-to-r from-pink-500 to-red-500 rounded-t-2xl p-4 flex items-center justify-between">
          <span className="text-sm font-semibold">Time to Win</span>
          <div className="flex items-center gap-2">
            <Clock className="w-5 h-5" />
            <span className="text-2xl font-bold">{formatTime(timer)}</span>
          </div>
        </div>
        
        {/* Game Number */}
        <div className="bg-gray-800 p-4">
          <div className="flex items-center justify-between mb-4">
            <div className="flex gap-2">
              {[1, 2, 3, 4, 5].map(i => (
                <div key={i} className="w-8 h-8 bg-pink-500 rounded-lg"></div>
              ))}
            </div>
            <div className="text-right">
              <div className="text-xs text-gray-400">Game Number</div>
              <div className="text-sm font-mono">{gameNumber}</div>
            </div>
          </div>

          {/* Color Selection */}
          <div className="grid grid-cols-3 gap-3 mb-4">
            <button 
              onClick={() => setSelectedColor('green')}
              className={`bg-gradient-to-r from-green-500 to-green-600 py-4 rounded-xl font-bold text-lg shadow-lg transform transition ${selectedColor === 'green' ? 'scale-95 ring-4 ring-green-300' : 'hover:scale-105'}`}
            >
              Green
            </button>
            <button 
              onClick={() => setSelectedColor('violet')}
              className={`bg-gradient-to-r from-purple-500 to-purple-600 py-4 rounded-xl font-bold text-lg shadow-lg transform transition ${selectedColor === 'violet' ? 'scale-95 ring-4 ring-purple-300' : 'hover:scale-105'}`}
            >
              Violet
            </button>
            <button 
              onClick={() => setSelectedColor('red')}
              className={`bg-gradient-to-r from-red-500 to-red-600 py-4 rounded-xl font-bold text-lg shadow-lg transform transition ${selectedColor === 'red' ? 'scale-95 ring-4 ring-red-300' : 'hover:scale-105'}`}
            >
              Red
            </button>
          </div>

          {/* Number Selection */}
          <div className="grid grid-cols-5 gap-3 mb-4">
            {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(num => (
              <button
                key={num}
                className={`${getColorClass(num)} w-full aspect-square rounded-full font-bold text-2xl hover:scale-105 transform transition flex items-center justify-center border-4 border-white
  shadow-[0_0_0_2px_rgba(255,255,255,0.5),inset_0_0_10px_rgba(255,255,255,0.3),inset_0_0_20px_rgba(0,0,0,0.2)]
}`}
              >
                {num}
              </button>
            ))}
          </div>

          {/* Amount Selection */}
          <div className="grid grid-cols-4 gap-2 mb-4">
            {amounts.map(amount => (
              <button
                key={amount}
                onClick={() => setSelectedAmount(amount)}
                className={`py-2 rounded-lg font-semibold ${selectedAmount === amount ? 'bg-pink-500' : 'bg-gray-700'}`}
              >
                {amount}
              </button>
            ))}
          </div>

          {/* Bet Button */}
          <button 
            onClick={handleBet}
            className="w-full bg-gradient-to-r from-green-500 to-green-600 py-4 rounded-xl font-bold text-xl shadow-lg hover:scale-105 transform transition"
          >
            🎲 Bet Now
          </button>
        </div>
      </div>

      {/* History */}
      <div className="mx-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-lg font-bold">Recent Results</h3>
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2">
          {history.map((num, idx) => (
            <div
              key={idx}
              className={`${getColorClass(num)} min-w-[3rem] h-12 rounded-full flex items-center justify-center font-bold text-xl border-4 border-white
  shadow-[0_0_0_1px_rgba(255,255,255,0.4),inset_0_0_8px_rgba(255,255,255,0.2),inset_0_0_15px_rgba(0,0,0,0.15)]
}`}
            >
              {num}
            </div>
          ))}
        </div>
      </div>

      {/* Leaderboard Section */}
      <div className="mx-4 mb-6">
        <Leaderboard />
      </div>

      {/* Balance Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-blue-500 p-4 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-2">
          <Wallet className="w-6 h-6" />
          <div>
            <div className="text-xs text-blue-100">Balance</div>
            <div className="text-xl font-bold">₹{balance.toFixed(2)}</div>
          </div>
        </div>
        <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-bold shadow-lg hover:scale-105 transform transition">
          Add Cash
        </button>
      </div>
    </div>
  );
}