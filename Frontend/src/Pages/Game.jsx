import React, { useState, useRef } from 'react';
import { Menu } from 'lucide-react';

const AviatorLayout = () => {
  const [balance] = useState(5000.00);
  const videoRef = useRef(null);
  const [isBetsVisible, setIsBetsVisible] = useState(false);

  const handleBet = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };
  
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="flex items-center justify-between p-4 bg-black">
        <div className="flex items-center gap-2">
          <div className="text-red-500 text-2xl font-bold italic">Aviator</div>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-green-400 font-semibold">{balance.toFixed(2)} INR</span>
          <Menu className="w-6 h-6" />
        </div>
      </header>

      {/* Multiplier Strip */}
      <div className="bg-gray-800 overflow-x-auto whitespace-nowrap p-2 text-sm scrollbar-hide w-full">
        <div className="inline-flex gap-3">
          {['9.91x', '1.13x', '5.17x', '11.18x', '3.11x', '9.96x', '5.88x', '1.00x', '2.31x', '8.41x', '10.74x', '1.98x', '1.07x', '6.79x'].map((mult, i) => (
            <span key={i} className="text-gray-400">{mult}</span>
          ))}
        </div>
      </div>

      <div className="flex flex-col lg:flex-row">
        {/* Toggle Button for Bets List (visible on mobile) */}
        <div className="lg:hidden p-4 bg-gray-800">
          <button 
            onClick={() => setIsBetsVisible(!isBetsVisible)}
            className="w-full bg-gray-700 text-white py-2 px-4 rounded-lg font-semibold"
          >
            {isBetsVisible ? 'Hide Bets' : 'Show Bets'}
          </button>
        </div>

        {/* Left Sidebar - Bets List */}
        <aside className={`${isBetsVisible ? 'block' : 'hidden'} w-full lg:block lg:w-80 bg-gray-800 p-4 overflow-y-auto`}>
          <div className="flex flex-col sm:flex-row gap-2 mb-4">
            <button className="flex-1 bg-gray-700 text-white py-2 px-4 rounded-lg font-semibold">
              All Bets
            </button>
            <button className="flex-1 bg-transparent text-gray-400 py-2 px-4 rounded-lg">
              Previous
            </button>
            <button className="flex-1 bg-transparent text-gray-400 py-2 px-4 rounded-lg">
              Top
            </button>
          </div>
          
          <div className="mb-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-400 to-blue-500 border-2 border-gray-800"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 border-2 border-gray-800"></div>
                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 border-2 border-gray-800"></div>
              </div>
              <span className="text-xl font-bold">149/643</span>
              <span className="text-gray-400">Bets</span>
            </div>
            <div className="bg-green-500 h-1 rounded-full" style={{width: '23%'}}></div>
          </div>

          <div className="text-center mb-2">
            <div className="text-2xl font-bold">1,169,416.26</div>
            <div className="text-gray-400 text-sm">Total win INR</div>
          </div>

          <div className="grid grid-cols-3 gap-2 text-xs text-gray-400 mb-2">
            <div>Player</div>
            <div className="text-center">Bet INR</div>
            <div className="text-right">Win INR</div>
          </div>
        </aside>

        {/* Main Game Area */}
        <main className="flex-1 flex flex-col">
          {/* Video Placeholder */}
          <div className="flex-1 bg-gradient-to-br from-gray-900 via-gray-800 to-black relative flex items-center justify-center">
            <video 
              ref={videoRef} 
              src="vidone.mp4" 
              className="max-h-[400px] w-auto mx-auto rounded-lg"
              controls={false} 
            />

            <div className="absolute bottom-4 right-4 flex items-center gap-2 bg-black/50 px-3 py-2 rounded-lg">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-green-400 to-blue-500 border-2 border-gray-800"></div>
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-400 to-pink-500 border-2 border-gray-800"></div>
              </div>
             
            </div>
          </div>

          {/* Betting Controls */}
          <BettingComponent handleBet={handleBet} />
        </main>
      </div>

      {/* Footer */}
      <footer className="bg-black p-2 text-center text-xs text-gray-500 flex items-center justify-center gap-2">
        <span>🍀 Provably Fair Game</span>
        <span className="mx-2">|</span>
        <span>Powered by SPRIBE</span>
      </footer>
    </div>
  );
};

