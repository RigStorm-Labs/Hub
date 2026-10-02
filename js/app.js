/* ============================================================
   RIGSTORM HUB — hash router + page templates (client-side only)
   Hash routing keeps every route working on GitHub Pages with
   no server configuration and no base-path coupling.
   ============================================================ */
"use strict";

/* ---------- helpers ---------- */
const $ = (sel, el) => (el || document).querySelectorAll(sel);
const app = document.getElementById("app");
const D = HUB_DATA;

/* General Enquiry submissions go here (implementation detail —
   never displayed in the UI). */
const FORMSPREE_ENDPOINT = "https://formspree.io/f/mrpzkqlz";

const STATUS_CLASS = {
  Operational: "st-operational",
  Active: "st-active",
  Growing: "st-growing",
  "In Development": "st-in-development",
  "Coming Soon": "st-coming-soon"
};

const initials = (name) =>
  name.split(" ").map((w) => w[0]).slice(0, 2).join("").toUpperCase();

const companyById = (id) => D.companies.find((c) => c.id === id);

/* Single reusable logo treatment used everywhere a company appears:
   cards, profiles, footer, resources. Bare imagery with fixed
   heights per context — no boxes, borders or backgrounds. */
const logoHTML = (c, size) =>
  c.logo
    ? `<img class="company-logo ${size}" src="${c.logo}" alt="${c.name} logo" loading="lazy">`
    : `<div class="mark ${monoClass(c.id)}" aria-hidden="true">${c.monogram}</div>`;

const monoClass = (id) =>
  ({ sitemarket: "m-sm", landaura: "m-la", zeyora: "m-z", skyed: "m-se", adstorm: "m-as" }[id] || "");

const statusPill = (s) => `<span class="pill ${STATUS_CLASS[s] || ""}">${s}</span>`;

const ext = (href, label) =>
  `<a class="btn btn-ghost" href="${href}" target="_blank" rel="noopener">${label} <span aria-hidden="true">↗</span></a>`;

/* ---------- shared: company card ---------- */
function companyCard(c) {
  return `
  <a class="card reveal" href="#/companies/${c.id}" aria-label="View ${c.name}">
    <div class="card-top">
      ${logoHTML(c, "company-logo--card")}
      ${statusPill(c.status)}
    </div>
    <span class="cat">${c.category}</span>
    <h3>${c.name}</h3>
    <p class="desc">${c.description}</p>
    <div class="card-foot">
      <span class="card-link">View Company <span class="arrow" aria-hidden="true">→</span></span>
    </div>
  </a>`;
}

/* ---------- shared: digital presence ---------- */
function presenceHTML(c) {
  let rows = "";
  if (c.website) {
    rows += `<span class="presence-label">Official website</span>`;
    rows += ext(c.website, "Official Website");
    if (c.websiteNote) rows += `<p class="domain-note">${c.websiteNote}</p>`;
  }
  if (c.temporaryWebsite) {
    rows += `<span class="presence-label">Temporary Website</span>`;
    rows += ext(c.temporaryWebsite, "Visit Temporary Site");
  }
  const socials = [];
  if (c.social && c.social.instagram)
    socials.push(ext(c.social.instagram, `Instagram ${c.social.instagramHandle || ""}`.trim()));
  if (c.social && c.social.youtube)
    socials.push(ext(c.social.youtube, `YouTube ${c.social.youtubeHandle || ""}`.trim()));
  if (socials.length) rows += `<span class="presence-label">Social</span>` + socials.join("");
  if (!c.website && !c.temporaryWebsite && !socials.length) {
    rows += `<span class="presence-label">Digital presence</span>
      <span class="btn disabled" aria-disabled="true">Website coming soon</span>`;
  }
  return `<div class="presence">${rows}</div>`;
}

