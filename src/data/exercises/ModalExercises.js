// ============================================================
// EXERCICES SUR LES VERBES MODAUX
// Objectif : CHOISIR le bon verbe modal selon le contexte
// 50 niveaux × 5 exercices = 250 exercices
// ============================================================

const MODAL_VERBS = [
  {
    infinitive: 'können',
    meaning: 'pouvoir / être capable de',
    tip: '"können" exprime la CAPACITÉ ou la POSSIBILITÉ.',
    conjugations: { ich: 'kann', du: 'kannst', er: 'kann', wir: 'können', ihr: 'könnt', sie: 'können' },
    context: ['capacité', 'possibilité', 'savoir faire']
  },
  {
    infinitive: 'müssen',
    meaning: 'devoir / être obligé de',
    tip: '"müssen" exprime une OBLIGATION ou une NÉCESSITÉ.',
    conjugations: { ich: 'muss', du: 'musst', er: 'muss', wir: 'müssen', ihr: 'müsst', sie: 'müssen' },
    context: ['obligation', 'nécessité', 'contrainte']
  },
  {
    infinitive: 'dürfen',
    meaning: 'avoir le droit de / être autorisé à',
    tip: '"dürfen" exprime une PERMISSION ou une AUTORISATION.',
    conjugations: { ich: 'darf', du: 'darfst', er: 'darf', wir: 'dürfen', ihr: 'dürft', sie: 'dürfen' },
    context: ['permission', 'autorisation', 'droit']
  },
  {
    infinitive: 'wollen',
    meaning: 'vouloir / avoir l\'intention de',
    tip: '"wollen" exprime une VOLONTÉ ou un DÉSIR.',
    conjugations: { ich: 'will', du: 'willst', er: 'will', wir: 'wollen', ihr: 'wollt', sie: 'wollen' },
    context: ['volonté', 'désir', 'intention']
  },
  {
    infinitive: 'sollen',
    meaning: 'devoir / être censé (ordre venant d\'autrui)',
    tip: '"sollen" exprime un CONSEIL ou un ORDRE reçu d\'une autre personne.',
    conjugations: { ich: 'soll', du: 'sollst', er: 'soll', wir: 'sollen', ihr: 'sollt', sie: 'sollen' },
    context: ['conseil', 'ordre', 'recommandation']
  },
  {
    infinitive: 'mögen',
    meaning: 'aimer / apprécier',
    tip: '"mögen" exprime un GOÛT ou une PRÉFÉRENCE.',
    conjugations: { ich: 'mag', du: 'magst', er: 'mag', wir: 'mögen', ihr: 'mögt', sie: 'mögen' },
    context: ['goût', 'préférence', 'affection']
  },
];

// Sujets pour la conjugaison
const SUBJECTS = [
  { pronoun: 'ich', person: 'je (1ʳᵉ pers. sing.)' },
  { pronoun: 'du',  person: 'tu (2ᵉ pers. sing.)' },
  { pronoun: 'er',  person: 'il (3ᵉ pers. sing.)' },
  { pronoun: 'wir', person: 'nous (1ʳᵉ pers. plur.)' },
  { pronoun: 'ihr', person: 'vous (2ᵉ pers. plur.)' },
  { pronoun: 'sie', person: 'ils/elles (3ᵉ pers. plur.)' },
];

