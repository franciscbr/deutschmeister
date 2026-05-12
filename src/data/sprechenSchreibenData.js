// =============================================================================
// DONNÉES SPRECHEN & SCHREIBEN — B1 ÖSD
// Tous les sujets avec correction complète, phrases-clés et vocabulaire
// =============================================================================

// ================================ SPRECHEN ===================================
export const SPRECHEN_TOPICS = [

  // ── GEMEINSAM PLANEN (7 sujets) ───────────────────────────────────────────
  {
    id: 's_plan1', cat: 'planen',
    title: 'Besuch bei Freund im Krankenhaus',
    sub: 'Gemeinsamen Besuch planen',
    situation: 'Ihr gemeinsamer Freund Haris liegt seit drei Tagen im Krankenhaus. Sie haben ihn noch nicht besucht und möchten mit Ihrem Gesprächspartner alles gemeinsam organisieren.',
    directions: [
      'Wann besuchen wir ihn? (Tag und Uhrzeit festlegen)',
      'Womit fahren wir dorthin? (Auto, Bus, Straßenbahn)',
      'Was kaufen wir ihm mit? (Obst, Zeitschriften, Blumen, Buch)',
      'Sollen wir danach seine Wohnung aufräumen oder einkaufen?',
      'Wie lange bleiben wir im Krankenhaus?'
    ],
    tips: 'Nützliche Ausdrücke: "Hast du schon gehört, dass...?", "Wann passt es dir?", "Ich schlage vor, dass wir...", "Wir könnten... kaufen.", "Sollen wir...?"',
    correction: {
      sample: `A: Hast du schon gehört, dass Haris im Krankenhaus liegt?
B: Ja, das ist schrecklich! Ich möchte ihn so bald wie möglich besuchen.
A: Wann passt es dir am besten? Am Samstag um 14 Uhr vielleicht?
B: Samstag passt mir gut. Womit fahren wir dorthin?
A: Ich schlage vor, mit meinem Auto zu fahren, dann ist es einfacher.
B: Einverstanden. Was kaufen wir ihm mit?
A: Wir könnten ihm Obst, Zeitschriften und vielleicht ein Buch kaufen.
B: Gute Idee. Sollen wir danach auch seine Wohnung aufräumen?
A: Ja, das wäre sehr nett von uns. Er wird sich sicher sehr freuen.`,
      keyphrases: [
        { de: 'Wann passt es dir?', fr: 'Quand est-ce que ça te convient ?' },
        { de: 'Ich schlage vor, dass wir...', fr: 'Je propose que nous...' },
        { de: 'Wir könnten... kaufen.', fr: 'Nous pourrions acheter...' },
        { de: 'Einverstanden.', fr: 'D\'accord.' },
        { de: 'Das wäre sehr nett von uns.', fr: 'Ce serait très gentil de notre part.' },
        { de: 'Er wird sich sicher sehr freuen.', fr: 'Il sera sûrement très content.' }
      ],
      vocab: ['besuchen', 'die Zeitschrift (-en)', 'aufräumen', 'der Saft', 'sich kümmern um', 'einverstanden sein']
    }
  },
  {
    id: 's_plan2', cat: 'planen',
    title: 'Abschiedsparty für die Lehrerin',
    sub: 'Abschlussparty des Deutschkurses',
    situation: 'Ihr Deutschkurs endet in zwei Wochen. Ihre Lehrerin hat sehr gut unterrichtet und kehrt danach in ihre Heimatstadt zurück. Sie möchten mit Ihrem Gesprächspartner eine schöne Abschiedsparty organisieren.',
    directions: [
      'Wo und wann soll die Party stattfinden?',
      'Wie laden wir alle ein? (WhatsApp-Gruppe, E-Mail, Aushang)',
      'Was essen und trinken wir? Wer bringt was mit?',
      'Welches Abschiedsgeschenk kaufen wir? Wie sammeln wir das Geld?',
      'Wer kümmert sich um die Dekoration?'
    ],
    tips: '"Wir könnten die Party im Kursraum machen.", "Ich schlage vor, eine WhatsApp-Gruppe zu erstellen.", "Sammeln wir 5 Euro pro Person für das Geschenk."',
    correction: {
      sample: `A: Unsere Lehrerin geht bald. Wir sollten unbedingt eine Abschiedsparty organisieren!
B: Absolut! Wann und wo soll die Party stattfinden?
A: Ich schlage vor, am letzten Kurstag, also am Freitag um 17 Uhr, im Kursraum zu feiern.
B: Das ist eine gute Idee. Wie laden wir alle ein?
A: Wir erstellen einfach eine WhatsApp-Gruppe für alle Kursteilnehmer.
B: Und was machen wir mit dem Essen und Trinken?
A: Jeder bringt etwas mit: einen Kuchen, Salate oder Getränke.
B: Super! Und das Geschenk?
A: Wir sammeln 5 Euro pro Person. Dann kaufen wir ihr einen Gutschein und Blumen.
B: Ich kümmere mich gern um die Dekoration. Das macht mir Spaß!`,
      keyphrases: [
        { de: 'Ich schlage vor, am... zu feiern.', fr: 'Je propose de fêter le...' },
        { de: 'Wir erstellen eine WhatsApp-Gruppe.', fr: 'Nous créons un groupe WhatsApp.' },
        { de: 'Jeder bringt etwas mit.', fr: 'Chacun apporte quelque chose.' },
        { de: 'Wir sammeln 5 Euro pro Person.', fr: 'Nous collectons 5 euros par personne.' },
        { de: 'Ich kümmere mich gern um...', fr: 'Je m\'occupe volontiers de...' }
      ],
      vocab: ['die Abschiedsparty', 'der Gutschein (-e)', 'sammeln', 'einladen', 'die Dekoration', 'der Kursteilnehmer']
    }
  },
  {
    id: 's_plan3', cat: 'planen',
    title: 'Kennenlernparty mit Nachbarn',
    sub: 'Neue Nachbarn kennenlernen',
    situation: 'Sie wohnen seit einem Jahr in einem großen Hochhaus, kennen aber kaum jemanden. Sie möchten mit Ihrem Gesprächspartner eine Party organisieren, um alle Nachbarn besser kennenzulernen.',
    directions: [
      'Wo und wann soll die Party stattfinden? (Gemeinschaftsraum, Samstag)',
      'Wie informieren Sie alle Nachbarn? (Zettel, Aushang)',
      'Was gibt es zu essen und zu trinken?',
      'Welche Unterhaltung planen Sie? (Musik, Spiele)',
      'Wer hilft bei der Vorbereitung und beim Aufräumen?'
    ],
    tips: '"Jeder kann etwas mitbringen.", "Ich hänge einen Zettel im Treppenhaus auf.", "So lernen wir uns alle besser kennen."',
    correction: {
      sample: `A: Ich kenne fast niemanden hier im Haus. Wir sollten eine Kennenlernparty machen!
B: Das ist eine tolle Idee! Wo könnten wir sie organisieren?
A: Im Gemeinschaftsraum im Erdgeschoss. Der ist groß genug.
B: Gut. Und wann? Am Samstag um 19 Uhr?
A: Perfekt. Wie informieren wir die Nachbarn?
B: Ich schreibe einen Zettel und hänge ihn im Treppenhaus auf.
A: Super! Was gibt es zu essen?
B: Jeder Nachbar kann etwas mitbringen – einen Salat, einen Kuchen oder Getränke.
A: Wunderbar! Sollen wir auch Musik machen?
B: Ja, aber nicht zu laut, damit die anderen Nachbarn nicht gestört werden.`,
      keyphrases: [
        { de: 'Der ist groß genug.', fr: 'Il est suffisamment grand.' },
        { de: 'Ich schreibe einen Zettel und hänge ihn auf.', fr: 'J\'écris une note et je l\'affiche.' },
        { de: 'Jeder Nachbar kann etwas mitbringen.', fr: 'Chaque voisin peut apporter quelque chose.' },
        { de: 'nicht zu laut, damit... nicht gestört werden', fr: 'pas trop fort, pour que... ne soient pas dérangés' }
      ],
      vocab: ['der Nachbar', 'der Gemeinschaftsraum', 'der Zettel', 'aufhängen', 'mitbringen', 'kennenlernen']
    }
  },
  {
    id: 's_plan4', cat: 'planen',
    title: 'Gemeinsames Kochevent',
    sub: 'Internationales Abendessen mit Freunden',
    situation: 'Sie und Ihr Gesprächspartner haben gemeinsame Freunde aus verschiedenen Ländern. Sie möchten ein besonderes Abendessen mit internationalen Gerichten organisieren.',
    directions: [
      'Was möchten Sie kochen? (jeder bringt ein Gericht aus seiner Heimat)',
      'Wo und wann findet das Event statt?',
      'Wo kaufen Sie die Zutaten ein? (Supermarkt, Markt)',
      'Wer macht was? (Salat, Hauptgericht, Dessert, Tisch decken)',
      'Wie laden Sie die Freunde ein?'
    ],
    tips: '"Ich kümmere mich um den Salat.", "Du machst das Hauptgericht?", "Wir können die Zutaten gemeinsam einkaufen."',
    correction: {
      sample: `A: Ich habe eine Idee: Lass uns ein internationales Abendessen organisieren!
B: Oh ja! Jeder kocht ein Gericht aus seinem Heimatland. Das wird toll!
A: Genau. Ich mache einen marokkanischen Couscous.
B: Und ich koche eine deutsche Suppe. Wann und wo machen wir das?
A: Am Samstagabend bei mir zu Hause, ab 18 Uhr?
B: Prima! Wer kümmert sich um die Zutaten?
A: Wir gehen zusammen am Samstagmorgen auf den Markt. Das macht mehr Spaß.
B: Ich übernehme die Getränke und das Dessert.
A: Super! Ich schicke allen Freunden eine WhatsApp-Nachricht.`,
      keyphrases: [
        { de: 'Jeder kocht ein Gericht aus seinem Heimatland.', fr: 'Chacun cuisine un plat de son pays d\'origine.' },
        { de: 'Wir gehen zusammen auf den Markt.', fr: 'Nous allons ensemble au marché.' },
        { de: 'Ich übernehme die Getränke.', fr: 'Je me charge des boissons.' },
        { de: 'Das macht mehr Spaß.', fr: 'C\'est plus amusant.' }
      ],
      vocab: ['das Gericht', 'die Zutaten', 'das Hauptgericht', 'das Dessert', 'den Tisch decken', 'einkaufen gehen']
    }
  },
  {
    id: 's_plan5', cat: 'planen',
    title: 'Klassentreffen organisieren',
    sub: 'Wiedersehen mit alten Schulkameraden',
    situation: 'Sie und Ihr Gesprächspartner haben die gleiche Schule besucht. Viele ehemalige Mitschüler haben Sie seit Jahren nicht mehr gesehen. Sie möchten ein Klassentreffen organisieren.',
    directions: [
      'Wann findet das Treffen statt? (Sommer, Wochenende)',
      'Wo soll es sein? (Restaurant, Park, Gemeinschaftsraum)',
      'Wie findet man die Kontakte aller Mitschüler?',
      'Welche Unterhaltung planen Sie? (Quiz über die Schulzeit, Fotos)',
      'Was essen und trinken Sie?'
    ],
    tips: '"Ein Quiz über unsere Schulzeit wäre lustig.", "Wir könnten alte Fotos mitbringen.", "Wir erstellen eine Facebook-Gruppe."',
    correction: {
      sample: `A: Wann haben wir zuletzt alle zusammen gesehen? Das ist schon so lange her!
B: Genau! Lass uns ein Klassentreffen organisieren. Wann passt es dir?
A: Am besten im Sommer, zum Beispiel im Juli. Dann haben alle mehr Zeit.
B: Und wo sollen wir uns treffen?
A: Im Park, wenn das Wetter schön ist. Wir machen ein Picknick.
B: Wunderbar! Aber wie finden wir die Kontakte von allen?
A: Wir erstellen eine Facebook-Gruppe und bitten jeden, die Nachricht weiterzuleiten.
B: Gute Idee! Als Unterhaltung könnten wir ein Quiz über unsere Schulzeit machen.
A: Ja! Und jeder bringt alte Schulfotos mit. Das wird sicher lustig!`,
      keyphrases: [
        { de: 'Das ist schon so lange her!', fr: 'Ça fait si longtemps !' },
        { de: 'Wir erstellen eine Facebook-Gruppe.', fr: 'Nous créons un groupe Facebook.' },
        { de: 'Wir bitten jeden, die Nachricht weiterzuleiten.', fr: 'Nous demandons à chacun de transmettre le message.' },
        { de: 'Wir machen ein Picknick.', fr: 'Nous faisons un pique-nique.' }
      ],
      vocab: ['das Klassentreffen', 'ehemalige Mitschüler', 'weiterleiten', 'das Quiz', 'die Schulzeit', 'das Picknick']
    }
  },
  {
    id: 's_plan6', cat: 'planen',
    title: 'Stadtführung für neue Mitschülerin',
    sub: 'Willkommen in der Stadt',
    situation: 'Eine neue Mitschülerin aus dem Ausland ist gerade in Ihre Stadt gezogen. Sie kennt weder die Stadt noch ihre Sehenswürdigkeiten. Sie möchten ihr gemeinsam die Stadt zeigen.',
    directions: [
      'Welche Route planen Sie für die Stadtführung?',
      'Wie lange soll die Führung dauern?',
      'Welche wichtigen Sehenswürdigkeiten zeigen Sie ihr?',
      'Wo essen oder trinken Sie gemeinsam?',
      'Kaufen Sie ihr ein kleines Willkommensgeschenk?'
    ],
    tips: '"Zuerst zeigen wir ihr den Marktplatz...", "Danach gehen wir in ein typisches Café.", "Als Geschenk könnten wir eine Postkarte oder ein Stadtplan kaufen."',
    correction: {
      sample: `A: Die neue Mitschülerin heißt Sofia. Wir sollten ihr die Stadt zeigen!
B: Sehr gerne! Was zeigen wir ihr zuerst?
A: Zuerst gehen wir zum Marktplatz. Das ist das Herz der Stadt.
B: Danach könnten wir ihr die alte Kirche und das Museum zeigen.
A: Gute Idee. Wie lange soll die Führung dauern?
B: Ich denke, zwei Stunden reichen. Dann ist sie nicht zu müde.
A: Anschließend gehen wir alle zusammen in ein typisches Café zum Mittagessen.
B: Wir könnten ihr auch eine Postkarte von der Stadt als kleines Willkommensgeschenk kaufen.
A: Das ist sehr aufmerksam! Sie wird sich sicher sehr freuen.`,
      keyphrases: [
        { de: 'Das ist das Herz der Stadt.', fr: 'C\'est le cœur de la ville.' },
        { de: 'zwei Stunden reichen', fr: 'deux heures suffisent' },
        { de: 'Anschließend gehen wir...', fr: 'Ensuite, nous allons...' },
        { de: 'Das ist sehr aufmerksam!', fr: 'C\'est très attentionné !' }
      ],
      vocab: ['die Stadtführung', 'die Sehenswürdigkeit', 'der Marktplatz', 'anschließend', 'die Postkarte', 'aufmerksam']
    }
  },
  {
    id: 's_plan7', cat: 'planen',
    title: 'Umzug in neue Wohnung planen',
    sub: 'Organisation des Umzugs',
    situation: 'Sie haben endlich eine neue und größere Wohnung gefunden. Der Umzug soll am nächsten Wochenende stattfinden. Sie brauchen Hilfe und möchten alles mit Ihrem Gesprächspartner organisieren.',
    directions: [
      'Wann genau findet der Umzug statt?',
      'Wie transportieren Sie die Möbel? (Transporter mieten, Freunde mit Auto)',
      'Wer kann Ihnen beim Tragen helfen?',
      'In welcher Reihenfolge packen Sie die Kartons?',
      'Brauchen Sie danach neue Möbel? Wo kaufen Sie diese?'
    ],
    tips: '"Wir könnten einen Transporter mieten.", "Kannst du mir helfen?", "Fangen wir mit den Büchern an.", "Ich brauche noch ein Regal."',
    correction: {
      sample: `A: Ich bin so aufgeregt! Nächste Woche ist endlich mein Umzug.
B: Herzlichen Glückwunsch zur neuen Wohnung! Wie kann ich helfen?
A: Ich wäre sehr dankbar! Wir könnten am Samstag früh um 8 Uhr anfangen.
B: Kein Problem. Wie transportieren wir die Möbel?
A: Ich habe einen Transporter gemietet. Kannst du auch Freunde mitbringen?
B: Natürlich! Peter und Klaus kommen sicher gerne helfen.
A: Super! Ich fange diese Woche schon mit dem Packen an. Zuerst die Bücher und Kleider.
B: Brauchst du auch noch Möbel für die neue Wohnung?
A: Ja, ich brauche noch ein Regal. Ich gehe nächste Woche zu IKEA.`,
      keyphrases: [
        { de: 'Herzlichen Glückwunsch zur neuen Wohnung!', fr: 'Félicitations pour le nouvel appartement !' },
        { de: 'Ich wäre sehr dankbar!', fr: 'Je vous serais très reconnaissant !' },
        { de: 'Ich habe einen Transporter gemietet.', fr: 'J\'ai loué un camion.' },
        { de: 'Kannst du auch Freunde mitbringen?', fr: 'Peux-tu aussi amener des amis ?' },
        { de: 'Zuerst die Bücher und Kleider.', fr: 'D\'abord les livres et les vêtements.' }
      ],
      vocab: ['der Transporter', 'mieten', 'der Karton', 'die Möbel', 'das Regal', 'tragen']
    }
  },

  // ── PRÄSENTATIONEN (6 sujets) ─────────────────────────────────────────────
  {
    id: 's_praes1', cat: 'praesentieren',
    title: 'Berufstätige Eltern',
    sub: 'Vor- und Nachteile',
    situation: 'Viele Eltern arbeiten heute Vollzeit. Sprechen Sie über Ihre persönlichen Erfahrungen und die Situation in Ihrem Heimatland. Strukturieren Sie Ihre Präsentation mit Einleitung, Hauptteil und Schluss.',
    directions: [
      'Einleitung: Thema vorstellen und persönliche Erfahrung erwähnen',
      'Situation in Ihrem Heimatland: Wie viele Eltern arbeiten? Was machen die Kinder?',
      'Vorteile: Was sind die positiven Aspekte? (finanziell, Unabhängigkeit)',
      'Nachteile: Was sind die negativen Aspekte? (wenig Zeit, müde, Stress)',
      'Schluss: Ihre persönliche Meinung und Lösung'
    ],
    tips: 'Struktur ÖSD: Guten Tag → Thema nennen → Erfahrung → Land → Vorteile → Nachteile → Meinung → "Hier endet meine Präsentation."',
    correction: {
      sample: `Guten Tag! Ich möchte heute über das Thema "Berufstätige Eltern" sprechen.

Meine persönliche Erfahrung: Bei mir zu Hause haben beide Eltern gearbeitet. Meine Mutter hat halbtags gearbeitet und mein Vater ganztags.

Situation in meinem Land: In Marokko arbeiten immer mehr Frauen. Viele Familien brauchen zwei Gehälter, um gut leben zu können.

Vorteile: Die Familie hat mehr Geld. Die Mutter ist wirtschaftlich unabhängig.

Nachteile: Die Eltern haben wenig Zeit für die Kinder. Sie kommen abends müde und gestresst nach Hause.

Meine Meinung: Ich denke, dass Eltern Teilzeit arbeiten sollten, wenn die Kinder noch klein sind.

Hier endet meine Präsentation. Vielen Dank für Ihre Aufmerksamkeit!`,
      keyphrases: [
        { de: 'Ich möchte heute über das Thema... sprechen.', fr: 'Je voudrais parler aujourd\'hui du thème...' },
        { de: 'Meine persönliche Erfahrung ist...', fr: 'Mon expérience personnelle est...' },
        { de: 'In meinem Land...', fr: 'Dans mon pays...' },
        { de: 'Einerseits... andererseits...', fr: 'D\'un côté... de l\'autre côté...' },
        { de: 'Ich denke, dass...', fr: 'Je pense que...' },
        { de: 'Hier endet meine Präsentation.', fr: 'Ma présentation se termine ici.' }
      ],
      vocab: ['berufstätig', 'halbtags / ganztags', 'das Gehalt', 'wirtschaftlich unabhängig', 'selbstständig', 'das Gleichgewicht']
    }
  },
  {
    id: 's_praes2', cat: 'praesentieren',
    title: 'Brauchen Kinder Handys?',
    sub: 'Handys für Kinder — sinnvoll oder gefährlich?',
    situation: 'Immer mehr Kinder haben ein eigenes Smartphone, manche schon ab 7 Jahren. Präsentieren Sie Ihre Meinung dazu und erklären Sie, ab welchem Alter Sie Handys für angemessen halten.',
    directions: [
      'Einleitung: Persönliche Erfahrung oder Beobachtung zum Thema',
      'Situation in Ihrem Heimatland: Wann bekommen Kinder dort Handys?',
      'Vorteile: Erreichbarkeit, Sicherheit, Lernen',
      'Nachteile: Abhängigkeit, schlechte Schulleistungen, Cybermobbing',
      'Schluss: Ihre Meinung — ab welchem Alter und mit welchen Regeln?'
    ],
    tips: '"Auf der einen Seite..., auf der anderen Seite...", "Ich bin der Meinung, dass Kinder erst ab 12 Jahren ein Handy haben sollten."',
    correction: {
      sample: `Guten Tag! Mein Thema heute ist: "Brauchen Kinder Handys?"

Meine persönliche Erfahrung: Mein Neffe ist 9 Jahre alt und hat schon ein Smartphone. Ich finde das zu früh.

Situation in meinem Land: In Marokko bekommen viele Kinder schon mit 10 oder 11 Jahren ein Handy.

Vorteile: Die Kinder sind immer erreichbar. Im Notfall können sie sofort anrufen.

Nachteile: Viele Kinder sind süchtig nach dem Handy. Sie konzentrieren sich in der Schule nicht.

Meine Meinung: Ich denke, dass Kinder erst ab 12 Jahren ein Handy haben sollten.

Hier endet meine Präsentation. Danke!`,
      keyphrases: [
        { de: 'Das finde ich zu früh.', fr: 'Je trouve ça trop tôt.' },
        { de: 'Die Kinder sind immer erreichbar.', fr: 'Les enfants sont toujours joignables.' },
        { de: 'süchtig nach dem Handy sein', fr: 'être accro au téléphone' }
      ],
      vocab: ['erreichbar', 'beschäftigt', 'abhängig', 'das Cybermobbing', 'die Lern-App', 'die Regel setzen']
    }
  },
  {
    id: 's_praes3', cat: 'praesentieren',
    title: 'Das Internet im Alltag',
    sub: 'Fluch oder Segen?',
    situation: 'Das Internet hat unser Leben völlig verändert. Präsentieren Sie, wie Sie das Internet täglich nutzen und was Sie über seine Vor- und Nachteile denken.',
    directions: [
      'Einleitung: Wie nutzen Sie das Internet täglich?',
      'Situation in Ihrem Heimatland: Wie verbreitet ist das Internet?',
      'Vorteile: Kommunikation, Information, Arbeit, Bildung',
      'Nachteile: Privatsphäre, Betrüger, Abhängigkeit, Fehlinformation',
      'Schluss: Ist das Internet heute notwendig? Ihre Meinung'
    ],
    tips: '"Heutzutage ist das Internet aus unserem Alltag nicht mehr wegzudenken.", "Zwar ist das Internet sehr nützlich, aber es birgt auch Risiken."',
    correction: {
      sample: `Guten Tag! Heute präsentiere ich das Thema "Das Internet im Alltag".

Ich benutze das Internet täglich — für die Arbeit, für E-Mails, für Nachrichten.

Situation in meinem Land: In Marokko nutzen immer mehr Menschen das Internet.

Vorteile: Das Internet erleichtert die Kommunikation. Man findet schnell Informationen.

Nachteile: Die Privatsphäre ist gefährdet. Es gibt viele Betrüger.

Meine Meinung: Das Internet ist heute unbedingt notwendig. Aber man muss es verantwortungsvoll nutzen.

Hier endet meine Präsentation. Vielen Dank!`,
      keyphrases: [
        { de: 'aus dem Alltag nicht mehr wegzudenken', fr: 'indissociable de la vie quotidienne' },
        { de: 'Das Internet erleichtert...', fr: 'Internet facilite...' },
        { de: 'verantwortungsvoll nutzen', fr: 'utiliser de manière responsable' }
      ],
      vocab: ['notwendig', 'nützlich', 'die Privatsphäre', 'der Betrüger', 'vernachlässigen', 'der Datenschutz']
    }
  },
  {
    id: 's_praes4', cat: 'praesentieren',
    title: 'Verkehrsprobleme in der Stadt',
    sub: 'Zu viel Verkehr — was tun?',
    situation: 'In vielen Großstädten weltweit gibt es massive Verkehrsprobleme. Präsentieren Sie die Situation und schlagen Sie Lösungen vor.',
    directions: [
      'Einleitung: Ihre persönliche Erfahrung mit Verkehr',
      'Situation in Ihrem Heimatland: Wie ist der Verkehr dort?',
      'Nachteile von zu viel Verkehr: Lärm, Luftverschmutzung, Unfälle, Stress',
      'Lösungsvorschläge: öffentliche Verkehrsmittel, Fahrräder, Fußgängerzonen',
      'Schluss: Ihre Meinung — was sollte die Stadt tun?'
    ],
    tips: '"Der Verkehr ist ein großes Problem.", "Man sollte mehr in den öffentlichen Nahverkehr investieren.", "Das Stadtzentrum sollte autofrei sein."',
    correction: {
      sample: `Guten Tag! Ich spreche heute über "Verkehrsprobleme in der Stadt".

In Casablanca ist der Verkehr jeden Tag chaotisch. Ich brauche manchmal zwei Stunden für einen Weg.

Nachteile: Der Lärm stört die Lebensqualität. Die Luftverschmutzung schadet der Gesundheit.

Lösungen: Die Stadt sollte mehr in den öffentlichen Nahverkehr investieren. Das Stadtzentrum sollte autofrei werden.

Meine Meinung: Jeder Einzelne kann auch etwas tun — zum Beispiel öfter zu Fuß gehen.

Hier endet meine Präsentation. Danke!`,
      keyphrases: [
        { de: 'Der Verkehr ist jeden Tag sehr chaotisch.', fr: 'La circulation est très chaotique tous les jours.' },
        { de: 'Die Luftverschmutzung schadet der Gesundheit.', fr: 'La pollution atmosphérique nuit à la santé.' },
        { de: 'in den öffentlichen Nahverkehr investieren', fr: 'investir dans les transports en commun' }
      ],
      vocab: ['die Luftverschmutzung', 'der Radweg', 'autofrei', 'der öffentliche Nahverkehr', 'aggressiv', 'die Lebensqualität']
    }
  },
  {
    id: 's_praes5', cat: 'praesentieren',
    title: 'Einkaufen im Internet',
    sub: 'Online-Shopping — Vor- und Nachteile',
    situation: 'Online-Shopping wird weltweit immer beliebter. Präsentieren Sie Ihre persönlichen Erfahrungen und die Vor- und Nachteile.',
    directions: [
      'Einleitung: Was kaufen Sie online? Wie oft?',
      'Situation in Ihrem Heimatland: Wie beliebt ist Online-Shopping dort?',
      'Vorteile: Auswahl, Bequemlichkeit, Preisvergleich, Lieferung',
      'Nachteile: Unsicherheit, Rücksendungen, keine Anprobe, Betrug',
      'Schluss: Kaufen Sie lieber online oder im Geschäft? Warum?'
    ],
    tips: '"Meistens kaufe ich Bücher und Kleidung online.", "Ein großer Vorteil ist...", "Ein Nachteil ist jedoch, dass man die Ware nicht anfassen kann."',
    correction: {
      sample: `Guten Tag! Mein heutiges Thema ist Online-Shopping.

Ich kaufe oft online — meistens Bücher, Elektronik und manchmal Kleidung.

Vorteile: Man kann rund um die Uhr einkaufen. Die Auswahl ist viel größer.

Nachteile: Man kann die Ware nicht anfassen. Es besteht das Risiko von Betrug.

Meine Meinung: Für Bücher kaufe ich lieber online. Für Kleidung gehe ich lieber ins Geschäft.

Vielen Dank! Hier endet meine Präsentation.`,
      keyphrases: [
        { de: 'rund um die Uhr einkaufen', fr: 'faire ses achats 24h/24' },
        { de: 'den Preis leicht vergleichen', fr: 'comparer facilement le prix' },
        { de: 'die Ware nicht anfassen können', fr: 'ne pas pouvoir toucher la marchandise' }
      ],
      vocab: ['die Auswahl', 'bestellen', 'liefern', 'der Betrug', 'die Rücksendung', 'anprobieren', 'die Lieferung']
    }
  },
  {
    id: 's_praes6', cat: 'praesentieren',
    title: 'Extremsportarten',
    sub: 'Nervenkitzel oder unnötiges Risiko?',
    situation: 'Extremsportarten wie Klettern, Bungee-Jumping, Fallschirmspringen werden immer populärer. Präsentieren Sie Ihre Meinung.',
    directions: [
      'Einleitung: Haben Sie persönliche Erfahrung mit Extremsport?',
      'Situation in Ihrem Land: Wie verbreitet sind Extremsportarten dort?',
      'Vorteile: Adrenalin, neue Erfahrungen, Teamgeist, Fitness',
      'Nachteile: Gefahr, hohe Kosten, Verletzungsrisiko',
      'Schluss: Würden Sie selbst einen Extremsport ausprobieren?'
    ],
    tips: '"Man überwindet seine Grenzen.", "Extreme Sportarten können gefährlich sein, wenn man nicht gut vorbereitet ist."',
    correction: {
      sample: `Guten Tag! Heute spreche ich über "Extremsportarten".

Ich selbst habe noch keinen Extremsport gemacht, aber mein Bruder ist Fallschirmspringer.

Vorteile: Man erlebt ein einzigartiges Adrenalingefühl. Man lernt, seine Angst zu überwinden.

Nachteile: Extremsportarten sind gefährlich. Die Verletzungsgefahr ist hoch.

Meine Meinung: Ich würde gerne Klettern ausprobieren. Aber immer mit professioneller Ausbildung.

Hier endet meine Präsentation. Danke!`,
      keyphrases: [
        { de: 'seine Angst überwinden', fr: 'surmonter sa peur' },
        { de: 'seine Grenzen kennenlernen', fr: 'apprendre à connaître ses limites' },
        { de: 'die Verletzungsgefahr ist hoch', fr: 'le risque de blessure est élevé' }
      ],
      vocab: ['klettern', 'das Adrenalin', 'die Ausrüstung', 'die Verletzung', 'der Nervenkitzel', 'überwinden']
    }
  }
];