/* ---------- pages ---------- */
function pageHome() {
  const featured = D.companies.find((c) => c.id === "rigstorm-labs");
  return `
  <section class="hero">
    <div class="wrap hero-grid">
      <div class="hero-copy">
        <span class="eyebrow reveal">Rigstorm Group of Companies</span>
        <h1 class="reveal">One Group.<br>Multiple Ventures.<br><span class="grad-text">One Direction.</span></h1>
        <p class="lede reveal">RigStorm Hub is the central digital headquarters of RigStorm Group of Companies — connecting our ventures, people, projects and digital platforms in one place.</p>
        <div class="hero-actions reveal">
          <a class="btn btn-primary" href="#/companies">Explore Companies</a>
          <a class="btn btn-ghost" href="#/about">About RigStorm</a>
        </div>
        <div class="hero-meta reveal">
          <div><strong>${String(D.companies.length).padStart(2, "0")}</strong><span>Ventures</span></div>
          <div><strong>${String(D.categories.length).padStart(2, "0")}</strong><span>Sectors</span></div>
          <div><strong>${String(D.people.group.length + D.people.zeyora.length).padStart(2, "0")}</strong><span>People</span></div>
        </div>
      </div>
      <div class="hero-mark-card reveal">
        <img src="assets/logo.png" alt="RigStorm hexagonal mark" fetchpriority="high">
        <div class="hero-mark-tag"><strong>RIGSTORM</strong> HUB · GROUP HEADQUARTERS</div>
      </div>
    </div>
  </section>

  <section class="compact" id="ecosystem">
    <div class="wrap">
      <div class="sec-head reveal">
        <div>
          <span class="eyebrow">The Ecosystem</span>
          <h2>Every venture.<br>One central directory.</h2>
        </div>
        <p>Each company operates with its own focus while remaining connected through a larger Group vision. Select any venture to view its profile.</p>
      </div>
      <div class="grid grid-3">${D.companies.map(companyCard).join("")}</div>
    </div>
  </section>

  <section class="compact">
    <div class="wrap">
      <div class="band reveal">
        <div class="band-visual">
          <img src="assets/logo.png" alt="RigStorm Labs logo" loading="lazy">
        </div>
        <div class="band-body">
          <span class="eyebrow">Featured Venture · Technology</span>
          <h2>RigStorm Labs</h2>
          <p class="tagline">${featured.tagline}</p>
          <p>${featured.positioning}</p>
          <div class="btn-row">
            <a class="btn btn-primary" href="#/companies/rigstorm-labs">View Company</a>
            ${ext(featured.temporaryWebsite, "Visit Temporary Site")}
          </div>
          <p class="domain-note">Official domain rigstormlabs.linkpc.net is currently unavailable and being fixed separately. The GitHub Pages site above is temporary.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="compact">
    <div class="wrap">
      <div class="sec-head reveal">
        <div>
          <span class="eyebrow">Group Overview</span>
          <h2>Structured by sector.</h2>
        </div>
      </div>
      <div class="grid grid-3">
        ${D.categories.map((cat) => {
          const n = D.companies.filter((c) => c.category === cat.name).length;
          return `<div class="card reveal"><div class="tile-count">${String(n).padStart(2, "0")}</div><h3 style="margin:8px 0 6px;">${cat.name}</h3><p class="desc">${cat.description}</p></div>`;
        }).join("")}
      </div>
    </div>
  </section>

  <section class="compact">
    <div class="wrap">
      <div class="cta-banner reveal">
        <span class="eyebrow" style="justify-content:center;">Rigstorm Hub</span>
        <h2>The center of RigStorm Group of Companies.</h2>
        <p>Discover the companies, people, projects and platforms that make up the ecosystem.</p>
        <div class="btn-row" style="justify-content:center;">
          <a class="btn btn-primary" href="#/companies">Explore Ecosystem</a>
          <a class="btn btn-ghost" href="#/people">Meet the People</a>
        </div>
      </div>
    </div>
  </section>`;
}