// ============================================================
// PHRASES PAR CONTEXTE (sans modal) - Niveaux 1-25
// ============================================================
const CONTEXT_PHRASES = [
  { 
    context: 'capacité', 
    modal: 'können',
    phrases: [
      { base: 'Ich ___ sehr gut schwimmen.', hint: 'Capacité physique (savoir nager)', translation: 'Je sais très bien nager.' },
      { base: 'Er ___ drei Sprachen sprechen.', hint: 'Capacité linguistique', translation: 'Il peut parler trois langues.' },
      { base: 'Du ___ heute länger schlafen, es ist Sonntag.', hint: 'Possibilité (pas d\'obligation)', translation: 'Tu peux dormir plus longtemps aujourd\'hui, c\'est dimanche.' },
      { base: 'Wir ___ den Film morgen sehen.', hint: 'Possibilité (on a le temps)', translation: 'Nous pouvons voir le film demain.' },
    ]
  },
  { 
    context: 'obligation', 
    modal: 'müssen',
    phrases: [
      { base: 'Ich ___ um 7 Uhr aufstehen.', hint: 'Obligation (travail, école)', translation: 'Je dois me lever à 7 heures.' },
      { base: 'Du ___ deine Hausaufgaben machen.', hint: 'Obligation scolaire', translation: 'Tu dois faire tes devoirs.' },
      { base: 'Wir ___ pünktlich sein.', hint: 'Nécessité (ponctualité)', translation: 'Nous devons être à l\'heure.' },
      { base: 'Er ___ zum Arzt gehen.', hint: 'Nécessité médicale', translation: 'Il doit aller chez le médecin.' },
    ]
  },
  { 
    context: 'permission', 
    modal: 'dürfen',
    phrases: [
      { base: 'Hier ___ man nicht rauchen.', hint: 'Interdiction (ne pas avoir le droit)', translation: 'Ici on ne peut pas fumer.' },
      { base: 'Du ___ heute länger aufbleiben.', hint: 'Permission (autorisation parentale)', translation: 'Tu peux rester debout plus tard ce soir.' },
      { base: '___ ich hereinkommen?', hint: 'Demande de permission polie', translation: 'Puis-je entrer ?' },
      { base: 'Kinder ___ keine schwere Sachen tragen.', hint: 'Droit/Autorisation (norme sociale)', translation: 'Les enfants ne doivent pas porter de choses lourdes.' },
    ]
  },
  { 
    context: 'volonté', 
    modal: 'wollen',
    phrases: [
      { base: 'Ich ___ Deutsch lernen.', hint: 'Volonté personnelle', translation: 'Je veux apprendre l\'allemand.' },
      { base: 'Wir ___ nach Berlin reisen.', hint: 'Désir de voyager', translation: 'Nous voulons voyager à Berlin.' },
      { base: 'Er ___ Ärztin werden.', hint: 'Intention professionnelle', translation: 'Elle veut devenir médecin.' },
      { base: '___ du etwas trinken?', hint: 'Offre polie (vouloir boire ?)', translation: 'Veux-tu boire quelque chose ?' },
    ]
  },
  { 
    context: 'conseil', 
    modal: 'sollen',
    phrases: [
      { base: 'Du ___ mehr Sport treiben.', hint: 'Conseil de santé', translation: 'Tu devrais faire plus de sport.' },
      { base: 'Was ___ ich machen?', hint: 'Demande de conseil', translation: 'Que devrais-je faire ?' },
      { base: 'Man ___ viel Wasser trinken.', hint: 'Recommandation générale', translation: 'On devrait boire beaucoup d\'eau.' },
      { base: 'Er ___ sich entschuldigen.', hint: 'Conseil social', translation: 'Il devrait s\'excuser.' },
    ]
  },
  { 
    context: 'goût', 
    modal: 'mögen',
    phrases: [
      { base: 'Ich ___ keinen Kaffee.', hint: 'Goût (ne pas aimer)', translation: 'Je n\'aime pas le café.' },
      { base: '___ du Eis?', hint: 'Question sur les préférences', translation: 'Aimes-tu la glace ?' },
      { base: 'Wir ___ diese Musik nicht.', hint: 'Préférence négative', translation: 'Nous n\'aimons pas cette musique.' },
      { base: 'Sie ___ Tiere.', hint: 'Affection pour les animaux', translation: 'Elle aime les animaux.' },
    ]
  },
];

// ============================================================
// PHRASES AVEC SITUATION COMPLEXE - Niveaux 26-50
// ============================================================
const COMPLEX_PHRASES = [
  { situation: 'Il sait très bien nager.', modal: 'können', base: 'Er ___ sehr gut schwimmen.' },
  { situation: 'Tu dois absolument finir ce travail.', modal: 'müssen', base: 'Du ___ diese Arbeit unbedingt beenden.' },
  { situation: 'Puis-je utiliser ton téléphone ?', modal: 'dürfen', base: '___ ich dein Telefon benutzen?' },
  { situation: 'Ils veulent acheter une nouvelle maison.', modal: 'wollen', base: 'Sie ___ ein neues Haus kaufen.' },
  { situation: 'Tu devrais aller chez le médecin.', modal: 'sollen', base: 'Du ___ zum Arzt gehen.' },
  { situation: 'Elle n\'aime pas le fromage.', modal: 'mögen', base: 'Sie ___ keinen Käse.' },
  { situation: 'Nous ne pouvons pas venir demain.', modal: 'können', base: 'Wir ___ morgen nicht kommen.' },
  { situation: 'Vous devez porter un masque ici.', modal: 'müssen', base: 'Sie ___ hier eine Maske tragen.' },
  { situation: 'Les enfants n\'ont pas le droit de fumer.', modal: 'dürfen', base: 'Kinder ___ nicht rauchen.' },
  { situation: 'Il veut devenir pilote.', modal: 'wollen', base: 'Er ___ Pilot werden.' },
  { situation: 'On devrait manger plus de fruits.', modal: 'sollen', base: 'Man ___ mehr Obst essen.' },
  { situation: 'Aimez-vous le chocolat ?', modal: 'mögen', base: '___ ihr Schokolade?' },
  { situation: 'Il peut courir très vite.', modal: 'können', base: 'Er ___ sehr schnell laufen.' },
  { situation: 'Tu dois te reposer.', modal: 'müssen', base: 'Du ___ dich ausruhen.' },
  { situation: 'Il n\'a pas le droit de sortir.', modal: 'dürfen', base: 'Er ___ nicht ausgehen.' },
  { situation: 'Je veux une nouvelle voiture.', modal: 'wollen', base: 'Ich ___ ein neues Auto.' },
  { situation: 'Vous devriez manger moins de sucre.', modal: 'sollen', base: 'Sie ___ weniger Zucker essen.' },
  { situation: 'Nous n\'aimons pas le sport.', modal: 'mögen', base: 'Wir ___ keinen Sport.' },
  { situation: 'Ils ne peuvent pas nager.', modal: 'können', base: 'Sie ___ nicht schwimmen.' },
  { situation: 'Nous devons partir tôt.', modal: 'müssen', base: 'Wir ___ früh losfahren.' },
  { situation: 'A-t-elle le droit d\'entrer ?', modal: 'dürfen', base: '___ sie hereinkommen?' },
  { situation: 'Veux-tu manger ?', modal: 'wollen', base: '___ du essen?' },
  { situation: 'Il devrait moins travailler.', modal: 'sollen', base: 'Er ___ weniger arbeiten.' },
  { situation: 'J\'aime les chats.', modal: 'mögen', base: 'Ich ___ Katzen.' },
];

