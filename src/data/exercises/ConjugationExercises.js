// ============================================================
// EXERCICES SUR LA CONJUGAISON DES VERBES ALLEMANDS
// 50 niveaux × 5 exercices = 250 exercices
//
// Niveaux 1-10  : Präsens — verbes réguliers
// Niveaux 11-20 : Präsens — verbes irréguliers (alternance vocalique)
// Niveaux 21-30 : Präteritum (passé simple narratif)
// Niveaux 31-40 : Perfekt (passé composé)
// Niveaux 41-50 : Futur I + mélange de tous les temps
// ============================================================

// ── Verbes réguliers (Schwache Verben) ──────────────────────
const REGULAR_VERBS = [
  {
    infinitive: 'machen', fr: 'faire', stem: 'mach',
    conjugations: { ich: 'mache', du: 'machst', er: 'macht', wir: 'machen', ihr: 'macht', sie: 'machen' },
    praeteritum:  { ich: 'machte', du: 'machtest', er: 'machte', wir: 'machten', ihr: 'machtet', sie: 'machten' },
    partizip: 'gemacht', hilfsverb: 'haben',
  },
  {
    infinitive: 'lernen', fr: 'apprendre', stem: 'lern',
    conjugations: { ich: 'lerne', du: 'lernst', er: 'lernt', wir: 'lernen', ihr: 'lernt', sie: 'lernen' },
    praeteritum:  { ich: 'lernte', du: 'lerntest', er: 'lernte', wir: 'lernten', ihr: 'lerntet', sie: 'lernten' },
    partizip: 'gelernt', hilfsverb: 'haben',
  },
  {
    infinitive: 'wohnen', fr: 'habiter', stem: 'wohn',
    conjugations: { ich: 'wohne', du: 'wohnst', er: 'wohnt', wir: 'wohnen', ihr: 'wohnt', sie: 'wohnen' },
    praeteritum:  { ich: 'wohnte', du: 'wohntest', er: 'wohnte', wir: 'wohnten', ihr: 'wohntet', sie: 'wohnten' },
    partizip: 'gewohnt', hilfsverb: 'haben',
  },
  {
    infinitive: 'spielen', fr: 'jouer', stem: 'spiel',
    conjugations: { ich: 'spiele', du: 'spielst', er: 'spielt', wir: 'spielen', ihr: 'spielt', sie: 'spielen' },
    praeteritum:  { ich: 'spielte', du: 'spieltest', er: 'spielte', wir: 'spielten', ihr: 'spieltet', sie: 'spielten' },
    partizip: 'gespielt', hilfsverb: 'haben',
  },
  {
    infinitive: 'kaufen', fr: 'acheter', stem: 'kauf',
    conjugations: { ich: 'kaufe', du: 'kaufst', er: 'kauft', wir: 'kaufen', ihr: 'kauft', sie: 'kaufen' },
    praeteritum:  { ich: 'kaufte', du: 'kauftest', er: 'kaufte', wir: 'kauften', ihr: 'kauftet', sie: 'kauften' },
    partizip: 'gekauft', hilfsverb: 'haben',
  },
  {
    infinitive: 'arbeiten', fr: 'travailler', stem: 'arbeit',
    conjugations: { ich: 'arbeite', du: 'arbeitest', er: 'arbeitet', wir: 'arbeiten', ihr: 'arbeitet', sie: 'arbeiten' },
    praeteritum:  { ich: 'arbeitete', du: 'arbeitetest', er: 'arbeitete', wir: 'arbeiteten', ihr: 'arbeitetet', sie: 'arbeiteten' },
    partizip: 'gearbeitet', hilfsverb: 'haben',
    note: 'Radical en "-t" → insertion d\'un "-e-" : du arbeit-E-st, er arbeit-E-t',
  },
  {
    infinitive: 'öffnen', fr: 'ouvrir', stem: 'öffn',
    conjugations: { ich: 'öffne', du: 'öffnest', er: 'öffnet', wir: 'öffnen', ihr: 'öffnet', sie: 'öffnen' },
    praeteritum:  { ich: 'öffnete', du: 'öffnetest', er: 'öffnete', wir: 'öffneten', ihr: 'öffnetet', sie: 'öffneten' },
    partizip: 'geöffnet', hilfsverb: 'haben',
    note: 'Radical en "-n" précédé d\'une consonne → insertion d\'un "-e-"',
  },
  {
    infinitive: 'hören', fr: 'entendre/écouter', stem: 'hör',
    conjugations: { ich: 'höre', du: 'hörst', er: 'hört', wir: 'hören', ihr: 'hört', sie: 'hören' },
    praeteritum:  { ich: 'hörte', du: 'hörtest', er: 'hörte', wir: 'hörten', ihr: 'hörtet', sie: 'hörten' },
    partizip: 'gehört', hilfsverb: 'haben',
  },
  {
    infinitive: 'sagen', fr: 'dire', stem: 'sag',
    conjugations: { ich: 'sage', du: 'sagst', er: 'sagt', wir: 'sagen', ihr: 'sagt', sie: 'sagen' },
    praeteritum:  { ich: 'sagte', du: 'sagtest', er: 'sagte', wir: 'sagten', ihr: 'sagtet', sie: 'sagten' },
    partizip: 'gesagt', hilfsverb: 'haben',
  },
  {
    infinitive: 'fragen', fr: 'demander', stem: 'frag',
    conjugations: { ich: 'frage', du: 'fragst', er: 'fragt', wir: 'fragen', ihr: 'fragt', sie: 'fragen' },
    praeteritum:  { ich: 'fragte', du: 'fragtest', er: 'fragte', wir: 'fragten', ihr: 'fragtet', sie: 'fragten' },
    partizip: 'gefragt', hilfsverb: 'haben',
  },
  {
    infinitive: 'zeigen', fr: 'montrer', stem: 'zeig',
    conjugations: { ich: 'zeige', du: 'zeigst', er: 'zeigt', wir: 'zeigen', ihr: 'zeigt', sie: 'zeigen' },
    praeteritum:  { ich: 'zeigte', du: 'zeigtest', er: 'zeigte', wir: 'zeigten', ihr: 'zeigtet', sie: 'zeigten' },
    partizip: 'gezeigt', hilfsverb: 'haben',
  },
  {
    infinitive: 'suchen', fr: 'chercher', stem: 'such',
    conjugations: { ich: 'suche', du: 'suchst', er: 'sucht', wir: 'suchen', ihr: 'sucht', sie: 'suchen' },
    praeteritum:  { ich: 'suchte', du: 'suchtest', er: 'suchte', wir: 'suchten', ihr: 'suchtet', sie: 'suchten' },
    partizip: 'gesucht', hilfsverb: 'haben',
  },
  {
    infinitive: 'kochen', fr: 'cuisiner', stem: 'koch',
    conjugations: { ich: 'koche', du: 'kochst', er: 'kocht', wir: 'kochen', ihr: 'kocht', sie: 'kochen' },
    praeteritum:  { ich: 'kochte', du: 'kochtest', er: 'kochte', wir: 'kochten', ihr: 'kochtet', sie: 'kochten' },
    partizip: 'gekocht', hilfsverb: 'haben',
  },
  {
    infinitive: 'tanzen', fr: 'danser', stem: 'tanz',
    conjugations: { ich: 'tanze', du: 'tanzt', er: 'tanzt', wir: 'tanzen', ihr: 'tanzt', sie: 'tanzen' },
    praeteritum:  { ich: 'tanzte', du: 'tanztest', er: 'tanzte', wir: 'tanzten', ihr: 'tanztet', sie: 'tanzten' },
    partizip: 'getanzt', hilfsverb: 'haben',
  },
  {
    infinitive: 'reisen', fr: 'voyager', stem: 'reis',
    conjugations: { ich: 'reise', du: 'reist', er: 'reist', wir: 'reisen', ihr: 'reist', sie: 'reisen' },
    praeteritum:  { ich: 'reiste', du: 'reistest', er: 'reiste', wir: 'reisten', ihr: 'reistet', sie: 'reisten' },
    partizip: 'gereist', hilfsverb: 'sein',
  },
  {
    infinitive: 'warten', fr: 'attendre', stem: 'wart',
    conjugations: { ich: 'warte', du: 'wartest', er: 'wartet', wir: 'warten', ihr: 'wartet', sie: 'warten' },
    praeteritum:  { ich: 'wartete', du: 'wartetest', er: 'wartete', wir: 'warteten', ihr: 'wartetet', sie: 'warteten' },
    partizip: 'gewartet', hilfsverb: 'haben',
    note: 'Radical en "-t" → insertion d\'un "-e-"',
  },
  {
    infinitive: 'lieben', fr: 'aimer', stem: 'lieb',
    conjugations: { ich: 'liebe', du: 'liebst', er: 'liebt', wir: 'lieben', ihr: 'liebt', sie: 'lieben' },
    praeteritum:  { ich: 'liebte', du: 'liebtest', er: 'liebte', wir: 'liebten', ihr: 'liebtet', sie: 'liebten' },
    partizip: 'geliebt', hilfsverb: 'haben',
  },
  {
    infinitive: 'glauben', fr: 'croire', stem: 'glaub',
    conjugations: { ich: 'glaube', du: 'glaubst', er: 'glaubt', wir: 'glauben', ihr: 'glaubt', sie: 'glauben' },
    praeteritum:  { ich: 'glaubte', du: 'glaubtest', er: 'glaubte', wir: 'glaubten', ihr: 'glaubtet', sie: 'glaubten' },
    partizip: 'geglaubt', hilfsverb: 'haben',
  },
  {
    infinitive: 'brauchen', fr: 'avoir besoin de', stem: 'brauch',
    conjugations: { ich: 'brauche', du: 'brauchst', er: 'braucht', wir: 'brauchen', ihr: 'braucht', sie: 'brauchen' },
    praeteritum:  { ich: 'brauchte', du: 'brauchtest', er: 'brauchte', wir: 'brauchten', ihr: 'brauchtet', sie: 'brauchten' },
    partizip: 'gebraucht', hilfsverb: 'haben',
  },
  {
    infinitive: 'leben', fr: 'vivre', stem: 'leb',
    conjugations: { ich: 'lebe', du: 'lebst', er: 'lebt', wir: 'leben', ihr: 'lebt', sie: 'leben' },
    praeteritum:  { ich: 'lebte', du: 'lebtest', er: 'lebte', wir: 'lebten', ihr: 'lebtet', sie: 'lebten' },
    partizip: 'gelebt', hilfsverb: 'haben',
  },
];

