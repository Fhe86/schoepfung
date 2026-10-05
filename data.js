// Daten für den Stunden-Baukasten "Staunen über die Schöpfung"
// Alle Minutenangaben sind Richtwerte. Material liegt in /material/.

window.PHASES = [
  { id: "p1", no: 1, title: "Einstieg", sub: "Ankommen und neugierig werden", color: "#3b5b8f" },
  { id: "p2", no: 2, title: "Staunen erleben", sub: "Der Kern der Stunde", color: "#2f7f86" },
  { id: "p3", no: 3, title: "Austausch", sub: "Sprechen und Denken", color: "#b8613a" },
  { id: "p4", no: 4, title: "Sichtbar machen", sub: "Das eigene Staunen festhalten", color: "#7b5ea7" },
  { id: "p5", no: 5, title: "Ausklang", sub: "Offen schließen", color: "#4c8a4f" }
];

window.METHODS = [
  /* ---------- Phase 1: Einstieg ---------- */
  {
    id: "a1", phase: "p1", title: "Stilles Bild", min: 5, form: "Plenum", prep: "gering",
    teaser: "Die Erde aus dem All, 30 Sekunden Stille, offene Frage.",
    steps: [
      ["0:00", "Licht dimmen, Bild der Erde aus dem All an die Wand (zum Beispiel NASA, Blue Marble). Kein Titel, kein Kommentar."],
      ["0:30", "Etwa 30 Sekunden Stille aushalten."],
      ["1:00", "Impuls stellen, drei bis vier Stimmen sammeln, nichts bewerten."],
      ["4:00", "Überleitung zur nächsten Phase."]
    ],
    say: [
      ["Lehrkraft", "Was fällt euch auf?"],
      ["Nachfassen", "Was ist das Erste, das ihr seht? Und was seht ihr nicht?"]
    ],
    material: [["Bildfolgen und Quellen", "material/bildfolgen.html"]],
    tip: "Jugendliche sagen anfangs oft nur 'ist halt die Erde'. Das ist okay. Stille aushalten, nicht retten."
  },
  {
    id: "a2", phase: "p1", title: "Was ist das? Rätselbilder", min: 6, form: "Plenum", prep: "mittel",
    teaser: "Makroaufnahmen raten, dann auflösen. Das Staunen kommt durch die Auflösung.",
    steps: [
      ["0:00", "Drei bis vier Nahaufnahmen zeigen (Pfauenfeder, Schneeflocke, Libellenflügel, Iris des Auges). Zuerst nur Ausschnitt, dann das ganze Objekt."],
      ["1:00", "Zu jedem Bild: Was ist das? Vermutungen sammeln, Handzeichen oder Zuruf."],
      ["4:30", "Auflösen. Wer lag richtig? Eine Frage: Wer hat sich das so ausgedacht, dass es so fein gebaut ist?"]
    ],
    say: [["Lehrkraft", "Ich zeige euch gleich etwas ganz Nahes. Ihr müsst nur raten, was es ist."]],
    material: [["Bildfolgen und Quellen", "material/bildfolgen.html"]],
    tip: "Bilder vorher aus freien Quellen zusammenstellen (Wikimedia Commons, Lizenz prüfen). Der Aufwand ist die Bildsuche, nicht die Stunde."
  },
  {
    id: "a3", phase: "p1", title: "Fühlbeutel", min: 7, form: "Einzelarbeit, Plenum", prep: "mittel",
    teaser: "Naturgegenstand blind ertasten, beschreiben, überraschen lassen.",
    steps: [
      ["0:00", "Ein Stoffbeutel pro Tisch oder reihum. Darin Muschel, Tannenzapfen, Feder, Stein oder Rinde."],
      ["1:00", "Hand in den Beutel, nicht schauen, ertasten. Drei Wörter auf den Zettel schreiben."],
      ["4:00", "Aufdecken, Vermutung mit Wirklichkeit vergleichen."],
      ["6:00", "Staunfrage: Wie viel steckt in so einem Ding, das niemand von uns gemacht hat?"]
    ],
    say: [["Lehrkraft", "Schließt die Augen oder schaut weg. Ihr fühlt nur. Was ist es?"]],
    material: [["Arbeitsblatt Fühlbeutel", "material/fuehlbeutel.html"]],
    tip: "Gegenstände vorher sammeln, am besten beim Spaziergang. Eine Feder und ein Stein reichen für eine Klasse, wenn reihum getastet wird."
  },

  /* ---------- Phase 2: Staunen erleben ---------- */
  {
    id: "b1", phase: "p2", title: "Maßstabsreise nach außen", min: 12, form: "Plenum, Einzelarbeit", prep: "mittel",
    teaser: "Vom Klassenzimmer bis zur Galaxie. Nach jeder Stufe Stille und ein Wort.",
    steps: [
      ["0:00", "Stufen: Klassenzimmer, Schule, Region, Erde, Erde und Sonne, Sonnensystem, Milchstraße, Weltall (8 Bilder)."],
      ["0:30", "Pro Stufe: Bild zeigen, ein Satz dazu, 10 Sekunden Stille."],
      ["", "Danach schreibt jeder ein einziges Wort auf einen Zettel. Pro Stufe ein Zettel, die Zettel bleiben auf dem Tisch."],
      ["10:30", "Zum Schluss: Welches Wort ist dir am wichtigsten? Nach oben legen."]
    ],
    say: [
      ["Auftrag", "Bei jedem Bild bekommt ihr zehn Sekunden Stille. Dann schreibt ihr ein einziges Wort auf, das euch durch den Kopf geht. Kein Satz, kein Richtig und Falsch."]
    ],
    material: [["Bildfolgen und Quellen", "material/bildfolgen.html"]],
    tip: "Es geht nicht um Astronomie. Wenn die Klasse bei einem Bild hängen bleibt, lieber länger dort bleiben und eine Stufe streichen. Alternativ der Film 'Powers of Ten' (Eames, 1977)."
  },
  {
    id: "b2", phase: "p2", title: "Reise nach innen: Das Wunder bin ich", min: 12, form: "Plenum, Partnerarbeit", prep: "mittel",
    teaser: "Von der Hand zur Zelle zur DNA. Puls fühlen. Der Körper als Geschenk.",
    steps: [
      ["0:00", "Zoom nach innen: Hand, Haut unter dem Mikroskop, Zelle, Zellkern, DNA. Pro Stufe ein Satz und zehn Sekunden Stille, ohne Zettel."],
      ["5:00", "Mitmachen: zwei Finger an Hals oder Handgelenk, eine halbe Minute den eigenen Puls spüren."],
      ["8:00", "Partnergespräch, je eine halbe Minute: Was an dir selbst oder an der Welt ist dir noch nie so richtig aufgefallen, obwohl es immer da war?"]
    ],
    say: [
      ["Lehrkraft", "Das hat heute Morgen nicht geklingelt, das hat niemand von euch angeschaltet. Es schlägt etwa 100 000 Mal am Tag."]
    ],
    material: [["Bildfolgen und Quellen", "material/bildfolgen.html"], ["Schätzkarten (Zahlen prüfen)", "material/schaetzkarten.html"]],
    tip: "Der Körper kann ein sensibles Thema sein. Immer vom Wunder sprechen, dass es funktioniert, nie vom 'perfekten Körper'. Niemand muss etwas Persönliches preisgeben."
  },
  {
    id: "b3", phase: "p2", title: "Doppelreise: außen und innen", min: 22, form: "Plenum, Einzel, Partner", prep: "mittel",
    teaser: "Beide Reisen hintereinander: erst ins Weltall, dann in die Zelle. Der klassische Weg.",
    steps: [
      ["0:00", "Maßstabsreise nach außen (etwa 10 Minuten, 6 bis 8 Stufen, Wortzettel)."],
      ["10:00", "Überleitung: 'Jetzt gehen wir den umgekehrten Weg. Nicht hinaus, sondern hinein.'"],
      ["11:00", "Reise nach innen mit Puls fühlen (etwa 8 Minuten)."],
      ["19:00", "Kurzes Partnergespräch (3 Minuten) zur Leitfrage."]
    ],
    say: [["Überleitung", "Wir gehen jetzt einmal ein Stück weg von hier. Und dann wieder ganz nah ran. Ich bitte euch nur um eines: Schaut hin und lasst euch Zeit."]],
    material: [["Bildfolgen und Quellen", "material/bildfolgen.html"], ["Schätzkarten", "material/schaetzkarten.html"]],
    tip: "Das ist der Weg aus dem ersten Stundenverlauf. Braucht gut 20 Minuten, deshalb im Weg-Plan keine Austauschphase mehr einplanen."
  },
  {
    id: "b4", phase: "p2", title: "Sinnes-Stationen im Klassenzimmer", min: 15, form: "Gruppen- oder Partnerarbeit", prep: "hoch",
    teaser: "Sechs Stationen zum Anfassen, Riechen, Hören und Genau-Hinsehen. Laufzettel mit Staunwörtern.",
    steps: [
      ["0:00", "Sechs Tische mit Stationenkarte vorbereiten (Lupe, Fühlen, Riechen, Hören, Mikroskop, Puls)."],
      ["2:00", "Zu zweit im Uhrzeigersinn, pro Station etwa 2 Minuten, auf Zeichen weiter."],
      ["", "Auf dem Laufzettel pro Station ein Wort und ein Satz 'Ich staune, dass …'."],
      ["14:00", "Ein Wort aus jeder Gruppe nennen lassen."]
    ],
    say: [["Lehrkraft", "An jeder Station gibt es etwas, das ihr mit den Sinnen entdeckt. Schreibt auf, was euch überrascht."]],
    material: [["Stationenkarten und Laufzettel", "material/stationenkarten.html"]],
    tip: "Pro Station Material bereitlegen. Bei 15 Minuten reichen vier Stationen. Für sechs Stationen besser eine Doppelstunde."
  },
  {
    id: "b5", phase: "p2", title: "Schöpfungsgang draußen", min: 20, form: "Partnerarbeit", prep: "mittel",
    teaser: "Aufgabenkarten für den Schulhof: Älter als ich, ganz klein, ganz leise.",
    steps: [
      ["0:00", "Treffpunkt und Regeln klären, jede Zweiergruppe erhält zwei bis drei Aufgabenkarten."],
      ["3:00", "12 bis 15 Minuten draußen unterwegs, Laufzettel mit Stichwörtern, ein Foto oder eine Skizze."],
      ["18:00", "Treffpunkt, kurze Blitzrunde: Was war dein Fund?"]
    ],
    say: [["Lehrkraft", "Ihr geht jetzt raus und sucht. Keine Erklärung, nur Hinsehen. Euer Fund zählt, nicht die Menge."]],
    material: [["Aufgabenkarten und Laufzettel", "material/schoepfungsgang.html"]],
    tip: "Braucht Wetter und Zeit. Regen-Plan B: Pflanzen und Naturmaterial ins Klassenzimmer holen (Stationen oder Fühlbeutel)."
  },

  /* ---------- Phase 3: Austausch ---------- */
  {
    id: "c1", phase: "p3", title: "Partnergespräch mit Satzanfängen", min: 5, form: "Partnerarbeit", prep: "gering",
    teaser: "Zu zweit erzählen, was einem selbst aufgefallen ist.",
    steps: [
      ["0:00", "Frage an die Tafel: Was ist dir noch nie so richtig aufgefallen, obwohl es immer da war?"],
      ["0:30", "Zu zweit, jeder eine halbe bis eine Minute. Dann wechseln."],
      ["4:00", "Zwei bis drei Stimmen ins Plenum holen, freiwillig."]
    ],
    say: [["Hilfe an der Tafel", "Mir ist noch nie aufgefallen, dass … / Ich finde es verrückt, dass … / Ich frage mich, wie …"]],
    material: [["Denkfragen (Karten)", "material/denkfragen.html"]],
    tip: "Satzanfänge helfen ruhigeren Schülern. Niemand muss etwas Persönliches erzählen, ein Beispiel aus der Natur genügt."
  },
  {
    id: "c2", phase: "p3", title: "Schätzen und Staunen", min: 8, form: "Plenum", prep: "mittel",
    teaser: "Wie viele Herzschläge am Tag? Erst schätzen, dann auflösen, dann staunen.",
    steps: [
      ["0:00", "Karte mit Schätzfrage zeigen, alle schreiben ihre Schätzung auf einen Zettel."],
      ["1:00", "Lösung zeigen. Wer liegt am nächsten? Kurzer Applaus."],
      ["", "Zwei bis drei Fragen reichen."],
      ["7:00", "Abschlussfrage: Was überrascht dich?"]
    ],
    say: [["Lehrkraft", "Schätzt erst, ohne zu googeln. Ein bisschen daneben liegen ist ausdrücklich erlaubt."]],
    material: [["Schätzkarten mit Lösungsseite", "material/schaetzkarten.html"]],
    tip: "Zahlen sind teils Schätzwerte. Vor dem Einsatz prüfen und im Zweifel 'etwa' sagen. Die Lösungsseite hat ein Prüffeld."
  },
  {
    id: "c3", phase: "p3", title: "Philosophieren: Denkfragen", min: 8, form: "Plenum oder Kleingruppen", prep: "gering",
    teaser: "Gedankenexperiment und Denkfragen. Passt zum Lehrplan 'philosophisch denken'.",
    steps: [
      ["0:00", "Gedankenexperiment: Die Welt wäre komplett grau und still. Was würde dir fehlen? Was nicht?"],
      ["1:30", "Kleingruppen ziehen je eine Denkfrage, drei Minuten Gespräch."],
      ["6:00", "Je eine Gruppe nennt Frage und eine Idee. Nicht bewerten."]
    ],
    say: [["Gesprächsregel", "Es gibt keine falsche Antwort. Begründet mit 'weil'. Lasst euch ausreden."]],
    material: [["Denkfragen-Karten", "material/denkfragen.html"]],
    tip: "Bei Mittelschülern lieber wenige Fragen intensiv als alle acht anreißen. Das Gespräch trägt, wenn die Lehrkraft nicht antwortet."
  },

  /* ---------- Phase 4: Sichtbar machen ---------- */
  {
    id: "d1", phase: "p4", title: "Staunkarten und Wunderwand", min: 10, form: "Einzelarbeit", prep: "gering",
    teaser: "Ein Satz 'Ich staune, dass …' pro Schüler. Die Karten ergeben eine Wand.",
    steps: [
      ["0:00", "Karten austeilen, Auftrag erklären, eigene Beispielkarte vorlesen."],
      ["1:00", "Stille Schreibzeit, fünf Minuten. Wer fertig ist, gestaltet die Karte (Symbol, Skizze)."],
      ["6:00", "Alle hängen ihre Karte an die Wand 'Wunder', ohne Namen, wenn gewünscht."]
    ],
    say: [
      ["Auftrag", "Schreibt einen Satz, der mit 'Ich staune, dass …' beginnt. Nehmt euer wichtigstes Wort von den Zetteln, ein Bild aus der Reise oder etwas ganz anderes aus eurem Leben."],
      ["Beispielkarte", "Ich staune, dass aus einer einzigen Zelle ein ganzer Mensch wird, der Fußball spielen und Witze verstehen kann."]
    ],
    material: [["Staunkarten und Wand-Überschrift", "material/staunkarten.html"]],
    tip: "Auch 'Ich staune nicht, weil …' ist erlaubt. So muss niemand heucheln. Karten nicht korrigieren oder vorlesen lassen."
  },
  {
    id: "d2", phase: "p4", title: "Staun-Elfchen", min: 12, form: "Einzelarbeit", prep: "gering",
    teaser: "Ein Gedicht aus elf Wörtern. Kurz, kreativ und auch für Schreibmuffel machbar.",
    steps: [
      ["0:00", "Aufbau erklären: 1, 2, 3, 4, 1 Wörter in fünf Zeilen. Beispiel an der Tafel."],
      ["2:00", "Elfchen schreiben, zehn Minuten, Hilfen auf dem Blatt."],
      ["10:00", "Zwei bis drei Freiwillige lesen halblaut vor oder hängen ans Plakat."]
    ],
    say: [["Beispiel", "Leise / schlägt mein Herz / seit dem ersten Tag / ich habe nie etwas dafür getan / Geschenk"]],
    material: [["Elfchen-Vorlage", "material/elfchen.html"]],
    tip: "Zeile 4 ('Ich …') verbindet das Staunen mit dem Geschenk-Gedanken, ohne dass das Wort fallen muss."
  },
  {
    id: "d3", phase: "p4", title: "Mein Wunder des Alltags", min: 12, form: "Einzelarbeit", prep: "gering",
    teaser: "Zeichnen oder fotografieren, beschriften, begründen. Für alle, die lieber Bilder machen.",
    steps: [
      ["0:00", "Auftrag: Such dir ein Wunder aus dem Alltag, das du nicht selbst gemacht hast."],
      ["1:00", "Zeichnen oder (falls erlaubt) mit dem Tablet fotografieren und einkleben, 5 Minuten."],
      ["6:00", "Drei Fragen zum Bild schriftlich beantworten."],
      ["11:00", "Bilder auslegen, kurzer Blick."]
    ],
    say: [["Frage 3", "Wenn ich es als Geschenk sehe, dann …"]],
    material: [["Arbeitsblatt Mein Wunder", "material/mein-wunder.html"]],
    tip: "Mit der iPad-Klasse lässt sich das Foto direkt auf dem Gerät aufnehmen und in OneNote oder auf dem Blatt festhalten."
  },

  /* ---------- Phase 5: Ausklang ---------- */
  {
    id: "e1", phase: "p5", title: "Galeriegang und offene Frage", min: 6, form: "Plenum", prep: "gering",
    teaser: "Wand ablaufen, eine Karte nennen, eine Frage mitnehmen. Keine Antwort geben.",
    steps: [
      ["0:00", "Alle stehen auf und lesen still die Karten, etwa drei Minuten."],
      ["3:00", "Zurück auf die Plätze, zwei bis drei Stimmen: Welche Karte ist dir hängen geblieben?"],
      ["5:00", "Abschlussfrage stellen und stehen lassen."]
    ],
    say: [["Abschluss", "Das alles gab es schon, bevor einer von uns da war. Woher kommt das eigentlich? Behaltet die Frage bis zur nächsten Stunde im Kopf."]],
    material: [["Staunkarten und Wand-Überschrift", "material/staunkarten.html"]],
    tip: "Keine Antwort geben, weder 'Gott hat das gemacht' noch 'die Wissenschaft sagt'. Die Wand hängen lassen, sie wird in der Folgestunde gebraucht."
  },
  {
    id: "e2", phase: "p5", title: "Dankrunde im Kreis", min: 6, form: "Plenum im Kreis", prep: "gering",
    teaser: "Stein oder Kerze geht reihum: 'Dafür bin ich dankbar.' Passen ist erlaubt.",
    steps: [
      ["0:00", "Stühle zum Kreis oder stehend im Kreis. Stein oder Kerze in die Mitte."],
      ["1:00", "Wer den Stein hält, sagt einen Satz: Dafür bin ich dankbar … Passen ist erlaubt."],
      ["5:00", "Stille, kurzer Abschluss ohne Kommentar."]
    ],
    say: [["Impuls", "Wofür bin ich heute dankbar, das ich mir nicht selbst gegeben habe?"]],
    material: [["Dankkarten und Anleitung", "material/dankkarten.html"]],
    tip: "Bewusst neutral formuliert, offen für alle Schüler. Keine Pflicht zum Gebet. Das Wort 'Geschenk' soll von den Schülern kommen."
  },
  {
    id: "e3", phase: "p5", title: "Stille und Ein-Wort-Blitzlicht", min: 4, form: "Plenum", prep: "gering",
    teaser: "Eine Minute Blick aus dem Fenster, dann ein Wort pro Kind. Ruhig und kurz.",
    steps: [
      ["0:00", "Eine Minute Stille, Blick aus dem Fenster oder ruhige Musik."],
      ["1:30", "Blitzlicht: Jeder sagt ein einziges Wort, das jetzt in ihm ist."],
      ["3:30", "Offene Frage: Woher kommt das alles? Dann Ende."]
    ],
    say: [["Lehrkraft", "Schaut eine Minute nach draußen. Dann sagt jeder nur ein Wort."]],
    material: [["Dankkarten (Alternativen)", "material/dankkarten.html"]],
    tip: "Die kürzeste Variante, wenn die Zeit knapp ist."
  }
];

// Fertige Wege als Vorschlag (Methoden-IDs, eine pro Phase oder null)
window.PRESETS = [
  { id: "klassiker", name: "Der Klassiker", desc: "Bildreise außen und innen, Wunderwand, Galeriegang.", ids: ["a1", "b3", null, "d1", "e1"] },
  { id: "kompakt", name: "Kompakt und ruhig", desc: "Nur eine Reise, dazu Gespräch und Karten. Passt gut in 45 Minuten.", ids: ["a1", "b1", "c1", "d1", "e3"] },
  { id: "draussen", name: "Draußen und mit den Sinnen", desc: "Schöpfungsgang, Foto oder Zeichnung, Dankrunde.", ids: ["a3", "b5", null, "d3", "e2"] },
  { id: "kreativ", name: "Schreiben und Denken", desc: "Körper-Reise, Philosophieren, Elfchen.", ids: ["a2", "b2", "c3", "d2", "e3"] }
];
