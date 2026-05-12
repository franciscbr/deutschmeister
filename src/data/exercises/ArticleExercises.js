// ============================================================
// EXERCICES SUR LES ARTICLES DÉFINIS ET INDÉFINIS
// 50 niveaux × 5 exercices = 250 exercices
//
// TABLE DES ARTICLES DÉFINIS :
//          | Masc  | Fém   | Neutre | Pluriel
// Nom.     | der   | die   | das    | die
// Akk.     | den   | die   | das    | die
// Dat.     | dem   | der   | dem    | den
// Gén.     | des   | der   | des    | der
//
// TABLE DES ARTICLES INDÉFINIS :
//          | Masc   | Fém    | Neutre
// Nom.     | ein    | eine   | ein
// Akk.     | einen  | eine   | ein
// Dat.     | einem  | einer  | einem
// Gén.     | eines  | einer  | eines
// ============================================================

const DEFINITE = {
  m:  { nom: 'der', akk: 'den', dat: 'dem', gen: 'des' },
  f:  { nom: 'die', akk: 'die', dat: 'der', gen: 'der' },
  n:  { nom: 'das', akk: 'das', dat: 'dem', gen: 'des' },
  pl: { nom: 'die', akk: 'die', dat: 'den', gen: 'der' },
};

const INDEFINITE = {
  m: { nom: 'ein',   akk: 'einen', dat: 'einem', gen: 'eines' },
  f: { nom: 'eine',  akk: 'eine',  dat: 'einer', gen: 'einer' },
  n: { nom: 'ein',   akk: 'ein',   dat: 'einem', gen: 'eines' },
};

const NOUNS = [
  { nom: 'Mann',       genre: 'm', fr: 'homme' },
  { nom: 'Frau',       genre: 'f', fr: 'femme' },
  { nom: 'Kind',       genre: 'n', fr: 'enfant' },
  { nom: 'Hund',       genre: 'm', fr: 'chien' },
  { nom: 'Katze',      genre: 'f', fr: 'chat' },
  { nom: 'Buch',       genre: 'n', fr: 'livre' },
  { nom: 'Tisch',      genre: 'm', fr: 'table' },
  { nom: 'Lampe',      genre: 'f', fr: 'lampe' },
  { nom: 'Auto',       genre: 'n', fr: 'voiture' },
  { nom: 'Lehrer',     genre: 'm', fr: 'professeur' },
  { nom: 'Lehrerin',   genre: 'f', fr: 'professeure' },
  { nom: 'Haus',       genre: 'n', fr: 'maison' },
  { nom: 'Vater',      genre: 'm', fr: 'père' },
  { nom: 'Mutter',     genre: 'f', fr: 'mère' },
  { nom: 'Fenster',    genre: 'n', fr: 'fenêtre' },
  { nom: 'Stuhl',      genre: 'm', fr: 'chaise' },
  { nom: 'Tür',        genre: 'f', fr: 'porte' },
  { nom: 'Baby',       genre: 'n', fr: 'bébé' },
  { nom: 'Arzt',       genre: 'm', fr: 'médecin' },
  { nom: 'Blume',      genre: 'f', fr: 'fleur' },
];

// Modèles de phrases par cas — sans mention du genre ni de l'article dans la question
// Le blanc ___ remplace uniquement l'article à trouver.
const CASE_TEMPLATES = {
  nom: [
    (noun) => `___ ${noun.nom} ist groß.`,
    (noun) => `Wo ist ___ ${noun.nom}?`,
    (noun) => `___ ${noun.nom} kommt heute.`,
  ],
  akk: [
    (noun) => `Ich sehe ___ ${noun.nom}.`,
    (noun) => `Er kauft ___ ${noun.nom}.`,
    (noun) => `Sie liebt ___ ${noun.nom}.`,
  ],
  dat: [
    (noun) => `Ich helfe ___ ${noun.nom}.`,
    (noun) => `Er kommt mit ___ ${noun.nom}.`,
    (noun) => `Sie spricht von ___ ${noun.nom}.`,
  ],
  gen: [
    (noun) => `Das ist das Buch ___ ${noun.nom}s.`,
    (noun) => `Das Haus ___ ${noun.nom}s ist groß.`,
  ],
};

const CASE_LABELS = {
  nom: { label: 'Nominatif', fr: 'sujet de la phrase' },
  akk: { label: 'Accusatif', fr: 'objet direct (COD)' },
  dat: { label: 'Datif',     fr: 'objet indirect ou après certaines prépositions' },
  gen: { label: 'Génitif',   fr: 'possession' },
};

const CASE_KEYS = ['nom', 'akk', 'dat', 'gen'];

const genreLabel = g => ({ m: 'masculin', f: 'féminin', n: 'neutre', pl: 'pluriel' }[g]);

