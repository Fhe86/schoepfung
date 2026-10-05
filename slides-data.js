// Folieninhalte pro Methode. Typen: big, img, riddle, est, list, timer, silence
// img: src (Datei in img/), h (Satz auf dem Bild), silence (Sekunden Stille), note (Hinweis für die Lehrkraft, mit N einblendbar)
// riddle: src, pos (Ausschnitt), answer; est: q, a, note; timer: h, secs, sub; list: h, items; big: h, s

(function () {
  var S = {};

  // Hilfsbausteine
  function silenceImg(src, h, note, fit) { return { t: "img", src: src, h: h, silence: 10, note: note, fit: fit }; }
  function est(q, a, note) { return { t: "est", q: q, a: a, note: note }; }

  S.a1 = [
    { t: "img", src: "erde.jpg", h: "", note: "Licht dimmen. 30 Sekunden Stille aushalten. Nichts sagen, nichts erklären." },
    { t: "big", h: "Was fällt euch auf?", s: "Drei bis vier Stimmen sammeln. Nicht bewerten.", note: "Zur Not nachfassen: Was ist das Erste, das ihr seht? Und was seht ihr nicht?" }
  ];

  S.a2 = [
    { t: "big", h: "Was ist das?", s: "Ich zeige euch gleich etwas ganz Nahes. Ihr müsst nur raten.", note: "Jedes Bild in drei Schritten: Ausschnitt, ganzes Bild, Auflösung." },
    { t: "riddle", src: "raetsel-pfauenfeder.jpg", pos: "50% 45%", answer: "Eine Pfauenfeder", note: "Vermutungen sammeln, dann auflösen." },
    { t: "riddle", src: "raetsel-schneeflocke.jpg", pos: "50% 50%", answer: "Eine Schneeflocke", note: "Jede Flocke hat ihre eigene Form." },
    { t: "riddle", src: "raetsel-libelle.jpg", pos: "45% 55%", answer: "Der Flügel einer Libelle", note: "Das Netz aus feinen Adern trägt das Tier im Flug." },
    { t: "riddle", src: "raetsel-iris.jpg", pos: "50% 50%", answer: "Die Iris eines Auges", note: "Bild genau passend zu deinem Fundstück tauschen, falls ein anderes Motiv vorliegt." },
    { t: "big", h: "Wer hat sich das so ausgedacht?", s: "Offen lassen. Keine Antwort geben.", note: "Überleitung in die Staunphase." }
  ];

  S.a3 = [
    { t: "big", h: "Fühlbeutel", s: "Hand rein. Nicht schauen. Drei Wörter aufschreiben.", note: "Beutel reihum geben. Gegenstände vorher sammeln: Muschel, Zapfen, Feder, Stein, Rinde." },
    { t: "timer", h: "Fühlen und aufschreiben", secs: 120, sub: "Wie fühlt es sich an? Was könnte es sein?" },
    { t: "big", h: "Aufdecken", s: "Was hast du vermutet? Was hat dich überrascht?", note: "Zwei, drei Stimmen." },
    { t: "big", h: "Wie viel steckt in einem Ding, das niemand von uns gemacht hat?", s: "", note: "Offene Frage, nicht beantworten." }
  ];

  // ---- Maßstabsreise nach außen ----
  var aussen = [
    { t: "big", h: "Hier sitzen wir.", s: "Dieses Klassenzimmer, etwa 10 Meter breit.", silence: 10, note: "Stufe 1. Danach ein Wort aufschreiben lassen." },
    { t: "big", h: "Unsere Schule.", s: "Von oben ein kleines Rechteck. Etwa 100 Meter.", silence: 10, note: "Stufe 2. Optional hier ein Luftbild der eigenen Schule einfügen." },
    silenceImg("muenchen.jpg", "Unsere Stadt, eine von vielen.", "Stufe 3. Danach ein Wort aufschreiben lassen."),
    silenceImg("erde.jpg", "Rund 12 700 Kilometer Durchmesser.", "Stufe 4. Alle Menschen leben auf dieser dünnen Kruste.", "contain"),
    silenceImg("sonne.jpg", "Das Sonnenlicht braucht gut 8 Minuten bis zu uns.", "Stufe 5. Die Sonne ist rund 150 Millionen Kilometer entfernt.", "contain"),
    silenceImg("sonnensystem.jpg", "Acht Planeten, ein Stern.", "Stufe 6. Planetenmontage der NASA, nicht maßstabsgetreu.", "contain"),
    silenceImg("milchstrasse.jpg", "Unsere Sonne ist einer von Hunderten Milliarden Sternen.", "Stufe 7. Schätzwert, etwa 100 bis 400 Milliarden."),
    silenceImg("deepfield.jpg", "Jeder helle Punkt hier ist eine ganze Galaxie.", "Stufe 8. Ein winziger Himmelsausschnitt, tausende Galaxien."),
    { t: "big", h: "Schaut auf eure Zettel.", s: "Welches Wort ist dir am wichtigsten? Leg es nach oben.", note: "Ende der Reise nach außen." }
  ];

  // ---- Reise nach innen ----
  var innen = [
    { t: "big", h: "Jetzt gehen wir den umgekehrten Weg.", s: "Nicht hinaus, sondern hinein.", note: "Überleitung." },
    silenceImg("hand.jpg", "27 Knochen in einer einzigen Hand.", "Historisches Röntgenbild. Hier ohne Zettel, nur schauen.", "contain"),
    silenceImg("haut.jpg", "Die Haut erneuert sich ständig, ohne dass du etwas tust.", "Haut unter dem Mikroskop."),
    silenceImg("zelle.jpg", "Etwa 30 bis 40 Billionen Zellen, jede ein winziges Kraftwerk.", "Schätzwert der Zellzahl, vor Einsatz prüfen."),
    silenceImg("zellkern.jpg", "In jedem Kern steckt dieselbe Bauanleitung.", "Schema der 23 Chromosomenpaare (NHGRI), englische Beschriftung.", "contain"),
    silenceImg("dna.jpg", "Ausgerollt wäre sie in einer Zelle etwa zwei Meter lang.", "Größenordnung, vor Einsatz prüfen.", "contain"),
    { t: "timer", h: "Puls fühlen", secs: 30, sub: "Zwei Finger an Hals oder Handgelenk. Still spüren.", note: "Eine halbe Minute." },
    { t: "big", h: "Etwa 100 000 Mal am Tag.", s: "Das hat heute Morgen nicht geklingelt. Niemand von euch hat es angeschaltet.", note: "Schätzwert bei rund 70 Schlägen pro Minute." },
    { t: "big", h: "Zu zweit", s: "Was an dir selbst oder an der Welt ist dir noch nie so richtig aufgefallen, obwohl es immer da war?", note: "Je eine halbe Minute, dann wechseln." }
  ];

  S.b1 = aussen;
  S.b2 = innen;
  S.b3 = aussen.concat(innen);

  S.b4 = [
    { t: "big", h: "Sinnes-Stationen", s: "An jeder Station entdeckst du etwas mit deinen Sinnen.", note: "Sechs Stationen vorbereiten, Karten auslegen (material/stationenkarten.html)." },
    { t: "list", h: "Die Stationen", items: ["1 Lupe: genau hinsehen", "2 Fühlen: Rinde, Stein, Moos", "3 Riechen: Kräuter, Augen zu", "4 Hören: 30 Sekunden Stille", "5 Mikroskop oder Handylupe", "6 Puls und Atem"] },
    { t: "timer", h: "Station wechseln in", secs: 120, sub: "Wort und Satz auf den Laufzettel schreiben.", note: "Timer pro Station neu starten." },
    { t: "big", h: "Euer Wort", s: "Welches Wort hat jede Gruppe aufgeschrieben?", note: "Pro Gruppe ein Wort nennen lassen." }
  ];

  S.b5 = [
    { t: "big", h: "Schöpfungsgang", s: "Ihr geht jetzt raus und sucht. Keine Erklärung, nur Hinsehen.", note: "Aufgabenkarten austeilen (material/schoepfungsgang.html)." },
    { t: "list", h: "Regeln", items: ["Zu zweit unterwegs", "Treffpunkt und Zeit merken", "Nichts mitnehmen, was lebt", "Euer Fund zählt, nicht die Menge"] },
    { t: "timer", h: "Zeit draußen", secs: 900, sub: "Zurück am Treffpunkt.", note: "Regenfall: Naturmaterial ins Zimmer holen." },
    { t: "big", h: "Euer Fund", s: "Was war dein Fund? Ein Satz.", note: "Kurze Blitzrunde." }
  ];

  S.c1 = [
    { t: "big", h: "Was ist dir noch nie so richtig aufgefallen, obwohl es immer da war?", s: "Zu zweit, je eine halbe Minute. Dann wechseln.", note: "Satzanfänge an der Tafel lassen oder die nächste Folie zeigen." },
    { t: "list", h: "Satzanfänge", items: ["Mir ist noch nie aufgefallen, dass …", "Ich finde es verrückt, dass …", "Ich frage mich, wie …"] },
    { t: "timer", h: "Gespräch", secs: 240, sub: "Beide kommen dran." }
  ];

  S.c2 = [
    { t: "big", h: "Schätzen und Staunen", s: "Schätzt erst, ohne zu googeln. Ein bisschen daneben liegen ist erlaubt.", note: "Zwei bis drei Fragen reichen. Zahlen vorab prüfen (material/schaetzkarten.html)." },
    est("Wie oft schlägt dein Herz an einem Tag?", "Etwa 100 000 Mal", "Schätzwert bei rund 70 Schlägen pro Minute."),
    est("Wie viele Zellen hat ein Mensch?", "Etwa 30 bis 40 Billionen", "Schätzwert, Spanne."),
    est("Wie viele Knochen hat ein erwachsener Mensch?", "206", ""),
    est("Wie lange braucht das Sonnenlicht bis zur Erde?", "Gut 8 Minuten", "Etwa 8 Minuten 20 Sekunden."),
    est("Wie groß ist der Durchmesser der Erde?", "Rund 12 742 Kilometer", ""),
    est("Wie oft atmest du an einem Tag?", "Rund 20 000 Mal", "Schätzwert."),
    est("Wie viele Sterne hat unsere Milchstraße?", "Etwa 100 bis 400 Milliarden", "Schätzwert, Spanne."),
    est("Wie lang wäre die DNA einer einzigen Zelle, wenn man sie ausrollt?", "Etwa 2 Meter", "Größenordnung."),
    { t: "big", h: "Was überrascht dich?", s: "", note: "Abschluss." }
  ];

  S.c3 = [
    { t: "big", h: "Eine graue, stille Welt", s: "Stell dir vor, alles wäre grau und still. Was würde dir fehlen? Was nicht?", note: "Kurz im Plenum, ca. 90 Sekunden." },
    { t: "list", h: "Gesprächsregeln", items: ["Es gibt keine falsche Antwort", "Begründe mit 'weil'", "Lass die anderen ausreden", "Du darfst länger nachdenken"] },
    { t: "big", h: "Muss etwas nützlich sein, damit es wertvoll ist?", s: "" },
    { t: "big", h: "Kann man etwas geschenkt bekommen, das man nie bestellt hat?", s: "" },
    { t: "big", h: "Ist etwas weniger wunderbar, wenn man es erklären kann?", s: "" },
    { t: "big", h: "Wem kann man für etwas danken, das es schon immer gab?", s: "" },
    { t: "big", h: "Gehört dir dein Herz, dein Atem?", s: "" },
    { t: "timer", h: "Gespräch in Gruppen", secs: 180, sub: "Eine Denkfrage ziehen und diskutieren.", note: "Karten: material/denkfragen.html" }
  ];

  S.d1 = [
    { t: "big", h: "Ich staune, dass …", s: "Schreibe einen Satz. Nimm dein wichtigstes Wort, ein Bild aus der Reise oder etwas ganz anderes.", note: "Beispielkarte vorlesen. Karten aus material/staunkarten.html." },
    { t: "big", h: "Beispiel", s: "Ich staune, dass aus einer einzigen Zelle ein ganzer Mensch wird, der Fußball spielen und Witze verstehen kann." },
    { t: "timer", h: "Schreibzeit", secs: 300, sub: "Fertig? Gestalte die Karte mit einem Symbol.", note: "Auch 'Ich staune nicht, weil …' ist erlaubt." },
    { t: "big", h: "Karten an die Wand", s: "Ohne Namen, wenn du magst.", note: "Wand-Überschrift WUNDER vorher aufhängen." }
  ];

  S.d2 = [
    { t: "list", h: "Das Elfchen", items: ["Zeile 1: ein Wort", "Zeile 2: zwei Wörter", "Zeile 3: drei Wörter", "Zeile 4: vier Wörter", "Zeile 5: ein Wort"] },
    { t: "big", h: "Beispiel", s: "Leise / schlägt mein Herz / seit dem ersten Tag / ich habe nie etwas dafür getan / Geschenk" },
    { t: "timer", h: "Schreibzeit", secs: 600, sub: "Hilfen stehen auf dem Blatt.", note: "Arbeitsblatt material/elfchen.html. Zwei bis drei Freiwillige lesen vor." }
  ];

  S.d3 = [
    { t: "big", h: "Mein Wunder des Alltags", s: "Such dir etwas aus, das du nicht selbst gemacht hast. Zeichne es oder fotografiere es.", note: "Arbeitsblatt material/mein-wunder.html." },
    { t: "timer", h: "Zeichnen oder Foto", secs: 300, sub: "Dann die drei Fragen beantworten." },
    { t: "timer", h: "Fragen beantworten", secs: 300, sub: "Warum ist das ein Wunder? Wer oder was steckt dahinter? Wenn ich es als Geschenk sehe, dann …" }
  ];

  S.e1 = [
    { t: "timer", h: "Galeriegang", secs: 180, sub: "Lies still die Karten der anderen.", note: "Alle stehen auf. Ruhige Musik möglich." },
    { t: "big", h: "Welche Karte ist dir hängen geblieben?", s: "", note: "Zwei bis drei Stimmen." },
    { t: "big", h: "Woher kommt das alles?", s: "Behaltet die Frage bis zur nächsten Stunde im Kopf.", note: "Keine Antwort geben. Wand hängen lassen." }
  ];

  S.e2 = [
    { t: "big", h: "Wofür bin ich heute dankbar, das ich mir nicht selbst gegeben habe?", s: "", note: "Kreis bilden. Stein oder Kerze reicht reihum. Passen ist erlaubt." },
    { t: "list", h: "So geht die Runde", items: ["Wer den Stein hält, spricht", "Ein Satz: Dafür bin ich dankbar …", "Passen ist erlaubt", "Niemand wird kommentiert"] }
  ];

  S.e3 = [
    { t: "timer", h: "Eine Minute Stille", secs: 60, sub: "Blick aus dem Fenster.", note: "Optional ruhige Musik." },
    { t: "big", h: "Ein Wort", s: "Jeder sagt ein einziges Wort, das jetzt in ihm ist.", note: "Blitzlicht." },
    { t: "big", h: "Woher kommt das alles?", s: "", note: "Dann Ende." }
  ];

  window.SLIDES = S;
})();
