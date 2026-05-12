// ============================================================
// EXERCICES SUR LES DÉCLINAISONS DES ADJECTIFS
// 50 niveaux × 5 exercices = 250 exercices
//
// RÈGLES GRAMMATICALES (vérifiées) :
//
// TYPE 1 — APRÈS ARTICLE DÉFINI (déclinaison faible / schwach)
//          | Masc | Fém  | Neutre | Pluriel
// Nom.     | -e   | -e   | -e     | -en
// Akk.     | -en  | -e   | -e     | -en
// Dat.     | -en  | -en  | -en    | -en
// Gén.     | -en  | -en  | -en    | -en
//
// TYPE 2 — APRÈS ARTICLE INDÉFINI (déclinaison mixte / gemischt)
//          | Masc | Fém  | Neutre
// Nom.     | -er  | -e   | -es
// Akk.     | -en  | -e   | -es
// Dat.     | -en  | -en  | -en
// Gén.     | -en  | -en  | -en
//
// TYPE 3 — SANS ARTICLE (déclinaison forte / stark)
//          | Masc | Fém  | Neutre | Pluriel
// Nom.     | -er  | -e   | -es    | -e
// Akk.     | -en  | -e   | -es    | -e
// Dat.     | -em  | -er  | -em    | -en
// Gén.     | -en  | -er  | -en    | -er
// ============================================================

const WEAK = {
  m:  { nom: 'e',  akk: 'en', dat: 'en', gen: 'en' },
  f:  { nom: 'e',  akk: 'e',  dat: 'en', gen: 'en' },
  n:  { nom: 'e',  akk: 'e',  dat: 'en', gen: 'en' },
  pl: { nom: 'en', akk: 'en', dat: 'en', gen: 'en' },
};

const MIXED = {
  m: { nom: 'er', akk: 'en', dat: 'en', gen: 'en' },
  f: { nom: 'e',  akk: 'e',  dat: 'en', gen: 'en' },
  n: { nom: 'es', akk: 'es', dat: 'en', gen: 'en' },
};

const STRONG = {
  m:  { nom: 'er', akk: 'en', dat: 'em', gen: 'en' },
  f:  { nom: 'e',  akk: 'e',  dat: 'er', gen: 'er' },
  n:  { nom: 'es', akk: 'es', dat: 'em', gen: 'en' },
  pl: { nom: 'e',  akk: 'e',  dat: 'en', gen: 'er' },
};

// Articles définis par genre et cas (pour construire les phrases)
const DEF_ART = {
  m:  { nom: 'der', akk: 'den', dat: 'dem', gen: 'des' },
  f:  { nom: 'die', akk: 'die', dat: 'der', gen: 'der' },
  n:  { nom: 'das', akk: 'das', dat: 'dem', gen: 'des' },
  pl: { nom: 'die', akk: 'die', dat: 'den', gen: 'der' },
};

// Articles indéfinis par genre et cas
const INDEF_ART = {
  m: { nom: 'ein',  akk: 'einen', dat: 'einem', gen: 'eines' },
  f: { nom: 'eine', akk: 'eine',  dat: 'einer', gen: 'einer' },
  n: { nom: 'ein',  akk: 'ein',   dat: 'einem', gen: 'eines' },
};

const ADJECTIVES = [
  { base: 'groß',        fr: 'grand(e)' },
  { base: 'klein',       fr: 'petit(e)' },
  { base: 'schön',       fr: 'beau/belle' },
  { base: 'neu',         fr: 'nouveau/nouvelle' },
  { base: 'alt',         fr: 'vieux/vieille' },
  { base: 'gut',         fr: 'bon(ne)' },
  { base: 'schnell',     fr: 'rapide' },
  { base: 'langsam',     fr: 'lent(e)' },
  { base: 'klug',        fr: 'intelligent(e)' },
  { base: 'freundlich',  fr: 'aimable' },
  { base: 'jung',        fr: 'jeune' },
  { base: 'modern',      fr: 'moderne' },
  { base: 'interessant', fr: 'intéressant(e)' },
  { base: 'warm',        fr: 'chaud(e)' },
  { base: 'kalt',        fr: 'froid(e)' },
  { base: 'laut',        fr: 'bruyant(e)' },
  { base: 'leise',       fr: 'silencieux/silencieuse' },
  { base: 'teuer',       fr: 'cher/chère' },
  { base: 'billig',      fr: 'bon marché' },
  { base: 'gesund',      fr: 'sain(e)' },
];

