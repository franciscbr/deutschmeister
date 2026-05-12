// ============================================================
// EXERCICES SUR LES ARTICLES DÉFINIS ALLEMANDS
// Règles : Nominatif / Accusatif / Datif / Génitif
// Articles définis : der, die, das (sing.) → die (pl.)
// ============================================================

// TABLE DE DÉCLINAISON DES ARTICLES DÉFINIS
// Cas        | Masc (der) | Fém (die) | Neutre (das) | Pluriel (die)
// Nominatif  | der        | die       | das          | die
// Accusatif  | den        | die       | das          | die
// Datif      | dem        | der       | dem          | den
// Génitif    | des        | der       | des          | der

const DEFINITE = {
  m: { nom: 'der', akk: 'den', dat: 'dem', gen: 'des' },
  f: { nom: 'die', akk: 'die', dat: 'der', gen: 'der' },
  n: { nom: 'das', akk: 'das', dat: 'dem', gen: 'des' },
  pl:{ nom: 'die', akk: 'die', dat: 'den', gen: 'der' },
};

// TABLE DE DÉCLINAISON DES ARTICLES INDÉFINIS
// Cas        | Masc (ein)  | Fém (eine) | Neutre (ein)
// Nominatif  | ein         | eine       | ein
// Accusatif  | einen       | eine       | ein
// Datif      | einem       | einer      | einem
// Génitif    | eines       | einer      | eines

const INDEFINITE = {
  m: { nom: 'ein',   akk: 'einen', dat: 'einem', gen: 'eines' },
  f: { nom: 'eine',  akk: 'eine',  dat: 'einer', gen: 'einer' },
  n: { nom: 'ein',   akk: 'ein',   dat: 'einem', gen: 'eines' },
};

const NOUNS = [
  { nom: 'Mann',          genre: 'm', pl: 'Männer',       meaning: 'homme' },
  { nom: 'Frau',          genre: 'f', pl: 'Frauen',       meaning: 'femme' },
  { nom: 'Kind',          genre: 'n', pl: 'Kinder',       meaning: 'enfant' },
  { nom: 'Hund',          genre: 'm', pl: 'Hunde',        meaning: 'chien' },
  { nom: 'Katze',         genre: 'f', pl: 'Katzen',       meaning: 'chat' },
  { nom: 'Buch',          genre: 'n', pl: 'Bücher',       meaning: 'livre' },
  { nom: 'Tisch',         genre: 'm', pl: 'Tische',       meaning: 'table' },
  { nom: 'Lampe',         genre: 'f', pl: 'Lampen',       meaning: 'lampe' },
  { nom: 'Auto',          genre: 'n', pl: 'Autos',        meaning: 'voiture' },
  { nom: 'Lehrer',        genre: 'm', pl: 'Lehrer',       meaning: 'professeur (m)' },
  { nom: 'Lehrerin',      genre: 'f', pl: 'Lehrerinnen',  meaning: 'professeure (f)' },
  { nom: 'Fenster',       genre: 'n', pl: 'Fenster',      meaning: 'fenêtre' },
  { nom: 'Stuhl',         genre: 'm', pl: 'Stühle',       meaning: 'chaise' },
  { nom: 'Tür',           genre: 'f', pl: 'Türen',        meaning: 'porte' },
  { nom: 'Haus',          genre: 'n', pl: 'Häuser',       meaning: 'maison' },
  { nom: 'Vater',         genre: 'm', pl: 'Väter',        meaning: 'père' },
  { nom: 'Mutter',        genre: 'f', pl: 'Mütter',       meaning: 'mère' },
  { nom: 'Baby',          genre: 'n', pl: 'Babys',        meaning: 'bébé' },
  { nom: 'Arzt',          genre: 'm', pl: 'Ärzte',        meaning: 'médecin (m)' },
  { nom: 'Ärztin',        genre: 'f', pl: 'Ärztinnen',    meaning: 'médecin (f)' },
  { nom: 'Schüler',       genre: 'm', pl: 'Schüler',      meaning: 'élève (m)' },
  { nom: 'Schülerin',     genre: 'f', pl: 'Schülerinnen', meaning: 'élève (f)' },
  { nom: 'Apfel',         genre: 'm', pl: 'Äpfel',        meaning: 'pomme' },
  { nom: 'Blume',         genre: 'f', pl: 'Blumen',       meaning: 'fleur' },
  { nom: 'Wasser',        genre: 'n', pl: 'Wässer',       meaning: 'eau' },
];

