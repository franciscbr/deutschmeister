import React from 'react';
import { useUser } from '../context/UserContext';
import { Gamepad2, Zap } from 'lucide-react';

const Games = () => {
  const { userData, addGamePoints } = useUser();

  const games = [
    {
      id: 'matching',
      name: 'Associer les articles',
      icon: '🔗',
      description: 'Associez chaque nom au bon article (der/die/das) en un minimum de temps.',
      xpReward: 20,
    },
    {
      id: 'quiz',
      name: 'Quiz Rapide',
      icon: '⚡',
      description: 'Testez vos connaissances en déclinaison dans une session chronométrée.',
      xpReward: 25,
    },
    {
      id: 'conjugator',
      name: 'Conjugue !',
      icon: '🔁',
      description: 'Pratiquez la conjugaison des verbes allemands au présent et au passé.',
      xpReward: 20,
    },
  ];

  const handlePlayGame = (game) => {
    addGamePoints(game.xpReward);
    alert(`🎮 Jeu "${game.name}" lancé ! +${game.xpReward} XP gagnés !`);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="bg-gradient-to-r from-[#1c2030] to-[#151820] rounded-2xl p-6 border border-[#2a2e3a]">
        <div className="flex items-center gap-3 mb-2">
          <Gamepad2 className="w-8 h-8 text-yellow-400" />
          <h1 className="text-2xl font-bold">Jeux éducatifs</h1>
        </div>
        <p className="text-gray-400">Apprenez en vous amusant ! Chaque jeu vous rapporte de l'XP.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {games.map((game) => (
          <div
            key={game.id}
            className="bg-[#151820] border border-[#2a2e3a] rounded-2xl overflow-hidden hover:border-yellow-500/30 transition-all duration-300"
          >
            <div className="p-6 text-center">
              <div className="w-20 h-20 mx-auto bg-gradient-to-br from-yellow-500/20 to-yellow-600/10 rounded-2xl flex items-center justify-center text-4xl mb-4">
                {game.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{game.name}</h3>
              <p className="text-sm text-gray-400 mb-4">{game.description}</p>
              <div className="flex items-center justify-center gap-2 mb-4">
                <Zap className="w-4 h-4 text-yellow-400" />
                <span className="text-sm font-medium text-yellow-400">+{game.xpReward} XP</span>
              </div>
              <button
                onClick={() => handlePlayGame(game)}
                className="w-full py-2 bg-yellow-500 text-black rounded-xl font-bold hover:bg-yellow-400 transition"
              >
                Jouer maintenant
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Games;