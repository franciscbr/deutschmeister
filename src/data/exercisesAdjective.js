// ============================================================
// EXERCICES SUR LES DÉCLINAISONS DES ADJECTIFS
// Trois types : après article défini / indéfini / sans article
// ============================================================

// ============================================================
// RÈGLES DE DÉCLINAISON DES ADJECTIFS
// ============================================================
//
// TYPE 1 — APRÈS ARTICLE DÉFINI (der/die/das/den/dem/des)
// L'adjectif prend des terminaisons "faibles" (schwach)
//
//          | Masc | Fém  | Neutre | Pluriel
// Nom.     | -e   | -e   | -e     | -en
// Akk.     | -en  | -e   | -e     | -en
// Dat.     | -en  | -en  | -en    | -en
// Gén.     | -en  | -en  | -en    | -en
//
// TYPE 2 — APRÈS ARTICLE INDÉFINI (ein/eine/einen/einem/einer/eines)
// L'adjectif prend des terminaisons "mixtes" (gemischt)
//
//          | Masc  | Fém  | Neutre
// Nom.     | -er   | -e   | -es
// Akk.     | -en   | -e   | -es
// Dat.     | -en   | -en  | -en
// Gén.     | -en   | -en  | -en
//
// TYPE 3 — SANS ARTICLE (déclinaison forte / stark)
// L'adjectif porte lui-même la marque du genre/cas
//
//          | Masc  | Fém  | Neutre | Pluriel
// Nom.     | -er   | -e   | -es    | -e
// Akk.     | -en   | -e   | -es    | -e
// Dat.     | -em   | -er  | -em    | -en
// Gén.     | -en   | -er  | -en    | -er

// ============================================================
// TABLES DE SUFFIXES
// ============================================================

const WEAK = {      // après article défini
  m: { nom: 'e',  akk: 'en', dat: 'en', gen: 'en' },
  f: { nom: 'e',  akk: 'e',  dat: 'en', gen: 'en' },
  n: { nom: 'e',  akk: 'e',  dat: 'en', gen: 'en' },
  pl:{ nom: 'en', akk: 'en', dat: 'en', gen: 'en' },
};

const MIXED = {     // après article indéfini
  m: { nom: 'er', akk: 'en', dat: 'en', gen: 'en' },
  f: { nom: 'e',  akk: 'e',  dat: 'en', gen: 'en' },
  n: { nom: 'es', akk: 'es', dat: 'en', gen: 'en' },
};

const STRONG = {    // sans article
  m: { nom: 'er', akk: 'en', dat: 'em', gen: 'en' },
  f: { nom: 'e',  akk: 'e',  dat: 'er', gen: 'er' },
  n: { nom: 'es', akk: 'es', dat: 'em', gen: 'en' },
  pl:{ nom: 'e',  akk: 'e',  dat: 'en', gen: 'er' },
};

// Articles définis par genre+cas (pour construire les phrases)
const DEF_ART = {
  m: { nom: 'der', akk: 'den', dat: 'dem', gen: 'des' },
  f: { nom: 'die', akk: 'die', dat: 'der', gen: 'der' },
  n: { nom: 'das', akk: 'das', dat: 'dem', gen: 'des' },
  pl:{ nom: 'die', akk: 'die', dat: 'den', gen: 'der' },
};

const INDEF_ART = {
  m: { nom: 'ein',   akk: 'einen', dat: 'einem', gen: 'eines' },
  f: { nom: 'eine',  akk: 'eine',  dat: 'einer', gen: 'einer' },
  n: { nom: 'ein',   akk: 'ein',   dat: 'einem', gen: 'eines' },
};

// ============================================================
// DONNÉES
// ============================================================

const ADJECTIVES = [
  { base: 'groß',         meaning: 'grand(e)' },
  { base: 'klein',        meaning: 'petit(e)' },
  { base: 'schön',        meaning: 'beau/belle' },
  { base: 'neu',          meaning: 'nouveau/nouvelle' },
  { base: 'alt',          meaning: 'vieux/vieille' },
  { base: 'gut',          meaning: 'bon(ne)' },
  { base: 'schnell',      meaning: 'rapide' },
  { base: 'langsam',      meaning: 'lent(e)' },
  { base: 'klug',         meaning: 'intelligent(e)' },
  { base: 'freundlich',   meaning: 'aimable' },
  { base: 'jung',         meaning: 'jeune' },
  { base: 'modern',       meaning: 'moderne' },
  { base: 'interessant',  meaning: 'intéressant(e)' },
  { base: 'warm',         meaning: 'chaud(e)' },
  { base: 'kalt',         meaning: 'froid(e)' },
  { base: 'laut',         meaning: 'bruyant(e)' },
  { base: 'leise',        meaning: 'silencieux/silencieuse' },
  { base: 'teuer',        meaning: 'cher/chère' },
  { base: 'billig',       meaning: 'bon marché' },
  { base: 'gesund',       meaning: 'sain(e)/en bonne santé' },
];

