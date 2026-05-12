import React, { useState, useEffect } from 'react';
import { useUser } from '../context/UserContext';
import { Trophy, Medal, User, Zap, TrendingUp, RefreshCw } from 'lucide-react';

const Leaderboard = () => {
  const { userData } = useUser();
  const [leaderboard, setLeaderboard] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Simuler un classement (pour l'instant, basé sur localStorage)
  // Dans une vraie version Firebase, tu récupères depuis Firestore
  useEffect(() => {
    // Simulation de classement
    const mockLeaderboard = [
      { name: 'Maximilian', xp: 1250, level: 12, accuracy: 85 },
      { name: 'Sophia', xp: 980, level: 9, accuracy: 78 },
      { name: 'Lukas', xp: 760, level: 7, accuracy: 72 },
      { name: userData.userName || 'Vous', xp: userData.xp, level: userData.currentLevel, accuracy: userData.totalAnswers > 0 ? Math.round((userData.totalCorrect / userData.totalAnswers) * 100) : 0, isCurrentUser: true },
      { name: 'Anna', xp: 540, level: 5, accuracy: 68 },
      { name: 'Felix', xp: 320, level: 3, accuracy: 62 },
    ];
    
    // Trier par XP
    const sorted = [...mockLeaderboard].sort((a, b) => b.xp - a.xp);
    setLeaderboard(sorted);
    setIsLoading(false);
  }, [userData]);

  const getRankIcon = (rank) => {
    if (rank === 0) return <Trophy className="w-5 h-5 text-yellow-400" />;
    if (rank === 1) return <Medal className="w-5 h-5 text-gray-400" />;
    if (rank === 2) return <Medal className="w-5 h-5 text-orange-400" />;
    return null;
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-yellow-400" />
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto pb-20">
      {/* En-tête */}
      <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 rounded-2xl p-6 border border-yellow-500/30 mb-6 text-center">
        <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
        <h1 className="text-2xl font-bold mb-2">Classement</h1>
        <p className="text-gray-400 text-sm">Comparez votre progression avec les autres apprenants</p>
      </div>

      {/* Stats personnelles */}
      <div className="bg-[#151820] border border-[#2a2e3a] rounded-xl p-4 mb-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm text-gray-400">Votre position</span>
          <span className="text-sm text-yellow-400 font-bold">
            #{leaderboard.findIndex(u => u.isCurrentUser) + 1} / {leaderboard.length}
          </span>
        </div>
        <div className="grid grid-cols-3 gap-3 text-center">
          <div>
            <Zap className="w-4 h-4 text-yellow-400 mx-auto mb-1" />
            <span className="text-lg font-bold text-yellow-400">{userData.xp}</span>
            <p className="text-xs text-gray-500">XP</p>
          </div>
          <div>
            <TrendingUp className="w-4 h-4 text-blue-400 mx-auto mb-1" />
            <span className="text-lg font-bold text-blue-400">{userData.currentLevel}/50</span>
            <p className="text-xs text-gray-500">Niveau</p>
          </div>
          <div>
            <Medal className="w-4 h-4 text-purple-400 mx-auto mb-1" />
            <span className="text-lg font-bold text-purple-400">
              {userData.totalAnswers > 0 ? Math.round((userData.totalCorrect / userData.totalAnswers) * 100) : 0}%
            </span>
            <p className="text-xs text-gray-500">Précision</p>
          </div>
        </div>
      </div>

      {/* Liste du classement */}
      <div className="bg-[#151820] border border-[#2a2e3a] rounded-xl overflow-hidden">
        <div className="p-4 border-b border-[#2a2e3a] bg-[#1c2030]">
          <div className="grid grid-cols-12 text-xs text-gray-500 font-medium">
            <div className="col-span-2">Rang</div>
            <div className="col-span-5">Apprenant</div>
            <div className="col-span-3 text-center">XP</div>
            <div className="col-span-2 text-right">Niv.</div>
          </div>
        </div>
        
        <div className="divide-y divide-[#2a2e3a]">
          {leaderboard.map((user, idx) => (
            <div 
              key={idx} 
              className={`p-4 transition ${user.isCurrentUser ? 'bg-yellow-500/10 border-l-2 border-yellow-400' : 'hover:bg-[#1c2030]'}`}
            >
              <div className="grid grid-cols-12 items-center">
                <div className="col-span-2 flex items-center gap-1">
                  {getRankIcon(idx)}
                  <span className={`text-sm font-medium ${idx < 3 ? 'font-bold' : ''}`}>
                    {idx + 1}
                  </span>
                </div>
                <div className="col-span-5 flex items-center gap-2">
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-yellow-500 to-yellow-600 flex items-center justify-center text-black text-xs font-bold">
                    {user.name.charAt(0)}
                  </div>
                  <span className={`text-sm ${user.isCurrentUser ? 'text-yellow-400 font-bold' : 'text-gray-300'}`}>
                    {user.name}
                    {user.isCurrentUser && <span className="text-xs text-gray-500 ml-1">(vous)</span>}
                  </span>
                </div>
                <div className="col-span-3 text-center">
                  <span className="text-sm font-medium text-yellow-400">{user.xp}</span>
                </div>
                <div className="col-span-2 text-right">
                  <span className="text-sm text-gray-400">{user.level}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;