// ================================ SCHREIBEN ==================================
export const SCHREIBEN_TOPICS = [

  // ── TEIL 1 — E-Mails informell (9 sujets) ─────────────────────────────────
  {
    id: 'w_t1_1', cat: 'teil1', teil: 'Teil 1',
    title: 'Kinobesuch — Film gesehen',
    sub: 'Informelle E-Mail an einen Freund',
    situation: 'Sie waren gestern Abend im Kino und haben einen sehr interessanten Film gesehen. Ihr Freund Max konnte leider nicht mitkommen.',
    directions: [
      'Erzählen Sie, welchen Film Sie gesehen haben und worum es geht.',
      'Schreiben Sie, was Ihnen am besten gefallen hat.',
      'Laden Sie Ihren Freund ein, den Film nächste Woche mit Ihnen zu sehen.'
    ],
    structure: { longueur: '80–100 Wörter', registre: 'informell (du)', salutation: 'Hallo Max,', cloture: 'Liebe Grüße, [Ihr Name]' },
    tips: '"Ich war gestern im Kino...", "Der Film handelt von..."',
    correction: {
      sample: `Hallo Max,

ich war gestern Abend im Kino und habe den Film "Parasite" gesehen. Es tut mir leid, dass du nicht dabei sein konntest!

Der Film handelt von einer armen koreanischen Familie. Die Geschichte ist sehr spannend. Am besten hat mir das Ende gefallen.

Hast du nächste Woche Zeit? Ich würde gerne mit dir einen anderen Film sehen.

Schreib mir bitte zurück!

Liebe Grüße,
[Ihr Name]`,
      keyphrases: [
        { de: 'Es tut mir leid, dass du nicht dabei sein konntest!', fr: 'Je suis désolé que tu n\'aies pas pu être là !' },
        { de: 'Der Film handelt von...', fr: 'Le film parle de...' },
        { de: 'Hast du nächste Woche Zeit?', fr: 'As-tu du temps la semaine prochaine ?' }
      ],
      vocab: ['der Film handelt von', 'spannend', 'unerwartet', 'einladen', 'Es tut mir leid', 'zurückschreiben']
    }
  },
  {
    id: 'w_t1_2', cat: 'teil1', teil: 'Teil 1',
    title: 'Flohmarkt-Besuch',
    sub: 'Bericht über einen Flohmarkt',
    situation: 'Sie waren am Wochenende auf einem großen Flohmarkt und haben interessante Dinge gefunden.',
    directions: [
      'Beschreiben Sie, wie der Flohmarkt war (groß? viel los? günstig?)',
      'Erzählen Sie, was Sie gekauft haben und warum.',
      'Laden Sie Ihren Freund ein, beim nächsten Mal mitzukommen.'
    ],
    structure: { longueur: '80–100 Wörter', registre: 'informell', salutation: 'Hallo Thomas,', cloture: 'Liebe Grüße' },
    tips: '"Der Flohmarkt war riesig!", "Ich habe für nur 3 Euro eine alte Lampe gekauft."',
    correction: {
      sample: `Hallo Thomas,

ich war am Samstag auf dem Flohmarkt und es war wirklich toll!

Der Flohmarkt war riesig. Ich habe eine wunderschöne alte Lampe für nur 5 Euro gekauft!

Was mir nicht so gut gefallen hat: Es war extrem voll und laut.

Beim nächsten Flohmarkt musst du unbedingt mitkommen!

Liebe Grüße,
[Ihr Name]`,
      keyphrases: [
        { de: 'Es war wirklich toll!', fr: 'C\'était vraiment super !' },
        { de: 'Du musst unbedingt mitkommen!', fr: 'Tu dois absolument venir !' }
      ],
      vocab: ['der Flohmarkt', 'der Stand', 'günstig', 'sich lohnen', 'der Verkäufer']
    }
  },
  {
    id: 'w_t1_3', cat: 'teil1', teil: 'Teil 1',
    title: 'Kochkurs — neue Erfahrung',
    sub: 'Bericht über einen Kochkurs',
    situation: 'Sie haben letzte Woche an einem Kochkurs für internationale Küche teilgenommen.',
    directions: [
      'Warum haben Sie sich für diesen Kochkurs angemeldet?',
      'Was haben Sie gelernt und wie war die Atmosphäre?',
      'Laden Sie Ihre Freundin ein, beim nächsten Kurs mitzumachen.'
    ],
    structure: { longueur: '80–100 Wörter', registre: 'informell', salutation: 'Hallo Maria,', cloture: 'Liebe Grüße' },
    tips: '"Der Kochkurs hat mir sehr viel Spaß gemacht!", "Du solltest auch mitmachen!"',
    correction: {
      sample: `Hallo Maria,

ich muss dir unbedingt von meiner tollen Erfahrung erzählen! Ich habe an einem Kochkurs für italienische Küche teilgenommen.

Der Kochlehrer war sehr geduldig. Wir haben Pasta, Risotto und Tiramisu gemacht.

Du solltest auch unbedingt mitmachen!

Liebe Grüße,
[Ihr Name]`,
      keyphrases: [
        { de: 'Ich muss dir unbedingt von... erzählen!', fr: 'Je dois absolument te parler de...!' },
        { de: 'Du solltest auch unbedingt mitmachen!', fr: 'Tu devrais absolument participer aussi !' }
      ],
      vocab: ['teilnehmen', 'sich anmelden', 'geduldig', 'die Atmosphäre', 'das Gericht']
    }
  },
  {
    id: 'w_t1_4', cat: 'teil1', teil: 'Teil 1',
    title: 'Fahrradtour mit der Gruppe',
    sub: 'Bericht über einen Ausflug',
    situation: 'Sie haben am Wochenende mit Ihrem Sprachkurs eine Fahrradtour durch die Stadt gemacht.',
    directions: [
      'Wie war die Fahrradtour? (Strecke, Wetter, Dauer)',
      'Welche Sehenswürdigkeiten haben Sie unterwegs gesehen?',
      'Schlagen Sie vor, gemeinsam Fotos anzuschauen.'
    ],
    structure: { longueur: '80–100 Wörter', registre: 'informell', salutation: 'Hallo Jonas,', cloture: 'Liebe Grüße' },
    tips: '"Wir haben eine tolle Fahrradtour gemacht!", "Ich habe viele Fotos gemacht."',
    correction: {
      sample: `Hallo Jonas,

es war wirklich schade, dass du nicht bei unserer Fahrradtour mitmachen konntest!

Wir sind durch die ganze Innenstadt gefahren. Das Wetter war perfekt.

Ich habe viele tolle Fotos gemacht. Möchtest du sie sehen?

Liebe Grüße,
[Ihr Name]`,
      keyphrases: [
        { de: 'Es war wirklich schade, dass...', fr: 'C\'était vraiment dommage que...' },
        { de: 'Möchtest du sie sehen?', fr: 'Tu veux les voir ?' }
      ],
      vocab: ['die Fahrradtour', 'besichtigen', 'die Sehenswürdigkeit', 'die Pause', 'unterwegs']
    }
  },
  {
    id: 'w_t1_5', cat: 'teil1', teil: 'Teil 1',
    title: 'Klassentreffen',
    sub: 'Bericht über ein Wiedersehen',
    situation: 'Sie waren am Wochenende auf einem Klassentreffen mit Ihren alten Schulkameraden.',
    directions: [
      'Wie war das Klassentreffen? (Stimmung, Ort, Dauer)',
      'Was hat Ihnen besonders gut gefallen?',
      'Erwähnen Sie eine lustige Erinnerung aus der Schulzeit.'
    ],
    structure: { longueur: '80–100 Wörter', registre: 'informell', salutation: 'Hallo Michael,', cloture: 'Liebe Grüße' },
    tips: '"Das Klassentreffen war wunderschön!", "Alle haben nach dir gefragt!"',
    correction: {
      sample: `Hallo Michael,

du hast so viel verpasst! Das Klassentreffen am Samstag war wunderschön.

Alle 23 ehemaligen Mitschüler sind gekommen! Die Stimmung war super.

Alle haben nach dir gefragt und dir liebe Grüße geschickt.

Liebe Grüße,
[Ihr Name]`,
      keyphrases: [
        { de: 'Du hast so viel verpasst!', fr: 'Tu as raté tellement de choses !' },
        { de: 'Alle haben nach dir gefragt.', fr: 'Tout le monde a demandé de tes nouvelles.' }
      ],
      vocab: ['das Klassentreffen', 'ehemalige Mitschüler', 'die Stimmung', 'verpassen']
    }
  },
  {
    id: 'w_t1_6', cat: 'teil1', teil: 'Teil 1',
    title: 'Neues Geschäft eines Verwandten',
    sub: 'Eröffnung eines Ladens',
    situation: 'Ihr Onkel hat letzte Woche ein neues Geschäft eröffnet. Sie waren bei der Eröffnung dabei.',
    directions: [
      'Wie war die Eröffnungsfeier? (Atmosphäre, Gäste, Dekoration)',
      'Was hat Ihnen am Geschäft besonders gut gefallen?',
      'Laden Sie Ihre Freundin ein, das Geschäft gemeinsam zu besuchen.'
    ],
    structure: { longueur: '80–100 Wörter', registre: 'informell', salutation: 'Hallo Anna,', cloture: 'Liebe Grüße' },
    tips: '"Die Eröffnungsfeier war wunderschön!", "Wir müssen unbedingt zusammen hingehen!"',
    correction: {
      sample: `Hallo Anna,

ich habe gerade tolle Neuigkeiten! Mein Onkel hat letzte Woche sein neues Geschäft eröffnet.

Das Geschäft ist sehr modern und hell eingerichtet — er verkauft handgemachte Lederwaren.

Wir müssen unbedingt bald zusammen hingehen!

Liebe Grüße,
[Ihr Name]`,
      keyphrases: [
        { de: 'Ich habe gerade tolle Neuigkeiten!', fr: 'J\'ai de super nouvelles !' },
        { de: 'Wir müssen unbedingt bald zusammen hingehen!', fr: 'Nous devons absolument y aller ensemble bientôt !' }
      ],
      vocab: ['die Eröffnung', 'eröffnen', 'handgemacht', 'die Lederwaren', 'begeistert']
    }
  },
  {
    id: 'w_t1_7', cat: 'teil1', teil: 'Teil 1',
    title: 'Umzug in neue Wohnung',
    sub: 'Einladung zum Besuch',
    situation: 'Sie sind letzte Woche in eine neue, größere Wohnung umgezogen.',
    directions: [
      'Warum sind Sie aus der alten Wohnung ausgezogen?',
      'Beschreiben Sie die neue Wohnung (Lage, Zimmer, Balkon).',
      'Laden Sie Ihre Freundin ein, Sie zu besuchen.'
    ],
    structure: { longueur: '80–100 Wörter', registre: 'informell', salutation: 'Hallo Lena,', cloture: 'Liebe Grüße' },
    tips: '"Ich bin endlich umgezogen!", "Du musst unbedingt bald vorbeikommen!"',
    correction: {
      sample: `Hallo Lena,

ich habe tolle Neuigkeiten: Ich bin endlich umgezogen!

Die neue Wohnung liegt im 4. Stock und hat drei helle Zimmer und einen großen Balkon mit Blick auf den Park.

Du musst unbedingt bald vorbeikommen!

Liebe Grüße,
[Ihr Name]`,
      keyphrases: [
        { de: 'mit Blick auf den Park', fr: 'avec vue sur le parc' },
        { de: 'Du musst unbedingt bald vorbeikommen!', fr: 'Tu dois absolument passer bientôt !' }
      ],
      vocab: ['umziehen', 'der Balkon', 'die Aussicht', 'hell', 'vorbeikommen']
    }
  },
  {
    id: 'w_t1_8', cat: 'teil1', teil: 'Teil 1',
    title: 'Neue Schule für das Kind',
    sub: 'Bericht über eine Schulbesichtigung',
    situation: 'Sie haben mit Ihrem Kind eine neue Schule besichtigt.',
    directions: [
      'Warum suchen Sie eine neue Schule für Ihr Kind?',
      'Beschreiben Sie, was Ihnen an der Schule besonders gut gefallen hat.',
      'Laden Sie Ihre Freundin zu einem Spaziergang ein.'
    ],
    structure: { longueur: '80–100 Wörter', registre: 'informell', salutation: 'Hallo Sabine,', cloture: 'Liebe Grüße' },
    tips: '"Wir haben eine tolle neue Schule gefunden!", "Die Lehrer sind sehr freundlich."',
    correction: {
      sample: `Hallo Sabine,

wir haben endlich die perfekte Schule für meinen Sohn gefunden!

Die Schule ist sehr modern mit großen Klassenzimmern und einem riesigen Spielplatz.

Möchtest du am Samstag mit uns in den Park gehen?

Liebe Grüße,
[Ihr Name]`,
      keyphrases: [
        { de: 'Ich muss dir davon erzählen.', fr: 'Je dois te parler de ça.' },
        { de: 'Die Kinder können spielen und wir können reden.', fr: 'Les enfants peuvent jouer et nous pouvons discuter.' }
      ],
      vocab: ['besichtigen', 'das Klassenzimmer', 'der Spielplatz', 'engagiert', 'kennenlernen']
    }
  },
  {
    id: 'w_t1_9', cat: 'teil1', teil: 'Teil 1',
    title: 'Reise in eine große Stadt',
    sub: 'Reisebericht an einen Freund',
    situation: 'Sie haben letzte Woche eine große Stadt besucht (Wien, Berlin, München).',
    directions: [
      'Wie war die Reise insgesamt?',
      'Welche Sehenswürdigkeiten haben Sie besucht?',
      'Laden Sie Ihren Freund ein, beim nächsten Mal mitzukommen.'
    ],
    structure: { longueur: '80–100 Wörter', registre: 'informell', salutation: 'Hallo Tom,', cloture: 'Liebe Grüße' },
    tips: '"Meine Reise nach Wien war unvergesslich!", "Nächstes Mal kommst du mit!"',
    correction: {
      sample: `Hallo Tom,

meine Reise nach Wien letzte Woche war absolut unvergesslich!

Ich habe den Stephansdom, das Kunsthistorische Museum und den Prater besucht.

Nächstes Jahr fahre ich wieder hin. Dann kommst du auf jeden Fall mit!

Liebe Grüße,
[Ihr Name]`,
      keyphrases: [
        { de: 'absolut unvergesslich', fr: 'absolument inoubliable' },
        { de: 'Dann kommst du auf jeden Fall mit!', fr: 'Tu viens cette fois-là sans faute !' }
      ],
      vocab: ['unvergesslich', 'beeindrucken', 'besichtigen', 'die Sehenswürdigkeit', 'historisch']
    }
  },

  // ── TEIL 2 — Kommentare (8 sujets) ────────────────────────────────────────
  {
    id: 'w_t2_1', cat: 'teil2', teil: 'Teil 2',
    title: 'Ungesundes Essen am Arbeitsplatz',
    sub: 'Kommentar in einem Online-Forum',
    situation: 'Sara schreibt: "Bei uns in der Firma gibt es nur ungesundes Essen in der Kantine."',
    directions: [
      'Stimmen Sie Sara zu? Begründen Sie.',
      'Erzählen Sie von Ihrer persönlichen Erfahrung.',
      'Was sollten Arbeitgeber tun?'
    ],
    structure: { longueur: 'mind. 80 Wörter', registre: 'semi-formell' },
    tips: '"Da ich mich für dieses Thema interessiere, möchte ich meinen Kommentar teilen."',
    correction: {
      sample: `Ich stimme Sara vollkommen zu.

In meinem Land ist das leider sehr verbreitet. Arbeitgeber sollten gesunde Mahlzeiten anbieten.

Das wäre gut für alle.`,
      keyphrases: [
        { de: 'Ich stimme... vollkommen zu.', fr: 'Je suis totalement d\'accord avec...' },
        { de: 'Ich bin der Meinung, dass...', fr: 'Je suis d\'avis que...' }
      ],
      vocab: ['ungesund', 'die Mahlzeit', 'anbieten', 'der Arbeitgeber', 'die Produktivität']
    }
  },
  {
    id: 'w_t2_2', cat: 'teil2', teil: 'Teil 2',
    title: 'Umweltschutz — jeder kann etwas tun',
    sub: 'Kommentar zu einem Artikel',
    situation: 'Jemand schreibt: "Umweltschutz ist Aufgabe der Regierung, nicht des Einzelnen."',
    directions: [
      'Stimmen Sie zu oder widersprechen Sie?',
      'Was tun Sie persönlich für die Umwelt?',
      'Was kann man konkret tun?'
    ],
    structure: { longueur: 'mind. 80 Wörter', registre: 'semi-formell' },
    tips: '"Ich widerspreche dieser Meinung.", "Jeder Einzelne kann etwas tun."',
    correction: {
      sample: `Ich möchte widersprechen.

Ich selbst versuche, täglich etwas für die Umwelt zu tun: Ich trenne meinen Müll und fahre oft mit dem Fahrrad.

Wenn alle kleine Schritte machen, kann man gemeinsam viel erreichen.`,
      keyphrases: [
        { de: 'Ich möchte widersprechen.', fr: 'Je voudrais m\'opposer à cela.' },
        { de: 'jeder Einzelne trägt Verantwortung', fr: 'chacun porte une responsabilité' }
      ],
      vocab: ['der Umweltschutz', 'die Verantwortung', 'den Müll trennen', 'das Bewusstsein']
    }
  },
  {
    id: 'w_t2_3', cat: 'teil2', teil: 'Teil 2',
    title: 'Fernseher im Kinderzimmer',
    sub: 'Kommentar in einem Forum',
    situation: 'Ein Elternteil schreibt: "Ich habe meinem Kind einen Fernseher ins Zimmer gestellt."',
    directions: [
      'Sind Sie dafür oder dagegen?',
      'Was ist Ihre Erfahrung?',
      'Welche Risiken sehen Sie?'
    ],
    structure: { longueur: 'mind. 80 Wörter', registre: 'semi-formell' },
    tips: '"Ich bin klar dagegen.", "Kinder mit Fernseher im Zimmer schlafen schlechter."',
    correction: {
      sample: `Ich bin klar dagegen.

Kinder mit Fernseher im Zimmer schlafen schlechter und konzentrieren sich in der Schule weniger.

Ich empfehle, den Fernseher im Wohnzimmer zu lassen.`,
      keyphrases: [
        { de: 'Ich bin klar dagegen.', fr: 'Je suis clairement contre.' },
        { de: 'sich in der Schule schlechter konzentrieren', fr: 'se concentrer moins bien à l\'école' }
      ],
      vocab: ['dagegen', 'die Konsequenz', 'sich konzentrieren', 'die Entwicklung', 'die Regel setzen']
    }
  },
  {
    id: 'w_t2_4', cat: 'teil2', teil: 'Teil 2',
    title: 'Online-Shopping — bequem oder riskant?',
    sub: 'Kommentar im Forum',
    situation: 'Jemand schreibt: "Online-Shopping ist bequem, aber ich habe Angst vor Betrug."',
    directions: [
      'Stimmen Sie zu?',
      'Was ist Ihre persönliche Erfahrung?',
      'Welche Tipps geben Sie gegen Betrug?'
    ],
    structure: { longueur: 'mind. 80 Wörter', registre: 'semi-formell' },
    tips: '"Online-Shopping hat viele Vorteile, aber man muss vorsichtig sein."',
    correction: {
      sample: `Ich kaufe selbst oft online. Meistens sind meine Erfahrungen positiv.

Mein Tipp: Kaufen Sie nur auf bekannten Plattformen und lesen Sie die Bewertungen.

Das gibt mehr Sicherheit.`,
      keyphrases: [
        { de: 'Meistens sind meine Erfahrungen positiv.', fr: 'La plupart du temps, mes expériences sont positives.' },
        { de: 'Das gibt mehr Sicherheit.', fr: 'Cela offre plus de sécurité.' }
      ],
      vocab: ['bequem', 'riskant', 'die Bewertung', 'gefälscht', 'die Plattform', 'vorsichtig']
    }
  },
  {
    id: 'w_t2_5', cat: 'teil2', teil: 'Teil 2',
    title: 'Führerschein ab 16 Jahren?',
    sub: 'Kommentar im Forum',
    situation: 'Diskussion: Sollte man den Führerschein schon mit 16 Jahren machen dürfen?',
    directions: [
      'Sind Sie dafür oder dagegen?',
      'Welche Argumente sprechen dafür oder dagegen?',
      'Wie ist die Situation in Ihrem Land?'
    ],
    structure: { longueur: 'mind. 80 Wörter', registre: 'semi-formell' },
    tips: '"16-Jährige sind oft noch nicht reif genug."',
    correction: {
      sample: `Ich bin gegen den Führerschein ab 16 Jahren.

In meinem Land darf man erst mit 18 Jahren Auto fahren, und ich finde das richtig so.

Die Sicherheit sollte immer an erster Stelle stehen.`,
      keyphrases: [
        { de: 'In meinen Augen...', fr: 'À mes yeux...' },
        { de: 'Die Sicherheit sollte an erster Stelle stehen.', fr: 'La sécurité devrait passer en premier.' }
      ],
      vocab: ['der Führerschein', 'reif', 'die Verantwortung', 'unterschätzen', 'ländlich', 'die Sicherheit']
    }
  },
  {
    id: 'w_t2_6', cat: 'teil2', teil: 'Teil 2',
    title: 'Urlaub am Strand oder zu Hause?',
    sub: 'Kommentar im Forum',
    situation: 'Jemand schreibt: "Urlaub zu Hause ist genauso schön wie teure Reisen ans Meer."',
    directions: [
      'Stimmen Sie zu?',
      'Welche Art von Urlaub bevorzugen Sie?',
      'Welche Vorteile haben Reisen ans Meer?'
    ],
    structure: { longueur: 'mind. 80 Wörter', registre: 'semi-formell' },
    tips: '"Reisen erweitert den Horizont."',
    correction: {
      sample: `Ich bin nur teilweise einverstanden.

Reisen hat mehr Vorteile: Man entdeckt neue Kulturen und erweitert seinen Horizont.

Meiner Meinung nach sollte man beides kombinieren.`,
      keyphrases: [
        { de: 'seinen Horizont erweitern', fr: 'élargir ses horizons' },
        { de: 'beides kombinieren', fr: 'combiner les deux' }
      ],
      vocab: ['erholsam', 'die Entspannung', 'verreisen', 'der Horizont', 'entdecken']
    }
  },
  {
    id: 'w_t2_7', cat: 'teil2', teil: 'Teil 2',
    title: 'Essen in öffentlichen Verkehrsmitteln',
    sub: 'Kommentar im Forum',
    situation: 'Jemand schreibt: "Ich finde es unhöflich, wenn jemand in der U-Bahn isst."',
    directions: [
      'Teilen Sie diese Meinung?',
      'Was ist Ihre Erfahrung?',
      'Welche Folgen hat das Essen in Verkehrsmitteln?'
    ],
    structure: { longueur: 'mind. 80 Wörter', registre: 'semi-formell' },
    tips: '"Ich teile diese Meinung völlig.", "Öffentliche Verkehrsmittel sind ein gemeinsamer Raum."',
    correction: {
      sample: `Ich teile diese Meinung vollkommen.

Der Geruch kann andere Fahrgäste stören und es macht den Platz schmutzig.

Jeder sollte Rücksicht auf andere nehmen.`,
      keyphrases: [
        { de: 'Ich teile diese Meinung vollkommen.', fr: 'Je partage entièrement cet avis.' },
        { de: 'Rücksicht auf andere nehmen', fr: 'avoir des égards pour les autres' }
      ],
      vocab: ['unhöflich', 'rücksichtslos', 'der Geruch', 'stören', 'schmutzig', 'der Fahrgast']
    }
  },
  {
    id: 'w_t2_8', cat: 'teil2', teil: 'Teil 2',
    title: 'Dürfen Männer weinen?',
    sub: 'Kommentar zu einem Artikel',
    situation: 'Ein Artikel fragt: "Dürfen Männer weinen? Ist Weinen Schwäche?"',
    directions: [
      'Was ist Ihre Meinung?',
      'Wie ist die Situation in Ihrer Kultur?',
      'Was sagen Psychologen dazu?'
    ],
    structure: { longueur: 'mind. 80 Wörter', registre: 'semi-formell' },
    tips: '"Weinen ist keine Schwäche, sondern ein Zeichen emotionaler Gesundheit."',
    correction: {
      sample: `Ich bin klar der Meinung: Ja, Männer dürfen weinen!

Psychologen bestätigen, dass Weinen gut für die mentale Gesundheit ist.

Ich hoffe, dass sich diese Einstellung bald ändert.`,
      keyphrases: [
        { de: 'Weinen ist kein Zeichen von Schwäche.', fr: 'Pleurer n\'est pas un signe de faiblesse.' },
        { de: 'Psychologen bestätigen, dass...', fr: 'Les psychologues confirment que...' }
      ],
      vocab: ['weinen', 'die Schwäche', 'das Gefühl', 'die Emotion', 'unmännlich', 'die Depression']
    }
  },

  // ── TEIL 3 — Formelle E-Mails (6 sujets) ──────────────────────────────────
  {
    id: 'w_t3_1', cat: 'teil3', teil: 'Teil 3',
    title: 'Termin beim Berater absagen',
    sub: 'Formelle E-Mail wegen Krankheit',
    situation: 'Sie haben morgen einen Termin mit Herrn Leitner, aber Sie haben Grippe bekommen.',
    directions: [
      'Entschuldigen Sie sich höflich.',
      'Erklären Sie den Grund (Grippe).',
      'Bitten Sie um einen neuen Termin.'
    ],
    structure: { longueur: '60–80 Wörter', registre: 'formell (Sie)', salutation: 'Sehr geehrter Herr Leitner,', cloture: 'Mit freundlichen Grüßen' },
    tips: '"Ich muss Ihnen leider mitteilen, dass...", "Es tut mir sehr leid."',
    correction: {
      sample: `Sehr geehrter Herr Leitner,

ich muss Ihnen leider mitteilen, dass ich unseren Termin morgen nicht wahrnehmen kann. Ich bin krank geworden und habe hohes Fieber.

Es tut mir sehr leid. Ich würde mich freuen, wenn wir einen neuen Termin vereinbaren könnten.

Mit freundlichen Grüßen,
[Ihr Name]`,
      keyphrases: [
        { de: 'Ich muss Ihnen leider mitteilen, dass...', fr: 'Je dois malheureusement vous informer que...' },
        { de: 'Es tut mir sehr leid.', fr: 'Je suis vraiment désolé(e).' }
      ],
      vocab: ['leider mitteilen', 'absagen', 'der Termin', 'vereinbaren', 'kurzfristig', 'das Fieber']
    }
  },
  {
    id: 'w_t3_2', cat: 'teil3', teil: 'Teil 3',
    title: 'Deutschkurs wegen Krankheit absagen',
    sub: 'E-Mail an den Kursleiter',
    situation: 'Sie haben seit drei Tagen hohes Fieber und können den Deutschkurs nicht besuchen.',
    directions: [
      'Entschuldigen Sie sich höflich.',
      'Erklären Sie den Grund (hohes Fieber).',
      'Bitten Sie um die Hausaufgaben.'
    ],
    structure: { longueur: '60–80 Wörter', registre: 'formell', salutation: 'Sehr geehrter Herr Mayer,', cloture: 'Mit freundlichen Grüßen' },
    tips: '"Könnten Sie mir bitte die Hausaufgaben per E-Mail schicken?"',
    correction: {
      sample: `Sehr geehrter Herr Mayer,

hiermit möchte ich mich entschuldigen, dass ich den Kurs nicht besuchen kann. Ich habe hohes Fieber.

Könnten Sie mir bitte die Hausaufgaben per E-Mail schicken?

Mit freundlichen Grüßen,
[Ihr Name]`,
      keyphrases: [
        { de: 'Hiermit möchte ich mich entschuldigen, dass...', fr: 'Par la présente, je souhaite m\'excuser de...' },
        { de: 'Könnten Sie mir bitte... schicken?', fr: 'Pourriez-vous m\'envoyer... s\'il vous plaît ?' }
      ],
      vocab: ['sich entschuldigen', 'das Fieber', 'die Unterlagen', 'verpassen', 'das Verständnis']
    }
  },
  {
    id: 'w_t3_3', cat: 'teil3', teil: 'Teil 3',
    title: 'Party-Einladung absagen',
    sub: 'Formelle Absage einer Einladung',
    situation: 'Frau Möller hat Sie zu ihrer Geburtstagsparty eingeladen, aber Sie müssen verreisen.',
    directions: [
      'Danken Sie für die Einladung.',
      'Entschuldigen Sie sich und erklären Sie den Grund.',
      'Wünschen Sie einen schönen Geburtstag.'
    ],
    structure: { longueur: '60–80 Wörter', registre: 'formell', salutation: 'Sehr geehrte Frau Möller,', cloture: 'Mit freundlichen Grüßen' },
    tips: '"Vielen Dank für Ihre freundliche Einladung.", "Ich wünsche Ihnen einen schönen Geburtstag."',
    correction: {
      sample: `Sehr geehrte Frau Möller,

vielen Dank für Ihre freundliche Einladung.

Leider muss ich Ihnen mitteilen, dass ich verreisen muss. Es tut mir sehr leid.

Ich wünsche Ihnen von ganzem Herzen einen schönen Geburtstag!

Mit freundlichen Grüßen,
[Ihr Name]`,
      keyphrases: [
        { de: 'Vielen Dank für Ihre freundliche Einladung.', fr: 'Merci beaucoup pour votre aimable invitation.' }
      ],
      vocab: ['die Einladung', 'absagen', 'die Dienstreise', 'verschieben', 'leider', 'von ganzem Herzen']
    }
  },
  {
    id: 'w_t3_4', cat: 'teil3', teil: 'Teil 3',
    title: 'Bewerbung auf Stelle im Supermarkt',
    sub: 'Formelle Bewerbung',
    situation: 'Sie haben eine Stellenanzeige für einen Kassierer in einem Supermarkt gesehen.',
    directions: [
      'Zeigen Sie Ihr Interesse.',
      'Erklären Sie, warum Sie geeignet sind.',
      'Nennen Sie Ihre Erfahrungen.'
    ],
    structure: { longueur: '60–80 Wörter', registre: 'formell', salutation: 'Sehr geehrte Damen und Herren,', cloture: 'Mit freundlichen Grüßen' },
    tips: '"Ich habe Ihre Stellenanzeige gelesen und bewerbe mich hiermit."',
    correction: {
      sample: `Sehr geehrte Damen und Herren,

ich habe Ihre Stellenanzeige gelesen und bewerbe mich hiermit als Kassierer.

Ich habe Erfahrung im Einzelhandel und bin zuverlässig, pünktlich und teamfähig.

Ich freue mich auf ein Vorstellungsgespräch.

Mit freundlichen Grüßen,
[Ihr Name]`,
      keyphrases: [
        { de: 'Ich bewerbe mich hiermit als...', fr: 'Je candidate par la présente au poste de...' },
        { de: 'Ich freue mich auf ein Vorstellungsgespräch.', fr: 'Je me réjouis d\'un entretien.' }
      ],
      vocab: ['die Stellenanzeige', 'sich bewerben', 'zuverlässig', 'pünktlich', 'teamfähig', 'das Vorstellungsgespräch']
    }
  },
  {
    id: 'w_t3_5', cat: 'teil3', teil: 'Teil 3',
    title: 'Bewerbung als Schauspieler/in',
    sub: 'Formelle Bewerbung für eine Rolle',
    situation: 'Eine Theatergruppe sucht neue Schauspieler. Sie haben die Anzeige gesehen.',
    directions: [
      'Zeigen Sie Ihr Interesse.',
      'Beschreiben Sie Ihre Erfahrungen.',
      'Bitten Sie um ein Vorsprechen.'
    ],
    structure: { longueur: '60–80 Wörter', registre: 'formell', salutation: 'Sehr geehrte Damen und Herren,', cloture: 'Mit freundlichen Grüßen' },
    tips: '"Ich habe schon in zwei Schultheaterstücken mitgespielt."',
    correction: {
      sample: `Sehr geehrte Damen und Herren,

ich möchte mich hiermit als Schauspieler bewerben.

Ich habe bereits in drei Schultheaterstücken mitgespielt und bin kreativ und engagiert.

Ich würde mich über ein Vorsprechen freuen.

Mit freundlichen Grüßen,
[Ihr Name]`,
      keyphrases: [
        { de: 'sich für das Theater begeistern', fr: 'être passionné(e) de théâtre' },
        { de: 'seine Fähigkeiten unter Beweis stellen', fr: 'démontrer ses capacités' }
      ],
      vocab: ['das Theaterstück', 'die Hauptrolle', 'das Vorsprechen', 'auswendig lernen', 'engagiert', 'kreativ']
    }
  },
  {
    id: 'w_t3_6', cat: 'teil3', teil: 'Teil 3',
    title: 'Fahrrad kaufen — Anfrage',
    sub: 'Informationsanfrage zu einem Verkaufsangebot',
    situation: 'Herr Steineck bietet ein gebrauchtes Fahrrad zum Verkauf an.',
    directions: [
      'Zeigen Sie Ihr Interesse.',
      'Fragen Sie nach Zustand und Alter.',
      'Bitten Sie um einen Besichtigungstermin.'
    ],
    structure: { longueur: '60–80 Wörter', registre: 'formell', salutation: 'Sehr geehrter Herr Steineck,', cloture: 'Mit freundlichen Grüßen' },
    tips: '"Ich habe Ihre Anzeige gesehen und interessiere mich sehr."',
    correction: {
      sample: `Sehr geehrter Herr Steineck,

ich habe Ihre Anzeige gesehen und interessiere mich für das Fahrrad.

Wie alt ist das Fahrrad und ist es noch in gutem Zustand? Wäre eine Besichtigung möglich?

Mit freundlichen Grüßen,
[Ihr Name]`,
      keyphrases: [
        { de: 'Ich interessiere mich für das angebotene Fahrrad.', fr: 'Je suis intéressé(e) par le vélo mis en vente.' },
        { de: 'Ich bin diese Woche flexibel.', fr: 'Je suis disponible cette semaine.' }
      ],
      vocab: ['die Anzeige', 'anbieten', 'der Zustand', 'besichtigen', 'die Marke', 'die Reparatur']
    }
  }
];