// Génère 4 options : l'infinitif des modaux
const buildOptions = (correctModal) => {
  const allModals = MODAL_VERBS.map(m => m.infinitive);
  const wrong = allModals.filter(m => m !== correctModal).slice(0, 3);
  const opts = [correctModal, ...wrong];
  // Mélange
  for (let i = opts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [opts[i], opts[j]] = [opts[j], opts[i]];
  }
  return opts;
};

// Conjugue le modal choisi pour un sujet donné
const conjugateModal = (modalInfinitive, subjectPronoun) => {
  const modal = MODAL_VERBS.find(m => m.infinitive === modalInfinitive);
  return modal ? modal.conjugations[subjectPronoun] : modalInfinitive;
};

export const modalExercises = [];
let id = 0;

// ============================================================
// NIVEAUX 1-25 : Phrases par contexte (sujets variés)
// ============================================================
for (let level = 1; level <= 25; level++) {
  for (let exIdx = 0; exIdx < 5; exIdx++) {
    // Sélection aléatoire d'un contexte
    const contextData = CONTEXT_PHRASES[(level * 3 + exIdx) % CONTEXT_PHRASES.length];
    const phraseData = contextData.phrases[(level + exIdx) % contextData.phrases.length];
    const subject = SUBJECTS[(level * 2 + exIdx) % SUBJECTS.length];
    
    // Adapter la phrase au sujet
    let basePhrase = phraseData.base;
    const correctModal = contextData.modal;
    
    // Remplacer le pronom dans la phrase si nécessaire
    let finalPhrase = basePhrase;
    if (basePhrase.includes('Ich') && subject.pronoun !== 'ich') {
      finalPhrase = basePhrase.replace('Ich', subject.pronoun === 'du' ? 'Du' : 
                                             subject.pronoun === 'er' ? 'Er' :
                                             subject.pronoun === 'wir' ? 'Wir' :
                                             subject.pronoun === 'ihr' ? 'Ihr' : 'Sie');
    } else if (basePhrase.includes('Er') && subject.pronoun !== 'er') {
      finalPhrase = basePhrase.replace('Er', subject.pronoun === 'ich' ? 'Ich' :
                                             subject.pronoun === 'du' ? 'Du' :
                                             subject.pronoun === 'wir' ? 'Wir' :
                                             subject.pronoun === 'ihr' ? 'Ihr' : 'Sie');
    } else if (basePhrase.includes('Du') && subject.pronoun !== 'du') {
      finalPhrase = basePhrase.replace('Du', subject.pronoun === 'ich' ? 'Ich' :
                                             subject.pronoun === 'er' ? 'Er' :
                                             subject.pronoun === 'wir' ? 'Wir' :
                                             subject.pronoun === 'ihr' ? 'Ihr' : 'Sie');
    }
    
    // Négation ? (un exercice sur 3)
    const isNegative = (level + exIdx) % 3 === 0;
    let question = finalPhrase;
    if (isNegative && !question.includes('nicht')) {
      // Ajouter "nicht" avant l'infinitif
      const parts = question.split(' ');
      const lastWord = parts[parts.length - 1];
      if (lastWord.endsWith('en')) {
        parts.splice(parts.length - 1, 0, 'nicht');
        question = parts.join(' ');
      }
    }
    
    const correctAnswer = conjugateModal(correctModal, subject.pronoun);
    const options = buildOptions(correctModal);
    
    // Hint (indice)
    const hint = `Contexte : ${phraseData.hint} • Sujet : ${subject.person}`;
    
    // Question (sans révéler le modal)
    const questionText = `Choisissez le bon verbe modal :\n\n"${question}"`;
    
    // Explication détaillée
    const modalInfo = MODAL_VERBS.find(m => m.infinitive === correctModal);
    const explanation = `📚 VERBE MODAL CORRECT : "${correctModal.toUpperCase()}"\n\n` +
      `✅ Réponse : ${question.replace('___', correctAnswer)}\n\n` +
      `💡 ${modalInfo.tip}\n\n` +
      `📌 Signification : ${modalInfo.meaning}\n\n` +
      `Exemple : ${question.replace('___', correctAnswer)}`;
    
    modalExercises.push({
      id: id++,
      type: 'modal',
      level,
      difficulty: Math.min(Math.floor(level / 5) + 1, 3),
      question: questionText,
      hint,
      options,
      correctAnswer: correctModal,  // La bonne réponse est l'infinitif du modal
      conjugation: correctAnswer,    // La forme conjuguée pour l'affichage
      explanation,
      exampleSentence: question.replace('___', correctAnswer),
      modal: correctModal,
      subject: subject.pronoun,
      isNegative,
      context: contextData.context,
    });
  }
}