// ── Verbes irréguliers (Starke Verben) ──────────────────────
const IRREGULAR_VERBS = [
  {
    infinitive: 'sprechen', fr: 'parler', pattern: 'e → i',
    conjugations: { ich: 'spreche', du: 'sprichst', er: 'spricht', wir: 'sprechen', ihr: 'sprecht', sie: 'sprechen' },
    praeteritum:  { ich: 'sprach', du: 'sprachst', er: 'sprach', wir: 'sprachen', ihr: 'spracht', sie: 'sprachen' },
    partizip: 'gesprochen', hilfsverb: 'haben',
    note: 'e → i aux 2e/3e pers. sing. ; Prät. : sprach',
  },
  {
    infinitive: 'sehen', fr: 'voir', pattern: 'e → ie',
    conjugations: { ich: 'sehe', du: 'siehst', er: 'sieht', wir: 'sehen', ihr: 'seht', sie: 'sehen' },
    praeteritum:  { ich: 'sah', du: 'sahst', er: 'sah', wir: 'sahen', ihr: 'saht', sie: 'sahen' },
    partizip: 'gesehen', hilfsverb: 'haben',
    note: 'e → ie aux 2e/3e pers. sing. ; Prät. : sah',
  },
  {
    infinitive: 'lesen', fr: 'lire', pattern: 'e → ie',
    conjugations: { ich: 'lese', du: 'liest', er: 'liest', wir: 'lesen', ihr: 'lest', sie: 'lesen' },
    praeteritum:  { ich: 'las', du: 'last', er: 'las', wir: 'lasen', ihr: 'last', sie: 'lasen' },
    partizip: 'gelesen', hilfsverb: 'haben',
    note: 'e → ie aux 2e/3e pers. sing. ; Prät. : las',
  },
  {
    infinitive: 'essen', fr: 'manger', pattern: 'e → i',
    conjugations: { ich: 'esse', du: 'isst', er: 'isst', wir: 'essen', ihr: 'esst', sie: 'essen' },
    praeteritum:  { ich: 'aß', du: 'aßt', er: 'aß', wir: 'aßen', ihr: 'aßt', sie: 'aßen' },
    partizip: 'gegessen', hilfsverb: 'haben',
    note: 'e → i aux 2e/3e pers. sing. ; Prät. : aß',
  },
  {
    infinitive: 'fahren', fr: 'conduire / aller en véhicule', pattern: 'a → ä',
    conjugations: { ich: 'fahre', du: 'fährst', er: 'fährt', wir: 'fahren', ihr: 'fahrt', sie: 'fahren' },
    praeteritum:  { ich: 'fuhr', du: 'fuhrst', er: 'fuhr', wir: 'fuhren', ihr: 'fuhrt', sie: 'fuhren' },
    partizip: 'gefahren', hilfsverb: 'sein',
    note: 'a → ä (Umlaut) aux 2e/3e pers. sing. ; Prät. : fuhr ; Hilfsverb : sein',
  },
  {
    infinitive: 'schlafen', fr: 'dormir', pattern: 'a → ä',
    conjugations: { ich: 'schlafe', du: 'schläfst', er: 'schläft', wir: 'schlafen', ihr: 'schlaft', sie: 'schlafen' },
    praeteritum:  { ich: 'schlief', du: 'schliefst', er: 'schlief', wir: 'schliefen', ihr: 'schlieft', sie: 'schliefen' },
    partizip: 'geschlafen', hilfsverb: 'haben',
    note: 'a → ä (Umlaut) aux 2e/3e pers. sing. ; Prät. : schlief',
  },
  {
    infinitive: 'treffen', fr: 'rencontrer', pattern: 'e → i',
    conjugations: { ich: 'treffe', du: 'triffst', er: 'trifft', wir: 'treffen', ihr: 'trefft', sie: 'treffen' },
    praeteritum:  { ich: 'traf', du: 'trafst', er: 'traf', wir: 'trafen', ihr: 'traft', sie: 'trafen' },
    partizip: 'getroffen', hilfsverb: 'haben',
    note: 'e → i + doublement du f aux 2e/3e pers. sing. ; Prät. : traf',
  },
  {
    infinitive: 'helfen', fr: 'aider', pattern: 'e → i',
    conjugations: { ich: 'helfe', du: 'hilfst', er: 'hilft', wir: 'helfen', ihr: 'helft', sie: 'helfen' },
    praeteritum:  { ich: 'half', du: 'halfst', er: 'half', wir: 'halfen', ihr: 'halft', sie: 'halfen' },
    partizip: 'geholfen', hilfsverb: 'haben',
    note: 'e → i aux 2e/3e pers. sing. ; Prät. : half',
  },
  {
    infinitive: 'nehmen', fr: 'prendre', pattern: 'e → i',
    conjugations: { ich: 'nehme', du: 'nimmst', er: 'nimmt', wir: 'nehmen', ihr: 'nehmt', sie: 'nehmen' },
    praeteritum:  { ich: 'nahm', du: 'nahmst', er: 'nahm', wir: 'nahmen', ihr: 'nahmt', sie: 'nahmen' },
    partizip: 'genommen', hilfsverb: 'haben',
    note: 'e → i + doublement du m aux 2e/3e pers. sing. ; Prät. : nahm',
  },
  {
    infinitive: 'laufen', fr: 'courir', pattern: 'au → äu',
    conjugations: { ich: 'laufe', du: 'läufst', er: 'läuft', wir: 'laufen', ihr: 'lauft', sie: 'laufen' },
    praeteritum:  { ich: 'lief', du: 'liefst', er: 'lief', wir: 'liefen', ihr: 'lieft', sie: 'liefen' },
    partizip: 'gelaufen', hilfsverb: 'sein',
    note: 'au → äu (Umlaut) aux 2e/3e pers. sing. ; Prät. : lief ; Hilfsverb : sein',
  },
  {
    infinitive: 'gehen', fr: 'aller (à pied)', pattern: 'irrégulier',
    conjugations: { ich: 'gehe', du: 'gehst', er: 'geht', wir: 'gehen', ihr: 'geht', sie: 'gehen' },
    praeteritum:  { ich: 'ging', du: 'gingst', er: 'ging', wir: 'gingen', ihr: 'gingt', sie: 'gingen' },
    partizip: 'gegangen', hilfsverb: 'sein',
    note: 'Prät. : ging ; Hilfsverb : sein',
  },
  {
    infinitive: 'kommen', fr: 'venir', pattern: 'irrégulier',
    conjugations: { ich: 'komme', du: 'kommst', er: 'kommt', wir: 'kommen', ihr: 'kommt', sie: 'kommen' },
    praeteritum:  { ich: 'kam', du: 'kamst', er: 'kam', wir: 'kamen', ihr: 'kamt', sie: 'kamen' },
    partizip: 'gekommen', hilfsverb: 'sein',
    note: 'Prät. : kam ; Hilfsverb : sein',
  },
  {
    infinitive: 'schreiben', fr: 'écrire', pattern: 'ei → ie',
    conjugations: { ich: 'schreibe', du: 'schreibst', er: 'schreibt', wir: 'schreiben', ihr: 'schreibt', sie: 'schreiben' },
    praeteritum:  { ich: 'schrieb', du: 'schriebst', er: 'schrieb', wir: 'schrieben', ihr: 'schriebt', sie: 'schrieben' },
    partizip: 'geschrieben', hilfsverb: 'haben',
    note: 'Prät. : schrieb',
  },
  {
    infinitive: 'trinken', fr: 'boire', pattern: 'i → a → u',
    conjugations: { ich: 'trinke', du: 'trinkst', er: 'trinkt', wir: 'trinken', ihr: 'trinkt', sie: 'trinken' },
    praeteritum:  { ich: 'trank', du: 'trankst', er: 'trank', wir: 'tranken', ihr: 'trankt', sie: 'tranken' },
    partizip: 'getrunken', hilfsverb: 'haben',
    note: 'Prät. : trank',
  },
  {
    infinitive: 'finden', fr: 'trouver', pattern: 'i → a → u',
    conjugations: { ich: 'finde', du: 'findest', er: 'findet', wir: 'finden', ihr: 'findet', sie: 'finden' },
    praeteritum:  { ich: 'fand', du: 'fandst', er: 'fand', wir: 'fanden', ihr: 'fandet', sie: 'fanden' },
    partizip: 'gefunden', hilfsverb: 'haben',
    note: 'Prät. : fand',
  },
  {
    infinitive: 'bringen', fr: 'apporter', pattern: 'irrégulier mixte',
    conjugations: { ich: 'bringe', du: 'bringst', er: 'bringt', wir: 'bringen', ihr: 'bringt', sie: 'bringen' },
    praeteritum:  { ich: 'brachte', du: 'brachtest', er: 'brachte', wir: 'brachten', ihr: 'brachtet', sie: 'brachten' },
    partizip: 'gebracht', hilfsverb: 'haben',
    note: 'Verbe mixte — Prät. : brachte (forme faible mais radical fort)',
  },
  {
    infinitive: 'denken', fr: 'penser', pattern: 'irrégulier mixte',
    conjugations: { ich: 'denke', du: 'denkst', er: 'denkt', wir: 'denken', ihr: 'denkt', sie: 'denken' },
    praeteritum:  { ich: 'dachte', du: 'dachtest', er: 'dachte', wir: 'dachten', ihr: 'dachtet', sie: 'dachten' },
    partizip: 'gedacht', hilfsverb: 'haben',
    note: 'Verbe mixte — Prät. : dachte',
  },
  {
    infinitive: 'wissen', fr: 'savoir', pattern: 'irrégulier',
    conjugations: { ich: 'weiß', du: 'weißt', er: 'weiß', wir: 'wissen', ihr: 'wisst', sie: 'wissen' },
    praeteritum:  { ich: 'wusste', du: 'wusstest', er: 'wusste', wir: 'wussten', ihr: 'wusstet', sie: 'wussten' },
    partizip: 'gewusst', hilfsverb: 'haben',
    note: 'Ich/er weiss (comme les modaux) ; Prät. : wusste',
  },
  {
    infinitive: 'geben', fr: 'donner', pattern: 'e → i',
    conjugations: { ich: 'gebe', du: 'gibst', er: 'gibt', wir: 'geben', ihr: 'gebt', sie: 'geben' },
    praeteritum:  { ich: 'gab', du: 'gabst', er: 'gab', wir: 'gaben', ihr: 'gabt', sie: 'gaben' },
    partizip: 'gegeben', hilfsverb: 'haben',
    note: 'e → i aux 2e/3e pers. sing. ; Prät. : gab',
  },
  {
    infinitive: 'stehen', fr: 'se tenir debout', pattern: 'irrégulier',
    conjugations: { ich: 'stehe', du: 'stehst', er: 'steht', wir: 'stehen', ihr: 'steht', sie: 'stehen' },
    praeteritum:  { ich: 'stand', du: 'standst', er: 'stand', wir: 'standen', ihr: 'standet', sie: 'standen' },
    partizip: 'gestanden', hilfsverb: 'haben',
    note: 'Prät. : stand',
  },
  {
    infinitive: 'liegen', fr: 'être couché / se trouver', pattern: 'ie → a',
    conjugations: { ich: 'liege', du: 'liegst', er: 'liegt', wir: 'liegen', ihr: 'liegt', sie: 'liegen' },
    praeteritum:  { ich: 'lag', du: 'lagst', er: 'lag', wir: 'lagen', ihr: 'lagt', sie: 'lagen' },
    partizip: 'gelegen', hilfsverb: 'haben',
    note: 'Prät. : lag',
  },
  {
    infinitive: 'steigen', fr: 'monter / grimper', pattern: 'ei → ie',
    conjugations: { ich: 'steige', du: 'steigst', er: 'steigt', wir: 'steigen', ihr: 'steigt', sie: 'steigen' },
    praeteritum:  { ich: 'stieg', du: 'stiegst', er: 'stieg', wir: 'stiegen', ihr: 'stiegt', sie: 'stiegen' },
    partizip: 'gestiegen', hilfsverb: 'sein',
    note: 'Prät. : stieg ; Hilfsverb : sein',
  },
  {
    infinitive: 'bleiben', fr: 'rester', pattern: 'ei → ie',
    conjugations: { ich: 'bleibe', du: 'bleibst', er: 'bleibt', wir: 'bleiben', ihr: 'bleibt', sie: 'bleiben' },
    praeteritum:  { ich: 'blieb', du: 'bliebst', er: 'blieb', wir: 'blieben', ihr: 'bliebt', sie: 'blieben' },
    partizip: 'geblieben', hilfsverb: 'sein',
    note: 'Prät. : blieb ; Hilfsverb : sein',
  },
  {
    infinitive: 'fallen', fr: 'tomber', pattern: 'a → ä',
    conjugations: { ich: 'falle', du: 'fällst', er: 'fällt', wir: 'fallen', ihr: 'fallt', sie: 'fallen' },
    praeteritum:  { ich: 'fiel', du: 'fielst', er: 'fiel', wir: 'fielen', ihr: 'fielt', sie: 'fielen' },
    partizip: 'gefallen', hilfsverb: 'sein',
    note: 'a → ä aux 2e/3e pers. sing. ; Prät. : fiel ; Hilfsverb : sein',
  },
  {
    infinitive: 'halten', fr: 'tenir / s\'arrêter', pattern: 'a → ä',
    conjugations: { ich: 'halte', du: 'hältst', er: 'hält', wir: 'halten', ihr: 'haltet', sie: 'halten' },
    praeteritum:  { ich: 'hielt', du: 'hieltest', er: 'hielt', wir: 'hielten', ihr: 'hieltet', sie: 'hielten' },
    partizip: 'gehalten', hilfsverb: 'haben',
    note: 'a → ä aux 2e/3e pers. sing. ; Prät. : hielt',
  },
  {
    infinitive: 'lassen', fr: 'laisser / faire faire', pattern: 'a → ä',
    conjugations: { ich: 'lasse', du: 'lässt', er: 'lässt', wir: 'lassen', ihr: 'lasst', sie: 'lassen' },
    praeteritum:  { ich: 'ließ', du: 'ließt', er: 'ließ', wir: 'ließen', ihr: 'ließt', sie: 'ließen' },
    partizip: 'gelassen', hilfsverb: 'haben',
    note: 'a → ä aux 2e/3e pers. sing. ; Prät. : ließ',
  },
  {
    infinitive: 'rufen', fr: 'appeler / crier', pattern: 'u → ie',
    conjugations: { ich: 'rufe', du: 'rufst', er: 'ruft', wir: 'rufen', ihr: 'ruft', sie: 'rufen' },
    praeteritum:  { ich: 'rief', du: 'riefst', er: 'rief', wir: 'riefen', ihr: 'rieft', sie: 'riefen' },
    partizip: 'gerufen', hilfsverb: 'haben',
    note: 'Prät. : rief',
  },
];

