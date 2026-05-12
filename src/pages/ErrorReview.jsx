import React, { useState, useEffect } from 'react';
import { useUser } from '../context/UserContext';
import { getErrorExercises } from '../data/levelManager';
import { AlertCircle, CheckCircle, XCircle, Lightbulb, ChevronRight, RefreshCw, ArrowDown } from 'lucide-react';

const ErrorReview = () => {
  const { userData, updateExerciseResult, resetErrorsForLevel } = useUser();
  const [selectedLevel, setSelectedLevel] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [reviewExercises, setReviewExercises] = useState([]);
  const [isCorrect, setIsCorrect] = useState(null);
  const [levelCompleted, setLevelCompleted] = useState(false);

  const errorsByLevel = userData.getErrorsByLevel();
  const levelsWithErrors = Object.keys(errorsByLevel).map(Number).sort((a, b) => a - b);

  const startReview = (level) => {
    const errors = errorsByLevel[level];
    const exercises = getErrorExercises(errors);
    
    // Mélanger les exercices pour chaque révision
    const shuffled = [...exercises];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    
    setReviewExercises(shuffled);
    setSelectedLevel(level);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setAnswered(false);
    setShowExplanation(false);
    setIsCorrect(null);
    setLevelCompleted(false);
  };

  const handleAnswer = (answer) => {
    if (answered) return;
    const current = reviewExercises[currentIndex];
    const correct = answer.trim().toLowerCase() === current.correctAnswer.trim().toLowerCase();

    setSelectedAnswer(answer);
    setIsCorrect(correct);
    setAnswered(true);
    setShowExplanation(true);

    updateExerciseResult(
      current.id,
      correct,
      answer,
      current.correctAnswer,
      current.explanation
    );
  };

  const nextExercise = () => {
    if (currentIndex + 1 < reviewExercises.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setAnswered(false);
      setShowExplanation(false);
      setIsCorrect(null);
    } else {
      setLevelCompleted(true);
    }
  };

  const resetLevel = (level) => {
    if (confirm(`Réinitialiser toutes les erreurs du niveau ${level} ?`)) {
      resetErrorsForLevel(level);
      setSelectedLevel(null);
      setReviewExercises([]);
    }
  };

  const finishReview = () => {
    setSelectedLevel(null);
    setReviewExercises([]);
    setLevelCompleted(false);
  };

  // Écran de fin de révision
  if (levelCompleted) {
    const successCount = reviewExercises.filter(ex => 
      ex.userAnswer && ex.userAnswer.toLowerCase() === ex.correctAnswer.toLowerCase()
    ).length;
    
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
        <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-12 h-12 text-green-500" />
        </div>
        <h2 className="text-xl font-bold mb-2">Révision terminée ! 🎉</h2>
        <p className="text-gray-400 mb-4">
          Vous avez revu {reviewExercises.length} erreur(s) du niveau {selectedLevel}.
        </p>
        <button
          onClick={finishReview}
          className="px-6 py-3 bg-yellow-500 text-black rounded-xl font-bold hover:bg-yellow-400 transition"
        >
          Retour à la liste des niveaux
        </button>
      </div>
    );
  }

  // Vue exercice actif
  if (selectedLevel && reviewExercises.length > 0) {
    const current = reviewExercises[currentIndex];
    if (!current) return null;

    // Mélanger les options pour chaque exercice
    const shuffledOptions = [...current.options];
    for (let i = shuffledOptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledOptions[i], shuffledOptions[j]] = [shuffledOptions[j], shuffledOptions[i]];
    }

    return (
      <div className="max-w-3xl mx-auto pb-20">
        <div className="mb-4">
          <button
            onClick={() => setSelectedLevel(null)}
            className="text-sm text-gray-400 mb-3 flex items-center gap-1 hover:text-white transition"
          >
            ← Retour aux niveaux
          </button>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">
              Niveau {selectedLevel} — Révision des erreurs ({currentIndex + 1}/{reviewExercises.length})
            </span>
          </div>
          <div className="h-1.5 bg-[#2a2e3a] rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-red-400 to-orange-500 rounded-full transition-all duration-300"
              style={{ width: `${(currentIndex / reviewExercises.length) * 100}%` }}
            />
          </div>
        </div>

        <div className="bg-[#151820] border border-[#2a2e3a] rounded-2xl overflow-hidden">
          <div className="p-5 border-b border-[#2a2e3a]">
            <div className="flex items-center gap-2 mb-3 flex-wrap">
              <AlertCircle className="w-4 h-4 text-red-400" />
              <span className="text-xs text-red-400">Exercice à corriger</span>
              {current.type && (
                <span className={`text-xs px-2 py-0.5 rounded-full ${
                  current.type === 'article' 
                    ? 'bg-blue-500/20 text-blue-400' 
                    : 'bg-purple-500/20 text-purple-400'
                }`}>
                  {current.type === 'article' ? '📖 Article' : '✨ Adjectif'}
                </span>
              )}
            </div>
            <h2 className="text-xl font-bold font-serif mb-2">{current.question}</h2>
            <p className="text-sm text-gray-400 italic">💡 {current.hint}</p>

            {current.userAnswer && (
              <div className="mt-3 p-3 bg-red-500/10 border border-red-500/20 rounded-xl">
                <p className="text-xs text-red-400 mb-1">❌ Votre réponse précédente :</p>
                <p className="text-sm font-mono text-red-300">"{current.userAnswer}"</p>
              </div>
            )}
          </div>

          <div className="p-5 space-y-4">
            <div className="grid grid-cols-1 gap-2">
              {shuffledOptions.map((opt, idx) => {
                const isThisCorrect = opt.trim().toLowerCase() === current.correctAnswer.trim().toLowerCase();
                const isSelected = selectedAnswer === opt;

                let cls = 'p-4 rounded-xl text-left font-medium transition-all active:scale-[0.98] ';
                if (!answered) cls += 'bg-[#1c2030] hover:bg-[#242840] cursor-pointer';
                else if (isThisCorrect) cls += 'border-2 border-green-500 bg-green-500/10';
                else if (isSelected && !isThisCorrect) cls += 'border-2 border-red-500 bg-red-500/10';
                else cls += 'bg-[#1c2030] opacity-40';

                return (
                  <button key={idx} onClick={() => handleAnswer(opt)} disabled={answered} className={cls}>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-base">{opt}</span>
                      {answered && isThisCorrect && <CheckCircle className="w-5 h-5 text-green-500" />}
                      {answered && isSelected && !isThisCorrect && <XCircle className="w-5 h-5 text-red-500" />}
                    </div>
                  </button>
                );
              })}
            </div>

            {answered && (
              <div className={`rounded-xl p-3 text-sm font-medium text-center ${
                isCorrect
                  ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                  : 'bg-red-500/20 text-red-400 border border-red-500/30'
              }`}>
                {isCorrect
                  ? '✅ Bonne réponse !'
                  : `❌ La bonne réponse était : "${current.correctAnswer}"`}
              </div>
            )}

            {showExplanation && (
              <div className="p-4 bg-[#1c2030] rounded-xl border border-[#2a2e3a]">
                <div className="flex items-start gap-3">
                  <Lightbulb className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                  <div className="text-sm text-gray-300 whitespace-pre-line leading-relaxed font-mono">
                    {current.explanation}
                  </div>
                </div>
                {current.exampleSentence && (
                  <div className="mt-3 p-3 bg-[#242840] rounded-lg border border-blue-500/20">
                    <p className="text-xs text-blue-400 mb-1">📝 Exemple :</p>
                    <p className="text-sm font-medium text-white">{current.exampleSentence}</p>
                  </div>
                )}
              </div>
            )}

            {answered && (
              <button
                onClick={nextExercise}
                className="w-full py-4 bg-green-500 text-black rounded-xl font-bold hover:bg-green-400 transition flex items-center justify-center gap-2"
              >
                {currentIndex + 1 < reviewExercises.length ? 'Continuer' : 'Terminer la révision'}
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // Aucune erreur
  if (levelsWithErrors.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
        <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center mb-6">
          <CheckCircle className="w-12 h-12 text-green-500" />
        </div>
        <h2 className="text-xl font-bold mb-2">Aucune erreur !</h2>
        <p className="text-gray-400">Bravo ! Vous n'avez aucune erreur à réviser.</p>
      </div>
    );
  }

  // Liste des niveaux avec erreurs
  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-xl font-bold mb-2">📝 Révision des erreurs</h1>
      <p className="text-gray-400 mb-6 text-sm">
        Sélectionnez un niveau pour revoir uniquement les exercices où vous avez fait des erreurs.
      </p>
      
      <div className="space-y-3">
        {levelsWithErrors.map(level => {
          const errors = errorsByLevel[level];
          return (
            <div key={level} className="bg-[#151820] border border-[#2a2e3a] rounded-xl p-4">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <span className="font-bold text-lg">Niveau {level}</span>
                  <span className="text-xs text-red-400 ml-2">{errors.length} erreur(s)</span>
                </div>
                <button
                  onClick={() => resetLevel(level)}
                  className="p-2 text-gray-500 hover:text-red-400 transition"
                  title="Réinitialiser ce niveau"
                >
                  <RefreshCw className="w-4 h-4" />
                </button>
              </div>
              <button
                onClick={() => startReview(level)}
                className="w-full py-3 bg-yellow-500/20 text-yellow-400 rounded-xl font-medium text-sm hover:bg-yellow-500/30 transition"
              >
                Réviser ces {errors.length} erreur(s)
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ErrorReview;