// ============================================================
// NIVEAUX 26-50 : Phases complexes avec situation
// ============================================================
for (let level = 26; level <= 50; level++) {
  for (let exIdx = 0; exIdx < 5; exIdx++) {
    const phraseData = COMPLEX_PHRASES[(level * 3 + exIdx) % COMPLEX_PHRASES.length];
    const subject = SUBJECTS[(level + exIdx) % SUBJECTS.length];
    
    let basePhrase = phraseData.base;
    const correctModal = phraseData.modal;
    
    // Adapter au sujet
    let finalPhrase = basePhrase;
    if (basePhrase.includes('Er') && subject.pronoun !== 'er') {
      finalPhrase = basePhrase.replace('Er', subject.pronoun === 'ich' ? 'Ich' :
                                             subject.pronoun === 'du' ? 'Du' :
                                             subject.pronoun === 'wir' ? 'Wir' :
                                             subject.pronoun === 'ihr' ? 'Ihr' : 'Sie');
    } else if (basePhrase.includes('Ich') && subject.pronoun !== 'ich') {
      finalPhrase = basePhrase.replace('Ich', subject.pronoun === 'du' ? 'Du' :
                                             subject.pronoun === 'er' ? 'Er' :
                                             subject.pronoun === 'wir' ? 'Wir' :
                                             subject.pronoun === 'ihr' ? 'Ihr' : 'Sie');
    } else if (basePhrase.includes('Wir') && subject.pronoun !== 'wir') {
      finalPhrase = basePhrase.replace('Wir', subject.pronoun === 'ich' ? 'Ich' :
                                              subject.pronoun === 'du' ? 'Du' :
                                              subject.pronoun === 'er' ? 'Er' :
                                              subject.pronoun === 'ihr' ? 'Ihr' : 'Sie');
    } else if (basePhrase.includes('Sie') && subject.pronoun !== 'sie') {
      finalPhrase = basePhrase.replace('Sie', subject.pronoun === 'ich' ? 'Ich' :
                                              subject.pronoun === 'du' ? 'Du' :
                                              subject.pronoun === 'er' ? 'Er' :
                                              subject.pronoun === 'wir' ? 'Wir' : 'Ihr');
    }
    
    const isNegative = finalPhrase.includes('nicht');
    const correctAnswer = conjugateModal(correctModal, subject.pronoun);
    const options = buildOptions(correctModal);
    
    const hint = `Situation : ${phraseData.situation} • Sujet : ${subject.person}`;
    const questionText = `Choisissez le bon verbe modal :\n\n"${finalPhrase}"`;
    
    const modalInfo = MODAL_VERBS.find(m => m.infinitive === correctModal);
    const explanation = `📚 VERBE MODAL CORRECT : "${correctModal.toUpperCase()}"\n\n` +
      `✅ Réponse : ${finalPhrase.replace('___', correctAnswer)}\n\n` +
      `💡 ${modalInfo.tip}\n\n` +
      `📌 Signification : ${modalInfo.meaning}\n\n` +
      `Exemple : ${finalPhrase.replace('___', correctAnswer)}`;
    
    modalExercises.push({
      id: id++,
      type: 'modal',
      level,
      difficulty: 4,
      question: questionText,
      hint,
      options,
      correctAnswer: correctModal,
      conjugation: correctAnswer,
      explanation,
      exampleSentence: finalPhrase.replace('___', correctAnswer),
      modal: correctModal,
      subject: subject.pronoun,
      isNegative,
      situation: phraseData.situation,
    });
  }
}

console.log(`✅ ModalExercises: ${modalExercises.length} exercices (50 niveaux × 5 exos = 250)`);