// ── Verbes modaux ────────────────────────────────────────────
const MODAL_VERBS = [
  {
    infinitive: 'können', fr: 'pouvoir', pattern: 'modal',
    conjugations: { ich: 'kann', du: 'kannst', er: 'kann', wir: 'können', ihr: 'könnt', sie: 'können' },
    praeteritum:  { ich: 'konnte', du: 'konntest', er: 'konnte', wir: 'konnten', ihr: 'konntet', sie: 'konnten' },
    partizip: 'gekonnt', hilfsverb: 'haben',
    note: 'Modal : ich/er können → ich/er kann (pas de terminaison à la 1re/3e pers. sing.)',
  },
  {
    infinitive: 'müssen', fr: 'devoir (obligation)', pattern: 'modal',
    conjugations: { ich: 'muss', du: 'musst', er: 'muss', wir: 'müssen', ihr: 'müsst', sie: 'müssen' },
    praeteritum:  { ich: 'musste', du: 'musstest', er: 'musste', wir: 'mussten', ihr: 'musstet', sie: 'mussten' },
    partizip: 'gemusst', hilfsverb: 'haben',
    note: 'Modal : ich/er muss (pas de terminaison à la 1re/3e pers. sing.)',
  },
  {
    infinitive: 'wollen', fr: 'vouloir', pattern: 'modal',
    conjugations: { ich: 'will', du: 'willst', er: 'will', wir: 'wollen', ihr: 'wollt', sie: 'wollen' },
    praeteritum:  { ich: 'wollte', du: 'wolltest', er: 'wollte', wir: 'wollten', ihr: 'wolltet', sie: 'wollten' },
    partizip: 'gewollt', hilfsverb: 'haben',
    note: 'Modal : ich/er will (pas de terminaison à la 1re/3e pers. sing.)',
  },
  {
    infinitive: 'dürfen', fr: 'avoir le droit de', pattern: 'modal',
    conjugations: { ich: 'darf', du: 'darfst', er: 'darf', wir: 'dürfen', ihr: 'dürft', sie: 'dürfen' },
    praeteritum:  { ich: 'durfte', du: 'durftest', er: 'durfte', wir: 'durften', ihr: 'durftet', sie: 'durften' },
    partizip: 'gedurft', hilfsverb: 'haben',
    note: 'Modal : ich/er darf (pas de terminaison à la 1re/3e pers. sing.)',
  },
  {
    infinitive: 'sollen', fr: 'devoir (ordre/obligation morale)', pattern: 'modal',
    conjugations: { ich: 'soll', du: 'sollst', er: 'soll', wir: 'sollen', ihr: 'sollt', sie: 'sollen' },
    praeteritum:  { ich: 'sollte', du: 'solltest', er: 'sollte', wir: 'sollten', ihr: 'solltet', sie: 'sollten' },
    partizip: 'gesollt', hilfsverb: 'haben',
    note: 'Modal : ich/er soll (pas de terminaison à la 1re/3e pers. sing.)',
  },
  {
    infinitive: 'mögen', fr: 'aimer / apprécier', pattern: 'modal',
    conjugations: { ich: 'mag', du: 'magst', er: 'mag', wir: 'mögen', ihr: 'mögt', sie: 'mögen' },
    praeteritum:  { ich: 'mochte', du: 'mochtest', er: 'mochte', wir: 'mochten', ihr: 'mochtet', sie: 'mochten' },
    partizip: 'gemocht', hilfsverb: 'haben',
    note: 'Modal : ich/er mag (pas de terminaison à la 1re/3e pers. sing.)',
  },
];

