# Installation d'une Extension Chrome

Ce guide explique comment installer une extension sur Google Chrome, manuellement en mode développeur.

## Installation Manuelle (Mode Développeur)

Si vous souhaitez installer une extension non publiée sur le Chrome Web Store, suivez ces étapes :

1. **Télécharger ou créer l'extension** :
   - Obtenez un dossier contenant le code source de l'extension.
2. **Ouvrir la page des extensions** :
   - Dans Chrome, ouvrez un nouvel onglet et entrez `chrome://extensions/` dans la barre d'adresse.
3. **Activer le Mode Développeur** :
   - En haut à droite, activez l'option `Mode développeur`.
4. **Charger l'extension non empaquetée** :
   - Cliquez sur `Charger une extension non empaquetée`.
   - Sélectionnez le dossier contenant l'extension.
5. **Vérifier l'installation** :
   - L'extension apparaît maintenant dans la liste des extensions installées.
   - Vous pouvez activer/désactiver ou supprimer l'extension si nécessaire.

---

## Désinstallation d'une Extension

1. **Accéder aux extensions** :
   - Ouvrez `chrome://extensions/` dans la barre d'adresse.
2. **Trouver l'extension à supprimer** :
   - Repérez l'extension à désinstaller.
3. **Supprimer l'extension** :
   - Cliquez sur `Supprimer` puis confirmez.

---

## Problèmes Courants et Solutions

- **L'extension ne s'affiche pas après l'installation** :
  - Vérifiez si elle est activée dans `chrome://extensions/`.
  - Cliquez sur l'icône puzzle 🔧 en haut à droite et épinglez l'extension.

- **Erreur lors du chargement d'une extension non empaquetée** :
  - Assurez-vous que le dossier contient un fichier `manifest.json` valide.
  - Vérifiez la console de Chrome (`F12 > Console`) pour des erreurs spécifiques.

---

Bonne installation ! 🚀
