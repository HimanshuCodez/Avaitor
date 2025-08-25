import React, { useState } from 'react';
import { Plane } from 'lucide-react';

const AviatorWithdrawal = () => {
  const [amount] = useState('200'); // MODIFY: Change withdrawal amount here

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-900 via-red-700 to-red-800 flex items-center justify-center p-6 relative overflow-hidden">
      
      {/* Background Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(255,255,255,0.2) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(255,255,255,0.1) 0%, transparent 50%)`
        }}></div>
      </div>

      {/* Airplane Graphics */}
      <div className="absolute top-20 right-20 transform rotate-12 opacity-30">
        <Plane size={80} className="text-white" />
      </div>
      <div className="absolute bottom-32 left-16 transform -rotate-45 opacity-20">
        <Plane size={60} className="text-white" />
      </div>
      <div className="absolute top-1/2 right-10 transform rotate-45 opacity-25">
        <Plane size={50} className="text-white" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 text-center max-w-md w-full">
        
        {/* Title */}
        <h1 className="text-white text-4xl md:text-5xl font-bold mb-12 tracking-wider">
          <div className="drop-shadow-lg">AVIATOR</div>
          <div className="drop-shadow-lg mt-2">WITHDRAWL</div>
          {/* MODIFY: Change title text here */}
        </h1>

        {/* Withdrawal Interface */}
        <div className="space-y-4">
          
          {/* Amount Display */}
          <div className="bg-red-600 hover:bg-red-700 transition-all duration-300 rounded-xl py-6 px-8 shadow-2xl border-2 border-red-500">
            <div className="text-white text-4xl font-bold">
              ${amount}
              {/* MODIFY: Change amount value in useState above */}
            </div>
          </div>

          {/* Net Banking Button */}
          <button className="w-full bg-red-600 hover:bg-red-700 transition-all duration-300 rounded-xl py-4 px-8 shadow-2xl border-2 border-red-500 group">
            <span className="text-white text-2xl font-semibold group-hover:scale-105 inline-block transition-transform">
              Net banking
              {/* MODIFY: Change button text here */}
            </span>
          </button>

          {/* Withdrawal Button */}
          <button className="w-full bg-red-600 hover:bg-red-700 transition-all duration-300 rounded-xl py-4 px-8 shadow-2xl border-2 border-red-500 group">
            <span className="text-white text-2xl font-semibold group-hover:scale-105 inline-block transition-transform">
              Withdrawl
              {/* MODIFY: Change button text here or add onClick handler */}
            </span>
          </button>
        </div>

        {/* Additional Airplane for Center */}
        <div className="absolute -top-8 -right-8 transform rotate-45 opacity-40">
          <Plane size={40} className="text-white animate-pulse" />
        </div>
      </div>

      {/* Floating Particles Effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-white rounded-full opacity-30 animate-ping"></div>
        <div className="absolute top-3/4 right-1/3 w-1 h-1 bg-white rounded-full opacity-40 animate-ping animation-delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-white rounded-full opacity-20 animate-ping animation-delay-2000"></div>
      </div>

      {/* Gradient Overlay for Depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-black/10 pointer-events-none"></div>
    </div>
  );
};

export default AviatorWithdrawal;