// ── Verbes auxiliaires ───────────────────────────────────────
const AUX_VERBS = [
  {
    infinitive: 'sein', fr: 'être', pattern: 'auxiliaire',
    conjugations: { ich: 'bin', du: 'bist', er: 'ist', wir: 'sind', ihr: 'seid', sie: 'sind' },
    praeteritum:  { ich: 'war', du: 'warst', er: 'war', wir: 'waren', ihr: 'wart', sie: 'waren' },
    partizip: 'gewesen', hilfsverb: 'sein',
    note: 'Verbe très irrégulier. Prät. : war',
  },
  {
    infinitive: 'haben', fr: 'avoir', pattern: 'auxiliaire',
    conjugations: { ich: 'habe', du: 'hast', er: 'hat', wir: 'haben', ihr: 'habt', sie: 'haben' },
    praeteritum:  { ich: 'hatte', du: 'hattest', er: 'hatte', wir: 'hatten', ihr: 'hattet', sie: 'hatten' },
    partizip: 'gehabt', hilfsverb: 'haben',
    note: 'Verbe irrégulier. Prät. : hatte',
  },
  {
    infinitive: 'werden', fr: 'devenir / (auxiliaire futur)', pattern: 'auxiliaire',
    conjugations: { ich: 'werde', du: 'wirst', er: 'wird', wir: 'werden', ihr: 'werdet', sie: 'werden' },
    praeteritum:  { ich: 'wurde', du: 'wurdest', er: 'wurde', wir: 'wurden', ihr: 'wurdet', sie: 'wurden' },
    partizip: 'geworden', hilfsverb: 'sein',
    note: 'e → i aux 2e/3e pers. sing. ; Prät. : wurde ; Hilfsverb au Perfekt : sein',
  },
];