// ============================================================
// TEMPLATES DE PHRASES PAR CAS
// ============================================================

// NOMINATIF (sujet de la phrase)
const NOM_TEMPLATES = [
  (art, n) => ({
    question: `___ ${n.nom} ist groß. (${n.meaning})`,
    answer: art,
    caze: 'Nominatif',
    example: `${art} ${n.nom} ist groß.`,
  }),
  (art, n) => ({
    question: `Wo ist ___ ${n.nom}? (${n.meaning})`,
    answer: art,
    caze: 'Nominatif',
    example: `Wo ist ${art} ${n.nom}?`,
  }),
  (art, n) => ({
    question: `___ ${n.nom} ist neu. (${n.meaning})`,
    answer: art,
    caze: 'Nominatif',
    example: `${art} ${n.nom} ist neu.`,
  }),
  (art, n) => ({
    question: `Ist ___ ${n.nom} hier? (${n.meaning})`,
    answer: art,
    caze: 'Nominatif',
    example: `Ist ${art} ${n.nom} hier?`,
  }),
];

// ACCUSATIF (objet direct)
const AKK_TEMPLATES = [
  (art, n) => ({
    question: `Ich sehe ___ ${n.nom}. (${n.meaning})`,
    answer: art,
    caze: 'Accusatif',
    example: `Ich sehe ${art} ${n.nom}.`,
  }),
  (art, n) => ({
    question: `Er kauft ___ ${n.nom}. (${n.meaning})`,
    answer: art,
    caze: 'Accusatif',
    example: `Er kauft ${art} ${n.nom}.`,
  }),
  (art, n) => ({
    question: `Sie liebt ___ ${n.nom}. (${n.meaning})`,
    answer: art,
    caze: 'Accusatif',
    example: `Sie liebt ${art} ${n.nom}.`,
  }),
  (art, n) => ({
    question: `Ich brauche ___ ${n.nom}. (${n.meaning})`,
    answer: art,
    caze: 'Accusatif',
    example: `Ich brauche ${art} ${n.nom}.`,
  }),
];

// DATIF (objet indirect, prépositions de datif)
const DAT_TEMPLATES = [
  (art, n) => ({
    question: `Ich helfe ___ ${n.nom}. (${n.meaning})`,
    answer: art,
    caze: 'Datif',
    example: `Ich helfe ${art} ${n.nom}.`,
  }),
  (art, n) => ({
    question: `Er kommt mit ___ ${n.nom}. (${n.meaning})`,
    answer: art,
    caze: 'Datif',
    example: `Er kommt mit ${art} ${n.nom}.`,
  }),
  (art, n) => ({
    question: `Sie spricht von ___ ${n.nom}. (${n.meaning})`,
    answer: art,
    caze: 'Datif',
    example: `Sie spricht von ${art} ${n.nom}.`,
  }),
  (art, n) => ({
    question: `Das Buch gehört ___ ${n.nom}. (${n.meaning})`,
    answer: art,
    caze: 'Datif',
    example: `Das Buch gehört ${art} ${n.nom}.`,
  }),
];

// GÉNITIF (possession)
const GEN_TEMPLATES = [
  (art, n) => ({
    question: `Das ist das Auto ___ ${n.nom}s. (${n.meaning})`,
    answer: art,
    caze: 'Génitif',
    example: `Das ist das Auto ${art} ${n.nom}s.`,
  }),
  (art, n) => ({
    question: `Das Haus ___ ${n.nom}s ist groß. (${n.meaning})`,
    answer: art,
    caze: 'Génitif',
    example: `Das Haus ${art} ${n.nom}s ist groß.`,
  }),
];

// ============================================================
// EXPLICATIONS PAR CAS ET GENRE
// ============================================================

