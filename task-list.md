# 🏗️ Portfolio Website — Task List
**Project:** Precious Uba — Personal Portfolio
**Stack:** HTML5, CSS3 (Tailwind), JS (ES6), GSAP/AOS, Swiper.js, Lucide Icons

---

## Phase 1 — Setup & Foundation
- [x] Confirm folder structure matches the spec (`index.html`, `about.html`, `interests.html`, `gallery.html`, `contact.html`, `assets/`, `css/`, `js/`)
- [x] Set up Tailwind CSS (CDN for speed, or CLI/build step if you want production optimization)
- [x] Add Google Fonts: **Poppins** (headings) + **Inter** (body)
- [x] Add Lucide Icons (CDN script)
- [x] Add GSAP and/or AOS (scroll animations) and Swiper.js (gallery/carousel)
- [x] Create `globals.css` with:
  - [x] CSS variables for color palette (dark green `#0B6E4F`, black `#111111`, gold `#FFD700`, white `#FFFFFF`, light gray `#F5F5F5`)
  - [x] Base typography rules
  - [x] Reset/normalize styles
- [x] Create shared `<head>` boilerplate (meta tags, favicon, viewport, font links) to reuse across pages

## Phase 2 — Global Components (build once, reuse everywhere)
- [x] Sticky navbar (Home, About, Interests, Gallery, Contact)
- [x] Mobile hamburger menu with collapse animation
- [x] Footer (copyright, social links placeholders, Back to Top button)
- [x] Reusable button styles (primary/secondary, hover transitions)
- [x] Reusable card component style (for stats, skills, gaming, timeline)
- [x] Section wrapper component (consistent padding/spacing across pages)

## Phase 3 — Home Page (`index.html`)
- [ ] Hero section: large football image, name, tagline ("Young Footballer • Striker • Future Professional")
- [ ] Typing effect on hero tagline
- [ ] Welcome message / short intro
- [ ] Short biography section
- [ ] Football highlights section
- [ ] Quick stats section (Position, Goals, School, Academy, Favorite Player) with animated counters
- [ ] Call-to-action buttons (e.g. "View My Journey", "Contact Me")
- [ ] Featured gallery preview (image hover zoom)
- [ ] Footer

## Phase 4 — About Page (`about.html`)
- [ ] Biography section (who I am, background, football journey)
- [ ] Timeline component (school team → matches → goals → academy June 2026)
- [ ] Football Profile cards (Position, Preferred Foot [editable], Goals, Academy, School)
- [ ] Skills section with animated progress bars: Finishing, Pace, Dribbling, Passing, Positioning, Teamwork

## Phase 5 — Interests Page (`interests.html`)
- [x] Football section — passion write-up
- [x] Gaming section — 4 cards with custom images: Dream League Soccer, FC Mobile, eFootball, Roblox
- [x] Table Tennis section — short description
- [x] Slide-up card animations on scroll

## Phase 6 — Gallery Page (`gallery.html`)
- [ ] Category filter/tabs: Training, Matches, Academy, School Team, Personal Photos, Gaming Screenshots, Match Records, Future Videos
- [ ] Image grid with lazy loading
- [ ] Hover zoom effect on images
- [ ] Swiper.js carousel (optional, for featured shots)
- [ ] Structure that makes it easy to drop in new images/categories later

## Phase 7 — Contact Page (`contact.html`)
- [ ] Contact form (Name, Email, Message) — client-side validation
- [ ] Wire form to WhatsApp click-to-chat: on submit, build a `wa.me/<your-number>?text=...` link from the form fields (JS `encodeURIComponent`) and open it so the message lands in your WhatsApp
- [ ] Add your WhatsApp number as a config variable in `js/main.js` (easy to update later)
- [ ] Show a small note near the form: "This opens WhatsApp — just hit send!" so visitors aren't confused by the extra tap
- [ ] "Challenge Me" section (DLS, FC Mobile, COD Mobile) — each button can also deep-link to WhatsApp with a pre-filled challenge message
- [ ] Social media placeholder links

## Phase 8 — Animations & Interactions
- [ ] Fade-in sections on scroll (AOS or GSAP ScrollTrigger)
- [ ] Slide-up cards
- [ ] Smooth scrolling (nav links, Back to Top)
- [ ] Animated counters (stats section)
- [ ] Hover transitions (buttons, cards, images)
- [ ] Keep animations subtle — test they don't feel distracting

## Phase 9 — Responsiveness
- [ ] Build mobile-first, then scale up to tablet/desktop breakpoints
- [ ] Test navbar collapse on mobile
- [ ] Test gallery grid on small screens
- [ ] Test all forms and buttons on touch devices

## Phase 10 — Accessibility
- [ ] Use semantic HTML throughout (`<header>`, `<nav>`, `<main>`, `<section>`, `<footer>`)
- [ ] Correct heading hierarchy (one `<h1>` per page, logical nesting)
- [ ] Alt text on all images
- [ ] Keyboard navigation works (tab order, focus states)
- [ ] Check color contrast (gold-on-white and green-on-black combos especially)
- [ ] ARIA labels on nav toggle, form fields, icons

## Phase 11 — Performance
- [ ] Lazy-load all gallery/hero images
- [ ] Compress and correctly size images before upload
- [ ] Minify CSS/JS for production
- [ ] Check page load speed (Lighthouse audit)

## Phase 12 — QA & Launch
- [ ] Cross-browser check (Chrome, Safari, Firefox, Edge)
- [ ] Cross-device check (phone, tablet, desktop)
- [ ] Broken link check across all 5 pages
- [ ] Spelling/grammar pass on all copy
- [ ] Run Lighthouse (Performance, Accessibility, SEO, Best Practices)
- [ ] Deploy (e.g. GitHub Pages, Netlify, or Vercel)

## Phase 13 — Future Expansion (post-launch backlog)
- [ ] Career Statistics page
- [ ] Match History page
- [ ] Trophy Cabinet
- [ ] Awards
- [ ] Football CV (downloadable PDF)
- [ ] Blog / News section
- [ ] Highlight Videos
- [ ] Academy Updates
- [ ] Media Coverage

---

### Suggested Build Order
1. Setup & global components (navbar/footer) → build once, use everywhere
2. Home page → sets the visual tone for the rest of the site
3. About page → most content-heavy, good to nail early
4. Interests + Gallery → lighter pages, reuse patterns from Home/About
5. Contact page → smallest page, do last
6. Animations pass → layer in once structure/content is stable
7. Responsiveness + Accessibility + Performance → final polish pass
8. QA + Deploy