const SUBJECTS = [
  { pronoun: 'ich', fr: 'je',        person: '1re pers. sing.' },
  { pronoun: 'du',  fr: 'tu',        person: '2e pers. sing.' },
  { pronoun: 'er',  fr: 'il',        person: '3e pers. sing.' },
  { pronoun: 'wir', fr: 'nous',      person: '1re pers. plur.' },
  { pronoun: 'ihr', fr: 'vous',      person: '2e pers. plur.' },
  { pronoun: 'sie', fr: 'ils/elles', person: '3e pers. plur.' },
];

// ── Futurs conjugaison (Futur I = werden + infinitif) ────────
const makeFuturConjugations = () => {
  const werden = { ich: 'werde', du: 'wirst', er: 'wird', wir: 'werden', ihr: 'werdet', sie: 'werden' };
  return werden;
};

// ── Helpers ──────────────────────────────────────────────────
const ALL_VERBS = [...REGULAR_VERBS, ...IRREGULAR_VERBS, ...MODAL_VERBS, ...AUX_VERBS];

const pickVerb = (seed, pool) => pool[Math.abs(seed) % pool.length];

const makeOptions = (correct, allForms) => {
  const wrong = [...new Set(allForms)].filter(f => f !== correct);
  const opts  = [correct, ...wrong.slice(0, 3)];
  // Fill with plausible decoys if not enough wrong forms
  while (opts.length < 4) opts.push(correct + (opts.length === 1 ? 'st' : opts.length === 2 ? 't' : 'en'));
  for (let i = opts.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [opts[i], opts[j]] = [opts[j], opts[i]];
  }
  return opts.slice(0, 4);
};

