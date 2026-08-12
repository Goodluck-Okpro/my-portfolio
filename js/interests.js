/* ==========================================================================
   INTERESTS.JS — Page-specific interactions for interests.html
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ──────────────────────────────────────────────────────────────────────
     INTEREST FEATURE TAGS — subtle hover shimmer pulse on load
     ────────────────────────────────────────────────────────────────────── */

  const tags = document.querySelectorAll(".interest-feature__tags span");

  tags.forEach((tag, i) => {
    // Stagger a brief scale pop on page load so they feel alive
    setTimeout(() => {
      tag.style.transition = "transform 0.25s ease";
      tag.style.transform = "scale(1.05)";
      setTimeout(() => {
        tag.style.transform = "";
      }, 200);
    }, 600 + i * 100);
  });


  /* ──────────────────────────────────────────────────────────────────────
     GAME CARDS — tilt on mouse move (subtle 3D feel)
     ────────────────────────────────────────────────────────────────────── */

  const gameCards = document.querySelectorAll(".game-card");

  gameCards.forEach((card) => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const rotX = ((y / rect.height) - 0.5) * -8;   // -4deg to +4deg
      const rotY = ((x / rect.width)  - 0.5) *  8;

      card.style.transform = `translateY(-6px) rotateX(${rotX}deg) rotateY(${rotY}deg)`;
      card.style.transition = "transform 0.1s ease";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "";
      card.style.transition = "transform 0.35s ease";
    });
  });


  /* ──────────────────────────────────────────────────────────────────────
     INSPIRATION CARD — pulsing glow on the star icon
     ────────────────────────────────────────────────────────────────────── */

  const inspirationIcon = document.querySelector(".inspiration-card__icon");

  if (inspirationIcon) {
    let glowOn = false;

    setInterval(() => {
      glowOn = !glowOn;
      inspirationIcon.style.boxShadow = glowOn
        ? "0 0 18px rgba(255, 215, 0, 0.45)"
        : "none";
      inspirationIcon.style.transition = "box-shadow 0.8s ease";
    }, 2000);
  }

});
