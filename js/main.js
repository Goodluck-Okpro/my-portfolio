/* ==========================================================================
   MAIN.JS — Shared components (navbar/footer) + core interactions
   Edit the navbar/footer markup here ONCE and it updates on every page.
   ========================================================================== */

// --------------------------------------------------------------------------
// CONFIG — update these as your accounts/links go live
// --------------------------------------------------------------------------
const SITE_CONFIG = {
  name: "Precious Uba",
  tagline: "Young Footballer • Striker • Future Professional",
  whatsappNumber: "2340000000000", // TODO: replace with real number, no + or leading 0s (country code + number)
  socials: {
    instagram: "#",
    twitter: "#",
    tiktok: "#",
  },
};

// --------------------------------------------------------------------------
// NAVBAR
// --------------------------------------------------------------------------
const NAV_LINKS = [
  { label: "Home", href: "index.html" },
  { label: "About", href: "about.html" },
  { label: "Interests", href: "interests.html" },
  { label: "Gallery", href: "gallery.html" },
  { label: "Contact", href: "contact.html" },
];

function renderNavbar() {
  const mount = document.getElementById("site-header");
  if (!mount) return;

  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  const linksHTML = NAV_LINKS.map((link) => {
    const isActive = link.href === currentPage;
    return `<li><a class="navbar__link${isActive ? " is-active" : ""}" href="${link.href}"${isActive ? ' aria-current="page"' : ""}>${link.label}</a></li>`;
  }).join("");

  mount.innerHTML = `
    <nav class="navbar" id="navbar">
      <div class="container navbar__inner">
        <a href="index.html" class="navbar__brand">
          <span class="navbar__brand-mark">9</span>
          <span>${SITE_CONFIG.name}</span>
        </a>
        <button class="navbar__toggle" id="navToggle" aria-label="Toggle navigation menu" aria-expanded="false" aria-controls="navLinks">
          <span></span><span></span><span></span>
        </button>
        <ul class="navbar__links" id="navLinks">
          ${linksHTML}
        </ul>
      </div>
      <div class="navbar__overlay" id="navOverlay"></div>
    </nav>
  `;

  // Mobile toggle
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");
  const overlay = document.getElementById("navOverlay");

  function setMenuOpen(isOpen) {
    links.classList.toggle("is-open", isOpen);
    overlay.classList.toggle("is-open", isOpen);
    document.body.classList.toggle("navbar-open", isOpen);
    toggle.setAttribute("aria-expanded", String(isOpen));
  }

  toggle.addEventListener("click", () => {
    setMenuOpen(!links.classList.contains("is-open"));
  });

  // Close mobile menu when tapping the dimmed backdrop
  overlay.addEventListener("click", () => setMenuOpen(false));

  // Close mobile menu when a link is tapped
  links.querySelectorAll("a").forEach((a) =>
    a.addEventListener("click", () => setMenuOpen(false))
  );

  // Sticky shadow on scroll
  const navbar = document.getElementById("navbar");
  window.addEventListener("scroll", () => {
    navbar.classList.toggle("is-scrolled", window.scrollY > 8);
  });
}

// --------------------------------------------------------------------------
// FOOTER
// --------------------------------------------------------------------------
function renderFooter() {
  const mount = document.getElementById("site-footer");
  if (!mount) return;

  const year = new Date().getFullYear();

  mount.innerHTML = `
    <footer class="footer">
      <div class="container">
        <div class="footer__inner">
          <div>
            <div class="footer__brand">${SITE_CONFIG.name}</div>
            <p class="footer__tagline">Striker • Future Professional</p>
          </div>
          <div class="footer__socials">
            <a class="footer__social-link" href="${SITE_CONFIG.socials.instagram}" aria-label="Instagram" target="_blank" rel="noopener">IG</a>
            <a class="footer__social-link" href="${SITE_CONFIG.socials.twitter}" aria-label="Twitter / X" target="_blank" rel="noopener">X</a>
            <a class="footer__social-link" href="${SITE_CONFIG.socials.tiktok}" aria-label="TikTok" target="_blank" rel="noopener">TT</a>
          </div>
        </div>
        <div class="footer__bottom">
          <span>&copy; ${year} ${SITE_CONFIG.name}. All rights reserved.</span>
          <a href="#top" class="footer__back-to-top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  `;
}

// --------------------------------------------------------------------------
// WHATSAPP HELPER (used on contact.html)
// --------------------------------------------------------------------------
function buildWhatsAppLink(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${SITE_CONFIG.whatsappNumber}?text=${encoded}`;
}

// --------------------------------------------------------------------------
// INIT
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
  renderNavbar();
  renderFooter();

  // Lucide icons — call after any dynamic content (like the navbar/footer) is in the DOM
  if (window.lucide) {
    window.lucide.createIcons();
  }

  // AOS scroll-reveal — respects prefers-reduced-motion automatically
  if (window.AOS) {
    window.AOS.init({
      duration: 700,
      easing: "ease-out-cubic",
      once: true,
      offset: 60,
    });
  }
});