const NOUNS = [
  { nom: 'Hund',    genre: 'm', fr: 'chien' },
  { nom: 'Katze',   genre: 'f', fr: 'chat' },
  { nom: 'Buch',    genre: 'n', fr: 'livre' },
  { nom: 'Tisch',   genre: 'm', fr: 'table' },
  { nom: 'Lampe',   genre: 'f', fr: 'lampe' },
  { nom: 'Auto',    genre: 'n', fr: 'voiture' },
  { nom: 'Mann',    genre: 'm', fr: 'homme' },
  { nom: 'Frau',    genre: 'f', fr: 'femme' },
  { nom: 'Kind',    genre: 'n', fr: 'enfant' },
  { nom: 'Lehrer',  genre: 'm', fr: 'professeur' },
  { nom: 'Lehrerin',genre: 'f', fr: 'professeure' },
  { nom: 'Haus',    genre: 'n', fr: 'maison' },
];

const CASES = [
  { key: 'nom', label: 'Nominatif',  fr: 'sujet de la phrase' },
  { key: 'akk', label: 'Accusatif',  fr: 'objet direct (COD)' },
  { key: 'dat', label: 'Datif',      fr: 'objet indirect (COI) ou après certaines prépositions' },
  { key: 'gen', label: 'Génitif',    fr: 'possession' },
];

// Génère 4 options dont la bonne, dans un ordre aléatoire
const makeOptions = (correct, adj) => {
  const suffixes = ['e', 'en', 'er', 'es', 'em'];
  const pool = [...new Set(suffixes.map(s => adj + s))];
  const wrong = pool.filter(o => o !== correct);
  const opts = [correct, ...wrong.slice(0, 3)];
  // Fisher-Yates
  for (let i = opts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [opts[i], opts[j]] = [opts[j], opts[i]];
  }
  return opts;
};

const genreLabel = g => ({ m: 'masculin', f: 'féminin', n: 'neutre', pl: 'pluriel' }[g]);

// ─── Explications détaillées par type ────────────────────────

const explainWeak = (caze, genre, adj, suffix, noun) => {
  const correct = adj.base + suffix;
  return `📚 ADJECTIF APRÈS ARTICLE DÉFINI (déclinaison FAIBLE)

"${noun.nom}" (${noun.fr}) est ${genreLabel(genre)}.

Au ${caze.label} (${caze.fr}), la terminaison est "-${suffix}".
✅ Forme correcte : "${correct} ${noun.nom}"

📊 TABLE COMPLÈTE après der/die/das :
         | Masc | Fém  | Neutre | Pluriel
Nominatif| -e   | -e   | -e     | -en
Accusatif| -en  | -e   | -e     | -en
Datif    | -en  | -en  | -en    | -en
Génitif  | -en  | -en  | -en    | -en

💡 Astuce : c'est presque toujours "-en", sauf Nominatif et Accusatif
féminin/neutre qui font "-e".`;
};

const explainMixed = (caze, genre, adj, suffix, noun) => {
  const correct = adj.base + suffix;
  return `📚 ADJECTIF APRÈS ARTICLE INDÉFINI (déclinaison MIXTE)

"${noun.nom}" (${noun.fr}) est ${genreLabel(genre)}.

Au ${caze.label} (${caze.fr}), la terminaison est "-${suffix}".
✅ Forme correcte : "${correct} ${noun.nom}"

📊 TABLE COMPLÈTE après ein/eine :
         | Masc  | Fém   | Neutre
Nominatif| -er   | -e    | -es
Accusatif| -en   | -e    | -es
Datif    | -en   | -en   | -en
Génitif  | -en   | -en   | -en

⚠️ Au Nominatif, l'adjectif porte la marque du genre :
→ masculin = -er • féminin = -e • neutre = -es`;
};