function pageCompanies() {
  return `
  <section class="page-head"><div class="wrap">
    <span class="eyebrow reveal">Companies</span>
    <h1 class="reveal">The RigStorm ecosystem.</h1>
    <p class="lede reveal">Independent but connected ventures across technology, digital services, real estate, logistics, branding and marketing.</p>
  </div></section>
  <section class="compact"><div class="wrap">
    <div class="grid grid-3">${D.companies.map(companyCard).join("")}</div>
  </div></section>`;
}

function pageCompany(id) {
  const c = companyById(id);
  if (!c) return pageNotFound();
  return `
  <div class="wrap crumbs reveal"><a class="back-link" href="#/companies">← Back to Ecosystem</a></div>
  <section class="page-head" style="padding-top:24px;"><div class="wrap">
    <div class="profile-head reveal">
      ${logoHTML(c, "company-logo--profile")}
      <div>
        <h1>${c.name}</h1>
        <div class="profile-sub"><span class="cat">${c.category}</span>${statusPill(c.status)}</div>
        <p class="profile-tag">${c.tagline}</p>
      </div>
    </div>
    <div class="profile-grid">
      <div>
        <div class="panel reveal" style="margin-bottom:20px;">
          <h3><span class="n">01</span> About</h3>
          <p>${c.about}</p>
        </div>
        <div class="panel reveal">
          <h3><span class="n">02</span> What We Do</h3>
          <ul class="svc-list">${c.services.map((s) => `<li>${s}</li>`).join("")}</ul>
        </div>
      </div>
      <div class="panel reveal">
        <h3><span class="n">03</span> Digital Presence</h3>
        ${presenceHTML(c)}
      </div>
    </div>
  </div></section>
  <section class="compact"><div class="wrap">
    <div class="sec-head reveal">
      <div><span class="eyebrow">Keep Exploring</span><h2>More from the ecosystem.</h2></div>
      <a class="btn btn-ghost btn-sm" href="#/companies">All Companies</a>
    </div>
    <div class="grid grid-3">
      ${D.companies.filter((x) => x.id !== c.id).slice(0, 3).map(companyCard).join("")}
    </div>
  </div></section>`;
}

function personCard(p, zeyora) {
  return `
  <div class="card person reveal ${zeyora ? "zeyora" : ""}">
    <div class="avatar" aria-hidden="true">${initials(p.name)}</div>
    <h3>${p.name}</h3>
    <span class="role">${p.role}</span>
    ${p.description ? `<p>${p.description}</p>` : ""}
    <div class="card-foot" style="margin-top:16px;"><span class="pill">${p.scope}</span></div>
  </div>`;
}

function pagePeople() {
  return `
  <section class="page-head"><div class="wrap">
    <span class="eyebrow reveal">People</span>
    <h1 class="reveal">The people behind the storm.</h1>
    <p class="lede reveal">Group-wide leadership is listed separately from venture-specific teams. Roles below reflect real organizational scope.</p>
  </div></section>
  <section class="compact"><div class="wrap">
    <div class="team-scope reveal"><span class="scope-tag">Rigstorm Group</span><h3>Group-wide team</h3><span class="line"></span></div>
    <div class="grid grid-4">${D.people.group.map((p) => personCard(p, false)).join("")}</div>
    <div class="team-scope reveal"><span class="scope-tag z">Zeyora</span><h3>Zeyora team</h3><span class="line"></span></div>
    <div class="grid grid-4">${D.people.zeyora.map((p) => personCard(p, true)).join("")}</div>
  </div></section>`;
}

