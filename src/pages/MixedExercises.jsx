import React, { useState, useEffect } from 'react';
import { useUser } from '../context/UserContext';
import { articleExercises } from '../data/exercisesArticle';
import { adjectiveExercises } from '../data/exercisesAdjective';
import { CheckCircle, XCircle, Lightbulb, ChevronRight, Shuffle } from 'lucide-react';

// ─── Icônes inline ────────────────────────────────────────────
const Trophy = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M5 3v4M3 5h4M6 17v4m-3-3h6m6-14l2 2-2 2m-4 14l-2-2 2-2M19 3v4m2-2h-4m-7 6a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
const ThumbsUp = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5" />
  </svg>
);
const Target = ({ className }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

// ─── Composant principal ──────────────────────────────────────
const MixedExercises = () => {
  const { userData, updateExerciseResult } = useUser();
  const [exercises, setExercises]           = useState([]);
  const [currentIndex, setCurrentIndex]     = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [answered, setAnswered]             = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isCorrect, setIsCorrect]           = useState(null);
  const [sessionStats, setSessionStats]     = useState({ correct: 0, total: 0, startTime: Date.now() });
  const [sessionFinished, setSessionFinished] = useState(false);
  const [sessionErrors, setSessionErrors]   = useState([]);

  const SESSION_SIZE = 10;

  const generateMixedSession = () => {
    const pool = [...articleExercises, ...adjectiveExercises];

    // Fisher-Yates shuffle
    for (let i = pool.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [pool[i], pool[j]] = [pool[j], pool[i]];
    }

    const selected = pool.slice(0, SESSION_SIZE).map((ex, idx) => ({
      ...ex,
      sessionId: `${Date.now()}_${idx}`,
    }));

    setExercises(selected);
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setAnswered(false);
    setShowExplanation(false);
    setIsCorrect(null);
    setSessionFinished(false);
    setSessionStats({ correct: 0, total: 0, startTime: Date.now() });
    setSessionErrors([]);
  };

  useEffect(() => { generateMixedSession(); }, []);

  const handleAnswer = (answer) => {
    if (answered || !exercises[currentIndex]) return;

    const current = exercises[currentIndex];
    // ✅ Comparaison normalisée
    const correct = answer.trim().toLowerCase() === current.correctAnswer.trim().toLowerCase();

    setSelectedAnswer(answer);
    setIsCorrect(correct);
    setAnswered(true);
    setShowExplanation(true);

    setSessionStats(prev => ({
      ...prev,
      correct: prev.correct + (correct ? 1 : 0),
      total:   prev.total + 1,
    }));

    if (!correct) {
      setSessionErrors(prev => [...prev, {
        question:      current.question,
        userAnswer:    answer,
        correctAnswer: current.correctAnswer,
        explanation:   current.explanation,
      }]);
    }

    updateExerciseResult(
      current.id,
      correct,
      answer,
      current.correctAnswer,
      current.explanation
    );
  };

  const nextExercise = () => {
    if (currentIndex + 1 < exercises.length) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      setAnswered(false);
      setShowExplanation(false);
      setIsCorrect(null);
    } else {
      setSessionFinished(true);
    }
  };

  const getTimeSpent = () => {
    const seconds = Math.floor((Date.now() - sessionStats.startTime) / 1000);
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  // ─── Écran de résultats ─────────────────────────────────────
  if (sessionFinished) {
    const successRate = sessionStats.total > 0
      ? Math.round((sessionStats.correct / sessionStats.total) * 100)
      : 0;

    return (
      <div className="max-w-3xl mx-auto pb-20">
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl p-6 border border-purple-500/30 text-center mb-6">
          <div className="w-20 h-20 mx-auto bg-purple-500/30 rounded-full flex items-center justify-center mb-4">
            {successRate >= 80
              ? <Trophy   className="w-10 h-10 text-yellow-400" />
              : successRate >= 50
              ? <ThumbsUp className="w-10 h-10 text-green-400" />
              : <Target   className="w-10 h-10 text-orange-400" />}
          </div>
          <h2 className="text-2xl font-bold mb-2">
            {successRate >= 80 ? 'Excellent ! 🎉' : successRate >= 50 ? 'Bien joué ! 👍' : 'Continue comme ça ! 💪'}
          </h2>
          <p className="text-gray-400">Session terminée en {getTimeSpent()}</p>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-6">
          <div className="bg-[#151820] border border-[#2a2e3a] rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-green-400">{sessionStats.correct}</div>
            <div className="text-xs text-gray-500 mt-1">Correctes</div>
          </div>
          <div className="bg-[#151820] border border-[#2a2e3a] rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-red-400">{sessionStats.total - sessionStats.correct}</div>
            <div className="text-xs text-gray-500 mt-1">Erreurs</div>
          </div>
          <div className="bg-[#151820] border border-[#2a2e3a] rounded-xl p-4 text-center">
            <div className="text-3xl font-bold text-yellow-400">{successRate}%</div>
            <div className="text-xs text-gray-500 mt-1">Précision</div>
          </div>
        </div>

        {sessionErrors.length > 0 && (
          <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-4 mb-6">
            <p className="text-sm font-medium text-red-400 mb-3">📝 Erreurs à réviser :</p>
            <div className="space-y-3 max-h-72 overflow-y-auto">
              {sessionErrors.map((err, idx) => (
                <div key={idx} className="p-3 bg-[#1c2030] rounded-lg">
                  <p className="text-xs text-gray-400 mb-1">{err.question}</p>
                  <div className="flex gap-4">
                    <span className="text-xs text-red-400">❌ {err.userAnswer}</span>
                    <span className="text-xs text-green-400">✅ {err.correctAnswer}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        <button
          onClick={generateMixedSession}
          className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 active:scale-[0.98] transition"
        >
          <Shuffle className="w-5 h-5" />
          Nouvelle session mixte
        </button>
      </div>
    );
  }

  if (exercises.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-yellow-400" />
      </div>
    );
  }

  const current = exercises[currentIndex];

  return (
    <div className="max-w-3xl mx-auto pb-20">
      {/* En-tête */}
      <div className="mb-4">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center gap-2">
            <Shuffle className="w-5 h-5 text-purple-400" />
            <span className="text-sm text-gray-400">Mode Mixte</span>
          </div>
          <span className="text-xs text-gray-500">{currentIndex + 1}/{exercises.length}</span>
        </div>
        <div className="h-1.5 bg-[#2a2e3a] rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full transition-all duration-300"
            style={{ width: `${(currentIndex / exercises.length) * 100}%` }}
          />
        </div>
        <div className="flex justify-between mt-1 text-xs text-gray-600">
          <span>Session aléatoire</span>
          <span>✅ {sessionStats.correct} / ❌ {sessionStats.total - sessionStats.correct}</span>
        </div>
      </div>

      {/* Carte */}
      <div className="bg-[#151820] border border-[#2a2e3a] rounded-2xl overflow-hidden">
        <div className="p-5 border-b border-[#2a2e3a]">
          <div className="flex items-center gap-2 mb-3 flex-wrap">
            <span className={`text-xs px-2 py-0.5 rounded-full ${
              current.type === 'article'
                ? 'bg-blue-500/20 text-blue-400'
                : 'bg-purple-500/20 text-purple-400'
            }`}>
              {current.type === 'article' ? '📖 Article' : '✨ Adjectif'}
            </span>
            {current.subtype && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-gray-700 text-gray-300">
                {current.subtype}
              </span>
            )}
            {current.caze && (
              <span className="text-xs px-2 py-0.5 rounded-full bg-yellow-500/20 text-yellow-400">
                {current.caze}
              </span>
            )}
          </div>
          <h2 className="text-xl font-bold font-serif mb-2">{current.question}</h2>
          <p className="text-sm text-gray-400 italic">💡 {current.hint}</p>
        </div>

        <div className="p-5 space-y-3">
          <div className="grid grid-cols-1 gap-2">
            {current.options.map((opt, idx) => {
              const isThisCorrect = opt.trim().toLowerCase() === current.correctAnswer.trim().toLowerCase();
              const isSelected    = selectedAnswer === opt;

              let cls = 'p-4 rounded-xl text-left font-medium transition-all active:scale-[0.98] ';
              if (!answered) {
                cls += 'bg-[#1c2030] hover:bg-[#242840] cursor-pointer';
              } else if (isThisCorrect) {
                cls += 'border-2 border-green-500 bg-green-500/10';
              } else if (isSelected) {
                cls += 'border-2 border-red-500 bg-red-500/10';
              } else {
                cls += 'bg-[#1c2030] opacity-40';
              }

              return (
                <button
                  key={idx}
                  onClick={() => handleAnswer(opt)}
                  disabled={answered}
                  className={cls}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono">{opt}</span>
                    {answered && isThisCorrect && <CheckCircle className="w-5 h-5 text-green-500" />}
                    {answered && isSelected && !isThisCorrect && <XCircle className="w-5 h-5 text-red-500" />}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Feedback */}
          {answered && (
            <div className={`rounded-xl p-3 text-sm font-medium text-center ${
              isCorrect
                ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                : 'bg-red-500/20 text-red-400 border border-red-500/30'
            }`}>
              {isCorrect
                ? '✅ Bonne réponse !'
                : `❌ Bonne réponse : "${current.correctAnswer}"`}
            </div>
          )}

          {/* Explication */}
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
              className="w-full py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-bold flex items-center justify-center gap-2 active:scale-[0.98] transition"
            >
              {currentIndex + 1 < exercises.length ? 'Exercice suivant' : 'Voir les résultats'}
              <ChevronRight className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      <div className="mt-4 text-center text-xs text-gray-500">
        Mode mixte • Articles + Adjectifs mélangés aléatoirement
      </div>
    </div>
  );
};

export default MixedExercises;