const buildExplanation = (verb, subject, tense, correct, auxForm) => {
  let verbType = 'VERBE RÉGULIER';
  if (IRREGULAR_VERBS.find(v => v.infinitive === verb.infinitive)) verbType = 'VERBE IRRÉGULIER';
  if (MODAL_VERBS.find(v => v.infinitive === verb.infinitive)) verbType = 'VERBE MODAL';
  if (AUX_VERBS.find(v => v.infinitive === verb.infinitive)) verbType = 'AUXILIAIRE';

  let body = `📚 CONJUGAISON — ${tense.toUpperCase()}\n\n`;
  body += `Verbe "${verb.infinitive}" (${verb.fr}) — ${verbType}\n`;
  body += `${subject.fr.toUpperCase()} (${subject.person}) → "${subject.pronoun} ${correct}"\n\n`;

  if (verb.note) body += `📌 ${verb.note}\n\n`;

  if (tense === 'Präsens') {
    const table = Object.entries(verb.conjugations)
      .map(([p, f]) => `  ${p.padEnd(4)} → ${f}`)
      .join('\n');
    body += `📊 PRÄSENS COMPLET :\n${table}`;
  } else if (tense === 'Präteritum') {
    const table = Object.entries(verb.praeteritum)
      .map(([p, f]) => `  ${p.padEnd(4)} → ${f}`)
      .join('\n');
    body += `📊 PRÄTERITUM COMPLET :\n${table}`;
  } else if (tense === 'Perfekt') {
    const aux = verb.hilfsverb;
    const haben = { ich: 'habe', du: 'hast', er: 'hat', wir: 'haben', ihr: 'habt', sie: 'haben' };
    const sein  = { ich: 'bin', du: 'bist', er: 'ist', wir: 'sind', ihr: 'seid', sie: 'sind' };
    const auxConj = aux === 'sein' ? sein : haben;
    const table = Object.entries(auxConj)
      .map(([p, f]) => `  ${p.padEnd(4)} → ${f} ${verb.partizip}`)
      .join('\n');
    body += `⚙️ Structure : [${aux}] + Partizip II → "${verb.partizip}"\n`;
    body += `📊 PERFEKT COMPLET (auxiliaire : ${aux}) :\n${table}`;
  } else if (tense === 'Futur I') {
    const werden = { ich: 'werde', du: 'wirst', er: 'wird', wir: 'werden', ihr: 'werdet', sie: 'werden' };
    const table = Object.entries(werden)
      .map(([p, f]) => `  ${p.padEnd(4)} → ${f} ${verb.infinitive}`)
      .join('\n');
    body += `⚙️ Structure : [werden] + Infinitif → "${verb.infinitive}"\n`;
    body += `📊 FUTUR I COMPLET :\n${table}`;
  }

  return body;
};

