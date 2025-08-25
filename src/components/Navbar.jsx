import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <Link to="/" className="text-white text-lg">My App</Link>
        <div>
          <Link to="/" className="text-gray-300 hover:text-white px-3 py-2">Home</Link>
          <Link to="/about" className="text-gray-300 hover:text-white px-3 py-2">About</Link>
          <Link to="/contact" className="text-gray-300 hover:text-white px-3 py-2">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
