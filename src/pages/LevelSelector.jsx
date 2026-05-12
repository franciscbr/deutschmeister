import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUser } from '../context/UserContext';
import { Lock, Unlock, Trophy, Star, CheckCircle, BookOpen, Sparkles } from 'lucide-react';

const LevelSelector = () => {
  const { userData } = useUser();
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState('article');
  
  const getLevelStatus = (level) => {
    const levelKey = `level${level}`;
    const progress = userData.levelProgress[levelKey];
    
    // Niveau 1 toujours débloqué
    if (level === 1) {
      const completed = progress?.total >= 10 && (progress.correct / progress.total) >= 0.8;
      const stars = progress?.total > 0 ? Math.floor((progress.correct / progress.total) * 3) : 0;
      return { unlocked: true, completed, stars, successRate: progress?.total > 0 ? (progress.correct / progress.total) * 100 : 0 };
    }
    
    // Vérifier si le niveau précédent est débloqué avec 80%
    const prevKey = `level${level - 1}`;
    const prevProgress = userData.levelProgress[prevKey];
    const prevSuccessRate = prevProgress?.total > 0 ? (prevProgress.correct / prevProgress.total) * 100 : 0;
    
    const unlocked = prevSuccessRate >= 80;
    const completed = progress?.total >= 10 && (progress.correct / progress.total) >= 0.8;
    const stars = progress?.total > 0 ? Math.floor((progress.correct / progress.total) * 3) : 0;
    const successRate = progress?.total > 0 ? (progress.correct / progress.total) * 100 : 0;
    
    return { unlocked, completed, stars, successRate, requiredRate: prevSuccessRate };
  };
  
  const handlePlayLevel = (level) => {
    const status = getLevelStatus(level);
    if (status.unlocked) {
      navigate(`/exercises?type=${selectedType}&level=${level}`);
    }
  };
  
  // Calcul du pourcentage global
  const totalCompleted = [...Array(50)].filter((_, i) => {
    const status = getLevelStatus(i + 1);
    return status.completed;
  }).length;
  
  const globalProgress = (totalCompleted / 50) * 100;
  
  return (
    <div className="max-w-4xl mx-auto pb-20">
      {/* En-tête */}
      <div className="mb-6">
        <h1 className="text-2xl font-bold mb-2">🗺️ Sélection des niveaux</h1>
        <p className="text-gray-400">Chaque niveau nécessite 80% de réussite pour débloquer le suivant</p>
        
        {/* Progression globale */}
        <div className="mt-4 bg-[#151820] border border-[#2a2e3a] rounded-xl p-4">
          <div className="flex justify-between text-sm mb-2">
            <span>Progression globale</span>
            <span className="text-yellow-400 font-bold">{Math.round(globalProgress)}%</span>
          </div>
          <div className="h-2 bg-[#2a2e3a] rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-full transition-all duration-500"
              style={{ width: `${globalProgress}%` }}
            />
          </div>
          <p className="text-xs text-gray-500 mt-2">{totalCompleted}/50 niveaux complétés</p>
        </div>
      </div>
      
      {/* Sélecteur de type d'exercice */}
      <div className="flex gap-3 mb-6">
        <button
          onClick={() => setSelectedType('article')}
          className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition ${
            selectedType === 'article' 
              ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30' 
              : 'bg-[#1c2030] text-gray-400 hover:bg-[#242840]'
          }`}
        >
          <BookOpen className="w-4 h-4" />
          📖 Déclinaison des articles
        </button>
        <button
          onClick={() => setSelectedType('adjective')}
          className={`flex items-center gap-2 px-5 py-3 rounded-xl font-medium transition ${
            selectedType === 'adjective' 
              ? 'bg-purple-500 text-white shadow-lg shadow-purple-500/30' 
              : 'bg-[#1c2030] text-gray-400 hover:bg-[#242840]'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          ✨ Déclinaison des adjectifs
        </button>
      </div>
      
      {/* Grille des niveaux */}
      <div className="grid grid-cols-5 sm:grid-cols-10 gap-3">
        {[...Array(50)].map((_, i) => {
          const level = i + 1;
          const status = getLevelStatus(level);
          
          let bgClass = 'bg-[#1c2030] border border-[#2a2e3a]';
          let textClass = 'text-gray-400';
          
          if (status.unlocked) {
            bgClass = 'bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 border border-yellow-500/30';
            textClass = 'text-white';
          }
          
          if (status.completed) {
            bgClass = 'bg-gradient-to-br from-green-500/20 to-green-600/10 border border-green-500/30 ring-2 ring-green-500/50';
          }
          
          return (
            <button
              key={level}
              onClick={() => handlePlayLevel(level)}
              disabled={!status.unlocked}
              className={`
                aspect-square rounded-xl flex flex-col items-center justify-center p-2 transition-all
                ${bgClass}
                ${status.unlocked ? 'hover:scale-105 cursor-pointer' : 'cursor-not-allowed opacity-50'}
              `}
            >
              <span className={`text-lg font-bold ${textClass}`}>{level}</span>
              
              {status.completed && (
                <div className="flex items-center gap-0.5 mt-1">
                  {[...Array(3)].map((_, s) => (
                    <Star key={s} className={`w-3 h-3 ${s < status.stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-600'}`} />
                  ))}
                </div>
              )}
              
              {!status.unlocked && (
                <Lock className="w-4 h-4 text-gray-500 mt-1" />
              )}
              
              {status.unlocked && !status.completed && (
                <div className="w-8 h-0.5 bg-yellow-500/50 rounded-full mt-2" />
              )}
            </button>
          );
        })}
      </div>
      
      {/* Légende */}
      <div className="mt-8 flex flex-wrap gap-6 justify-center text-xs">
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-yellow-500/30 rounded border border-yellow-500/50"></div>
          <span className="text-gray-400">Débloqué (peut jouer)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-green-500/30 rounded border border-green-500/50 ring-1 ring-green-500"></div>
          <span className="text-gray-400">Complété (80% atteint)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-4 h-4 bg-[#1c2030] rounded border border-[#2a2e3a]"></div>
          <span className="text-gray-400">Verrouillé</span>
        </div>
        <div className="flex items-center gap-2">
          <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
          <span className="text-gray-400">Étoiles de réussite</span>
        </div>
      </div>
      
      {/* Info niveau actuel */}
      <div className="mt-6 p-4 bg-[#1c2030] rounded-xl text-center">
        <p className="text-sm text-gray-400">
          Niveau actuel : <span className="text-yellow-400 font-bold">{userData.currentLevel}</span> / 50
        </p>
        <p className="text-xs text-gray-500 mt-1">
          Continuez vos exercices pour progresser !
        </p>
      </div>
    </div>
  );
};

export default LevelSelector;