// ─── Génération des 250 exercices ────────────────────────────
export const conjugationExercises = [];
let id = 0;

for (let level = 1; level <= 50; level++) {
  for (let exIdx = 0; exIdx < 5; exIdx++) {
    const subject    = SUBJECTS[(level + exIdx * 3) % SUBJECTS.length];
    const seed       = level * 17 + exIdx * 31;

    let verb, tense, isIrregular, correct, options, question, hint, explanation, auxForm;

    // ── Niveaux 1-10 : Präsens réguliers ────────────────────
    if (level <= 10) {
      tense = 'Präsens';
      // Premier tiers : réguliers purs, puis auxiliaires, puis modaux
      const pool = level <= 6 ? REGULAR_VERBS : level <= 8 ? AUX_VERBS : MODAL_VERBS;
      verb = pickVerb(seed, pool);
      isIrregular = !REGULAR_VERBS.find(v => v.infinitive === verb.infinitive);
      correct = verb.conjugations[subject.pronoun];
      const allForms = Object.values(verb.conjugations);
      options = makeOptions(correct, allForms);
      question = `${subject.pronoun} ___ (${verb.infinitive}) — Präsens`;
      hint = `Conjuguez le verbe "${verb.infinitive}" (${verb.fr}) au Présent, à la ${subject.person}.`;
      explanation = buildExplanation(verb, subject, tense, correct);
    }

    // ── Niveaux 11-20 : Präsens irréguliers + modaux ────────
    else if (level <= 20) {
      tense = 'Präsens';
      const useModal = (level + exIdx) % 3 === 0;
      const pool     = useModal ? MODAL_VERBS : IRREGULAR_VERBS;
      verb = pickVerb(seed, pool);
      isIrregular = true;
      correct = verb.conjugations[subject.pronoun];
      const allForms = Object.values(verb.conjugations);
      options = makeOptions(correct, allForms);
      question = `${subject.pronoun} ___ (${verb.infinitive}) — Präsens`;
      hint = `Conjuguez le verbe irrégulier "${verb.infinitive}" (${verb.fr}) au Présent, à la ${subject.person}. ${verb.pattern ? 'Alternance vocalique : ' + verb.pattern : ''}`;
      explanation = buildExplanation(verb, subject, tense, correct);
    }

    // ── Niveaux 21-30 : Präteritum (tous types) ─────────────
    else if (level <= 30) {
      tense = 'Präteritum';
      const pools = [REGULAR_VERBS, IRREGULAR_VERBS, MODAL_VERBS, AUX_VERBS];
      const pool  = pools[((level - 21) * 3 + exIdx) % pools.length];
      verb = pickVerb(seed, pool);
      correct = verb.praeteritum[subject.pronoun];
      const allForms = Object.values(verb.praeteritum);
      options = makeOptions(correct, allForms);
      question = `${subject.pronoun} ___ (${verb.infinitive}) — Präteritum`;
      hint = `Conjuguez le verbe "${verb.infinitive}" (${verb.fr}) au Prétérit (passé narratif), à la ${subject.person}.`;
      explanation = buildExplanation(verb, subject, tense, correct);
    }

    // ── Niveaux 31-40 : Perfekt ──────────────────────────────
    else if (level <= 40) {
      tense = 'Perfekt';
      const pools = [REGULAR_VERBS, IRREGULAR_VERBS, AUX_VERBS, MODAL_VERBS];
      const pool  = pools[((level - 31) * 2 + exIdx) % pools.length];
      verb = pickVerb(seed, pool);
      // For Perfekt : the answer is the auxiliary conjugated
      const haben = { ich: 'habe', du: 'hast', er: 'hat', wir: 'haben', ihr: 'habt', sie: 'haben' };
      const sein  = { ich: 'bin', du: 'bist', er: 'ist', wir: 'sind', ihr: 'seid', sie: 'sind' };
      const auxConj = verb.hilfsverb === 'sein' ? sein : haben;
      correct = `${auxConj[subject.pronoun]} ${verb.partizip}`;
      // Options : correct + 3 wrong aux/partizip combos
      const wrongAux  = verb.hilfsverb === 'sein' ? haben : sein;
      const opt2 = `${wrongAux[subject.pronoun]} ${verb.partizip}`;
      const randomVerb = pickVerb(seed + 1, ALL_VERBS);
      const opt3 = `${auxConj[subject.pronoun]} ${randomVerb.partizip}`;
      const opt4 = `${wrongAux[subject.pronoun]} ${randomVerb.partizip}`;
      options = [correct, opt2, opt3, opt4];
      for (let i = options.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [options[i], options[j]] = [options[j], options[i]];
      }
      question = `${subject.pronoun} ___ (${verb.infinitive}) — Perfekt`;
      hint = `Conjuguez le verbe "${verb.infinitive}" (${verb.fr}) au Parfait (Perfekt), à la ${subject.person}. Auxiliaire : ${verb.hilfsverb}. Partizip II : ${verb.partizip}.`;
      explanation = buildExplanation(verb, subject, tense, correct);
    }

    // ── Niveaux 41-50 : Futur I + mélange de tous les temps ─
    else {
      const tenses = ['Präsens', 'Präteritum', 'Perfekt', 'Futur I'];
      tense = tenses[(level + exIdx) % tenses.length];
      const pools = [REGULAR_VERBS, IRREGULAR_VERBS, MODAL_VERBS, AUX_VERBS];
      const pool  = pools[(level + exIdx * 5) % pools.length];
      verb = pickVerb(seed, pool);

      if (tense === 'Futur I') {
        const werden = { ich: 'werde', du: 'wirst', er: 'wird', wir: 'werden', ihr: 'werdet', sie: 'werden' };
        correct = `${werden[subject.pronoun]} ${verb.infinitive}`;
        const wrongSubj = SUBJECTS[(level + exIdx + 2) % SUBJECTS.length];
        const opt2 = `${werden[wrongSubj.pronoun]} ${verb.infinitive}`;
        const randomVerb = pickVerb(seed + 3, ALL_VERBS);
        const opt3 = `${werden[subject.pronoun]} ${randomVerb.infinitive}`;
        const opt4 = `${werden[wrongSubj.pronoun]} ${randomVerb.infinitive}`;
        options = [correct, opt2, opt3, opt4];
        for (let i = options.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [options[i], options[j]] = [options[j], options[i]];
        }
        question = `${subject.pronoun} ___ (${verb.infinitive}) — Futur I`;
        hint = `Conjuguez le verbe "${verb.infinitive}" (${verb.fr}) au Futur I (werden + infinitif), à la ${subject.person}.`;
        explanation = buildExplanation(verb, subject, tense, correct);
      } else if (tense === 'Präsens') {
        correct = verb.conjugations[subject.pronoun];
        options = makeOptions(correct, Object.values(verb.conjugations));
        question = `${subject.pronoun} ___ (${verb.infinitive}) — Präsens`;
        hint = `Conjuguez le verbe "${verb.infinitive}" (${verb.fr}) au Présent, à la ${subject.person}.`;
        explanation = buildExplanation(verb, subject, tense, correct);
      } else if (tense === 'Präteritum') {
        correct = verb.praeteritum[subject.pronoun];
        options = makeOptions(correct, Object.values(verb.praeteritum));
        question = `${subject.pronoun} ___ (${verb.infinitive}) — Präteritum`;
        hint = `Conjuguez le verbe "${verb.infinitive}" (${verb.fr}) au Prétérit, à la ${subject.person}.`;
        explanation = buildExplanation(verb, subject, tense, correct);
      } else { // Perfekt
        const haben = { ich: 'habe', du: 'hast', er: 'hat', wir: 'haben', ihr: 'habt', sie: 'haben' };
        const sein  = { ich: 'bin', du: 'bist', er: 'ist', wir: 'sind', ihr: 'seid', sie: 'sind' };
        const auxConj = verb.hilfsverb === 'sein' ? sein : haben;
        correct = `${auxConj[subject.pronoun]} ${verb.partizip}`;
        const wrongAux = verb.hilfsverb === 'sein' ? haben : sein;
        const rv = pickVerb(seed + 7, ALL_VERBS);
        options = [correct, `${wrongAux[subject.pronoun]} ${verb.partizip}`, `${auxConj[subject.pronoun]} ${rv.partizip}`, `${wrongAux[subject.pronoun]} ${rv.partizip}`];
        for (let i = options.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [options[i], options[j]] = [options[j], options[i]];
        }
        question = `${subject.pronoun} ___ (${verb.infinitive}) — Perfekt`;
        hint = `Conjuguez le verbe "${verb.infinitive}" (${verb.fr}) au Parfait, à la ${subject.person}. Aux. : ${verb.hilfsverb}, Partizip II : ${verb.partizip}.`;
        explanation = buildExplanation(verb, subject, tense, correct);
      }
    }

    conjugationExercises.push({
      id: id++,
      type: 'conjugation',
      level,
      tense,
      difficulty: Math.min(Math.floor((level - 1) / 10) + 1, 5),
      question,
      hint,
      options,
      correctAnswer: correct,
      explanation,
      subject: subject.pronoun,
      verb: verb.infinitive,
      verbFr: verb.fr,
      regular: !!REGULAR_VERBS.find(v => v.infinitive === verb.infinitive),
    });
  }
}

console.log(`✅ ConjugationExercises: ${conjugationExercises.length} exercices générés.`);
console.log(`   Niveaux 1-10  : Präsens — réguliers, auxiliaires, modaux`);
console.log(`   Niveaux 11-20 : Präsens — irréguliers + modaux`);
console.log(`   Niveaux 21-30 : Präteritum (tous verbes)`);
console.log(`   Niveaux 31-40 : Perfekt (auxiliaire + Partizip II)`);
console.log(`   Niveaux 41-50 : Futur I + révision tous les temps`);