const NOUNS = [
  { nom: 'Hund',      genre: 'm', meaning: 'chien' },
  { nom: 'Katze',     genre: 'f', meaning: 'chat' },
  { nom: 'Buch',      genre: 'n', meaning: 'livre' },
  { nom: 'Mann',      genre: 'm', meaning: 'homme' },
  { nom: 'Frau',      genre: 'f', meaning: 'femme' },
  { nom: 'Kind',      genre: 'n', meaning: 'enfant' },
  { nom: 'Tisch',     genre: 'm', meaning: 'table' },
  { nom: 'Lampe',     genre: 'f', meaning: 'lampe' },
  { nom: 'Auto',      genre: 'n', meaning: 'voiture' },
  { nom: 'Lehrer',    genre: 'm', meaning: 'professeur (m)' },
  { nom: 'Lehrerin',  genre: 'f', meaning: 'professeure (f)' },
  { nom: 'Haus',      genre: 'n', meaning: 'maison' },
  { nom: 'Vater',     genre: 'm', meaning: 'père' },
  { nom: 'Mutter',    genre: 'f', meaning: 'mère' },
  { nom: 'Fenster',   genre: 'n', meaning: 'fenêtre' },
];

// ============================================================
// HELPERS POUR OPTIONS & EXPLICATIONS
// ============================================================

function shuffleOptions(correct, adj) {
  // Génère 4 options incluant la bonne réponse
  const suffixes = ['e', 'en', 'er', 'es', 'em'];
  const wrong = suffixes
    .filter(s => adj + s !== correct)
    .map(s => adj + s);
  const pool = [correct, ...wrong].slice(0, 4);
  // Fisher-Yates
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool;
}

function caseLabel(key) {
  return { nom: 'Nominatif', akk: 'Accusatif', dat: 'Datif', gen: 'Génitif' }[key];
}

function genreLabel(g) {
  return { m: 'masculin', f: 'féminin', n: 'neutre', pl: 'pluriel' }[g];
}

// ─── Explication TYPE 1 (article défini) ─────────────────────
function explainWeak(caze, genre, adj, suffix, noun) {
  const correct = adj + suffix;
  const table = [
    `         | Masc | Fém  | Neutre | Pluriel`,
    `Nominatif| -e   | -e   | -e     | -en`,
    `Accusatif| -en  | -e   | -e     | -en`,
    `Datif    | -en  | -en  | -en    | -en`,
    `Génitif  | -en  | -en  | -en    | -en`,
  ];
  return `📚 ADJECTIF APRÈS ARTICLE DÉFINI (déclinaison FAIBLE)\n\nArticle défini + adjectif + "${noun.nom}" (${genreLabel(genre)})\n\nAu ${caze}, genre ${genreLabel(genre)} → terminaison : "-${suffix}"\n✅ "${DEF_ART[genre][Object.keys({nom:0,akk:1,dat:2,gen:3}).find(k=>caseLabel(k)===caze)]} ${correct} ${noun.nom}"\n\n📊 TABLE DES TERMINAISONS :\n${table.join('\n')}\n\n💡 Règle d'or : après l'article défini, c'est presque toujours "-en" sauf au Nominatif et à l'Accusatif des féminins/neutres (-e) !`;
}

// ─── Explication TYPE 2 (article indéfini) ───────────────────
function explainMixed(caze, genre, adj, suffix, noun) {
  const correct = adj + suffix;
  const table = [
    `         | Masc  | Fém  | Neutre`,
    `Nominatif| -er   | -e   | -es`,
    `Accusatif| -en   | -e   | -es`,
    `Datif    | -en   | -en  | -en`,
    `Génitif  | -en   | -en  | -en`,
  ];
  return `📚 ADJECTIF APRÈS ARTICLE INDÉFINI (déclinaison MIXTE)\n\nArticle indéfini + adjectif + "${noun.nom}" (${genreLabel(genre)})\n\nAu ${caze}, genre ${genreLabel(genre)} → terminaison : "-${suffix}"\n✅ "${correct} ${noun.nom}"\n\n📊 TABLE DES TERMINAISONS :\n${table.join('\n')}\n\n⚠️ Au Nominatif, les terminaisons marquent le genre :\n→ masculin = -er • féminin = -e • neutre = -es\n(comme les articles définis der/die/das !)`;
}

