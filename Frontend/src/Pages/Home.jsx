import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Menu, 
  User, 
  Shield, 
  Globe, 
  Gift, 
  ChevronRight,
  TrendingUp,
  Palette,
  Dice1,
  Flame,
  Zap,
  Crown
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function GamingBettingHeader() {
  const [activeTab, setActiveTab] = useState('sports');

  const games = [
    {
      name: 'Aviator',
      image: '/avitor.jpg', // Path to your Aviator image
      color: 'from-red-600 to-orange-500',
      link: '/game'
    },
    {
      name: 'Color Prediction',
      image: 'https://imgs.search.brave.com/9LZD4MVV5n42fx3OG7cGmKTflS-Ac1bhsGr845ONCBs/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvODg1/ODMxNjQ4L3ZlY3Rv/ci9lbnRlci10by13/aW4tYmFubmVyLmpw/Zz9zPTYxMng2MTIm/dz0wJms9MjAmYz13/b3NIQjZlRmY5RnlF/ZUtrQU5ud2hNb1NT/SlB6WnNKb2lHVW9J/Tnh0RGVnPQ', // Path to your Color Prediction image
      color: 'from-purple-600 to-pink-500',
      link: '/prediction'
    },
    {
      name: 'Lucky Dice',
      image: 'https://imgs.search.brave.com/hSyDxOLyK4pYAJW99fbGd6PhrbfNBVrMxcBfMvz-wj4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9lbmRv/cnBoaW5hLmNvbS91/cGxvYWRzL3Bob3Rv/cy9sdWNreWRpY2Uy/LWFhMGI2M2NjNjgu/anBn',
      color: 'from-blue-600 to-cyan-500',
      bgPattern: '🎲'
    },
    {
      name: 'Dragon Tiger',
      image: 'https://imgs.search.brave.com/zSmmyWymFGx9gARzJOuh2fGQ72IC0c0wgFz9Sz5eaPY/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9kcmFn/b250aWdlcmdhbWUu/aW4vd3AtY29udGVu/dC91cGxvYWRzLzIw/MjUvMDIvRHJhZ29u/LVRpZ2VyLUdhbWU2/LndlYnA',
      color: 'from-yellow-600 to-red-600',
      bgPattern: '🐉'
    },
    {
      name: 'Lightning Roulette',
      image:'https://imgs.search.brave.com/quB_HqYl81x6S1V5xRAR26w5peiFQCPbGUkUUi1uzhQ/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9nYW1l/cy5ldm9sdXRpb24u/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIzLzAyL2xpZ2h0/bmluZ19yb3VsZXR0/ZV93ZWJfaW1hZ2Vy/eV8xMDAweDU2M18y/MDIzXzAxLmpwZw',
      color: 'from-indigo-600 to-purple-600',
      bgPattern: '⚡'
    },
    {
      name: 'Royal Poker',
      image: "https://imgs.search.brave.com/Tlbc9YSYkn0VLD5dW02FA_0wB-pN8Tt95psGxIPRqOI/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTU3/MjgzNzMzL3Bob3Rv/L3Bva2VyLXRhYmxl/LWludGVyZmFjZS5q/cGc_cz02MTJ4NjEy/Jnc9MCZrPTIwJmM9/WklOcjM4aHJKZ0V2/RFlrSVJpRjZkeHRC/aGdwNEgzM3dVdjF2/ODJDU1NVOD0",
      color: 'from-amber-600 to-yellow-500',
      bgPattern: '👑'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black">
      {/* Top Banner */}
      <motion.div 
        className="bg-gradient-to-r from-red-600 to-red-500 text-white py-2 px-4 text-center font-bold text-sm"
        initial={{ y: -50 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Up to ₹45,000 Promo: <span className="bg-white text-red-600 px-2 py-1 rounded ml-2">MBEXY3</span>
        <button className="ml-4 bg-white text-red-600 px-4 py-1 rounded-full font-bold hover:bg-gray-100 transition-all">
          Get bonus
        </button>
      </motion.div>


      {/* Main Header */}
      <motion.header 
        className="bg-black border-b border-red-900"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div 
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className="flex items-center space-x-1">
                <span className="text-white font-bold text-3xl">M</span>
                <span className="text-red-600 font-bold text-3xl">●</span>
                <span className="text-white font-bold text-3xl">STBET</span>
              </div>
            </motion.div>

            {/* Auth Buttons */}
            <div className="flex items-center space-x-3">
              <motion.button
                className="px-6 py-2.5 bg-gradient-to-r from-red-600 to-red-500 text-white rounded-full font-bold hover:from-red-500 hover:to-red-400 transition-all shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                REGISTER
              </motion.button>
              <motion.button
                className="px-6 py-2.5 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full font-bold hover:from-blue-500 hover:to-blue-400 transition-all shadow-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                LOG IN
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Navigation Tabs */}
      <motion.nav 
        className="bg-gradient-to-r from-gray-900 to-black border-b border-red-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-6 py-3">
            {['SPORTS', 'LIVE', 'CASINO', 'LIVE-CASINO'].map((tab) => (
              <motion.button
                key={tab}
                className={`font-bold text-sm px-4 py-2 rounded-lg transition-all ${
                  activeTab === tab.toLowerCase()
                    ? 'bg-red-600 text-white'
                    : 'text-gray-400 hover:text-white'
                }`}
                onClick={() => setActiveTab(tab.toLowerCase())}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tab}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.nav>

      {/* Sports Sub-navigation */}
      <motion.div 
        className="bg-black/50 backdrop-blur-sm border-b border-red-900/30"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center space-x-6 py-3">
            {['⚽ FOOTBALL', '🎾 TENNIS', '🏒 HOCKEY'].map((sport, index) => (
              <motion.button
                key={sport}
                className="text-white font-semibold text-sm hover:text-red-500 transition-colors"
                whileHover={{ scale: 1.05, y: -2 }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                {sport}
              </motion.button>
            ))}
          </div>
        </div>
      </motion.div>

      {/* Invite Friends Banner */}
      <motion.div 
        className="max-w-7xl mx-auto px-4 py-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.7 }}
      >
        <div className="bg-gradient-to-r from-red-600 via-red-500 to-orange-500 rounded-3xl p-8 relative overflow-hidden">
          <div className="absolute top-0 right-0 text-9xl opacity-10">🎁</div>
          <div className="relative z-10">
            <h2 className="text-white font-bold text-3xl mb-2">INVITE FRIENDS</h2>
            <p className="text-white/90 mb-4">Get up to 15% profit from your friends' bets!</p>
            <motion.button
              className="px-8 py-3 bg-white text-red-600 rounded-full font-bold hover:bg-gray-100 transition-all shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              CLAIM BONUS
            </motion.button>
          </div>
          <div className="absolute bottom-4 right-8 flex items-center">
            <motion.div
              className="text-6xl"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              💰
            </motion.div>
            <motion.div
              className="text-6xl ml-4"
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              🎉
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Games Grid */}
      <div className="max-w-7xl mx-auto px-4 pb-12">
        <motion.h2 
          className="text-white font-bold text-2xl md:text-3xl mb-6 flex items-center"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.8 }}
        >
          <span className="text-red-500 mr-2">🔥</span>
          Popular Games
        </motion.h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {games.map((game, index) => (
            <motion.div
              key={game.name}
              className="relative bg-gray-900 rounded-xl overflow-hidden cursor-pointer group border-2 border-gray-800 hover:border-red-500 transition-all"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 + index * 0.1 }}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link to={game.link || '#'}>
              {/* Game Icon/Image */}
              <div className={`relative h-32 md:h-40 bg-gradient-to-br ${game.color} flex items-center justify-center`}>
                {game.image ? (
                  <img src={game.image} alt={game.name} className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                  <>
                    {/* Background Pattern */}
                    <div className="absolute inset-0 text-6xl md:text-7xl opacity-20 flex items-center justify-center">
                      {game.bgPattern}
                    </div>
                    
                    {/* Icon */}
                    <div className="relative z-10 bg-black/30 backdrop-blur-sm rounded-full p-3 md:p-4 text-white">
                      {game.icon}
                    </div>
                  </>
                )}

                {/* Live Badge */}
                <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center space-x-1">
                  <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse"></div>
                  <span>LIVE</span>
                </div>

                {/* Shine Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                  initial={{ x: '-100%' }}
                  animate={{ x: '100%' }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                />
              </div>

              {/* Game Info */}
              <div className="p-3 md:p-4 bg-black/50">
                <h3 className="text-white font-bold text-sm md:text-base mb-1 truncate">{game.name}</h3>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400 text-xs">Play Now</span>
                  <ChevronRight className="w-4 h-4 text-red-500 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-red-600/0 to-red-600/0 group-hover:from-red-600/20 group-hover:to-red-600/5 transition-all duration-300 pointer-events-none"></div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Bottom Info Bar */}
      <motion.div 
        className="bg-black border-t border-red-900/30 py-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-white font-bold">
            Mostbet IN • 💰 ₹45000 🎁 Promo: MBEXY3
          </p>
          <p className="text-gray-400 text-sm mt-2">
            Author: Mostbet Aviator
          </p>
        </div>
      </motion.div>

      {/* Floating Particles */}
      {[...Array(10)].map((_, i) => (
        <motion.div
          key={i}
          className="fixed w-2 h-2 bg-red-500/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        />
      ))}
    </div>
  );
}