// Génère 4 options cohérentes (défini OU indéfini selon le type) + la bonne réponse
const makeOptions = (correct, useDefinite, genre) => {
  let pool;
  if (useDefinite) {
    pool = ['der', 'die', 'das', 'den', 'dem', 'des'];
  } else {
    pool = ['ein', 'eine', 'einen', 'einem', 'einer', 'eines'];
  }
  const wrong = pool.filter(o => o !== correct);
  const opts  = [correct, ...wrong.slice(0, 3)];
  // Fisher-Yates
  for (let i = opts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [opts[i], opts[j]] = [opts[j], opts[i]];
  }
  return opts;
};

// Explications détaillées par type et cas
const makeExplanation = (caseKey, genre, article, noun, useDefinite, questionStr) => {
  const caze = CASE_LABELS[caseKey];
  const defTable = `📊 TABLE DES ARTICLES DÉFINIS :
         | Masc  | Fém   | Neutre | Pluriel
Nominatif| der   | die   | das    | die
Accusatif| den   | die   | das    | die
Datif    | dem   | der   | dem    | den
Génitif  | des   | der   | des    | der`;

  const indefTable = `📊 TABLE DES ARTICLES INDÉFINIS :
         | Masc   | Fém    | Neutre
Nominatif| ein    | eine   | ein
Accusatif| einen  | eine   | ein
Datif    | einem  | einer  | einem
Génitif  | eines  | einer  | eines`;

  const caseExplain = {
    nom: `Le NOMINATIF est le cas du SUJET.\nQuestion à se poser : Qui/Qu'est-ce qui fait l'action ?`,
    akk: `L'ACCUSATIF est le cas de l'OBJET DIRECT (COD).\nQuestion à se poser : Qui/Quoi est directement affecté par l'action ?`,
    dat: `Le DATIF est le cas de l'OBJET INDIRECT (COI).\nIl apparaît aussi après : mit, nach, aus, zu, von, bei, seit, außer`,
    gen: `Le GÉNITIF exprime la POSSESSION.\nQuestion à se poser : À qui appartient quelque chose ?`,
  };

  return `📚 ARTICLE ${useDefinite ? 'DÉFINI' : 'INDÉFINI'} — ${caze.label.toUpperCase()}

"${noun.nom}" (${noun.fr}) est ${genreLabel(genre)}.

${caseExplain[caseKey]}

✅ Article correct : "${article}"
✅ Phrase complète : "${questionStr.replace('___', article)}"

${useDefinite ? defTable : indefTable}

💡 Rappel des cas :
• Nominatif → sujet (der/die/das)
• Accusatif → COD (den/die/das — seul le masculin change !)
• Datif → COI (dem/der/dem)
• Génitif → possession (des/der/des)`;
};

// ─── Génération ──────────────────────────────────────────────

export const articleExercises = [];
let id = 0;

for (let level = 1; level <= 50; level++) {
  for (let exIdx = 0; exIdx < 5; exIdx++) {
    const noun        = NOUNS[(level * 3 + exIdx * 7) % NOUNS.length];
    const caseKey     = CASE_KEYS[(level + exIdx) % CASE_KEYS.length];
    const caze        = CASE_LABELS[caseKey];
    const useDefinite = (level + exIdx) % 2 === 0;

    // Genre utilisé (l'article indéfini n'existe pas au pluriel)
    const genre = (noun.genre === 'pl' && !useDefinite) ? 'm' : noun.genre;
    const workingNoun = (noun.genre === 'pl' && !useDefinite)
      ? NOUNS.find(n => n.genre === 'm') || noun
      : noun;

    const article = useDefinite
      ? DEFINITE[genre][caseKey]
      : INDEFINITE[genre][caseKey];

    // Sélectionne le bon template de phrase
    const templates = CASE_TEMPLATES[caseKey];
    const template  = templates[(level + exIdx) % templates.length];
    const question  = template(workingNoun);

    const options = makeOptions(article, useDefinite, genre);

    // Hint caché — affiché uniquement au clic "Indice" dans l'UI
    const hint = `Article ${useDefinite ? 'défini' : 'indéfini'} • ${caze.label} • Genre : ${genreLabel(genre)}`;

    const explanation = makeExplanation(
      caseKey, genre, article, workingNoun, useDefinite, question
    );

    articleExercises.push({
      id: id++,
      type: 'article',
      level,
      difficulty: Math.min(Math.floor(level / 10) + 1, 5),
      question,
      // hint est caché par défaut dans l'UI — affiché seulement au clic "Indice"
      hint,
      options,
      correctAnswer: article,
      explanation,
      exampleSentence: question.replace('___', article),
      subtype: useDefinite ? 'défini' : 'indéfini',
      caze: caze.label,
      genre,
    });
  }
}

console.log(`✅ ArticleExercises: ${articleExercises.length} exercices`);