// ─── Explication TYPE 3 (sans article) ───────────────────────
function explainStrong(caze, genre, adj, suffix, noun) {
  const correct = adj + suffix;
  const table = [
    `         | Masc  | Fém  | Neutre | Pluriel`,
    `Nominatif| -er   | -e   | -es    | -e`,
    `Accusatif| -en   | -e   | -es    | -e`,
    `Datif    | -em   | -er  | -em    | -en`,
    `Génitif  | -en   | -er  | -en    | -er`,
  ];
  return `📚 ADJECTIF SANS ARTICLE (déclinaison FORTE)\n\nSans article, l'adjectif doit PORTER LUI-MÊME la marque du genre et du cas.\n\n"${noun.nom}" (${genreLabel(genre)}) au ${caze} → terminaison : "-${suffix}"\n✅ "${correct} ${noun.nom}"\n\n📊 TABLE DES TERMINAISONS :\n${table.join('\n')}\n\n💡 Astuce : les terminaisons fortes ressemblent aux articles définis !\n(der→-er • die→-e • das→-es • dem→-em • den→-en)`;
}

// ============================================================
// GÉNÉRATION
// ============================================================

export const generateAdjectiveExercises = () => {
  const exercises = [];
  let id = 0;

  const cases = ['nom', 'akk', 'dat', 'gen'];
  const casesNoGen = ['nom', 'akk', 'dat'];

  // ── TYPE 1 : après article défini ─────────────────────────
  NOUNS.forEach((noun, ni) => {
    ADJECTIVES.forEach((adj, ai) => {
      const caseKey = cases[(ni + ai) % cases.length];
      const suffix  = WEAK[noun.genre][caseKey];
      const correct = adj.base + suffix;
      const artDef  = DEF_ART[noun.genre][caseKey];
      const caze    = caseLabel(caseKey);

      exercises.push({
        id: id++,
        type: 'adjective',
        subtype: 'défini',
        genre: noun.genre,
        caze,
        level: Math.floor((ni * ADJECTIVES.length + ai) / 10) + 1,
        difficulty: caseKey === 'nom' ? 1 : caseKey === 'akk' ? 2 : 3,
        question: `${artDef} ___ (${adj.base} = ${adj.meaning}) ${noun.nom} (${noun.meaning})`,
        hint: `Article DÉFINI • ${caze} • ${genreLabel(noun.genre)}`,
        options: shuffleOptions(correct, adj.base),
        answer: correct,
        correctAnswer: correct,
        explanation: explainWeak(caze, noun.genre, adj.base, suffix, noun),
        exampleSentence: `${artDef} ${correct} ${noun.nom} ist hier.`,
      });
    });
  });

  // ── TYPE 2 : après article indéfini ───────────────────────
  NOUNS.filter(n => n.genre !== 'pl').forEach((noun, ni) => {
    ADJECTIVES.forEach((adj, ai) => {
      const caseKey  = casesNoGen[(ni + ai) % casesNoGen.length];
      const suffix   = MIXED[noun.genre][caseKey];
      const correct  = adj.base + suffix;
      const artIndef = INDEF_ART[noun.genre][caseKey];
      const caze     = caseLabel(caseKey);

      exercises.push({
        id: id++,
        type: 'adjective',
        subtype: 'indéfini',
        genre: noun.genre,
        caze,
        level: Math.floor((ni * ADJECTIVES.length + ai) / 10) + 10,
        difficulty: caseKey === 'nom' ? 2 : caseKey === 'akk' ? 3 : 4,
        question: `${artIndef} ___ (${adj.base} = ${adj.meaning}) ${noun.nom} (${noun.meaning})`,
        hint: `Article INDÉFINI • ${caze} • ${genreLabel(noun.genre)}`,
        options: shuffleOptions(correct, adj.base),
        answer: correct,
        correctAnswer: correct,
        explanation: explainMixed(caze, noun.genre, adj.base, suffix, noun),
        exampleSentence: `Das ist ${artIndef} ${correct} ${noun.nom}.`,
      });
    });
  });

  // ── TYPE 3 : sans article ─────────────────────────────────
  NOUNS.forEach((noun, ni) => {
    ADJECTIVES.forEach((adj, ai) => {
      const caseKey = cases[(ni + ai + 1) % cases.length];
      const suffix  = STRONG[noun.genre][caseKey];
      const correct = adj.base + suffix;
      const caze    = caseLabel(caseKey);

      exercises.push({
        id: id++,
        type: 'adjective',
        subtype: 'sans article',
        genre: noun.genre,
        caze,
        level: Math.floor((ni * ADJECTIVES.length + ai) / 10) + 20,
        difficulty: 5,
        question: `___ (${adj.base} = ${adj.meaning}) ${noun.nom} (${noun.meaning}) [SANS article]`,
        hint: `SANS article • ${caze} • ${genreLabel(noun.genre)}`,
        options: shuffleOptions(correct, adj.base),
        answer: correct,
        correctAnswer: correct,
        explanation: explainStrong(caze, noun.genre, adj.base, suffix, noun),
        exampleSentence: `${correct} ${noun.nom} ist sehr ${adj.base}.`,
      });
    });
  });

  return exercises;
};

export const adjectiveExercises = generateAdjectiveExercises();