// ============================================================
// EXERCICES SUR LA VOIX PASSIVE (Vorgangspassiv)
// 50 niveaux × 5 exercices = 250 exercices
// ============================================================

const VERBS_PASSIVE = [
  { infinitive: 'bauen',      meaning: 'construire', pastParticiple: 'gebaut' },
  { infinitive: 'lesen',      meaning: 'lire',       pastParticiple: 'gelesen' },
  { infinitive: 'schreiben',  meaning: 'écrire',     pastParticiple: 'geschrieben' },
  { infinitive: 'machen',     meaning: 'faire',      pastParticiple: 'gemacht' },
  { infinitive: 'kochen',     meaning: 'cuisiner',   pastParticiple: 'gekocht' },
  { infinitive: 'reparieren', meaning: 'réparer',    pastParticiple: 'repariert' },
  { infinitive: 'öffnen',     meaning: 'ouvrir',     pastParticiple: 'geöffnet' },
  { infinitive: 'schließen',  meaning: 'fermer',     pastParticiple: 'geschlossen' },
  { infinitive: 'verkaufen',  meaning: 'vendre',     pastParticiple: 'verkauft' },
  { infinitive: 'kaufen',     meaning: 'acheter',    pastParticiple: 'gekauft' },
];

// ⚠️ CORRECTION : chaque objet dispose de son article correct (der/die/das)
// ainsi que de sa forme nominative capitalisée pour la phrase.
const OBJECTS = [
  { nom: 'Haus',    article: 'das', articleCap: 'Das', meaning: 'maison' },
  { nom: 'Buch',    article: 'das', articleCap: 'Das', meaning: 'livre' },
  { nom: 'Brief',   article: 'der', articleCap: 'Der', meaning: 'lettre' },
  { nom: 'Auto',    article: 'das', articleCap: 'Das', meaning: 'voiture' },
  { nom: 'Tür',     article: 'die', articleCap: 'Die', meaning: 'porte' },
  { nom: 'Fenster', article: 'das', articleCap: 'Das', meaning: 'fenêtre' },
  { nom: 'Essen',   article: 'das', articleCap: 'Das', meaning: 'repas' },
];

// Auxiliaire du passif varie selon le sujet grammatical (genre/nombre).
// Pour simplifier, les exercices utilisent uniquement des sujets neutres (das)
// ou le sujet au nominatif fourni directement — on adapte "wird/wird/werden"
// selon le nombre, mais ici tous les objets sont au singulier → toujours
// wird / wurde / ist ... worden.
const TENSES = [
  {
    key: 'present',
    label: 'Präsens (présent)',
    auxiliary: 'wird',
    contextFr: 'chaque année',
    contextDe: 'jedes Jahr',
    tip: 'Formation : wird + Partizip II',
    activeHelper: (verbInf, articleCap, nom) =>
      `"Man ${verbInf}t ${articleCap === 'Das' ? 'das' : articleCap === 'Der' ? 'den' : 'die'} ${nom}." → forme active`,
  },
  {
    key: 'preterite',
    label: 'Präteritum (prétérit)',
    auxiliary: 'wurde',
    contextFr: 'l\'année dernière',
    contextDe: 'letztes Jahr',
    tip: 'Formation : wurde + Partizip II (surtout à l\'écrit)',
    activeHelper: (verbInf, articleCap, nom) =>
      `"Man ${verbInf}te ${articleCap === 'Das' ? 'das' : articleCap === 'Der' ? 'den' : 'die'} ${nom}." → forme active`,
  },
  {
    key: 'perfect',
    label: 'Perfekt (passé composé)',
    auxiliary: 'ist',
    contextFr: 'a été',
    contextDe: 'ist ... worden',
    tip: 'Formation : ist + Partizip II + worden  (⚠️ "geworden" devient "worden" au passif !)',
    activeHelper: (verbInf, articleCap, nom) =>
      `"Man hat ${articleCap === 'Das' ? 'das' : articleCap === 'Der' ? 'den' : 'die'} ${nom} ${verbInf.endsWith('ieren') ? verbInf.slice(0, -2) + 't' : verbInf}." → forme active`,
  },
];

// Akkusativ de l'article (utilisé dans les exemples actifs Man + Akk)
const toAkkusativ = (article) => {
  if (article === 'der') return 'den';
  return article; // die / das restent identiques à l'Akkusatif singulier
};

// ── Génère 4 options distinctes ──────────────────────────────────────────────
const buildOptions = (correctAnswer, tenseKey, auxiliary) => {
  const pool = new Set([correctAnswer]);

  // Options distracteurs : participes d'autres verbes dans le même temps
  for (const v of VERBS_PASSIVE) {
    if (tenseKey === 'perfect') {
      pool.add(`${v.pastParticiple} worden`);
    } else {
      pool.add(`${auxiliary} ${v.pastParticiple}`);
    }
    if (pool.size >= 7) break; // assez de candidats
  }

  const others = [...pool].filter(f => f !== correctAnswer).slice(0, 3);
  const opts = [correctAnswer, ...others];

  // Mélange Fisher-Yates
  for (let i = opts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [opts[i], opts[j]] = [opts[j], opts[i]];
  }
  return opts;
};