function makeDefiniteExplanation(caze, genre, answer, noun) {
  const g = genre === 'm' ? 'masculin' : genre === 'f' ? 'féminin' : genre === 'n' ? 'neutre' : 'pluriel';
  const tableRows = [
    `| Cas        | Masc  | Fém   | Neutre | Pluriel |`,
    `|------------|-------|-------|--------|---------|`,
    `| Nominatif  | der   | die   | das    | die     |`,
    `| Accusatif  | den   | die   | das    | die     |`,
    `| Datif      | dem   | der   | dem    | den     |`,
    `| Génitif    | des   | der   | des    | der     |`,
  ];

  const caseExplain = {
    Nominatif: `Le ${caze.toUpperCase()} est le cas du SUJET.\nQuestion : Qui fait l'action ? → le ${noun.nom}`,
    Accusatif: `L'${caze.toUpperCase()} est le cas de l'OBJET DIRECT (COD).\nQuestion : Qui/Quoi est affecté par l'action ? → le ${noun.nom}`,
    Datif: `Le ${caze.toUpperCase()} est le cas de l'OBJET INDIRECT (COI).\nIl apparaît aussi après : mit, nach, aus, zu, von, bei, seit, außer`,
    Génitif: `Le ${caze.toUpperCase()} exprime la POSSESSION.\nQuestion : À qui appartient quelque chose ? → au/à la ${noun.nom}`,
  };

  return `📚 ARTICLE DÉFINI — ${caze.toUpperCase()}\n\n"${noun.nom}" est ${g} (genre de base : ${DEFINITE[genre].nom}).\n\n${caseExplain[caze]}\n\n✅ Réponse correcte : "${answer}"\n\n📊 TABLE COMPLÈTE :\n${tableRows.join('\n')}\n\n💡 Astuce : Au datif, la féminin change (die → der) et c'est souvent la surprise !`;
}

function makeIndefiniteExplanation(caze, genre, answer, noun) {
  const g = genre === 'm' ? 'masculin' : genre === 'f' ? 'féminin' : 'neutre';
  const table = [
    `| Cas        | Masc   | Fém    | Neutre |`,
    `|------------|--------|--------|--------|`,
    `| Nominatif  | ein    | eine   | ein    |`,
    `| Accusatif  | einen  | eine   | ein    |`,
    `| Datif      | einem  | einer  | einem  |`,
    `| Génitif    | eines  | einer  | eines  |`,
  ];
  return `📚 ARTICLE INDÉFINI — ${caze.toUpperCase()}\n\n"${noun.nom}" est ${g}.\nÀ la case ${caze}, l'article indéfini est : "${answer}"\n\n📊 TABLE COMPLÈTE :\n${table.join('\n')}\n\n⚠️ L'article indéfini n'a pas de pluriel ! (on dit "Kinder" sans article ou avec "keine")`;
}

// ============================================================
// GÉNÉRATION DES EXERCICES
// ============================================================

