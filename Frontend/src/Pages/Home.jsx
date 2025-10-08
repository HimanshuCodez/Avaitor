import React from "react";
import { Shield, Award } from "lucide-react";
import { Link } from "react-router-dom";

const AviatorsGame = () => {
  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      {/* ✅ Fullscreen Background Image */}
      <img
        src="/avitor.jpg"
        alt="Game Background"
        className="absolute inset-0 w-full h-full object-cover"
      />

    

      {/* Main Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        {/* Centered Content */}
        <main className="flex-1 flex flex-col items-center justify-center px-8 py-12 text-center">
          <div className="text-red-500 text-6xl font-bold mb-4 transform -skew-x-12">
            Aviator
          </div>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>

          <h1 className="text-4xl font-light mb-2 tracking-wide">Aviators Game</h1>
          <p className="text-gray-300 mb-8 text-lg">Ready to take flight?</p>
          <Link to="/game">
            <button className="bg-red-600 hover:bg-red-700 px-12 py-4 rounded-lg text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl">
              Play Now
            </button>
          </Link>
        </main>

        {/* Bottom Badges */}
        <div className="absolute bottom-8 left-8 flex gap-4">
          <div className="flex items-center gap-2 bg-green-600 px-3 py-2 rounded-full text-sm">
            <Shield size={16} />
            <span>SECURE</span>
          </div>

          <div className="flex items-center gap-2 bg-blue-600 px-3 py-2 rounded-full text-sm">
            <Award size={16} />
            <span>VERIFIED</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AviatorsGame;