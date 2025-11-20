const internalLinks = document.querySelectorAll('a[href^="#"]');

internalLinks.forEach((link) => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    e.preventDefault();
    const target = document.querySelector(targetId);

    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

const cvButton = document.querySelector(".btn.secondary");

if (cvButton) {
  cvButton.addEventListener("click", function (e) {
    if (this.getAttribute("href") === "#") {
      e.preventDefault();
      alert("Le CV sera ajouté prochainement.");
    }
  });
}
