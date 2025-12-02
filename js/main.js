document.addEventListener("DOMContentLoaded", () => {
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");

  navToggle?.addEventListener("click", () => {
    navLinks?.classList.toggle("open");
  });

  navLinks?.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("open"));
  });

  const contactForm = document.getElementById("contact-form");
  const formStatus = document.getElementById("form-status");

  contactForm?.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(contactForm);
    const name = formData.get("name");

    formStatus.textContent = "Enviando...";
    setTimeout(() => {
      formStatus.textContent = `Obrigado, ${name}. Recebemos seu briefing e retornaremos em breve.`;
      contactForm.reset();
    }, 600);
  });

  const yearNode = document.getElementById("current-year");
  if (yearNode) {
    yearNode.textContent = String(new Date().getFullYear());
  }
});
