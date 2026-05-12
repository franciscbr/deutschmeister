import React, { useState } from 'react';
import { useUser } from '../../context/UserContext';
import { Menu, Zap, Award, Flame, ChevronDown, Wifi, WifiOff } from 'lucide-react';

const Navbar = ({ onMenuClick }) => {
  const { userData, isOnline } = useUser();

  const getLevelColor = () => {
    if (userData.currentLevel <= 15) return 'text-green-400 bg-green-400/10';
    if (userData.currentLevel <= 35) return 'text-blue-400 bg-blue-400/10';
    return 'text-purple-400 bg-purple-400/10';
  };

  return (
    <header className="bg-[#151820]/95 backdrop-blur-sm border-b border-[#2a2e3a] px-4 py-3 sticky top-0 z-30">
      <div className="flex items-center justify-between">
        {/* Bouton menu */}
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 hover:bg-[#1c2030] rounded-xl transition"
        >
          <Menu className="w-6 h-6 text-gray-400" />
        </button>

        {/* Logo mobile */}
        <div className="lg:hidden flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-lg flex items-center justify-center">
            <span className="text-black text-sm font-bold">DE</span>
          </div>
        </div>

        {/* Stats */}
        <div className="flex items-center gap-3">
          {/* Statut connexion */}
          <div className={`hidden sm:flex items-center gap-1 text-xs ${isOnline ? 'text-green-400' : 'text-red-400'}`}>
            {isOnline ? <Wifi className="w-3 h-3" /> : <WifiOff className="w-3 h-3" />}
          </div>

          {/* XP */}
          <div className="flex items-center gap-1.5">
            <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full p-1">
              <Zap className="w-3 h-3 text-black" />
            </div>
            <span className="text-sm font-bold text-yellow-400">{userData.xp}</span>
          </div>

          {/* Niveau */}
          <div className={`flex items-center gap-1.5 rounded-full px-2 py-1 ${getLevelColor()}`}>
            <Award className="w-3 h-3" />
            <span className="text-xs font-semibold">Niv.{userData.currentLevel}</span>
          </div>

          {/* Streak */}
          <div className="flex items-center gap-1.5">
            <Flame className="w-4 h-4 text-orange-500" />
            <span className="text-xs font-bold text-orange-500">{userData.streak}</span>
          </div>

          <button className="p-1.5 hover:bg-[#1c2030] rounded-xl transition">
            <ChevronDown className="w-4 h-4 text-gray-400" />
          </button>
        </div>
      </div>
      
      {/* Barre progression niveau (mobile) */}
      <div className="mt-2 lg:hidden">
        <div className="flex items-center justify-between text-xs text-gray-500 mb-1">
          <span>Niveau {userData.currentLevel}/50</span>
          <span>{Math.round((userData.currentLevel / 50) * 100)}%</span>
        </div>
        <div className="h-1 bg-[#2a2e3a] rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-500"
            style={{ width: `${(userData.currentLevel / 50) * 100}%` }}
          />
        </div>
      </div>
    </header>
  );
};

export default Navbar;