const BettingComponent = ({ handleBet }) => {
  const [bet1, setBet1] = useState(10.00);
  const [bet2, setBet2] = useState(10.00);
  const [activeTab1, setActiveTab1] = useState('Bet');
  const [activeTab2, setActiveTab2] = useState('Bet');

  const quickAmounts = [100, 200, 500, 1000];

  const adjustBet = (betSetter, currentBet, amount) => {
    const newBet = Math.max(0, currentBet + amount);
    betSetter(parseFloat(newBet.toFixed(2)));
  };

  return (
    <div className="bg-gray-800 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-6xl mx-auto">
        {/* Bet Panel 1 */}
        <div className="bg-gray-900 rounded-lg p-4">
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setActiveTab1('Bet')}
              className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-colors ${
                activeTab1 === 'Bet' ? 'bg-gray-700 text-white' : 'bg-transparent text-gray-400'
              }`}
            >
              Bet
            </button>
            <button
              onClick={() => setActiveTab1('Auto')}
              className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-colors ${
                activeTab1 === 'Auto' ? 'bg-gray-700 text-white' : 'bg-transparent text-gray-400'
              }`}
            >
              Auto
            </button>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <button
              onClick={() => adjustBet(setBet1, bet1, -1)}
              className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors"
            >
              <span className="text-xl">−</span>
            </button>
            <div className="flex-1 text-center">
              <input
                type="number"
                value={bet1.toFixed(2)}
                onChange={(e) => setBet1(parseFloat(e.target.value) || 0)}
                className="w-full bg-transparent text-2xl font-bold text-center outline-none"
              />
            </div>
            <button
              onClick={() => adjustBet(setBet1, bet1, 1)}
              className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors"
            >
              <span className="text-xl">+</span>
            </button>
          </div>

          <div className="grid grid-cols-4 gap-2 mb-4">
            {quickAmounts.map((amount) => (
              <button
                key={amount}
                onClick={() => setBet1(amount)}
                className="py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors text-sm"
              >
                {amount}
              </button>
            ))}
          </div>

          <button onClick={handleBet} className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg font-bold text-lg transition-colors">
            Bet
            <div className="text-sm font-normal">{bet1.toFixed(2)} INR</div>
          </button>
        </div>

        {/* Bet Panel 2 */}
        <div className="bg-gray-900 rounded-lg p-4">
          <div className="flex gap-2 mb-4">
            <button
              onClick={() => setActiveTab2('Bet')}
              className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-colors ${
                activeTab2 === 'Bet' ? 'bg-gray-700 text-white' : 'bg-transparent text-gray-400'
              }`}
            >
              Bet
            </button>
            <button
              onClick={() => setActiveTab2('Auto')}
              className={`flex-1 py-2 px-4 rounded-lg font-semibold transition-colors ${
                activeTab2 === 'Auto' ? 'bg-gray-700 text-white' : 'bg-transparent text-gray-400'
              }`}
            >
              Auto
            </button>
            <button className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors">
              <span className="text-sm">⊟</span>
            </button>
          </div>

          <div className="flex items-center gap-2 mb-3">
            <button
              onClick={() => adjustBet(setBet2, bet2, -1)}
              className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors"
            >
              <span className="text-xl">−</span>
            </button>
            <div className="flex-1 text-center">
              <input
                type="number"
                value={bet2.toFixed(2)}
                onChange={(e) => setBet2(parseFloat(e.target.value) || 0)}
                className="w-full bg-transparent text-2xl font-bold text-center outline-none"
              />
            </div>
            <button
              onClick={() => adjustBet(setBet2, bet2, 1)}
              className="w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center hover:bg-gray-600 transition-colors"
            >
              <span className="text-xl">+</span>
            </button>
          </div>

          <div className="grid grid-cols-4 gap-2 mb-4">
            {quickAmounts.map((amount) => (
              <button
                key={amount}
                onClick={() => setBet2(amount)}
                className="py-2 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors text-sm"
              >
                {amount}
              </button>
            ))}
          </div>

          <button onClick={handleBet} className="w-full bg-green-500 hover:bg-green-600 text-white py-4 rounded-lg font-bold text-lg transition-colors">
            Bet
            <div className="text-sm font-normal">{bet2.toFixed(2)} INR</div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AviatorLayout;