function pageProjects() {
  const items = D.projects;
  const body = items.length
    ? `<div class="grid grid-3">${items.map((p) => `
        <div class="card reveal">
          <div class="card-top">${statusPill(p.status)}<span class="cat">${p.stream || ""}</span></div>
          <h3>${p.title}</h3><p class="desc">${p.description}</p>
        </div>`).join("")}</div>`
    : `<div class="empty reveal">
        <div class="mono-mark">NO PUBLIC PROJECTS LISTED YET</div>
        <h3>This space is reserved for what's next.</h3>
        <p>Group projects — active work, upcoming releases, experiments and cross-company initiatives — will be announced here as they launch.</p>
        <div class="stream-chips">${D.projectStreams.map((s) => `<span class="pill">${s}</span>`).join("")}</div>
      </div>`;
  return `
  <section class="page-head"><div class="wrap">
    <span class="eyebrow reveal">Projects</span>
    <h1 class="reveal">Group projects.</h1>
    <p class="lede reveal">Active projects, upcoming work, experiments and cross-company initiatives from across the ecosystem.</p>
  </div></section>
  <section class="compact"><div class="wrap">${body}</div></section>`;
}

/* Shared General Enquiry panel — single source rendered on both the
   Resources page and the dedicated Enquire page. */
function enquiryPanelHTML(n) {
  return `
    <div class="panel reveal" style="margin-top:20px;">
      <h3><span class="n">${n}</span> General Enquiry</h3>
      <p style="margin-bottom:20px;">Send a general enquiry to RigStorm Group of Companies. Provide an email address or a phone number so we can respond.</p>
      <form id="enquiryForm" novalidate>
        <div class="form-grid">
          <div class="field">
            <label for="eq-name">Name <span class="req" aria-hidden="true">*</span></label>
            <input id="eq-name" name="name" type="text" autocomplete="name" placeholder="Your full name">
          </div>
          <div class="field">
            <label for="eq-company">Company</label>
            <select id="eq-company" name="company">
              <option value="RigStorm Group (General)">RigStorm Group — General</option>
              ${D.companies.map((c) => `<option value="${c.name}">${c.name}</option>`).join("")}
            </select>
          </div>
          <div class="field">
            <label for="eq-email">Email</label>
            <input id="eq-email" name="email" type="email" autocomplete="email" placeholder="you@example.com">
          </div>
          <div class="field">
            <label for="eq-phone">Phone</label>
            <input id="eq-phone" name="phone" type="tel" autocomplete="tel" placeholder="+960 …">
          </div>
          <div class="field full">
            <label for="eq-type">Enquiry type</label>
            <select id="eq-type" name="enquiry_type">
              <option>General Enquiry</option>
              <option>Service Enquiry</option>
              <option>Partnership Opportunity</option>
              <option>Feedback</option>
              <option>Other</option>
            </select>
          </div>
          <div class="field full">
            <label for="eq-message">Message <span class="req" aria-hidden="true">*</span></label>
            <textarea id="eq-message" name="message" placeholder="How can RigStorm help?"></textarea>
          </div>
        </div>
        <div class="form-errors" id="eqErrors" hidden></div>
        <div class="btn-row" style="margin-top:18px;">
          <button class="btn btn-primary" type="submit" id="eqSubmit">Send Enquiry</button>
        </div>
      </form>
      <div id="eqDone" hidden></div>
    </div>`;
}

