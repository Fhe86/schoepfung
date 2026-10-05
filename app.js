(function () {
  "use strict";

  var PHASES = window.PHASES, METHODS = window.METHODS, PRESETS = window.PRESETS;
  var TARGET = 45;
  var STORE = "schoepfung-weg-v1";
  var byId = {};
  METHODS.forEach(function (m) { byId[m.id] = m; });
  var phaseById = {};
  PHASES.forEach(function (p) { phaseById[p.id] = p; });

  // Zustand: pro Phase die gewählte Methoden-ID oder null
  var state = PHASES.map(function () { return null; });

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var el = function (tag, cls, html) {
    var e = document.createElement(tag);
    if (cls) e.className = cls;
    if (html != null) e.innerHTML = html;
    return e;
  };
  function esc(s) {
    return String(s).replace(/[&<>"]/g, function (c) { return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]; });
  }

  /* ---------- Speichern und Teilen ---------- */
  function encodeState() { return state.map(function (s) { return s || "-"; }).join(","); }
  function decodeState(str) {
    var parts = String(str || "").split(",");
    if (parts.length !== PHASES.length) return null;
    var out = [];
    for (var i = 0; i < parts.length; i++) {
      var id = parts[i];
      if (id === "-" || id === "") { out.push(null); continue; }
      if (!byId[id] || byId[id].phase !== PHASES[i].id) return null;
      out.push(id);
    }
    return out;
  }
  function save() {
    var enc = encodeState();
    try { localStorage.setItem(STORE, enc); } catch (e) { /* privater Modus: egal */ }
    try { history.replaceState(null, "", "#weg=" + enc); } catch (e) { /* egal */ }
  }
  function load() {
    var fromHash = null, m = /weg=([^&]+)/.exec(location.hash || "");
    if (m) fromHash = decodeState(decodeURIComponent(m[1]));
    if (fromHash) return fromHash;
    try {
      var s = decodeState(localStorage.getItem(STORE));
      if (s) return s;
    } catch (e) { /* egal */ }
    return decodeState(PRESETS[0].ids.map(function (x) { return x || "-"; }).join(","));
  }

  /* ---------- Diagramm aufbauen ---------- */
  var cols = $("#cols"), svg = $("#links");

  function buildBoard() {
    PHASES.forEach(function (ph, idx) {
      var col = el("div", "col");
      col.style.setProperty("--c", ph.color);
      col.dataset.phase = ph.id;
      col.appendChild(el("div", "colhead",
        '<span class="no">' + ph.no + "</span><b>" + esc(ph.title) + "</b><small>" + esc(ph.sub) + "</small>"));
      METHODS.filter(function (m) { return m.phase === ph.id; }).forEach(function (m) {
        col.appendChild(buildNode(m, idx));
      });
      var skip = el("button", "skip", "Diese Phase auslassen");
      skip.type = "button";
      skip.setAttribute("aria-pressed", "false");
      skip.addEventListener("click", function () { state[idx] = null; update(); });
      col.appendChild(skip);
      cols.appendChild(col);
    });
  }

  function buildNode(m, idx) {
    var n = el("div", "node");
    n.setAttribute("role", "radio");
    n.setAttribute("aria-checked", "false");
    n.tabIndex = 0;
    n.dataset.id = m.id;
    n.innerHTML =
      "<b>" + esc(m.title) + "</b><p>" + esc(m.teaser) + "</p>" +
      '<div class="tags"><span class="tag min">' + m.min + " Min</span>" +
      '<span class="tag">' + esc(m.form) + "</span>" +
      '<span class="tag prep-' + m.prep + '">Aufwand ' + m.prep + "</span>" +
      '<button type="button" class="detailbtn">Details</button></div>';
    function choose() { state[idx] = state[idx] === m.id ? null : m.id; update(); }
    n.addEventListener("click", function (e) {
      if (e.target.closest(".detailbtn")) { openDetails(m.id); return; }
      choose();
    });
    n.addEventListener("keydown", function (e) {
      if (e.target !== n) return;
      if (e.key === " " || e.key === "Enter") { e.preventDefault(); choose(); }
    });
    return n;
  }

  /* ---------- Anzeige aktualisieren ---------- */
  function chosen() {
    return state.map(function (id, i) { return id ? byId[id] : null; });
  }
  function totalMin() {
    return chosen().reduce(function (s, m) { return s + (m ? m.min : 0); }, 0);
  }

  function update() {
    // Knoten markieren
    document.querySelectorAll(".node").forEach(function (n) {
      var phIdx = PHASES.findIndex(function (p) { return p.id === byId[n.dataset.id].phase; });
      n.setAttribute("aria-checked", state[phIdx] === n.dataset.id ? "true" : "false");
    });
    document.querySelectorAll(".col").forEach(function (c, i) {
      c.querySelector(".skip").setAttribute("aria-pressed", state[i] ? "false" : "true");
    });

    // Seitenleiste
    var list = $("#weglist"), bar = $("#timebar");
    list.innerHTML = "";
    bar.innerHTML = "";
    var total = totalMin();
    chosen().forEach(function (m, i) {
      var ph = PHASES[i], li = el("li");
      li.style.setProperty("--c", ph.color);
      li.innerHTML = '<span class="dot">' + ph.no + "</span>" +
        (m ? "<span>" + esc(m.title) + "</span>" : '<span class="empty">' + esc(ph.title) + ": ausgelassen</span>") +
        '<span class="min">' + (m ? m.min + " Min" : "") + "</span>";
      list.appendChild(li);
      if (m) {
        var seg = el("i");
        seg.style.setProperty("--c", ph.color);
        seg.style.flex = String(m.min);
        bar.appendChild(seg);
      }
    });
    if (total < TARGET) {
      var rest = el("i");
      rest.style.setProperty("--c", "transparent");
      rest.style.flex = String(TARGET - total);
      bar.appendChild(rest);
    }
    var tt = $("#timetext");
    var diff = TARGET - total;
    tt.className = "timetext " + (diff < 0 ? "over" : (diff <= 4 ? "fit" : ""));
    if (total === 0) tt.textContent = "Noch nichts gewählt.";
    else if (diff < 0) tt.textContent = total + " Minuten, das sind " + (-diff) + " zu viel für 45 Minuten. Für eine Doppelstunde passt es.";
    else if (diff === 0) tt.textContent = "Genau 45 Minuten.";
    else tt.textContent = total + " von 45 Minuten, " + diff + " Minuten Puffer.";

    // Presets markieren
    var enc = encodeState();
    document.querySelectorAll(".preset").forEach(function (b) {
      b.classList.toggle("on", b.dataset.enc === enc);
    });

    drawLinks();
    save();
  }

  /* ---------- Verbindungslinien ---------- */
  function drawLinks() {
    svg.innerHTML = "";
    if (window.matchMedia("(max-width: 1100px)").matches) return;
    var board = $("#board").getBoundingClientRect();
    var pts = [];
    state.forEach(function (id, i) {
      if (!id) return;
      var n = document.querySelector('.node[data-id="' + id + '"]');
      if (!n) return;
      var r = n.getBoundingClientRect();
      pts.push({
        l: [r.left - board.left, r.top - board.top + Math.min(r.height / 2, 60)],
        r: [r.right - board.left, r.top - board.top + Math.min(r.height / 2, 60)]
      });
    });
    for (var k = 0; k < pts.length - 1; k++) {
      var a = pts[k].r, b = pts[k + 1].l, mid = (a[0] + b[0]) / 2;
      var p = document.createElementNS("http://www.w3.org/2000/svg", "path");
      p.setAttribute("d", "M" + a[0] + "," + a[1] + " C" + mid + "," + a[1] + " " + mid + "," + b[1] + " " + b[0] + "," + b[1]);
      svg.appendChild(p);
    }
  }

  /* ---------- Details ---------- */
  var dlg = $("#dlg");
  function openDetails(id) {
    var m = byId[id], ph = phaseById[m.phase];
    var idx = PHASES.indexOf(ph);
    var h = '<div class="dlg" style="--c:' + ph.color + '">' +
      '<div class="phase">Phase ' + ph.no + ": " + esc(ph.title) + "</div>" +
      "<h2>" + esc(m.title) + "</h2>" +
      '<div class="tags" style="--c:' + ph.color + '"><span class="tag min">' + m.min + " Min</span><span class=\"tag\">" + esc(m.form) +
      '</span><span class="tag prep-' + m.prep + '">Aufwand ' + m.prep + "</span></div>" +
      "<p style=\"margin-top:10px\">" + esc(m.teaser) + "</p><h3>Ablauf</h3><ol>";
    m.steps.forEach(function (s) { h += '<li><span class="t">' + esc(s[0]) + "</span><span>" + esc(s[1]) + "</span></li>"; });
    h += "</ol>";
    if (m.say && m.say.length) {
      h += "<h3>Formulierungen</h3>";
      m.say.forEach(function (s) { h += '<div class="say"><span>' + esc(s[0]) + "</span>" + esc(s[1]) + "</div>"; });
    }
    if (m.material && m.material.length) {
      h += "<h3>Material</h3><div class=\"matlinks\">";
      m.material.forEach(function (x) { h += '<a href="' + esc(x[1]) + '" target="_blank" rel="noopener">' + esc(x[0]) + "</a>"; });
      h += "</div>";
    }
    h += '<h3>Praxis-Hinweis</h3><div class="tipbox">' + esc(m.tip) + "</div>";
    h += '<div class="dlgfoot"><button type="button" class="btn primary" id="dlgPick">' +
      (state[idx] === m.id ? "Aus meinem Weg entfernen" : "In meinen Weg übernehmen") +
      '</button><button type="button" class="btn" id="dlgClose">Schließen</button></div></div>';
    dlg.innerHTML = h;
    $("#dlgPick").addEventListener("click", function () {
      state[idx] = state[idx] === m.id ? null : m.id;
      dlg.close();
      update();
    });
    $("#dlgClose").addEventListener("click", function () { dlg.close(); });
    if (typeof dlg.showModal === "function") dlg.showModal(); else dlg.setAttribute("open", "");
  }
  dlg.addEventListener("click", function (e) { if (e.target === dlg) dlg.close(); });

  /* ---------- Presets ---------- */
  function buildPresets() {
    var box = $("#presets");
    PRESETS.forEach(function (p) {
      var b = el("button", "preset", "<b>" + esc(p.name) + "</b><span>" + esc(p.desc) + "</span>");
      b.type = "button";
      b.dataset.enc = p.ids.map(function (x) { return x || "-"; }).join(",");
      b.addEventListener("click", function () {
        state = decodeState(b.dataset.enc);
        update();
      });
      box.appendChild(b);
    });
  }

  /* ---------- Bibliothek ---------- */
  function buildLibrary() {
    var lib = $("#lib");
    PHASES.forEach(function (ph) {
      var c = el("div", "libcard");
      c.style.borderTop = "5px solid " + ph.color;
      var h = "<h3>Phase " + ph.no + ": " + esc(ph.title) + "</h3><ul>";
      METHODS.filter(function (m) { return m.phase === ph.id; }).forEach(function (m) {
        h += '<li><a href="#" data-open="' + m.id + '">' + esc(m.title) + "</a> (" + m.min + " Min)</li>";
      });
      c.innerHTML = h + "</ul>";
      lib.appendChild(c);
    });
    lib.addEventListener("click", function (e) {
      var a = e.target.closest("[data-open]");
      if (!a) return;
      e.preventDefault();
      openDetails(a.dataset.open);
    });
  }

  /* ---------- Druck des eigenen Plans ---------- */
  function buildPlanPrint() {
    var box = $("#planprint"), t = 0;
    var h = '<div class="pp"><h1>Mein Stundenverlauf: Staunen über die Schöpfung</h1>' +
      '<div class="sub">Katholische Religion, 8. Klasse Mittelschule, KR8 Lernbereich 3. Gesamtdauer: ' + totalMin() + " Minuten.</div>";
    chosen().forEach(function (m, i) {
      if (!m) return;
      var ph = PHASES[i], from = t;
      t += m.min;
      h += '<div class="blk" style="--c:' + ph.color + '"><h2>' + ph.no + ". " + esc(m.title) + "</h2>" +
        '<div class="when">Minute ' + from + " bis " + t + " | " + esc(m.form) + " | " + esc(ph.title) + "</div><ol>";
      m.steps.forEach(function (s) { h += "<li>" + esc(s[1]) + "</li>"; });
      h += "</ol>";
      (m.say || []).forEach(function (s) { h += '<div class="q">' + esc(s[0]) + ": " + esc(s[1]) + "</div>"; });
      if (m.material && m.material.length) {
        h += '<div class="m">Material: ' + m.material.map(function (x) { return esc(x[0]); }).join(", ") + "</div>";
      }
      h += '<div class="m">Hinweis: ' + esc(m.tip) + "</div></div>";
    });
    // Gesamte Vorbereitungsliste, ohne Doppelungen
    var seen = {}, needs = [];
    chosen().forEach(function (m) {
      if (!m) return;
      (window.NEEDS[m.id] || []).forEach(function (n) { if (!seen[n]) { seen[n] = 1; needs.push(n); } });
    });
    if (needs.length) {
      h += '<div class="blk" style="--c:#c8962e"><h2>Vorbereitungsliste</h2><ol>' +
        needs.map(function (n) { return "<li>" + esc(n) + "</li>"; }).join("") + "</ol></div>";
    }
    box.innerHTML = h + "</div>";
  }

  /* ---------- Folien für meinen Weg ---------- */
  function openSlides(e) {
    if (e) e.preventDefault();
    window.open("folien.html#weg=" + encodeState(), "_blank", "noopener");
  }
  $("#openSlides").addEventListener("click", openSlides);
  $("#slidesMine").addEventListener("click", openSlides);

  $("#printPlan").addEventListener("click", function () {
    buildPlanPrint();
    document.body.classList.add("print-plan");
    window.print();
  });
  window.addEventListener("afterprint", function () { document.body.classList.remove("print-plan"); });

  /* ---------- Link teilen ---------- */
  $("#copyLink").addEventListener("click", function () {
    var row = $("#linkrow"), input = $("#linkinput");
    input.value = location.origin + location.pathname + "#weg=" + encodeState();
    row.classList.add("show");
    input.focus();
    input.select();
    var done = function () { $("#copyLink").textContent = "Link kopiert"; setTimeout(function () { $("#copyLink").textContent = "Meinen Weg als Link teilen"; }, 2500); };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(input.value).then(done, function () { /* Feld ist markiert, manuell kopieren */ });
    }
  });

  /* ---------- Theme ---------- */
  var root = document.documentElement, themeBtn = $("#theme");
  function applyTheme(t) {
    if (t) root.setAttribute("data-theme", t); else root.removeAttribute("data-theme");
    var dark = t ? t === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    themeBtn.textContent = dark ? "Hell" : "Dunkel";
  }
  var saved = null;
  try { saved = localStorage.getItem("schoepfung-theme"); } catch (e) { /* egal */ }
  applyTheme(saved);
  themeBtn.addEventListener("click", function () {
    var dark = root.getAttribute("data-theme") ? root.getAttribute("data-theme") === "dark" : window.matchMedia("(prefers-color-scheme: dark)").matches;
    var next = dark ? "light" : "dark";
    try { localStorage.setItem("schoepfung-theme", next); } catch (e) { /* egal */ }
    applyTheme(next);
    setTimeout(drawLinks, 0);
  });

  /* ---------- Start ---------- */
  buildBoard();
  buildPresets();
  buildLibrary();
  state = load();
  update();
  window.addEventListener("resize", drawLinks);
  if ("ResizeObserver" in window) new ResizeObserver(drawLinks).observe($("#board"));
  window.addEventListener("hashchange", function () {
    var m = /weg=([^&]+)/.exec(location.hash || "");
    var s = m && decodeState(decodeURIComponent(m[1]));
    if (s && s.join() !== state.join()) { state = s; update(); }
  });
})();
