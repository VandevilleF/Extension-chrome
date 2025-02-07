chrome.storage.sync.get("darkMode", (data) => {
  if (data.darkMode) {
    document.documentElement.classList.add("dark-mode");

    // Vérifier que `document.head` est bien chargé avant d'injecter le CSS
    if (document.head) {
      injectDarkModeCSS();
    } else {
      document.addEventListener("DOMContentLoaded", injectDarkModeCSS);
    }
  }
});

// Fonction pour injecter le fichier CSS
function injectDarkModeCSS() {
  if (!document.getElementById("dark-mode-style")) {
    let link = document.createElement("link");
    link.id = "dark-mode-style";
    link.rel = "stylesheet";
    link.href = chrome.runtime.getURL("dark-mode.css");
    document.head.appendChild(link);
  }
}