function pageResources() {
  const labs = companyById("rigstorm-labs");
  return `
  <section class="page-head"><div class="wrap">
    <span class="eyebrow reveal">Resources</span>
    <h1 class="reveal">Everything, in one place.</h1>
    <p class="lede reveal">Official websites, social platforms and contact channels across the RigStorm ecosystem.</p>
  </div></section>
  <section class="compact"><div class="wrap">
    <div class="grid grid-2">
      <div class="res-block reveal">
        <div class="team-scope" style="margin-top:0;"><h3>Companies</h3><span class="line"></span></div>
        ${D.companies.map((c) => `
          <a class="res-row" href="#/companies/${c.id}">
            <span class="res-id"><img class="company-logo company-logo--mini" src="${c.logo}" alt="" loading="lazy"><span><span class="name">${c.name}</span><span class="meta">${c.category} · ${c.status}${c.website ? " · " + c.website.replace("https://", "").replace(/\/$/, "") : ""}</span></span></span>
            <span class="go">→</span>
          </a>`).join("")}
        <a class="res-row" href="#/">
          <span><span class="name">RigStorm Hub</span><span class="meta">Group Headquarters · Ecosystem Platform</span></span>
          <span class="go">→</span>
        </a>
      </div>
      <div>
        <div class="res-block reveal">
          <div class="team-scope" style="margin-top:0;"><h3>Social</h3><span class="line"></span></div>
          <a class="res-row" href="${labs.social.instagram}" target="_blank" rel="noopener">
            <span><span class="name">RigStorm Labs Instagram</span><span class="meta">${labs.social.instagramHandle}</span></span><span class="go">↗</span>
          </a>
          <a class="res-row" href="${labs.social.youtube}" target="_blank" rel="noopener">
            <span><span class="name">RigStorm Labs YouTube</span><span class="meta">${labs.social.youtubeHandle}</span></span><span class="go">↗</span>
          </a>
        </div>
        <div class="res-block reveal">
          <div class="team-scope" style="margin-top:28px;"><h3>Contact</h3><span class="line"></span></div>
          ${D.group.contact.map((e, i) => `
          <a class="res-row" href="mailto:${e}">
            <span><span class="name">${e}</span><span class="meta">${i === 0 ? "General contact" : "Support"}</span></span><span class="go">→</span>
          </a>`).join("")}
        </div>
      </div>
    </div>
    ${enquiryPanelHTML("04")}
  </div></section>`;
}

function pageEnquire() {
  return `
  <section class="page-head"><div class="wrap">
    <span class="eyebrow reveal">Enquire</span>
    <h1 class="reveal">Send a general enquiry.</h1>
    <p class="lede reveal">Reach out to RigStorm Group of Companies directly. Provide an email address or a phone number so we can respond.</p>
  </div></section>
  <section class="compact"><div class="wrap">
    ${enquiryPanelHTML("01")}
  </div></section>`;
}

function pageAbout() {
  return `
  <section class="page-head"><div class="wrap">
    <span class="eyebrow reveal">About</span>
    <h1 class="reveal">Built as an ecosystem.</h1>
    <p class="lede reveal">RigStorm Group of Companies is an expanding ecosystem of ventures built across technology, digital services, real estate, logistics, branding and marketing.</p>
  </div></section>
  <section class="compact"><div class="wrap">
    <div class="about-grid">
      <div class="panel reveal">
        <h3><span class="n">01</span> The Group</h3>
        <p>Each venture has its own focus while remaining connected through a larger Group vision — independent companies, one shared direction.</p>
      </div>
      <div class="panel reveal">
        <h3><span class="n">02</span> The Hub</h3>
        <p>RigStorm Hub exists to bring that ecosystem together — providing one central place to discover the companies, people, projects and digital platforms that make up RigStorm.</p>
      </div>
    </div>
    <div class="about-state reveal">${D.group.statement}</div>
    <div class="grid grid-3">
      ${D.categories.map((cat) => {
        const members = D.companies.filter((c) => c.category === cat.name);
        return `<div class="card reveal"><span class="cat">${members.length ? members.map((m) => m.short).join(" · ") : "—"}</span><h3 style="margin-top:8px;">${cat.name}</h3><p class="desc">${cat.description}</p></div>`;
      }).join("")}
    </div>
    <div class="cta-banner reveal" style="margin-top:20px;">
      <h2>Explore the ecosystem.</h2>
      <p>Meet every venture, the people behind them, and the platforms connecting them.</p>
      <div class="btn-row" style="justify-content:center;">
        <a class="btn btn-primary" href="#/companies">Explore Companies</a>
        <a class="btn btn-ghost" href="#/resources">Resources</a>
      </div>
    </div>
  </div></section>`;
}

