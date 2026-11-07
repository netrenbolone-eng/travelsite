(function () {
  var C = window.SITE_CONFIG, H = C.home, $ = function (s) { return document.querySelector(s); }, $$ = function (s) { return [].slice.call(document.querySelectorAll(s)); };
  var lang = C.defaultLang, cat = "all", started = false, tm;
  try { var sl = localStorage.getItem("lang"); if (sl && C.languages.indexOf(sl) > -1) lang = sl; } catch (e) {}
  var L = function (o) { return o ? (o[lang] || o.en || "") : ""; };
  var T = function (k) { var d = C.i18n[lang] || C.i18n.en; return d[k] || C.i18n.en[k] || k; };
  var money = function (n) { return new Intl.NumberFormat(lang, { style: "currency", currency: C.currency, maximumFractionDigits: 0 }).format(n); };
  var digits = function (s) { return String(s).replace(/\D/g, ""); };
  var SC = { yacht: "sunset", vip: "bay", exclusive: "night", private: "city", family: "beach" };

  // ---- Аналитика: GA4 + Meta Pixel (только если заданы ID) ----
  var A = C.analytics || {};
  window.dataLayer = window.dataLayer || []; window.gtag = function () { window.dataLayer.push(arguments); };
  if (A.ga4Id) { var s = document.createElement("script"); s.async = true; s.src = "https://www.googletagmanager.com/gtag/js?id=" + A.ga4Id; document.head.appendChild(s); gtag("js", new Date()); gtag("config", A.ga4Id); }
  if (A.metaPixelId) {
    !function (f, b, e, v, n, t, s) { if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); }; if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = "2.0"; n.queue = []; t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s); }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    fbq("init", A.metaPixelId); fbq("track", "PageView");
  }
  var META = { generate_lead: "Lead", form_start: "InitiateCheckout", whatsapp_click: "Contact", telegram_click: "Contact", phone_click: "Contact", select_item: "ViewContent" };
  function track(name, p) {
    p = p || {}; p.lang = lang;
    try { if (A.ga4Id) gtag("event", name, p); if (window.fbq && A.metaPixelId) { META[name] ? fbq("track", META[name], p) : fbq("trackCustom", name, p); } } catch (e) {}
    if (window.console && !A.ga4Id && !A.metaPixelId) console.log("[track]", name, p);
  }

  // ---- Блоки ----
  var bgs = function (photo, scene) { return "background-image:" + (photo ? "url(" + photo + ")," : "") + "url(assets/img/" + scene + ".svg)"; };
  var sceneOf = function (t) { return t.scene || SC[t.cat] || "bay"; };
  function card(t) {
    return '<a class="pc" data-pick="' + t.id + '"><div class="ph" style="' + bgs(t.photo, sceneOf(t)) + '">' + (t.premium ? '<span class="bd">' + L(C.categories[t.cat]) + "</span>" : "") + "</div><h3>" + L(t.title) + "</h3><p>" + L(C.categories[t.cat]) + " · " + t.duration + "</p><b>" + T("from") + " " + money(t.price) + "</b></a>";
  }
  function tile(t) { return '<a class="tile" data-go="' + (t.go || "book") + '"><div class="bg" style="' + bgs(t.photo, t.scene) + '"></div><div class="tc"><h3>' + L(t.title) + "</h3>" + (t.text ? "<p>" + L(t.text) + "</p>" : "") + "</div></a>"; }
  function gridHtml() {
    var cats = ["all"].concat(Object.keys(C.categories));
    return '<div class="chips">' + cats.map(function (c) { return '<button type="button" data-cat="' + c + '" class="' + (c === cat ? "on" : "") + '">' + (c === "all" ? T("all") : L(C.categories[c])) + "</button>"; }).join("") + '</div><div class="gr">' + C.tours.filter(function (t) { return cat === "all" || t.cat === cat; }).map(card).join("") + "</div>";
  }
  var SEC = {
    hero: function (s) {
      return '<section class="hero ' + (s.theme || "dark") + '" id="' + (s.id || "") + '">' + (s.video ? '<video class="bgv" autoplay muted loop playsinline src="' + s.video + '"></video>' : '<div class="bg" style="' + bgs(s.photo, s.scene) + '"></div>') + '<div class="hc"><h1>' + L(s.title) + "</h1><p>" + L(s.text) + '</p><div class="ctas">' + (s.cta || []).map(function (c, k) { return '<a class="b' + (k ? " o" : "") + '" data-go="' + c.go + '">' + L(c.label) + "</a>"; }).join("") + "</div></div></section>";
    },
    row: function (s) {
      var list = C.tours.filter(function (t) { return s.filter === "premium" ? t.premium : t.cat === s.filter; });
      return '<section class="sec" id="' + (s.id || "") + '"><div class="sh"><h2>' + L(s.title) + '</h2><a class="va" data-go="cat:' + (s.filter === "premium" ? "all" : s.filter) + '">' + T("all") + '</a></div><div class="car"><button class="ar l" data-sc="-1" aria-label="Prev">‹</button><div class="trk">' + list.map(card).join("") + '</div><button class="ar r" data-sc="1" aria-label="Next">›</button></div></section>';
    },
    tabs: function (s) {
      return '<section class="sec" id="' + (s.id || "") + '"><h2>' + L(s.title) + '</h2><div class="tb">' + s.tabs.map(function (t, i) { return '<button type="button" class="' + (i ? "" : "on") + '" data-tab="' + i + '">' + L(t.label) + "</button>"; }).join("") + "</div>" + s.tabs.map(function (t, i) { return '<div class="tl' + (i ? " hid" : "") + '" data-p="' + i + '">' + t.tiles.map(tile).join("") + "</div>"; }).join("") + "</section>";
    },
    cta: function (s) { return '<section class="cta"><h2>' + L(s.title) + "</h2><p>" + L(s.text) + '</p><a class="b" data-go="book">' + T("cta_book") + "</a></section>"; },
    grid: function (s) { return '<section class="sec" id="' + (s.id || "") + '"><h2 style="margin-bottom:18px">' + L(s.title) + '</h2><div id="gridbox">' + gridHtml() + "</div></section>"; },
    tiles: function (s) { return '<section class="sec"><h2 style="margin-bottom:18px">' + L(s.title) + '</h2><div class="tl tg">' + s.tiles.map(tile).join("") + "</div></section>"; }
  };
  function header() {
    var logo = C.logo ? '<img alt="" src="' + C.logo + '">' : "<i>" + C.company.charAt(0) + "</i>";
    var nav = Object.keys(C.categories).map(function (c) {
      var ts = C.tours.filter(function (t) { return t.cat === c; }), f = ts[0];
      return '<li><a data-go="cat:' + c + '">' + L(C.categories[c]) + "</a>" + (f ? '<div class="mega"><div><h4>' + L(C.categories[c]) + "</h4><ul>" + ts.map(function (t) { return '<li><a data-pick="' + t.id + '">' + L(t.title) + "</a></li>"; }).join("") + '</ul></div><a class="tile" data-pick="' + f.id + '"><div class="bg" style="' + bgs(f.photo, sceneOf(f)) + '"></div><div class="tc"><h3>' + L(f.title) + "</h3></div></a></div>" : "") + "</li>";
    }).join("") + '<li><a data-go="how">' + T("nav_how") + "</a></li>";
    $("#hd").innerHTML = '<a class="logo" href="#"> ' + logo + "<span>" + C.company + '</span></a><ul class="nv">' + nav + '</ul><div class="hr"><select id="lang" aria-label="Language">' + C.languages.map(function (l) { return '<option value="' + l + '"' + (l === lang ? " selected" : "") + ">" + l.toUpperCase() + "</option>"; }).join("") + '</select><a class="b" data-go="book">' + T("nav_book") + "</a></div>";
  }
  function render() {
    document.documentElement.lang = lang; document.title = C.company + " — " + L(C.city);
    header(); $("#app").innerHTML = H.sections.map(function (s) { return SEC[s.t](s); }).join("");
    $$("[data-i]").forEach(function (n) { n.textContent = T(n.getAttribute("data-i")); });
    $("#fcompany").textContent = "© " + new Date().getFullYear() + " " + C.company; $("#fplace").textContent = L(C.city) + ", " + L(C.country);
    $$("[data-wa]").forEach(function (a) { a.href = "https://wa.me/" + digits(C.whatsapp) + "?text=" + encodeURIComponent(C.company); });
    $$("[data-tg]").forEach(function (a) { a.href = "https://t.me/" + C.telegram; }); $$("[data-tel]").forEach(function (a) { a.href = "tel:" + C.phone; });
    $("#ftel").textContent = T("call") + " " + C.phone; $("#fmail").href = "mailto:" + C.email; $("#fmail").textContent = C.email;
    var sel = $("#tour"), cur = sel.value; sel.innerHTML = C.tours.map(function (t) { return '<option value="' + t.id + '">' + L(t.title) + " — " + money(t.price) + "</option>"; }).join(""); if (cur) sel.value = cur;
    var msgs = L(H.announce) ? H.announce[lang] || H.announce.en : [], i = 0; $("#bar").textContent = msgs[0] || ""; clearInterval(tm);
    if (msgs.length > 1) tm = setInterval(function () { i = (i + 1) % msgs.length; $("#bar").textContent = msgs[i]; }, 4000);
  }
  function go(to) {
    if (to.indexOf("cat:") === 0) { cat = to.slice(4); var g = $("#gridbox"); if (g) { g.innerHTML = gridHtml(); } to = "tours"; }
    else if (to.indexOf("tour:") === 0) { $("#tour").value = to.slice(5); to = "book"; }
    var el = document.getElementById(to); if (el) el.scrollIntoView();
  }
  document.addEventListener("click", function (e) {
    var a = e.target.closest("[data-track]"); if (a) track(a.getAttribute("data-track"), { location: a.getAttribute("data-loc") || "" });
    var p = e.target.closest("[data-pick]"); if (p) { var t = C.tours.filter(function (x) { return x.id === p.getAttribute("data-pick"); })[0]; if (t) { $("#tour").value = t.id; track("select_item", { item_id: t.id, value: t.price, currency: C.currency }); go("book"); } return; }
    var g = e.target.closest("[data-go]"); if (g) { go(g.getAttribute("data-go")); return; }
    var c = e.target.closest("[data-cat]"); if (c) { cat = c.getAttribute("data-cat"); $("#gridbox").innerHTML = gridHtml(); return; }
    var b = e.target.closest("[data-tab]"); if (b) { var sec = b.closest("section"); $$("#" + (sec.id || "x")).length; [].forEach.call(sec.querySelectorAll("[data-tab]"), function (x) { x.classList.toggle("on", x === b); }); [].forEach.call(sec.querySelectorAll("[data-p]"), function (x) { x.classList.toggle("hid", x.getAttribute("data-p") !== b.getAttribute("data-tab")); }); return; }
    var r = e.target.closest("[data-sc]"); if (r) { var tr = r.parentNode.querySelector(".trk"); tr.scrollBy({ left: tr.clientWidth * 0.8 * +r.getAttribute("data-sc"), behavior: "smooth" }); }
  });
  document.addEventListener("change", function (e) { if (e.target.id === "lang") { lang = e.target.value; try { localStorage.setItem("lang", lang); } catch (x) {} render(); } });

  // ---- Форма ----
  var form = $("#form"), status = $("#status");
  form.addEventListener("focusin", function () { if (!started) { started = true; track("form_start"); } });
  form.addEventListener("submit", function (e) {
    e.preventDefault(); var d = {}; new FormData(form).forEach(function (v, k) { d[k] = v; });
    if (!d.name.trim() || !d.contact.trim()) { status.textContent = T("err"); return; }
    var t = C.tours.filter(function (x) { return x.id === d.tour; })[0] || C.tours[0];
    var msg = [C.company, L(t.title), d.date, d.guests + " pax", d.name, d.contact, d.msg].filter(Boolean).join("\n");
    track("generate_lead", { item_id: t.id, value: t.price, currency: C.currency, guests: +d.guests });
    if (C.formEndpoint) {
      fetch(C.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(d) })
        .then(function (r) { status.textContent = r.ok ? T("thanks") : T("err"); if (r.ok) form.reset(); }).catch(function () { status.textContent = T("err"); });
    } else { status.textContent = T("thanks"); window.open("https://wa.me/" + digits(C.whatsapp) + "?text=" + encodeURIComponent(msg), "_blank"); }
  });
  render();
})();
