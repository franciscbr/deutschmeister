import { ALL_EXERCISES, EXERCISES_BY_TYPE, getExercisesByTypeAndLevel } from './exercises/index';

// Obtenir tous les exercices par niveau (fusionnés)
export const getAllExercisesByLevel = () => {
  const exercisesByLevel = {};
  for (let level = 1; level <= 50; level++) {
    exercisesByLevel[level] = ALL_EXERCISES.filter(ex => ex.level === level);
  }
  return exercisesByLevel;
};

// Obtenir les exercices pour un niveau spécifique (avec exclusion)
export const getExercisesForLevel = (level, excludeIds = []) => {
  let exercises = ALL_EXERCISES.filter(ex => ex.level === level);
  exercises = exercises.filter(ex => !excludeIds.includes(ex.id));
  
  // Mélanger
  for (let i = exercises.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [exercises[i], exercises[j]] = [exercises[j], exercises[i]];
  }
  
  return exercises;
};

// Obtenir les exercices par type et niveau
export const getExercisesByTypeAndLevelFiltered = (type, level, excludeIds = []) => {
  const exercises = EXERCISES_BY_TYPE[type] || [];
  let filtered = exercises.filter(ex => ex.level === level && !excludeIds.includes(ex.id));
  
  for (let i = filtered.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [filtered[i], filtered[j]] = [filtered[j], filtered[i]];
  }
  
  return filtered;
};

// Obtenir les exercices d'erreur
export const getErrorExercises = (errors) => {
  const errorExercises = [];
  for (const error of errors) {
    const found = ALL_EXERCISES.find(ex => ex.id === error.exerciseId);
    if (found) {
      errorExercises.push({
        ...found,
        userAnswer: error.userAnswer,
        originalError: error,
      });
    }
  }
  return errorExercises;
};