export const passiveExercises = [];

let id = 0;

for (let level = 1; level <= 50; level++) {
  for (let exIdx = 0; exIdx < 5; exIdx++) {
    const verb   = VERBS_PASSIVE[(level * exIdx) % VERBS_PASSIVE.length];
    const object = OBJECTS[(level + exIdx) % OBJECTS.length];
    const tense  = TENSES[Math.floor((level + exIdx) / 10) % TENSES.length];

    // Article correct selon le genre de l'objet
    const artCap = object.articleCap;   // "Der" / "Die" / "Das"
    const artLow = object.article;       // "der" / "die" / "das"
    const artAkk = toAkkusativ(artLow);  // "den" / "die" / "das"

    let correctAnswer, question, hint, explanation, exampleSentence;

    if (tense.key === 'present') {
      correctAnswer  = `${tense.auxiliary} ${verb.pastParticiple}`;
      // La traduction du verbe n'est PAS dans la question → dans le hint
      question       = `${artCap} ${object.nom} ___ (${verb.infinitive}) ${tense.contextDe}.`;
      hint           = `Sens : "${verb.infinitive}" = ${verb.meaning} • ${tense.tip} • Sujet : ${artLow} ${object.nom} (${object.meaning})`;
      explanation    =
        `📚 VOIX PASSIVE — ${tense.label.toUpperCase()}\n\n` +
        `On utilise le passif quand l'ACTION est plus importante que celui qui l'accomplit.\n\n` +
        `${tense.tip}\n\n` +
        `✅ Phrase passive  : "${artCap} ${object.nom} ${correctAnswer}."\n` +
        `📝 ${tense.activeHelper(verb.infinitive, artCap, object.nom)}\n\n` +
        `💡 En français : "${artCap === 'Das' ? 'Le' : artCap === 'Der' ? 'Le' : 'La'} ${object.meaning} est ${verb.meaning.toLowerCase().includes('é') ? verb.meaning : verb.meaning + 'é(e)'} chaque année."`;
      exampleSentence = `${artCap} ${object.nom} ${correctAnswer}.`;

    } else if (tense.key === 'preterite') {
      correctAnswer  = `${tense.auxiliary} ${verb.pastParticiple}`;
      question       = `${artCap} ${object.nom} ___ (${verb.infinitive}) ${tense.contextDe}.`;
      hint           = `Sens : "${verb.infinitive}" = ${verb.meaning} • ${tense.tip} • Sujet : ${artLow} ${object.nom} (${object.meaning})`;
      explanation    =
        `📚 VOIX PASSIVE — ${tense.label.toUpperCase()}\n\n` +
        `Le passif au prétérit s'utilise principalement à l'ÉCRIT (romans, journaux).\n\n` +
        `${tense.tip}\n\n` +
        `✅ Phrase passive  : "${artCap} ${object.nom} ${correctAnswer}."\n` +
        `📝 ${tense.activeHelper(verb.infinitive, artCap, object.nom)}\n\n` +
        `💡 En français : "${artCap === 'Das' ? 'Le' : artCap === 'Der' ? 'Le' : 'La'} ${object.meaning} a été ${verb.meaning.toLowerCase()}."`;
      exampleSentence = `${artCap} ${object.nom} ${correctAnswer}.`;

    } else {
      // Perfekt passif : sein + Partizip II + worden
      // ⚠️ La question affiche déjà "ist" et "worden", le trou est le PARTIZIP II
      correctAnswer  = `${verb.pastParticiple} worden`;
      question       = `${artCap} ${object.nom} ist ___ (${verb.infinitive}).`;
      hint           =
        `Sens : "${verb.infinitive}" = ${verb.meaning} • ${tense.tip}\n` +
        `→ Trouver le Partizip II de "${verb.infinitive}" : "${verb.pastParticiple}"`;
      explanation    =
        `📚 VOIX PASSIVE — ${tense.label.toUpperCase()}\n\n` +
        `Le passif au parfait exprime une action passée dont le résultat est encore pertinent.\n\n` +
        `${tense.tip}\n\n` +
        `✅ Phrase complète : "${artCap} ${object.nom} ist ${verb.pastParticiple} worden."\n\n` +
        `⚠️ ATTENTION : on dit "worden" (pas "geworden") dans le passif parfait !\n\n` +
        `💡 En français : "${artCap === 'Das' ? 'Le' : artCap === 'Der' ? 'Le' : 'La'} ${object.meaning} a été ${verb.meaning.toLowerCase()}."`;
      exampleSentence = `${artCap} ${object.nom} ist ${verb.pastParticiple} worden.`;
    }

    const options = buildOptions(correctAnswer, tense.key, tense.auxiliary);

    passiveExercises.push({
      id: id++,
      type: 'passive',
      level,
      difficulty: Math.min(Math.floor(level / 10) + 2, 5),
      question,
      hint,
      options,
      correctAnswer,
      explanation,
      exampleSentence,
      tense: tense.label,
      verb: verb.infinitive,
      object: object.nom,
      objectArticle: artLow,
    });
  }
}

console.log(`✅ PassiveExercises: ${passiveExercises.length} exercices`);