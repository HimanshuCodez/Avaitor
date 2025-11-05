import React, { useState } from "react";
import { Shield, Award } from "lucide-react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";

const AddCash = () => {
  const [addAmount, setAddAmount] = useState("100");

  return (
    <div className="relative min-h-screen text-white overflow-hidden">
      <img
        src="/avitor.jpg"
        alt="Game Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center px-8 py-12 text-center">
          <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-2xl w-full max-w-md">
           <p className="text-gray-300 mb-8 text-lg">Add funds to your account.</p>
<h1 className="text-4xl font-light mb-2 tracking-wide">Add Cash</h1>
            <div className="space-y-6">
              <div className="bg-white bg-opacity-10 rounded-lg py-4 px-6">
                <label htmlFor="amount" className="block text-left text-gray-300 mb-2">Amount to Add</label>
                <div className="flex items-center">
                  <span className="text-2xl font-semibold text-gray-400 mr-2">₹</span>
                  <input
                    type="text"
                    id="amount"
                    value={addAmount}
                    onChange={(e) => setAddAmount(e.target.value)}
                    className="bg-transparent text-4xl font-bold text-white w-full focus:outline-none"
                  />
                </div>
              </div>
             <Link to={"/problem"}>  <button className="w-full mb-10 bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Add via Net Banking
              </button></Link>
               <Link to={"/problem"}><button className="w-full bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-lg">
                Add Cash
              </button></Link>
            </div>
          </div>
        </main>
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

export default AddCash;
