import { articleExercises } from './ArticleExercises';
import { adjectiveExercises } from './AdjectiveExercises';
import { conjugationExercises } from './ConjugationExercises';
import { modalExercises } from './ModalExercises';
import { passiveExercises } from './PassiveExercises';
import { wordOrderExercises } from './WordOrderExercises';

// Export central de tous les exercices
export const ALL_EXERCISES = [
  ...articleExercises,
  ...adjectiveExercises,
  ...conjugationExercises,
  ...modalExercises,
  ...passiveExercises,
  ...wordOrderExercises,
];

// Export par type
export const EXERCISES_BY_TYPE = {
  article: articleExercises,
  adjective: adjectiveExercises,
  conjugation: conjugationExercises,
  modal: modalExercises,
  passive: passiveExercises,
  wordorder: wordOrderExercises,
};

// Configuration des types d'exercices
export const EXERCISE_TYPES = [
  { id: 'article', name: 'Articles (der/die/das)', icon: '📖', color: 'blue', levels: 50, exercisesPerLevel: 5 },
  { id: 'adjective', name: 'Adjectifs', icon: '✨', color: 'purple', levels: 50, exercisesPerLevel: 5 },
  { id: 'conjugation', name: 'Conjugaison', icon: '🔁', color: 'green', levels: 50, exercisesPerLevel: 5 },
  { id: 'modal', name: 'Verbes modaux', icon: '⚡', color: 'orange', levels: 50, exercisesPerLevel: 5 },
  { id: 'passive', name: 'Passif', icon: '🔄', color: 'red', levels: 50, exercisesPerLevel: 5 },
  { id: 'wordorder', name: 'Ordre des mots', icon: '🧩', color: 'teal', levels: 50, exercisesPerLevel: 5 },
];

// Récupérer les exercices par type et niveau
export const getExercisesByTypeAndLevel = (type, level) => {
  const exercises = EXERCISES_BY_TYPE[type] || [];
  return exercises.filter(ex => ex.level === level);
};

console.log(`📊 TOTAL EXERCICES: ${ALL_EXERCISES.length} (6 types × 50 niveaux × 5 exos = 1500 exercices)`);