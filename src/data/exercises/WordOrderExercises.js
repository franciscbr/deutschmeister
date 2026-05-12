// ============================================================
// EXERCICES SUR L'ORDRE DES MOTS (Wortstellung)
// 50 niveaux × 5 exercices = 250 exercices
//
// CONCEPTION :
//   • Chaque exercice stocke les mots dans leur ordre CORRECT.
//   • Le MÉLANGE doit être fait côté composant React au moment de
//     l'affichage (ex: useMemo(() => shuffle(exercise.words), [exercise.id]))
//     afin que deux apparitions du même exercice aient des ordres différents.
//   • L'utilisateur reconstituera la phrase en cliquant/glissant les mots.
//   • La ponctuation (. ?) est incluse comme token séparé pour faciliter
//     la comparaison avec correctAnswer.
// ============================================================

// ── Templates regroupés par règle grammaticale ───────────────────────────────
// Chaque template contient :
//   words        : mots dans l'ORDRE CORRECT (tokens exacts qui forment la phrase)
//   correct      : phrase correcte complète (pour comparaison et affichage)
//   rule         : nom court de la règle (pour le hint)
//   explanation  : explication pédagogique complète (affichée après réponse)
//   level_range  : [min, max] niveaux où cet exercice peut apparaître

const TEMPLATES = [

  // ════════════════════════════════════════════════════════
  // RÈGLE 1 — Verbe conjugué en POSITION 2 (phrase principale)
  // ════════════════════════════════════════════════════════
  {
    words: ['Ich', 'gehe', 'heute', 'ins', 'Kino', '.'],
    correct: 'Ich gehe heute ins Kino.',
    rule: 'Verbe en position 2 (phrase principale)',
    explanation:
      '📚 ORDRE DES MOTS — PHRASE PRINCIPALE\n\n' +
      'Dans toute phrase principale, le verbe conjugué occupe TOUJOURS la 2ᵉ position.\n\n' +
      '✅ Ich [1] | gehe [2] | heute ins Kino [3+]\n\n' +
      '📌 Règle : Sujet → Verbe conjugué → Reste de la phrase.',
    level_range: [1, 20],
  },
  {
    words: ['Sie', 'fährt', 'mit', 'dem', 'Bus', 'zur', 'Schule', '.'],
    correct: 'Sie fährt mit dem Bus zur Schule.',
    rule: 'Verbe en position 2 (phrase principale)',
    explanation:
      '📚 ORDRE DES MOTS — PHRASE PRINCIPALE\n\n' +
      'Le verbe conjugué "fährt" est en 2ᵉ position, juste après le sujet "Sie".\n\n' +
      '✅ Sie [1] | fährt [2] | mit dem Bus zur Schule [3+]\n\n' +
      '💡 "fahren" est un verbe fort : il change de voyelle → fährt.',
    level_range: [1, 20],
  },
  {
    words: ['Wir', 'lernen', 'jeden', 'Tag', 'Deutsch', '.'],
    correct: 'Wir lernen jeden Tag Deutsch.',
    rule: 'Verbe en position 2 (phrase principale)',
    explanation:
      '📚 ORDRE DES MOTS — PHRASE PRINCIPALE\n\n' +
      'Le verbe conjugué "lernen" est en 2ᵉ position.\n\n' +
      '✅ Wir [1] | lernen [2] | jeden Tag Deutsch [3+]',
    level_range: [1, 15],
  },

  // ════════════════════════════════════════════════════════
  // RÈGLE 2 — INVERSION sujet/verbe (adverbe temporel en position 1)
  // ════════════════════════════════════════════════════════
  {
    words: ['Morgen', 'muss', 'ich', 'früh', 'aufstehen', '.'],
    correct: 'Morgen muss ich früh aufstehen.',
    rule: 'Inversion : adverbe temporel en pos. 1 → verbe reste en pos. 2',
    explanation:
      '📚 ORDRE DES MOTS — INVERSION\n\n' +
      'Quand un élément autre que le sujet est en 1ʳᵉ position, le verbe conjugué ' +
      'reste en 2ᵉ position et le SUJET passe en 3ᵉ position.\n\n' +
      '✅ Morgen [1] | muss [2] | ich [3] | früh aufstehen [4+]\n\n' +
      '📌 Règle : [Adverbe] → Verbe conjugué → Sujet → Reste.',
    level_range: [5, 30],
  },
  {
    words: ['Gestern', 'hat', 'er', 'einen', 'Film', 'gesehen', '.'],
    correct: 'Gestern hat er einen Film gesehen.',
    rule: 'Inversion : adverbe temporel en pos. 1 → verbe reste en pos. 2',
    explanation:
      '📚 ORDRE DES MOTS — INVERSION + PARFAIT\n\n' +
      '"Gestern" est en position 1, donc l\'auxiliaire "hat" reste en position 2, ' +
      'le sujet "er" en position 3, et le participe "gesehen" à la FIN.\n\n' +
      '✅ Gestern [1] | hat [2] | er [3] | einen Film gesehen [4-fin]\n\n' +
      '💡 Au parfait avec inversion : [Adverbe] → hat/ist → Sujet → ... → Partizip II.',
    level_range: [10, 40],
  },
  {
    words: ['Heute', 'Abend', 'spielen', 'wir', 'Fußball', '.'],
    correct: 'Heute Abend spielen wir Fußball.',
    rule: 'Inversion : groupe temporel en pos. 1 → verbe reste en pos. 2',
    explanation:
      '📚 ORDRE DES MOTS — INVERSION\n\n' +
      '"Heute Abend" (ce soir) est un groupe temporel en position 1.\n\n' +
      '✅ Heute Abend [1] | spielen [2] | wir [3] | Fußball [4]\n\n' +
      '📌 Même règle : tout élément en position 1 → verbe en position 2.',
    level_range: [5, 25],
  },

  // ════════════════════════════════════════════════════════
  // RÈGLE 3 — QUESTION (verbe en position 1)
  // ════════════════════════════════════════════════════════
  {
    words: ['Kannst', 'du', 'mir', 'helfen', '?'],
    correct: 'Kannst du mir helfen?',
    rule: 'Question : verbe conjugué en position 1',
    explanation:
      '📚 ORDRE DES MOTS — QUESTION (sans mot interrogatif)\n\n' +
      'Pour poser une question Oui/Non, le verbe conjugué passe en PREMIÈRE position.\n\n' +
      '✅ Kannst [1] | du [2] | mir helfen [3+]\n\n' +
      '⚠️ "können" → "kannst" pour "du" (verbe modal fort).\n' +
      '📌 Structure : Verbe conjugué → Sujet → Reste → ?',
    level_range: [5, 30],
  },
  {
    words: ['Sprichst', 'du', 'Deutsch', '?'],
    correct: 'Sprichst du Deutsch?',
    rule: 'Question : verbe conjugué en position 1',
    explanation:
      '📚 ORDRE DES MOTS — QUESTION (sans mot interrogatif)\n\n' +
      'Le verbe conjugué "Sprichst" est en 1ʳᵉ position.\n\n' +
      '✅ Sprichst [1] | du [2] | Deutsch [3] | ?\n\n' +
      '⚠️ "sprechen" → "sprichst" pour "du" (voyelle e → i).',
    level_range: [5, 25],
  },
  {
    words: ['Wohin', 'fährt', 'der', 'Zug', '?'],
    correct: 'Wohin fährt der Zug?',
    rule: 'Question : mot interrogatif en pos. 1, verbe en pos. 2',
    explanation:
      '📚 ORDRE DES MOTS — QUESTION (avec mot interrogatif)\n\n' +
      'Le mot interrogatif "Wohin" (vers où) est en position 1, ' +
      'le verbe conjugué reste en position 2.\n\n' +
      '✅ Wohin [1] | fährt [2] | der Zug [3+] | ?\n\n' +
      '📌 Mots interrogatifs : Wer, Was, Wo, Wohin, Wann, Warum, Wie…',
    level_range: [10, 35],
  },

  // ════════════════════════════════════════════════════════
  // RÈGLE 4 — PARFAIT (auxiliaire en pos. 2, participe à la fin)
  // ════════════════════════════════════════════════════════
  {
    words: ['Ich', 'habe', 'gestern', 'einen', 'Film', 'gesehen', '.'],
    correct: 'Ich habe gestern einen Film gesehen.',
    rule: 'Parfait : auxiliaire en pos. 2, Partizip II à la fin',
    explanation:
      '📚 ORDRE DES MOTS — PARFAIT (Perfekt)\n\n' +
      'Au parfait, l\'auxiliaire (haben/sein) est en position 2 ' +
      'et le PARTICIPE PASSÉ (Partizip II) se place à la toute FIN.\n\n' +
      '✅ Ich [1] | habe [2] | gestern einen Film | gesehen [fin]\n\n' +
      '📌 Structure : Sujet → haben/sein → [compléments] → Partizip II.',
    level_range: [10, 40],
  },
  {
    words: ['Er', 'ist', 'nach', 'Berlin', 'gefahren', '.'],
    correct: 'Er ist nach Berlin gefahren.',
    rule: 'Parfait avec "sein" : auxiliaire en pos. 2, participe à la fin',
    explanation:
      '📚 ORDRE DES MOTS — PARFAIT avec "sein"\n\n' +
      'Les verbes de mouvement ou de changement d\'état utilisent "sein" au parfait.\n\n' +
      '✅ Er [1] | ist [2] | nach Berlin | gefahren [fin]\n\n' +
      '💡 Verbes avec "sein" : fahren, gehen, kommen, fliegen, werden…',
    level_range: [10, 40],
  },
  {
    words: ['Wir', 'haben', 'das', 'Buch', 'gelesen', '.'],
    correct: 'Wir haben das Buch gelesen.',
    rule: 'Parfait : auxiliaire en pos. 2, Partizip II à la fin',
    explanation:
      '📚 ORDRE DES MOTS — PARFAIT (Perfekt)\n\n' +
      '✅ Wir [1] | haben [2] | das Buch | gelesen [fin]\n\n' +
      '📌 "lesen" → Partizip II irrégulier : "gelesen".',
    level_range: [10, 35],
  },

  // ════════════════════════════════════════════════════════
  // RÈGLE 5 — NÉGATION avec "nicht"
  // ════════════════════════════════════════════════════════
  {
    words: ['Ich', 'kann', 'das', 'Fenster', 'nicht', 'öffnen', '.'],
    correct: 'Ich kann das Fenster nicht öffnen.',
    rule: 'Négation : "nicht" avant l\'infinitif final',
    explanation:
      '📚 ORDRE DES MOTS — NÉGATION avec "nicht"\n\n' +
      '"nicht" se place avant ce qu\'il nie. Quand il nie l\'infinitif final, ' +
      'il se place juste avant ce dernier.\n\n' +
      '✅ Ich [1] | kann [2] | das Fenster | nicht öffnen [fin]\n\n' +
      '📌 Structure avec modal : [Sujet] → [modal] → [COD] → nicht → [infinitif].',
    level_range: [15, 45],
  },
  {
    words: ['Er', 'kommt', 'heute', 'nicht', '.'],
    correct: 'Er kommt heute nicht.',
    rule: 'Négation : "nicht" en fin de phrase (nie le verbe)',
    explanation:
      '📚 ORDRE DES MOTS — NÉGATION du verbe\n\n' +
      'Quand "nicht" nie le verbe entier, il se place généralement en FIN de phrase.\n\n' +
      '✅ Er [1] | kommt [2] | heute | nicht [fin]\n\n' +
      '📌 "nicht" en fin → il nie toute l\'action.',
    level_range: [10, 35],
  },
  {
    words: ['Ich', 'trinke', 'keinen', 'Kaffee', '.'],
    correct: 'Ich trinke keinen Kaffee.',
    rule: 'Négation avec "kein" (article négatif)',
    explanation:
      '📚 ORDRE DES MOTS — NÉGATION avec "kein"\n\n' +
      '"kein/keine/keinen" s\'utilise à la place de "nicht + un/eine/einen" pour nier un nom.\n\n' +
      '✅ Ich [1] | trinke [2] | keinen Kaffee [3]\n\n' +
      '💡 "kein" se décline comme l\'article indéfini : kein (neutre/masc. nom.), keine (fém.), keinen (masc. acc.).',
    level_range: [10, 30],
  },

  // ════════════════════════════════════════════════════════
  // RÈGLE 6 — SUBORDONNÉE avec "dass" (verbe à la fin)
  // ════════════════════════════════════════════════════════
  {
    words: ['Ich', 'weiß', ',', 'dass', 'er', 'morgen', 'kommt', '.'],
    correct: 'Ich weiß, dass er morgen kommt.',
    rule: 'Subordonnée "dass" : verbe conjugué à la fin',
    explanation:
      '📚 ORDRE DES MOTS — SUBORDONNÉE avec "dass"\n\n' +
      'Dans toute proposition subordonnée, le verbe conjugué se place à la FIN.\n\n' +
      '✅ Principale : "Ich weiß,"\n' +
      '   Subordonnée : "dass er morgen [kommt]" → verbe à la fin\n\n' +
      '📌 Conjonctions de subordination : dass, weil, wenn, ob, obwohl…',
    level_range: [20, 50],
  },
  {
    words: ['Er', 'sagt', ',', 'dass', 'er', 'müde', 'ist', '.'],
    correct: 'Er sagt, dass er müde ist.',
    rule: 'Subordonnée "dass" : verbe conjugué à la fin',
    explanation:
      '📚 ORDRE DES MOTS — SUBORDONNÉE avec "dass"\n\n' +
      '✅ Principale : "Er sagt,"\n' +
      '   Subordonnée : "dass er müde [ist]" → verbe à la fin\n\n' +
      '💡 Dans la subordonnée, même "sein" (ist) va en fin de phrase.',
    level_range: [20, 50],
  },

  // ════════════════════════════════════════════════════════
  // RÈGLE 7 — SUBORDONNÉE avec "weil" (verbe à la fin)
  // ════════════════════════════════════════════════════════
  {
    words: ['Sie', 'bleibt', 'zu', 'Hause', ',', 'weil', 'sie', 'krank', 'ist', '.'],
    correct: 'Sie bleibt zu Hause, weil sie krank ist.',
    rule: 'Subordonnée "weil" : verbe conjugué à la fin',
    explanation:
      '📚 ORDRE DES MOTS — SUBORDONNÉE avec "weil" (parce que)\n\n' +
      '✅ Principale : "Sie bleibt zu Hause,"\n' +
      '   Subordonnée : "weil sie krank [ist]" → verbe à la fin\n\n' +
      '⚠️ Le "sie" dans la subordonnée est un DEUXIÈME sujet (elle), distinct du premier.\n\n' +
      '📌 "weil" ≠ "denn" : avec "weil" → verbe à la fin ; avec "denn" → ordre normal.',
    level_range: [20, 50],
  },
  {
    words: ['Ich', 'lerne', 'Deutsch', ',', 'weil', 'ich', 'in', 'Berlin', 'arbeite', '.'],
    correct: 'Ich lerne Deutsch, weil ich in Berlin arbeite.',
    rule: 'Subordonnée "weil" : verbe conjugué à la fin',
    explanation:
      '📚 ORDRE DES MOTS — SUBORDONNÉE avec "weil"\n\n' +
      '✅ Principale : "Ich lerne Deutsch,"\n' +
      '   Subordonnée : "weil ich in Berlin [arbeite]" → verbe à la fin\n\n' +
      '💡 Notez que "ich" est répété dans la subordonnée.',
    level_range: [20, 50],
  },

  // ════════════════════════════════════════════════════════
  // RÈGLE 8 — VERBE SÉPARABLE (Trennbare Verben)
  // ════════════════════════════════════════════════════════
  {
    words: ['Ich', 'stehe', 'um', 'sieben', 'Uhr', 'auf', '.'],
    correct: 'Ich stehe um sieben Uhr auf.',
    rule: 'Verbe séparable : préfixe rejeté en fin de phrase',
    explanation:
      '📚 ORDRE DES MOTS — VERBE SÉPARABLE (aufstehen)\n\n' +
      'Avec les verbes séparables, le PRÉFIXE ("auf") est rejeté en FIN de phrase principale.\n\n' +
      '✅ Ich [1] | stehe [2] | um sieben Uhr | auf [fin]\n\n' +
      '📌 Autres séparables : anrufen, mitkommen, fernsehen, einladen, ausgehen…',
    level_range: [15, 45],
  },
  {
    words: ['Er', 'ruft', 'seinen', 'Freund', 'an', '.'],
    correct: 'Er ruft seinen Freund an.',
    rule: 'Verbe séparable : préfixe rejeté en fin de phrase',
    explanation:
      '📚 ORDRE DES MOTS — VERBE SÉPARABLE (anrufen)\n\n' +
      '✅ Er [1] | ruft [2] | seinen Freund | an [fin]\n\n' +
      '💡 "anrufen" = appeler quelqu\'un (au téléphone).',
    level_range: [15, 40],
  },

  // ════════════════════════════════════════════════════════
  // RÈGLE 9 — MODAL + INFINITIF (infinitif à la fin)
  // ════════════════════════════════════════════════════════
  {
    words: ['Du', 'musst', 'jetzt', 'nach', 'Hause', 'gehen', '.'],
    correct: 'Du musst jetzt nach Hause gehen.',
    rule: 'Verbe modal : infinitif rejeté à la fin',
    explanation:
      '📚 ORDRE DES MOTS — VERBE MODAL\n\n' +
      'Le verbe modal se conjugue en position 2 et le verbe principal reste ' +
      'à l\'INFINITIF en FIN de phrase.\n\n' +
      '✅ Du [1] | musst [2] | jetzt nach Hause | gehen [fin]\n\n' +
      '📌 Structure : Sujet → Modal conjugué → [compléments] → Infinitif.',
    level_range: [10, 40],
  },
  {
    words: ['Wir', 'wollen', 'morgen', 'ins', 'Museum', 'gehen', '.'],
    correct: 'Wir wollen morgen ins Museum gehen.',
    rule: 'Verbe modal : infinitif rejeté à la fin',
    explanation:
      '📚 ORDRE DES MOTS — VERBE MODAL\n\n' +
      '✅ Wir [1] | wollen [2] | morgen ins Museum | gehen [fin]\n\n' +
      '💡 "wollen" = vouloir. L\'infinitif "gehen" est toujours en dernière position.',
    level_range: [10, 35],
  },

  // ════════════════════════════════════════════════════════
  // RÈGLE 10 — ORDRE : Temps → Cause → Mode → Lieu (TeKaMoLo)
  // ════════════════════════════════════════════════════════
  {
    words: ['Ich', 'fahre', 'morgen', 'mit', 'dem', 'Zug', 'nach', 'München', '.'],
    correct: 'Ich fahre morgen mit dem Zug nach München.',
    rule: 'Ordre des compléments : Temps → Mode → Lieu (TeMoLo)',
    explanation:
      '📚 ORDRE DES MOTS — COMPLÉMENTS CIRCONSTANCIELS (TeKaMoLo)\n\n' +
      'Quand plusieurs compléments s\'accumulent, l\'ordre est :\n' +
      '   Te = Temps (morgen)\n' +
      '   Ka = Cause (wegen…) — absent ici\n' +
      '   Mo = Mode/Moyen (mit dem Zug)\n' +
      '   Lo = Lieu (nach München)\n\n' +
      '✅ Ich [1] | fahre [2] | morgen [Te] | mit dem Zug [Mo] | nach München [Lo]\n\n' +
      '📌 Mémo : "Te-Ka-Mo-Lo" (comme "Techno-Ca-Mo-Lo" 😄)',
    level_range: [30, 50],
  },
  {
    words: ['Sie', 'geht', 'jeden', 'Morgen', 'zu', 'Fuß', 'zur', 'Arbeit', '.'],
    correct: 'Sie geht jeden Morgen zu Fuß zur Arbeit.',
    rule: 'Ordre des compléments : Temps → Mode → Lieu (TeMoLo)',
    explanation:
      '📚 ORDRE DES MOTS — COMPLÉMENTS CIRCONSTANCIELS (TeKaMoLo)\n\n' +
      '✅ Sie [1] | geht [2] | jeden Morgen [Te] | zu Fuß [Mo] | zur Arbeit [Lo]\n\n' +
      '💡 "zu Fuß" = à pied (mode de déplacement).',
    level_range: [30, 50],
  },
];