export const generateArticleExercises = () => {
  const exercises = [];
  let id = 0;

  // ── Bloc 1 : Articles définis, tous genres, tous cas ──────
  const defCases = [
    { key: 'nom', label: 'Nominatif', templates: NOM_TEMPLATES },
    { key: 'akk', label: 'Accusatif', templates: AKK_TEMPLATES },
    { key: 'dat', label: 'Datif',     templates: DAT_TEMPLATES },
    { key: 'gen', label: 'Génitif',   templates: GEN_TEMPLATES },
  ];

  NOUNS.forEach((noun, ni) => {
    defCases.forEach(({ key, label, templates }) => {
      const art = DEFINITE[noun.genre][key];
      const tmpl = templates[ni % templates.length](art, noun);

      // Options : toutes les formes uniques possibles (articles définis)
      const allDef = ['der', 'die', 'das', 'den', 'dem', 'des'];
      const options = [...new Set([art, ...allDef.filter(x => x !== art).slice(0, 3)])].slice(0, 4);

      exercises.push({
        id: id++,
        type: 'article',
        subtype: 'défini',
        genre: noun.genre,
        caze: label,
        level: Math.floor(ni / 5) + 1,
        difficulty: key === 'nom' ? 1 : key === 'akk' ? 2 : key === 'dat' ? 3 : 4,
        question: tmpl.question,
        hint: `Article DÉFINI • ${label} • Genre : ${noun.genre === 'm' ? 'masculin' : noun.genre === 'f' ? 'féminin' : 'neutre'}`,
        options,
        answer: art,
        correctAnswer: art,
        explanation: makeDefiniteExplanation(label, noun.genre, art, noun),
        exampleSentence: tmpl.example,
      });
    });
  });

  // ── Bloc 2 : Articles indéfinis ────────────────────────────
  const indefCases = [
    { key: 'nom', label: 'Nominatif', templates: NOM_TEMPLATES },
    { key: 'akk', label: 'Accusatif', templates: AKK_TEMPLATES },
    { key: 'dat', label: 'Datif',     templates: DAT_TEMPLATES },
  ];

  NOUNS.filter(n => n.genre !== 'pl').forEach((noun, ni) => {
    indefCases.forEach(({ key, label, templates }) => {
      const art = INDEFINITE[noun.genre][key];
      const tmpl = templates[ni % templates.length](art, noun);

      const allIndef = ['ein', 'eine', 'einen', 'einem', 'einer', 'eines'];
      const options = [...new Set([art, ...allIndef.filter(x => x !== art).slice(0, 3)])].slice(0, 4);

      exercises.push({
        id: id++,
        type: 'article',
        subtype: 'indéfini',
        genre: noun.genre,
        caze: label,
        level: Math.floor(ni / 4) + 6,
        difficulty: key === 'nom' ? 2 : key === 'akk' ? 3 : 4,
        question: tmpl.question,
        hint: `Article INDÉFINI • ${label} • Genre : ${noun.genre === 'm' ? 'masculin' : noun.genre === 'f' ? 'féminin' : 'neutre'}`,
        options,
        answer: art,
        correctAnswer: art,
        explanation: makeIndefiniteExplanation(label, noun.genre, art, noun),
        exampleSentence: tmpl.example,
      });
    });
  });

  // ── Bloc 3 : Prépositions + article (datif fixe) ──────────
  const datPreps = ['mit', 'nach', 'aus', 'zu', 'von', 'bei', 'seit', 'außer'];
  NOUNS.filter(n => n.genre !== 'pl').forEach((noun, ni) => {
    const prep = datPreps[ni % datPreps.length];
    const art = DEFINITE[noun.genre].dat;
    const options = ['der', 'die', 'das', 'den', 'dem', 'des'];
    exercises.push({
      id: id++,
      type: 'article',
      subtype: 'préposition-datif',
      genre: noun.genre,
      caze: 'Datif',
      level: Math.floor(ni / 3) + 12,
      difficulty: 3,
      question: `Er kommt ${prep} ___ ${noun.nom}. (${noun.meaning})`,
      hint: `"${prep}" → toujours DATIF`,
      options: [...new Set([art, ...options.filter(x => x !== art).slice(0, 3)])].slice(0, 4),
      answer: art,
      correctAnswer: art,
      explanation: `📚 PRÉPOSITIONS À DATIF FIXE\n\n"${prep}" fait partie des prépositions qui exigent TOUJOURS le DATIF.\n\nListe complète : mit • nach • aus • zu • von • bei • seit • außer\n\n"${noun.nom}" est ${noun.genre === 'm' ? 'masculin' : noun.genre === 'f' ? 'féminin' : 'neutre'}.\nAu DATIF → article : "${art}"\n\n✅ "${prep} ${art} ${noun.nom}" est correct.\n\n💡 Moyen mnémotechnique : "Man Nach Außer Bei Mit Von Zu Seit" (MNABMVZS)`,
      exampleSentence: `Er kommt ${prep} ${art} ${noun.nom}.`,
    });
  });

  // ── Bloc 4 : Prépositions + article (accusatif fixe) ──────
  const akkPreps = ['durch', 'für', 'gegen', 'ohne', 'um'];
  NOUNS.filter(n => n.genre !== 'pl').forEach((noun, ni) => {
    const prep = akkPreps[ni % akkPreps.length];
    const art = DEFINITE[noun.genre].akk;
    exercises.push({
      id: id++,
      type: 'article',
      subtype: 'préposition-accusatif',
      genre: noun.genre,
      caze: 'Accusatif',
      level: Math.floor(ni / 3) + 18,
      difficulty: 3,
      question: `Sie geht ${prep} ___ ${noun.nom}. (${noun.meaning})`,
      hint: `"${prep}" → toujours ACCUSATIF`,
      options: [...new Set([art, 'der', 'die', 'das', 'den', 'dem'].filter(x => x !== art || true).slice(0, 4))].slice(0, 4),
      answer: art,
      correctAnswer: art,
      explanation: `📚 PRÉPOSITIONS À ACCUSATIF FIXE\n\n"${prep}" fait partie des prépositions qui exigent TOUJOURS l'ACCUSATIF.\n\nListe complète : durch • für • gegen • ohne • um\n\n"${noun.nom}" est ${noun.genre === 'm' ? 'masculin' : noun.genre === 'f' ? 'féminin' : 'neutre'}.\nÀ l'ACCUSATIF → article : "${art}"\n\n✅ "${prep} ${art} ${noun.nom}" est correct.\n\n💡 Moyen mnémotechnique : "DuFüGeOhUm" (Durch Für Gegen Ohne Um)`,
      exampleSentence: `Sie geht ${prep} ${art} ${noun.nom}.`,
    });
  });

  return exercises;
};

export const articleExercises = generateArticleExercises();