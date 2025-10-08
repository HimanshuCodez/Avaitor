import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';

const Navbar = () => {
  const [balance] = useState("10000"); // Mock data
  const [wagering] = useState("5000"); // Mock data
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-red-600 bg-opacity-90 px-5 py-4 flex justify-between items-center relative">
      <div className="text-2xl font-bold">
        <Link to="/">Mostbet</Link>
      </div>

      <div className="flex items-center gap-5">
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