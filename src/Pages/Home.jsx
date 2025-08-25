import React, { useState } from 'react';
import { Menu, Shield, Award } from 'lucide-react';

const AviatorsGame = () => {
  const [balance] = useState('10000'); // You can modify this balance value
  const [wagering] = useState('5000'); // You can modify this wagering amount

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Header Section */}
      <header className="bg-red-600 px-5 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          Mostbet
        </div>
        
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2 text-sm">
            <span>Balance:</span>
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded font-semibold">
              {balance} {/* MODIFY: Change balance value above */}
            </span>
          </div>
          
          <div className="flex items-center gap-2 text-sm">
            <span>Wagering Amount:</span>
            <span className="bg-white bg-opacity-20 px-3 py-1 rounded font-semibold">
              {wagering} {/* MODIFY: Change wagering amount above */}
            </span>
          </div>
        </div>
        
        <button className="p-2 hover:bg-white hover:bg-opacity-10 rounded">
          <Menu size={24} />
        </button>
      </header>

      {/* Main Game Area */}
      <main className="flex-1 flex flex-col items-center justify-center px-8 py-12">
        
        {/* Game Logo Section */}
        <div className="text-center mb-12">
          <div className="text-red-500 text-6xl font-bold mb-4 transform -skew-x-12">
            Aviator
            {/* MODIFY: You can change the game title here */}
          </div>
          <div className="w-24 h-1 bg-red-500 mx-auto"></div>
        </div>

        {/* CENTER IMAGE SPACE - ADD YOUR IMAGE HERE */}
        <div className="mb-12 w-80 h-80 border-4 border-dashed border-gray-600 rounded-lg flex items-center justify-center bg-gray-800 bg-opacity-30">
          
           
            <img src="avitor.jpg" alt="Game Image" className="w-full h-full object-cover rounded" />
            
          
          <div className="text-center text-gray-400">
            <div className="text-4xl mb-2">🎮</div>
            <p>Add your center image here</p>
            <p className="text-sm mt-1">Replace this div with your image</p>
          </div>
        </div>

        {/* Game Title */}
        <h1 className="text-4xl font-light mb-2 tracking-wide">
          Aviators Game
          {/* MODIFY: Change the main game title here */}
        </h1>
        
        <p className="text-gray-300 mb-8 text-lg">
          Ready to take flight?
          {/* MODIFY: Change the subtitle/description here */}
        </p>

        {/* Play Button */}
        <button className="bg-red-600 hover:bg-red-700 px-12 py-4 rounded-lg text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl">
          Play Now
          {/* MODIFY: Change button text or add onClick handler */}
        </button>
      </main>

      {/* Bottom Badges */}
      <div className="absolute bottom-8 left-8 flex gap-4">
        {/* Security Badge */}
        <div className="flex items-center gap-2 bg-green-600 px-3 py-2 rounded-full text-sm">
          <Shield size={16} />
          <span>SECURE</span>
          {/* MODIFY: Customize security badge */}
        </div>
        
        {/* Additional Badge - You can modify or remove */}
        <div className="flex items-center gap-2 bg-blue-600 px-3 py-2 rounded-full text-sm">
          <Award size={16} />
          <span>VERIFIED</span>
          {/* MODIFY: Customize this badge or add more */}
        </div>
      </div>

      {/* Background Pattern Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 50px,
            rgba(255,255,255,0.1) 50px,
            rgba(255,255,255,0.1) 51px
          )`
        }}></div>
      </div>
    </div>
  );
};

export default AviatorsGame;