const explainStrong = (caze, genre, adj, suffix, noun) => {
  const correct = adj.base + suffix;
  return `📚 ADJECTIF SANS ARTICLE (déclinaison FORTE)

Sans article, l'adjectif doit porter LUI-MÊME la marque du genre et du cas.
"${noun.nom}" (${noun.fr}) est ${genreLabel(genre)}.

Au ${caze.label} (${caze.fr}), la terminaison est "-${suffix}".
✅ Forme correcte : "${correct} ${noun.nom}"

📊 TABLE COMPLÈTE sans article :
         | Masc  | Fém   | Neutre | Pluriel
Nominatif| -er   | -e    | -es    | -e
Accusatif| -en   | -e    | -es    | -e
Datif    | -em   | -er   | -em    | -en
Génitif  | -en   | -er   | -en    | -er

💡 Les terminaisons ressemblent aux articles définis !
(der→-er • die→-e • das→-es • dem→-em • den→-en)`;
};

// ─── Génération ──────────────────────────────────────────────

export const adjectiveExercises = [];
let id = 0;

for (let level = 1; level <= 50; level++) {
  for (let exIdx = 0; exIdx < 5; exIdx++) {
    const noun  = NOUNS[(level * 3 + exIdx * 7) % NOUNS.length];
    const adj   = ADJECTIVES[(level * 2 + exIdx * 5) % ADJECTIVES.length];
    const caze  = CASES[(level + exIdx) % CASES.length];
    const type  = (level + exIdx) % 3; // 0=défini 1=indéfini 2=sans article

    let suffix, subtype, articleStr, question, exampleSentence, explanation;

    if (type === 0) {
      // ── Déclinaison faible (article défini) ──────────────
      subtype    = 'défini';
      suffix     = WEAK[noun.genre][caze.key];
      articleStr = DEF_ART[noun.genre][caze.key];
      const adjForm = adj.base + suffix;
      // La question montre l'article défini AU BON CAS, puis le blanc pour l'adjectif
      question       = `${articleStr} ___ ${noun.nom} (${adj.fr} / ${noun.fr})`;
      exampleSentence = `${articleStr} ${adjForm} ${noun.nom} ist hier.`;
      explanation    = explainWeak(caze, noun.genre, adj, suffix, noun);

    } else if (type === 1) {
      // ── Déclinaison mixte (article indéfini) ─────────────
      // Pas de pluriel pour l'article indéfini → on force un genre singulier
      const singleGenre = noun.genre === 'pl' ? 'm' : noun.genre;
      const singleNoun  = noun.genre === 'pl' ? NOUNS.find(n => n.genre === 'm') || noun : noun;
      subtype    = 'indéfini';
      suffix     = MIXED[singleGenre][caze.key];
      articleStr = INDEF_ART[singleGenre][caze.key];
      const adjForm = adj.base + suffix;
      question       = `${articleStr} ___ ${singleNoun.nom} (${adj.fr} / ${singleNoun.fr})`;
      exampleSentence = `${articleStr} ${adjForm} ${singleNoun.nom} ist hier.`;
      explanation    = explainMixed(caze, singleGenre, adj, suffix, singleNoun);

    } else {
      // ── Déclinaison forte (sans article) ─────────────────
      subtype    = 'sans article';
      suffix     = STRONG[noun.genre][caze.key];
      articleStr = '';
      const adjForm = adj.base + suffix;
      question       = `___ ${noun.nom} (${adj.fr} / ${noun.fr}) [sans article]`;
      exampleSentence = `${adjForm} ${noun.nom} ist hier.`;
      explanation    = explainStrong(caze, noun.genre, adj, suffix, noun);
    }

    const adjForm   = adj.base + suffix;
    const options   = makeOptions(adjForm, adj.base);

    // ── Indice : CACHÉ par défaut, révélé au clic dans l'UI ──
    // Le champ hint contient l'info mais l'UI ne l'affiche QUE si l'utilisateur clique.
    // On n'y met PAS la traduction ni le cas — juste une aide grammaticale discrète.
    const hint = `Type : ${subtype} • Cas : ${caze.label} • Genre : ${genreLabel(noun.genre)}`;

    adjectiveExercises.push({
      id: id++,
      type: 'adjective',
      level,
      difficulty: Math.min(Math.floor(level / 10) + 1, 5),
      question,
      // hint est caché par défaut dans l'UI — affiché seulement au clic "Indice"
      hint,
      options,
      correctAnswer: adjForm,
      explanation,
      exampleSentence,
      subtype,
      caze: caze.label,
      genre: noun.genre,
      adjective: adj.base,
    });
  }
}

console.log(`✅ AdjectiveExercises: ${adjectiveExercises.length} exercices`);