function pageNotFound() {
  return `
  <section class="page-head"><div class="wrap" style="text-align:center;padding:60px 0;">
    <span class="eyebrow reveal" style="justify-content:center;">404</span>
    <h1 class="reveal">Off the map.</h1>
    <p class="lede reveal" style="margin:16px auto 28px;">This route doesn't exist in the RigStorm ecosystem.</p>
    <div class="btn-row reveal" style="justify-content:center;">
      <a class="btn btn-primary" href="#/">Back to Overview</a>
      <a class="btn btn-ghost" href="#/companies">All Companies</a>
    </div>
  </div></section>`;
}

/* ---------- enquiry form ---------- */
function validateEnquiry(v) {
  const errs = [];
  if (!v.name) errs.push("Please provide your name.");
  if (!v.message) errs.push("Please include a message.");
  if (!v.email && !v.phone) errs.push("Provide at least one contact method: email or phone.");
  if (v.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email))
    errs.push("The email address looks invalid.");
  if (v.phone && !/^\+?[0-9][0-9\s\-().]{5,22}$/.test(v.phone))
    errs.push("The phone number looks invalid.");
  return errs;
}

async function handleEnquiry(e) {
  e.preventDefault();
  const form = e.target;
  const errorsBox = document.getElementById("eqErrors");
  const btn = document.getElementById("eqSubmit");
  const fd = new FormData(form);
  const v = {
    name: (fd.get("name") || "").trim(),
    email: (fd.get("email") || "").trim(),
    phone: (fd.get("phone") || "").trim(),
    company: fd.get("company") || "",
    enquiry_type: fd.get("enquiry_type") || "",
    message: (fd.get("message") || "").trim()
  };
  const errs = validateEnquiry(v);
  if (errs.length) {
    errorsBox.hidden = false;
    errorsBox.innerHTML = `<ul>${errs.map((x) => `<li>${x}</li>`).join("")}</ul>`;
    return;
  }
  errorsBox.hidden = true;
  btn.disabled = true;
  btn.textContent = "Sending enquiry…";
  try {
    const res = await fetch(FORMSPREE_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(v)
    });
    if (!res.ok) throw new Error("submission failed");
    form.hidden = true;
    const done = document.getElementById("eqDone");
    done.hidden = false;
    done.innerHTML = `
      <div class="status-ok">
        <h3>Enquiry Received</h3>
        <p>Thanks for reaching out to RigStorm. We've received your enquiry and will get back to you using the contact details provided.</p>
        <div class="btn-row"><button class="btn btn-ghost" type="button" id="eqAgain">Send another enquiry</button></div>
      </div>`;
    document.getElementById("eqAgain").addEventListener("click", () => {
      form.reset();
      form.hidden = false;
      done.hidden = true;
      btn.disabled = false;
      btn.textContent = "Send Enquiry";
    });
  } catch (err) {
    errorsBox.hidden = false;
    errorsBox.innerHTML = `<ul><li>We couldn't send your enquiry right now. Please try again.</li></ul>`;
    btn.disabled = false;
    btn.textContent = "Send Enquiry";
  }
}

