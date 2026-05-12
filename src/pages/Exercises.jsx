import React, { useState } from 'react';
import { useUser } from '../context/UserContext';
import { CheckCircle, XCircle, Lightbulb, ChevronRight } from 'lucide-react';

const Exercises = () => {
  const { userData, updateStats } = useUser();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const exercises = [
    { id: 1, level: 'A2', category: 'declinaison', question: 'Ich sehe ___ Mann.', hint: 'Akkusativ masculin', options: ['der', 'den', 'dem', 'des'], answer: 'den', explanation: 'Avec "sehen", l\'objet direct est à l\'accusatif. "der" → "den".' },
    { id: 2, level: 'A2', category: 'declinaison', question: 'Ich helfe ___ Frau.', hint: 'Dativ féminin', options: ['die', 'der', 'den', 'dem'], answer: 'der', explanation: '"helfen" régit le datif. "die" → "der".' },
    { id: 3, level: 'A2', category: 'conjugaison', question: 'Er ___ sehr gut Deutsch.', hint: '3e personne singulier de sprechen', options: ['spricht', 'spreche', 'sprecht', 'sprechen'], answer: 'spricht', explanation: '"sprechen" est irrégulier : e→i à la 2e et 3e personne' },
  ];

  const currentExercise = exercises[currentIndex];

  const handleAnswer = (answer) => {
    if (answered) return;
    setSelectedAnswer(answer);
    const isCorrect = answer === currentExercise.answer;
    const xpGained = isCorrect ? 10 : 0;
    
    updateStats(isCorrect, xpGained);
    setAnswered(true);
    setShowExplanation(true);
  };

  const nextExercise = () => {
    if (currentIndex + 1 < exercises.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setAnswered(false);
      setShowExplanation(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-[#151820] border border-[#2a2e3a] rounded-2xl overflow-hidden">
        <div className="p-6 border-b border-[#2a2e3a]">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <span className="text-xs px-2 py-1 rounded-full bg-green-400/20 text-green-400">
                {currentExercise.level}
              </span>
              <span className="text-xs text-gray-500 capitalize">{currentExercise.category}</span>
            </div>
            <span className="text-sm text-gray-500">{currentIndex + 1}/{exercises.length}</span>
          </div>

          <h2 className="text-2xl font-bold font-serif mb-3">{currentExercise.question}</h2>
          <p className="text-sm text-gray-400 italic">{currentExercise.hint}</p>
        </div>

        <div className="p-6 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {currentExercise.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => handleAnswer(opt)}
                disabled={answered}
                className={`
                  p-4 rounded-xl text-left font-medium transition-all
                  ${answered && opt === currentExercise.answer ? 'border-2 border-green-500 bg-green-500/10' : ''}
                  ${answered && selectedAnswer === opt && opt !== currentExercise.answer ? 'border-2 border-red-500 bg-red-500/10' : ''}
                  ${!answered ? 'bg-[#1c2030] hover:bg-[#242840] hover:scale-[1.02]' : 'bg-[#1c2030]'}
                `}
              >
                <div className="flex items-center justify-between">
                  <span>{opt}</span>
                  {answered && opt === currentExercise.answer && <CheckCircle className="w-5 h-5 text-green-500" />}
                  {answered && selectedAnswer === opt && opt !== currentExercise.answer && <XCircle className="w-5 h-5 text-red-500" />}
                </div>
              </button>
            ))}
          </div>

          {showExplanation && (
            <div className="mt-6 p-4 bg-[#1c2030] rounded-xl animate-fade-in">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                <p className="text-sm text-gray-300">{currentExercise.explanation}</p>
              </div>
            </div>
          )}

          {answered && currentIndex + 1 < exercises.length && (
            <button
              onClick={nextExercise}
              className="w-full mt-4 py-3 bg-yellow-500 text-black rounded-xl font-bold hover:bg-yellow-400 transition flex items-center justify-center gap-2"
            >
              Exercice suivant
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Exercises;