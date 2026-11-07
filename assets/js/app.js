(function () {
  var C = window.SITE_CONFIG, $ = function (s) { return document.querySelector(s); }, $$ = function (s) { return [].slice.call(document.querySelectorAll(s)); };
  var lang = C.defaultLang, cat = "all", started = false;
  try { var sl = localStorage.getItem("lang"); if (sl && C.languages.indexOf(sl) > -1) lang = sl; } catch (e) {}
  var L = function (o) { return o ? (o[lang] || o.en || "") : ""; };
  var T = function (k) { var d = C.i18n[lang] || C.i18n.en; return d[k] || C.i18n.en[k] || k; };
  var money = function (n) { return new Intl.NumberFormat(lang, { style: "currency", currency: C.currency, maximumFractionDigits: 0 }).format(n); };
  var digits = function (s) { return String(s).replace(/\D/g, ""); };

  // ---- Аналитика: GA4 + Meta Pixel (подключаются только если заданы ID) ----
  var A = C.analytics || {};
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { window.dataLayer.push(arguments); };
  if (A.ga4Id) {
    var s = document.createElement("script"); s.async = true; s.src = "https://www.googletagmanager.com/gtag/js?id=" + A.ga4Id; document.head.appendChild(s);
    gtag("js", new Date()); gtag("config", A.ga4Id);
  }
  if (A.metaPixelId) {
    !function (f, b, e, v, n, t, s) { if (f.fbq) return; n = f.fbq = function () { n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments); }; if (!f._fbq) f._fbq = n; n.push = n; n.loaded = !0; n.version = "2.0"; n.queue = []; t = b.createElement(e); t.async = !0; t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s); }(window, document, "script", "https://connect.facebook.net/en_US/fbevents.js");
    fbq("init", A.metaPixelId); fbq("track", "PageView");
  }
  // Единая точка событий. Имена GA4: whatsapp_click, telegram_click, phone_click, form_start, generate_lead, select_item
  var META = { generate_lead: "Lead", form_start: "InitiateCheckout", whatsapp_click: "Contact", telegram_click: "Contact", phone_click: "Contact", select_item: "ViewContent" };
  function track(name, p) {
    p = p || {}; p.lang = lang;
    try { if (A.ga4Id) gtag("event", name, p); if (window.fbq && A.metaPixelId) { META[name] ? fbq("track", META[name], p) : fbq("trackCustom", name, p); } } catch (e) {}
    if (window.console && !A.ga4Id && !A.metaPixelId) console.log("[track]", name, p);
  }
  document.addEventListener("click", function (e) { var a = e.target.closest("[data-track]"); if (a) track(a.getAttribute("data-track"), { location: a.getAttribute("data-loc") || "" }); });

  // ---- Рендер ----
  function waLink(msg) { return "https://wa.me/" + digits(C.whatsapp) + (msg ? "?text=" + encodeURIComponent(msg) : ""); }
  function card(t, prem) {
    var el = document.createElement("article"); el.className = "card";
    el.innerHTML = '<div class="ph">' + t.icon + '<img alt="" loading="lazy" src="' + (t.photo || "") + '" onerror="this.remove()"></div><div class="cb"><span class="tag">' + L(C.categories[t.cat]) + " · " + t.duration + "</span><h3>" + L(t.title) + "</h3><p>" + L(t.desc) + '</p><div class="meta"><div class="price"><small>' + T("from") + " · " + T("per") + "</small>" + money(t.price) + '</div><button class="btn" type="button">' + T("pick") + "</button></div></div>";
    el.querySelector("button").onclick = function () { $("#tour").value = t.id; track("select_item", { item_id: t.id, value: t.price, currency: C.currency }); $("#book").scrollIntoView(); };
    return el;
  }
  function render() {
    document.documentElement.lang = lang;
    $$("[data-i]").forEach(function (n) { n.textContent = T(n.getAttribute("data-i")); });
    $("#company").textContent = C.company; $("#fcompany").textContent = "© " + new Date().getFullYear() + " " + C.company;
    document.title = C.company + " — " + L(C.city);
    $("#place").textContent = L(C.city) + ", " + L(C.country);
    $("#logo").innerHTML = C.logo ? '<img alt="" src="' + C.logo + '">' : "<i>" + C.company.charAt(0) + "</i>";
    $$("[data-wa]").forEach(function (a) { a.href = waLink(C.company); if (a.classList.contains("btn")) a.textContent = T("cta_wa"); });
    $$("[data-tg]").forEach(function (a) { a.href = "https://t.me/" + C.telegram; });
    $$("[data-tel]").forEach(function (a) { a.href = "tel:" + C.phone; }); $("#ftel").textContent = T("call") + " " + C.phone;
    $("#fmail").href = "mailto:" + C.email; $("#fmail").textContent = C.email;
    var ls = $("#lang"); ls.innerHTML = C.languages.map(function (l) { return '<option value="' + l + '"' + (l === lang ? " selected" : "") + ">" + l.toUpperCase() + "</option>"; }).join("");
    var pr = $("#premium"); pr.innerHTML = ""; C.tours.filter(function (t) { return t.premium; }).forEach(function (t) { pr.appendChild(card(t, true)); });
    var cats = ["all"].concat(Object.keys(C.categories)), ch = $("#chips"); ch.innerHTML = "";
    cats.forEach(function (c) { var b = document.createElement("button"); b.type = "button"; b.textContent = c === "all" ? T("all") : L(C.categories[c]); if (c === cat) b.className = "on"; b.onclick = function () { cat = c; render(); }; ch.appendChild(b); });
    var g = $("#grid"); g.innerHTML = ""; C.tours.filter(function (t) { return cat === "all" || t.cat === cat; }).forEach(function (t) { g.appendChild(card(t)); });
    var sel = $("#tour"), cur = sel.value; sel.innerHTML = C.tours.map(function (t) { return '<option value="' + t.id + '">' + L(t.title) + " — " + money(t.price) + "</option>"; }).join(""); if (cur) sel.value = cur;
  }
  $("#lang").addEventListener("change", function (e) { lang = e.target.value; try { localStorage.setItem("lang", lang); } catch (x) {} render(); });

  // ---- Форма ----
  var form = $("#form"), status = $("#status");
  form.addEventListener("focusin", function () { if (!started) { started = true; track("form_start"); } });
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var d = {}; new FormData(form).forEach(function (v, k) { d[k] = v; });
    if (!d.name.trim() || !d.contact.trim()) { status.textContent = T("err"); return; }
    var t = C.tours.filter(function (x) { return x.id === d.tour; })[0] || C.tours[0];
    var msg = [C.company, L(t.title), d.date, d.guests + " pax", d.name, d.contact, d.msg].filter(Boolean).join("\n");
    track("generate_lead", { item_id: t.id, value: t.price, currency: C.currency, guests: +d.guests });
    if (C.formEndpoint) {
      fetch(C.formEndpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify(d) })
        .then(function (r) { status.textContent = r.ok ? T("thanks") : T("err"); if (r.ok) form.reset(); }).catch(function () { status.textContent = T("err"); });
    } else { status.textContent = T("thanks"); window.open(waLink(msg), "_blank"); }
  });
  render();
})();
