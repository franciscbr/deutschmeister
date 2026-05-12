import React, { createContext, useState, useContext, useEffect } from 'react';

const UserContext = createContext();

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({
    xp: 0,
    currentLevel: 1,
    levelProgress: {},
    streak: 0,
    totalCorrect: 0,
    totalAnswers: 0,
    userName: '',
    theme: 'dark', // 'dark' ou 'light'
  });
  const [isLoading, setIsLoading] = useState(true);
  const [notification, setNotification] = useState(null);
  const isOnline = true;

  // Chargement initial depuis localStorage
  useEffect(() => {
    const saved = localStorage.getItem('deutschmeister_user_v2');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        setUserData(parsed);
        // Appliquer le thème
        if (parsed.theme === 'light') {
          document.documentElement.classList.add('light');
        } else {
          document.documentElement.classList.remove('light');
        }
      } catch (e) {
        console.error("Parse error:", e);
      }
    } else {
      // Initialiser les 50 niveaux
      const initialProgress = {};
      for (let i = 1; i <= 50; i++) {
        initialProgress[`level${i}`] = { correct: 0, total: 0, errors: [] };
      }
      setUserData(prev => ({ 
        ...prev, 
        levelProgress: initialProgress,
        userName: '',
        theme: 'dark'
      }));
    }
    setIsLoading(false);
  }, []);

  // Sauvegarde automatique dans localStorage
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('deutschmeister_user_v2', JSON.stringify(userData));
    }
  }, [userData, isLoading]);

  // Afficher une notification
  const showNotification = (message, type = 'info') => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  // Changer le thème
  const toggleTheme = () => {
    const newTheme = userData.theme === 'dark' ? 'light' : 'dark';
    setUserData(prev => ({ ...prev, theme: newTheme }));
    if (newTheme === 'light') {
      document.documentElement.classList.add('light');
    } else {
      document.documentElement.classList.remove('light');
    }
    showNotification(`Mode ${newTheme === 'light' ? 'clair' : 'sombre'} activé`, 'success');
  };

  const isLevelUnlocked = (level) => {
    if (level === 1) return true;
    const prevKey = `level${level - 1}`;
    const progress = userData.levelProgress?.[prevKey];
    if (!progress || progress.total === 0) return false;
    return (progress.correct / progress.total) * 100 >= 80;
  };

  const getCurrentLevelProgress = () => {
    const levelKey = `level${userData.currentLevel}`;
    const progress = userData.levelProgress?.[levelKey] || { correct: 0, total: 0, errors: [] };
    const successRate = progress.total > 0 ? (progress.correct / progress.total) * 100 : 0;
    return { ...progress, successRate };
  };

  const getErrorsByLevel = () => {
    const errorsByLevel = {};
    for (let i = 1; i <= 50; i++) {
      const levelKey = `level${i}`;
      const errors = userData.levelProgress?.[levelKey]?.errors || [];
      if (errors.length > 0) {
        errorsByLevel[i] = errors;
      }
    }
    return errorsByLevel;
  };

  const resetErrorsForLevel = (level) => {
    const levelKey = `level${level}`;
    const newProgress = {
      ...userData.levelProgress,
      [levelKey]: {
        ...userData.levelProgress[levelKey],
        errors: []
      }
    };
    setUserData(prev => ({ ...prev, levelProgress: newProgress }));
    showNotification(`Erreurs du niveau ${level} réinitialisées`, 'info');
  };

  const updateExerciseResult = (exerciseId, isCorrect, userAnswer, correctAnswer, explanation) => {
    const levelKey = `level${userData.currentLevel}`;
    const currentProgress = userData.levelProgress?.[levelKey] || { correct: 0, total: 0, errors: [] };

    const newCorrect = currentProgress.correct + (isCorrect ? 1 : 0);
    const newTotal = currentProgress.total + 1;

    let newErrors = [...(currentProgress.errors || [])];
    if (!isCorrect) {
      newErrors.push({
        exerciseId,
        userAnswer,
        correctAnswer,
        explanation,
        timestamp: Date.now(),
      });
    }

    const newProgress = {
      ...currentProgress,
      correct: newCorrect,
      total: newTotal,
      errors: newErrors,
    };

    let newLevel = userData.currentLevel;
    let newXp = userData.xp + (isCorrect ? (userData.currentLevel <= 10 ? 10 : userData.currentLevel <= 30 ? 15 : 20) : 0);

    if (newTotal >= 10 && (newCorrect / newTotal) >= 0.8 && userData.currentLevel < 50) {
      newLevel = userData.currentLevel + 1;
      newXp += 100;
      showNotification(`🎉 Niveau ${newLevel} débloqué ! +100 XP`, 'success');
    }

    setUserData(prev => ({
      ...prev,
      xp: newXp,
      currentLevel: newLevel,
      levelProgress: { ...prev.levelProgress, [levelKey]: newProgress },
      totalCorrect: (prev.totalCorrect || 0) + (isCorrect ? 1 : 0),
      totalAnswers: (prev.totalAnswers || 0) + 1,
      streak: isCorrect ? (prev.streak || 0) + 1 : 0,
    }));
  };

  const addGamePoints = (points) => {
    setUserData(prev => ({
      ...prev,
      xp: (prev.xp || 0) + points,
      gamesPlayed: (prev.gamesPlayed || 0) + 1,
    }));
    showNotification(`+${points} XP pour le jeu !`, 'success');
  };

  const setUserName = (name) => {
    setUserData(prev => ({ ...prev, userName: name }));
    showNotification(`Bienvenue ${name} !`, 'success');
  };

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-[#0d0f14] dark:bg-[#0d0f14] light:bg-gray-100 flex items-center justify-center z-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-yellow-400 mx-auto mb-4" />
          <p className="text-gray-400">Chargement...</p>
        </div>
      </div>
    );
  }

  return (
    <UserContext.Provider value={{
      userData,
      updateExerciseResult,
      isLevelUnlocked,
      getCurrentLevelProgress,
      resetErrorsForLevel,
      getErrorsByLevel,
      addGamePoints,
      setUserName,
      toggleTheme,
      showNotification,
      isOnline,
    }}>
      {children}
      {/* Notification Toast */}
      {notification && (
        <div className={`fixed bottom-4 right-4 z-50 p-4 rounded-xl shadow-lg animate-slide-up ${
          notification.type === 'success' ? 'bg-green-500 text-white' :
          notification.type === 'error' ? 'bg-red-500 text-white' :
          'bg-yellow-500 text-black'
        }`}>
          {notification.message}
        </div>
      )}
    </UserContext.Provider>
  );
};