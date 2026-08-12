/* ==========================================================================
   CONTACT.JS — Page-specific script for contact.html
   Handles form submission & WhatsApp deep link challenge buttons
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {

  /* ──────────────────────────────────────────────────────────────────────
     1. DIRECT WHATSAPP BUTTON LINK
     ────────────────────────────────────────────────────────────────────── */
  const directBtn = document.getElementById("directWhatsappBtn");
  if (directBtn) {
    const greetingMsg = "Hello Goodluck (The Sniper)! I found your portfolio website and would like to connect with you.";
    directBtn.href = buildWhatsAppLink(greetingMsg);
  }


  /* ──────────────────────────────────────────────────────────────────────
     2. FORM SUBMISSION -> WHATSAPP LINK GENERATOR
     ────────────────────────────────────────────────────────────────────── */
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.getElementById("senderName")?.value.trim() || "";
      const contact = document.getElementById("senderEmail")?.value.trim() || "";
      const type = document.getElementById("inquiryType")?.value || "General Inquiry";
      const userMsg = document.getElementById("senderMessage")?.value.trim() || "";

      if (!name || !contact || !userMsg) {
        alert("Please fill in all required fields (*).");
        return;
      }

      // Format WhatsApp message addressing Goodluck (The Sniper)
      const formattedMessage = 
        `*New Message for Goodluck (The Sniper)*\n\n` +
        `👤 *Name:* ${name}\n` +
        `📞 *Contact:* ${contact}\n` +
        `🏷️ *Topic:* ${type}\n\n` +
        `💬 *Message:*\n${userMsg}`;

      // Open WhatsApp URL
      const waUrl = buildWhatsAppLink(formattedMessage);
      window.open(waUrl, "_blank");
    });
  }


  /* ──────────────────────────────────────────────────────────────────────
     3. "CHALLENGE ME" GAMING BUTTON HANDLERS
     ────────────────────────────────────────────────────────────────────── */
  const challengeBtns = document.querySelectorAll(".challenge-btn");
  challengeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const gameName = btn.getAttribute("data-challenge") || "a game";
      const challengeMessage = `Hey Goodluck (The Sniper)! 🎮 I saw your portfolio website and I want to challenge you to a match in *${gameName}*! Are you ready? ⚽🔥`;
      
      const waUrl = buildWhatsAppLink(challengeMessage);
      window.open(waUrl, "_blank");
    });
  });

});
