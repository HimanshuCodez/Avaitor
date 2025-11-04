import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, User } from 'lucide-react';

const Navbar = () => {
  const [balance] = useState("100.00"); // Mock data
  const [wagering] = useState("25.50"); // Mock data
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Mock authentication state

  return (
    <header className="bg-red-600 bg-opacity-90 px-5 py-4 flex justify-between items-center relative">
      <div className="text-2xl font-bold">
        <Link to="/">Mostbet</Link>
      </div>

      <div className="hidden md:flex items-center gap-5">
        <div className="flex items-center gap-2 text-sm">
          <span>Balance:</span>
          <span className="bg-white bg-opacity-20 px-3 py-1 rounded font-semibold">
            {balance}
          </span>
        </div>

        <div className="flex items-center gap-2 text-sm">
          <Link to="/withdraw">
            <span className="cursor-pointer">Winning Amount:</span>
          </Link>
          <span className="bg-white bg-opacity-20 px-3 py-1 rounded font-semibold">
            {wagering}
          </span>
        </div>

        {isLoggedIn ? (
          <Link to="/profile" className="flex items-center gap-2 text-sm">
            <User size={24} />
            <span>Profile</span>
          </Link>
        ) : (
          <>
            <Link to="/login" className="bg-black hover:bg-gray-800 px-4 py-2 rounded-lg text-sm font-semibold transition-colors text-red-500">
              Login
            </Link>
            <Link to="/signup" className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded-lg text-sm font-semibold transition-colors text-white">
              Signup
            </Link>
          </>
        )}
      </div>

      <div className="relative">
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="p-2 hover:bg-white hover:bg-opacity-10 rounded"
        >
          <Menu size={24} />
        </button>
        
        {isMenuOpen && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-20">
            {isLoggedIn ? (
              <Link
                to="/profile"
                className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                <User size={20} />
                <span>Profile</span>
              </Link>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-4 py-2 text-sm text-red-500 hover:bg-red-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/signup"
                  className="block px-4 py-2 text-sm text-black hover:bg-red-100"
                  onClick={() => setIsMenuOpen(false)}
                >
                 
                  Signup
                </Link>
              </>
            )}
            <div className="border-t border-gray-200 my-1"></div>
            <div className="px-4 py-2 text-sm text-gray-700">
              Balance: {balance}
            </div>
            <div className="px-4 py-2 text-sm text-gray-700">
              Winning: {wagering}
            </div>
            <div className="border-t border-gray-200 my-1"></div>
            <Link 
              to="/withdraw" 
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Withdraw
            </Link>
            <Link 
              to="/add-cash" 
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              onClick={() => setIsMenuOpen(false)}
            >
              Add Cash
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;