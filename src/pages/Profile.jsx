import React, { useState, useEffect } from 'react';
import { useUser } from '../context/UserContext';
import { User, Award, Zap, Flame, Circle, Wifi, WifiOff } from 'lucide-react';

const Profile = () => {
  const { userData, setUserName, isOnline } = useUser();
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempName, setTempName] = useState(userData.userName || '');

  const getPrecision = () => {
    if (userData.totalAnswers === 0) return 0;
    return Math.round((userData.totalCorrect / userData.totalAnswers) * 100);
  };

  const getLevelProgress = () => {
    return (userData.currentLevel / 50) * 100;
  };

  const handleSaveName = () => {
    if (tempName.trim()) {
      setUserName(tempName.trim());
    }
    setIsEditingName(false);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-5 pb-20">
      {/* Statut connexion */}
      <div className={`flex items-center justify-end gap-2 text-xs ${isOnline ? 'text-green-400' : 'text-red-400'}`}>
        {isOnline ? <Wifi className="w-3 h-3" /> : <WifiOff className="w-3 h-3" />}
        <span>{isOnline ? 'Sauvegarde cloud active' : 'Hors ligne - sauvegarde locale'}</span>
      </div>

      {/* En-tête profil */}
      <div className="bg-gradient-to-r from-[#1c2030] to-[#151820] rounded-2xl p-6 border border-[#2a2e3a]">
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 flex items-center justify-center">
            <User className="w-10 h-10 text-black" />
          </div>
          <div className="flex-1">
            {isEditingName ? (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={tempName}
                  onChange={(e) => setTempName(e.target.value)}
                  className="bg-[#1c2030] border border-[#2a2e3a] rounded-lg px-3 py-2 text-white text-lg font-bold"
                  autoFocus
                />
                <button
                  onClick={handleSaveName}
                  className="px-4 py-2 bg-green-500 text-black rounded-lg font-medium"
                >
                  ✓
                </button>
                <button
                  onClick={() => setIsEditingName(false)}
                  className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg font-medium"
                >
                  ✗
                </button>
              </div>
            ) : (
              <div className="flex items-center gap-2">
                <h1 className="text-2xl font-bold">
                  {userData.userName || 'Apprenant'} 👋
                </h1>
                <button
                  onClick={() => setIsEditingName(true)}
                  className="text-xs text-gray-400 hover:text-yellow-400"
                >
                  ✏️
                </button>
              </div>
            )}
            <div className="flex items-center gap-3 mt-2">
              <span className="text-sm px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full">
                Niveau {userData.currentLevel}/50
              </span>
              <span className="text-sm text-gray-400">
                Membre depuis {new Date().toLocaleDateString()}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Statistiques */}
      <div className="grid grid-cols-2 gap-3">
        <div className="bg-[#151820] border border-[#2a2e3a] rounded-xl p-4 text-center">
          <Zap className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-yellow-400">{userData.xp}</div>
          <div className="text-xs text-gray-500">XP totaux</div>
        </div>
        <div className="bg-[#151820] border border-[#2a2e3a] rounded-xl p-4 text-center">
          <Flame className="w-6 h-6 text-orange-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-orange-400">{userData.streak}</div>
          <div className="text-xs text-gray-500">jours de série</div>
        </div>
        <div className="bg-[#151820] border border-[#2a2e3a] rounded-xl p-4 text-center">
          <Circle className="w-6 h-6 text-blue-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-blue-400">{getPrecision()}%</div>
          <div className="text-xs text-gray-500">précision</div>
        </div>
        <div className="bg-[#151820] border border-[#2a2e3a] rounded-xl p-4 text-center">
          <Award className="w-6 h-6 text-yellow-400 mx-auto mb-2" />
          <div className="text-2xl font-bold text-yellow-400">{userData.totalAnswers}</div>
          <div className="text-xs text-gray-500">exercices</div>
        </div>
      </div>

      {/* Barre progression niveau */}
      <div className="bg-[#151820] border border-[#2a2e3a] rounded-xl p-4">
        <div className="flex justify-between text-sm mb-2">
          <span>Progression globale</span>
          <span className="text-yellow-400">{Math.round(getLevelProgress())}%</span>
        </div>
        <div className="h-2 bg-[#2a2e3a] rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-500"
            style={{ width: `${getLevelProgress()}%` }}
          />
        </div>
        <p className="text-xs text-gray-500 mt-2">
          {userData.currentLevel}/50 niveaux complétés
        </p>
      </div>
    </div>
  );
};

export default Profile;