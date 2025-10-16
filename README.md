# 📚 Référence CSS Complète

Une application web interactive pour explorer et comprendre toutes les propriétés CSS organisées par modules.

## 🎯 Objectif

Cette application a été conçue pour aider les étudiants à comprendre et explorer toutes les propriétés CSS de manière organisée et interactive. Elle sert de référence complète et pédagogique pour l'apprentissage du CSS.

## ✨ Fonctionnalités

- **📋 Modules organisés** : Plus de 30 modules CSS couvrant tous les aspects du CSS
- **🔍 Recherche intelligente** : Recherche en temps réel dans les noms de propriétés et descriptions
- **📱 Design responsive** : Interface adaptée à tous les écrans (desktop, tablette, mobile)
- **🎨 Interface moderne** : Design attrayant avec des couleurs et animations fluides
- **📊 Statuts des propriétés** : Indication claire du statut de chaque propriété (REC, CR, WD, FPWD)
- **📖 Descriptions détaillées** : Explications claires pour chaque propriété CSS

## 🚀 Utilisation

### Installation
1. Téléchargez tous les fichiers dans un dossier
2. Ouvrez `index.html` dans votre navigateur web
3. C'est tout ! Aucune installation supplémentaire n'est nécessaire

### Navigation
- **Cliquez sur les en-têtes des modules** pour les ouvrir/fermer
- **Utilisez la barre de recherche** pour trouver rapidement une propriété
- **Consultez la légende** en bas de page pour comprendre les statuts

## 📁 Structure du projet

```
coursCSS/
├── index.html          # Page principale
├── styles.css          # Feuille de style
├── script.js           # Logique JavaScript
└── README.md           # Documentation
```

## 🎨 Modules CSS inclus

1. **Taille des Boîtes** - Dimensions et tailles
2. **Marges** - Padding et margin
3. **Bordures** - Styles et formes de bordures
4. **Positionnement** - Position et empilement
5. **Flottants** - Éléments flottants
6. **Visibilité & Affichage** - Display et visibility
7. **Alignement des Boîtes** - Alignement dans les layouts
8. **Flexbox** - Modèle de boîte flexible
9. **Grilles (Grid)** - Système de grille CSS
10. **Fragmentation** - Contrôle de la fragmentation
11. **Multi-colonnes** - Mises en page multi-colonnes
12. **Police (Font)** - Gestion des polices
13. **Texte** - Manipulation du texte
14. **Lignes** - Positionnement des lignes
15. **Débordement** - Gestion des débordements
16. **Listes** - Styles de listes
17. **Tableaux** - Comportement des tableaux
18. **Images & Contenus Remplacés** - Gestion des médias
19. **Transitions** - Animations progressives
20. **Animations** - Animations CSS avancées
21. **Transformations** - Transformations 2D/3D
22. **Fond (Background)** - Propriétés d'arrière-plan
23. **Interface Utilisateur** - Propriétés UI
24. **Masquage & Découpage** - Techniques de masquage
25. **Barres de Défilement** - Contrôle du défilement
26. **Mode d'Écriture** - Direction du texte
27. **Formes CSS** - Création de formes
28. **Chemins d'Animation** - Animation le long de chemins
29. **Composition & Mélange** - Mélange d'éléments
30. **Couleur** - Gestion des couleurs
31. **Contenus Générés** - Génération de contenu
32. **Filtres** - Effets graphiques
33. **Remplissage & Contours SVG** - Propriétés SVG
34. **Propriétés Diverses** - Autres propriétés

## 🏷️ Statuts des propriétés

- **REC** (Recommandation) : Propriétés stables et recommandées
- **CR** (Candidat Recommandation) : Propriétés en cours de finalisation
- **WD** (Working Draft) : Propriétés en développement
- **FPWD** (First Public Working Draft) : Nouvelles propriétés proposées

## 🛠️ Personnalisation

### Ajouter de nouvelles propriétés
Modifiez le fichier `script.js` et ajoutez vos propriétés dans le tableau `cssModules` :

```javascript
{
    title: "Mon Module",
    description: "Description du module",
    properties: [
        {name: "ma-propriete", status: "REC", description: "Description de la propriété"}
    ]
}
```

### Modifier le style
Éditez le fichier `styles.css` pour personnaliser l'apparence :
- Couleurs dans les variables CSS
- Tailles de police
- Espacements et marges
- Animations et transitions

## 🌐 Compatibilité

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Mobile browsers

## 📚 Ressources pédagogiques

Cette application peut être utilisée comme :
- **Référence rapide** pendant le développement
- **Outil d'apprentissage** pour les cours CSS
- **Guide de révision** pour les examens
- **Documentation interactive** pour les projets

## 🤝 Contribution

Pour améliorer cette application :
1. Ajoutez de nouvelles propriétés CSS
2. Améliorez les descriptions existantes
3. Proposez de nouveaux modules
4. Signalez les erreurs ou imprécisions

## 📄 Licence

Ce projet est libre d'utilisation pour des fins éducatives.

---

**Créé pour l'apprentissage du CSS** - Une référence complète et interactive pour tous les étudiants en développement web.