// ── Sélection des templates selon le niveau ──────────────────────────────────
const getTemplatesForLevel = (level) =>
  TEMPLATES.filter(t => level >= t.level_range[0] && level <= t.level_range[1]);

// ── Génération des exercices ─────────────────────────────────────────────────
export const wordOrderExercises = [];

let id = 0;

for (let level = 1; level <= 50; level++) {
  const available = getTemplatesForLevel(level);

  // Fallback : si pas assez de templates pour ce niveau, prendre tous les templates
  const pool = available.length >= 5 ? available : TEMPLATES;

  for (let exIdx = 0; exIdx < 5; exIdx++) {
    const template = pool[(level * 3 + exIdx * 7) % pool.length];

    // ── Hint (indice) ────────────────────────────────────────────────────────
    // La traduction de la phrase n'apparaît PAS par défaut dans la question.
    // Elle est révélée uniquement via le hint.
    let hint;
    if (level <= 15) {
      hint = `Règle : ${template.rule}`;
    } else if (level <= 35) {
      hint = `Règle : ${template.rule} • Le verbe conjugué est toujours en position 2 dans une principale.`;
    } else {
      hint = `Règle : ${template.rule} • Attention aux subordonnées (dass, weil…) : verbe à la fin !`;
    }

    // ── Question ─────────────────────────────────────────────────────────────
    // On indique le nombre de mots pour aider l'utilisateur.
    const question = `Reconstituez la phrase avec ces ${template.words.length} mots :`;

    // ── Explication complète (affichée après validation) ─────────────────────
    const explanation = template.explanation;

    wordOrderExercises.push({
      id: id++,
      type: 'wordorder',
      level,
      difficulty: Math.min(Math.floor(level / 10) + 1, 5),
      question,
      hint,
      // ⚠️ Les mots sont stockés dans l'ordre CORRECT.
      // Le composant React DOIT les mélanger à l'affichage avec useMemo/shuffle.
      words: template.words,
      correctAnswer: template.correct,
      explanation,
      rule: template.rule,
      exampleSentence: template.correct,
    });
  }
}

console.log(`✅ WordOrderExercises: ${wordOrderExercises.length} exercices (${TEMPLATES.length} templates)`);

// ── Helper exporté pour le composant React ───────────────────────────────────
// Utiliser cette fonction dans le composant pour mélanger les mots à l'affichage.
// Exemple d'usage dans React :
//   import { shuffleWords } from './WordOrderExercises';
//   const displayed = useMemo(() => shuffleWords(exercise.words), [exercise.id]);
export const shuffleWords = (words) => {
  const arr = [...words];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
};