document.getElementById("year").textContent = new Date().getFullYear();

document.getElementById("quoteForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const data = new FormData(e.currentTarget);
  const prenom = data.get("prenom");
  const appareil = data.get("appareil");
  const probleme = data.get("probleme");

  const message =
    `Bonjour Dépann'Tech, je souhaite un devis gratuit.%0A%0A` +
    `Prénom : ${encodeURIComponent(prenom)}%0A` +
    `Appareil : ${encodeURIComponent(appareil)}%0A` +
    `Problème : ${encodeURIComponent(probleme)}`;

  window.open(`https://wa.me/33619265162?text=${message}`, "_blank", "noopener,noreferrer");
});
