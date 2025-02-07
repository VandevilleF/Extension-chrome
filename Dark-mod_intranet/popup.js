document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggle");

  // Vérifier l'état actuel du mode sombre
  chrome.storage.sync.get("darkMode", (data) => {
    toggleButton.textContent = data.darkMode ? "Désactiver Mode Sombre" : "Activer Mode Sombre";
  });

  toggleButton.addEventListener("click", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      chrome.storage.sync.get("darkMode", (data) => {
        const newMode = !data.darkMode;
        chrome.storage.sync.set({ darkMode: newMode });

        chrome.scripting.executeScript({
          target: { tabId: tabs[0].id },
          func: toggleDarkMode,
          args: [newMode]
        });

        toggleButton.textContent = newMode ? "Désactiver Mode Sombre" : "Activer Mode Sombre";
      });
    });
  });
});

// Fonction exécutée dans la page pour activer/désactiver le mode sombre
function toggleDarkMode(isDark) {
  if (isDark) {
    document.documentElement.classList.add("dark-mode");

    // Injecter dynamiquement le fichier CSS si nécessaire
    if (!document.getElementById("dark-mode-style")) {
      let link = document.createElement("link");
      link.id = "dark-mode-style";
      link.rel = "stylesheet";
      link.href = chrome.runtime.getURL("dark-mode.css");
      document.head.appendChild(link);
    }
    const rectBackground = document.querySelectorAll('.highcharts-background');
    rectBackground.forEach(rect => {
      rect.setAttribute('fill', '#303030');
    });
  } else {
    document.documentElement.classList.remove("dark-mode");

    // Supprimer le fichier CSS
    let link = document.getElementById("dark-mode-style");
    if (link) {
      link.remove();
    }
    document.documentElement.style.display = "none";
    setTimeout(() => {
      document.documentElement.style.display = "";
    }, 10);

    const rectBackground = document.querySelectorAll('.highcharts-background');
    rectBackground.forEach(rect => {
      rect.setAttribute('fill', '#ffffff'); // Remettre la couleur d'origine
    });
  }
}