// =============================================================================
// EXPORTS PAR CATÉGORIE POUR FACILITER L'UTILISATION
// =============================================================================

export const SPRECHEN_BY_CAT = {
  planen: SPRECHEN_TOPICS.filter(t => t.cat === 'planen'),
  praesentieren: SPRECHEN_TOPICS.filter(t => t.cat === 'praesentieren')
};

export const SCHREIBEN_BY_CAT = {
  teil1: SCHREIBEN_TOPICS.filter(t => t.cat === 'teil1'),
  teil2: SCHREIBEN_TOPICS.filter(t => t.cat === 'teil2'),
  teil3: SCHREIBEN_TOPICS.filter(t => t.cat === 'teil3')
};

// Export central
export const ALL_TOPICS = {
  sprechen: SPRECHEN_TOPICS,
  schreiben: SCHREIBEN_TOPICS
};

console.log(`✅ SPRECHEN: ${SPRECHEN_TOPICS.length} sujets (${SPRECHEN_BY_CAT.planen.length} planen + ${SPRECHEN_BY_CAT.praesentieren.length} Präsentation)`);
console.log(`✅ SCHREIBEN: ${SCHREIBEN_TOPICS.length} sujets (${SCHREIBEN_BY_CAT.teil1.length} Teil1 + ${SCHREIBEN_BY_CAT.teil2.length} Teil2 + ${SCHREIBEN_BY_CAT.teil3.length} Teil3)`);