/* ---------- footer (static shell, company links from data) ---------- */
function renderFooter() {
  const el = document.getElementById("site-footer");
  if (!el) return;
  el.innerHTML = `
  <div class="wrap">
    <div class="foot-grid">
      <div class="foot-brand">
        <img src="assets/logo.png" alt="RigStorm mark" loading="lazy">
        <div class="brand-text" style="margin-bottom:6px;">RIGSTORM <em>HUB</em></div>
        <p>RigStorm Group of Companies.</p>
        <div class="foot-state">${D.group.statement}</div>
      </div>
      <div class="foot-col">
        <h4>Navigate</h4>
        <a href="#/">Overview</a><a href="#/companies">Companies</a>
        <a href="#/people">People</a><a href="#/projects">Projects</a>
        <a href="#/resources">Resources</a><a href="#/about">About</a>
      </div>
      <div class="foot-col">
        <h4>Companies</h4>
        ${D.companies.map((c) => `<a class="foot-co" href="#/companies/${c.id}"><img class="company-logo company-logo--mini" src="${c.logo}" alt="" loading="lazy">${c.name}</a>`).join("")}
      </div>
      <div class="foot-col">
        <h4>Contact</h4>
        ${D.group.contact.map((e) => `<a href="mailto:${e}">${e}</a>`).join("")}
        <a href="#/enquire">General Enquiry →</a>
        <h4 style="margin-top:20px;">Social</h4>
        <a href="${companyById("rigstorm-labs").social.instagram}" target="_blank" rel="noopener">Instagram ↗</a>
        <a href="${companyById("rigstorm-labs").social.youtube}" target="_blank" rel="noopener">YouTube ↗</a>
      </div>
    </div>
    <div class="foot-bottom">
      <span>© ${new Date().getFullYear()} RIGSTORM GROUP OF COMPANIES</span>
      <span>STATIC BUILD · GITHUB PAGES READY</span>
    </div>
  </div>`;
}

/* ---------- router ---------- */
function currentRoute() {
  const h = window.location.hash.replace(/^#/, "") || "/";
  return h;
}

function render() {
  const r = currentRoute();
  let html;
  if (r === "/" || r === "") html = pageHome();
  else if (r === "/companies") html = pageCompanies();
  else if (r.startsWith("/companies/")) html = pageCompany(r.split("/")[2]);
  else if (r === "/people") html = pagePeople();
  else if (r === "/projects") html = pageProjects();
  else if (r === "/resources") html = pageResources();
  else if (r === "/about") html = pageAbout();
  else if (r === "/enquire") html = pageEnquire();
  else html = pageNotFound();

  app.innerHTML = html;
  document.title = titleFor(r);
  window.scrollTo(0, 0);

  // active nav
  const base = "/" + (r.split("/")[1] || "");
  document.querySelectorAll("[data-nav]").forEach((a) => {
    const key = a.getAttribute("href").replace(/^#/, "") || "/";
    const aBase = "/" + (key.split("/")[1] || "");
    a.classList.toggle("active", key === r || (aBase !== "/" && aBase === base) || (key === "/" && (r === "/" || r === "")));
  });
  document.getElementById("topnav").classList.remove("open");

  const enquiryForm = document.getElementById("enquiryForm");
  if (enquiryForm && !enquiryForm.dataset.bound) {
    enquiryForm.dataset.bound = "true";
    enquiryForm.addEventListener("submit", handleEnquiry);
  }

  observeReveals();
}

function titleFor(r) {
  const base = "RigStorm Hub — The Center of RigStorm Group of Companies";
  if (r.startsWith("/companies/")) {
    const c = companyById(r.split("/")[2]);
    return c ? `${c.name} — RigStorm Hub` : base;
  }
  const map = {
    "/companies": "Companies — RigStorm Hub",
    "/people": "People — RigStorm Hub",
    "/projects": "Projects — RigStorm Hub",
    "/resources": "Resources — RigStorm Hub",
    "/about": "About — RigStorm Hub",
    "/enquire": "Enquire — RigStorm Hub"
  };
  return map[r] || base;
}

/* ---------- scroll reveals ---------- */
let observer = null;
function observeReveals() {
  if (observer) observer.disconnect();
  observer = new IntersectionObserver(
    (entries) => entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); observer.unobserve(e.target); }
    }),
    { threshold: 0.08, rootMargin: "0px 0px -6% 0px" }
  );
  $(".reveal").forEach((el) => observer.observe(el));
}

/* ---------- boot ---------- */
document.getElementById("menuBtn").addEventListener("click", () => {
  const nav = document.getElementById("topnav");
  const open = nav.classList.toggle("open");
  document.getElementById("menuBtn").setAttribute("aria-expanded", open ? "true" : "false");
});
window.addEventListener("hashchange", render);
renderFooter();
render();
