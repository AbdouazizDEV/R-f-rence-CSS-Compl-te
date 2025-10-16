// Données des modules CSS
const cssModules = [
    {
        title: "Taille des Boîtes",
        description: "Propriétés permettant de spécifier des dimensions (largeur et hauteur) pour les boîtes des éléments",
        properties: [
            {name: "width", status: "REC", description: "Spécifier la largeur préférée de la boîte d'un élément"},
            {name: "min-width", status: "REC", description: "Spécifier la largeur minimale de la boîte d'un élément"},
            {name: "max-width", status: "REC", description: "Spécifier la largeur maximale de la boîte d'un élément"},
            {name: "height", status: "REC", description: "Spécifier la hauteur préférée de la boîte d'un élément"},
            {name: "min-height", status: "REC", description: "Spécifier la hauteur minimale de la boîte d'un élément"},
            {name: "max-height", status: "REC", description: "Spécifier la hauteur maximale de la boîte d'un élément"},
            {name: "box-sizing", status: "REC", description: "Définir la boîte de référence pour calculer la hauteur et largeur totale"},
            {name: "min-block-size", status: "WD", description: "Taille minimale horizontale ou verticale selon writing-mode (bloc)"},
            {name: "max-block-size", status: "WD", description: "Taille maximale horizontale ou verticale selon writing-mode (bloc)"},
            {name: "block-size", status: "WD", description: "Propriété raccourcie pour min-block-size et max-block-size"},
            {name: "min-inline-size", status: "WD", description: "Taille minimale horizontale ou verticale selon writing-mode (inline)"},
            {name: "max-inline-size", status: "WD", description: "Taille maximale horizontale ou verticale selon writing-mode (inline)"},
            {name: "inline-size", status: "WD", description: "Propriété raccourcie pour min-inline-size et max-inline-size"}
        ]
    },
    {
        title: "Marges",
        description: "Propriétés permettant de définir des marges intérieures (padding) et extérieures (margin)",
        properties: [
            {name: "padding-top", status: "REC", description: "Régler la taille de la marge intérieure haute"},
            {name: "padding-right", status: "REC", description: "Régler la taille de la marge intérieure droite"},
            {name: "padding-bottom", status: "REC", description: "Régler la taille de la marge intérieure basse"},
            {name: "padding-left", status: "REC", description: "Régler la taille de la marge intérieure gauche"},
            {name: "padding", status: "REC", description: "Propriété raccourcie pour toutes les marges intérieures"},
            {name: "padding-block-start", status: "WD", description: "Marge intérieure au début de l'axe de bloc"},
            {name: "padding-block-end", status: "WD", description: "Marge intérieure à la fin de l'axe de bloc"},
            {name: "padding-block", status: "WD", description: "Propriété raccourcie pour padding-block-start et end"},
            {name: "padding-inline-start", status: "WD", description: "Marge intérieure au début de l'axe en ligne"},
            {name: "padding-inline-end", status: "WD", description: "Marge intérieure à la fin de l'axe en ligne"},
            {name: "padding-inline", status: "WD", description: "Propriété raccourcie pour padding-inline-start et end"},
            {name: "margin-top", status: "REC", description: "Régler la taille de la marge extérieure haute"},
            {name: "margin-right", status: "REC", description: "Régler la taille de la marge extérieure droite"},
            {name: "margin-bottom", status: "REC", description: "Régler la taille de la marge extérieure basse"},
            {name: "margin-left", status: "REC", description: "Régler la taille de la marge extérieure gauche"},
            {name: "margin", status: "REC", description: "Propriété raccourcie pour toutes les marges extérieures"},
            {name: "margin-block-start", status: "WD", description: "Marge extérieure au début de l'axe de bloc"},
            {name: "margin-block-end", status: "WD", description: "Marge extérieure à la fin de l'axe de bloc"},
            {name: "margin-block", status: "WD", description: "Propriété raccourcie pour margin-block-start et end"},
            {name: "margin-inline-start", status: "WD", description: "Marge extérieure au début de l'axe en ligne"},
            {name: "margin-inline-end", status: "WD", description: "Marge extérieure à la fin de l'axe en ligne"},
            {name: "margin-inline", status: "WD", description: "Propriété raccourcie pour margin-inline-start et end"}
        ]
    },
    {
        title: "Bordures",
        description: "Propriétés permettant de définir des bordures droites ou arrondies de différents styles",
        properties: [
            {name: "border", status: "REC", description: "Propriété raccourcie pour toutes les bordures"},
            {name: "border-width", status: "REC", description: "Définir la largeur des bordures"},
            {name: "border-style", status: "REC", description: "Définir le style des bordures (solid, dashed, etc.)"},
            {name: "border-color", status: "REC", description: "Définir la couleur des bordures"},
            {name: "border-top", status: "REC", description: "Propriétés de la bordure haute"},
            {name: "border-right", status: "REC", description: "Propriétés de la bordure droite"},
            {name: "border-bottom", status: "REC", description: "Propriétés de la bordure basse"},
            {name: "border-left", status: "REC", description: "Propriétés de la bordure gauche"},
            {name: "border-radius", status: "CR", description: "Définir l'arrondi des bordures"},
            {name: "border-top-left-radius", status: "CR", description: "Arrondi du coin supérieur gauche"},
            {name: "border-top-right-radius", status: "CR", description: "Arrondi du coin supérieur droit"},
            {name: "border-bottom-right-radius", status: "CR", description: "Arrondi du coin inférieur droit"},
            {name: "border-bottom-left-radius", status: "CR", description: "Arrondi du coin inférieur gauche"},
            {name: "border-image", status: "CR", description: "Définir une image comme style de bordure"},
            {name: "border-image-source", status: "CR", description: "Spécifier l'image à utiliser"},
            {name: "border-image-slice", status: "CR", description: "Diviser l'image en neuf régions"},
            {name: "border-image-width", status: "CR", description: "Largeur de l'image de bordure"},
            {name: "border-image-outset", status: "CR", description: "Extension de la zone d'image de bordure"},
            {name: "border-image-repeat", status: "CR", description: "Comportement de répétition de l'image"}
        ]
    },
    {
        title: "Positionnement",
        description: "Propriétés permettant de gérer le positionnement et l'empilement des éléments",
        properties: [
            {name: "position", status: "REC", description: "Algorithme de positionnement (static, relative, absolute, fixed, sticky)"},
            {name: "top", status: "REC", description: "Décalage du bord supérieur"},
            {name: "right", status: "REC", description: "Décalage du bord droit"},
            {name: "bottom", status: "REC", description: "Décalage du bord inférieur"},
            {name: "left", status: "REC", description: "Décalage du bord gauche"},
            {name: "z-index", status: "REC", description: "Niveau d'empilement de l'élément"},
            {name: "inset-block-start", status: "WD", description: "Décalage au début de l'axe de bloc"},
            {name: "inset-block-end", status: "WD", description: "Décalage à la fin de l'axe de bloc"},
            {name: "inset-block", status: "WD", description: "Propriété raccourcie pour inset-block-start et end"},
            {name: "inset-inline-start", status: "WD", description: "Décalage au début de l'axe en ligne"},
            {name: "inset-inline-end", status: "WD", description: "Décalage à la fin de l'axe en ligne"},
            {name: "inset-inline", status: "WD", description: "Propriété raccourcie pour inset-inline-start et end"}
        ]
    },
    {
        title: "Flottants",
        description: "Propriétés permettant de faire flotter les éléments",
        properties: [
            {name: "float", status: "REC", description: "Retirer un élément du flux normal pour le faire flotter"},
            {name: "clear", status: "REC", description: "Empêcher un élément d'être à côté d'éléments flottants"},
            {name: "float-defer", status: "FPWD", description: "Définition non définitive (nouvellement proposée)"},
            {name: "float-offset", status: "FPWD", description: "Définition non définitive (nouvellement proposée)"},
            {name: "float-reference", status: "FPWD", description: "Définition non définitive (nouvellement proposée)"}
        ]
    },
    {
        title: "Visibilité & Affichage",
        description: "Propriétés de contrôle de la visibilité et du type d'affichage",
        properties: [
            {name: "visibility", status: "REC", description: "Cacher un élément tout en conservant son espace"},
            {name: "display", status: "REC", description: "Type d'affichage (block, inline, flex, grid, none, etc.)"}
        ]
    },
    {
        title: "Alignement des Boîtes",
        description: "Propriétés d'alignement dans les différents modèles de disposition",
        properties: [
            {name: "align-content", status: "CR", description: "Aligner le contenu le long de l'axe secondaire"},
            {name: "justify-content", status: "CR", description: "Aligner le contenu le long de l'axe principal"},
            {name: "place-content", status: "WD", description: "Raccourci pour align-content et justify-content"},
            {name: "align-self", status: "CR", description: "Aligner une boîte sur l'axe secondaire"},
            {name: "justify-self", status: "WD", description: "Aligner une boîte sur l'axe principal"},
            {name: "place-self", status: "WD", description: "Raccourci pour align-self et justify-self"},
            {name: "align-items", status: "CR", description: "Définir align-self pour les éléments descendants"},
            {name: "justify-items", status: "WD", description: "Définir justify-self pour les éléments descendants"},
            {name: "place-items", status: "WD", description: "Raccourci pour align-items et justify-items"},
            {name: "row-gap", status: "WD", description: "Espacement entre les rangées"},
            {name: "column-gap", status: "WD", description: "Espacement entre les colonnes"},
            {name: "gap", status: "WD", description: "Raccourci pour row-gap et column-gap"},
            {name: "order", status: "CR", description: "Ordre d'apparition des éléments flexibles"}
        ]
    },
    {
        title: "Flexbox",
        description: "Modèle de boîte flexible pour la conception d'interfaces",
        properties: [
            {name: "flex-grow", status: "CR", description: "Capacité à s'étendre pour occuper l'espace"},
            {name: "flex-shrink", status: "CR", description: "Capacité à rétrécir pour ne pas déborder"},
            {name: "flex-basis", status: "CR", description: "Taille de base avant redistribution"},
            {name: "flex", status: "CR", description: "Raccourci pour flex-grow, flex-shrink et flex-basis"},
            {name: "flex-direction", status: "CR", description: "Direction de l'axe principal (row, column)"},
            {name: "flex-wrap", status: "CR", description: "Retour à la ligne des éléments flexibles"},
            {name: "flex-flow", status: "CR", description: "Raccourci pour flex-direction et flex-wrap"}
        ]
    },
    {
        title: "Grilles (Grid)",
        description: "Système de présentation bidimensionnel basé sur une grille",
        properties: [
            {name: "grid-template-columns", status: "CR", description: "Liste des pistes pour les colonnes"},
            {name: "grid-template-rows", status: "CR", description: "Liste des pistes pour les lignes"},
            {name: "grid-template-areas", status: "CR", description: "Définir des zones de grille nommées"},
            {name: "grid-template", status: "CR", description: "Raccourci pour columns, rows et areas"},
            {name: "grid-auto-rows", status: "CR", description: "Taille des pistes implicites (lignes)"},
            {name: "grid-auto-columns", status: "CR", description: "Taille des pistes implicites (colonnes)"},
            {name: "grid-auto-flow", status: "CR", description: "Algorithme de placement automatique"},
            {name: "grid", status: "CR", description: "Raccourci pour toutes les propriétés de grille"},
            {name: "grid-row-start", status: "CR", description: "Ligne de départ d'un élément"},
            {name: "grid-row-end", status: "CR", description: "Ligne de fin d'un élément"},
            {name: "grid-row", status: "CR", description: "Raccourci pour row-start et row-end"},
            {name: "grid-column-start", status: "CR", description: "Colonne de départ d'un élément"},
            {name: "grid-column-end", status: "CR", description: "Colonne de fin d'un élément"},
            {name: "grid-column", status: "CR", description: "Raccourci pour column-start et column-end"},
            {name: "grid-area", status: "CR", description: "Raccourci pour row et column (start/end)"}
        ]
    },
    {
        title: "Fragmentation",
        description: "Contrôle de la fragmentation du contenu (pages, colonnes, régions)",
        properties: [
            {name: "break-before", status: "CR", description: "Rupture de page/colonne/région avant l'élément"},
            {name: "break-after", status: "CR", description: "Rupture de page/colonne/région après l'élément"},
            {name: "break-inside", status: "CR", description: "Rupture de page/colonne/région dans l'élément"},
            {name: "orphans", status: "CR", description: "Nombre minimum de lignes avant fragmentation"},
            {name: "widows", status: "CR", description: "Nombre maximum de lignes avant fragmentation"},
            {name: "page-break-before", status: "REC", description: "Ancienne propriété (utiliser break-before)"},
            {name: "page-break-after", status: "REC", description: "Ancienne propriété (utiliser break-after)"},
            {name: "page-break-inside", status: "REC", description: "Ancienne propriété (utiliser break-inside)"},
            {name: "box-decoration-break", status: "CR", description: "Gestion des décorations sur les fragments"}
        ]
    },
    {
        title: "Multi-colonnes",
        description: "Mises en page avec plusieurs colonnes",
        properties: [
            {name: "column-width", status: "WD", description: "Largeur des colonnes"},
            {name: "column-count", status: "WD", description: "Nombre de colonnes"},
            {name: "columns", status: "WD", description: "Raccourci pour column-width et column-count"},
            {name: "column-rule-width", status: "WD", description: "Largeur du séparateur de colonnes"},
            {name: "column-rule-style", status: "WD", description: "Style du séparateur de colonnes"},
            {name: "column-rule-color", status: "WD", description: "Couleur du séparateur de colonnes"},
            {name: "column-rule", status: "WD", description: "Raccourci pour les règles de colonnes"},
            {name: "column-span", status: "WD", description: "Nombre de colonnes occupées par l'élément"},
            {name: "column-fill", status: "WD", description: "Remplissage des colonnes (équitable/séquentiel)"}
        ]
    },
    {
        title: "Police (Font)",
        description: "Propriétés de définition et chargement des polices",
        properties: [
            {name: "font-family", status: "REC", description: "Famille de polices à utiliser"},
            {name: "font-weight", status: "REC", description: "Poids/épaisseur des glyphes (normal, bold, 100-900)"},
            {name: "font-stretch", status: "REC", description: "Forme condensée ou étendue"},
            {name: "font-style", status: "REC", description: "Style italique ou oblique"},
            {name: "font-size", status: "REC", description: "Taille des glyphes"},
            {name: "font-size-adjust", status: "REC", description: "Préserver la lisibilité avec polices de repli"},
            {name: "font", status: "REC", description: "Propriété raccourcie pour toutes les propriétés de police"},
            {name: "font-synthesis", status: "REC", description: "Synthèse automatique de variantes"},
            {name: "font-kerning", status: "REC", description: "Contrôle du crénage (espacement contextuel)"},
            {name: "font-variant-ligatures", status: "REC", description: "Contrôle des ligatures"},
            {name: "font-variant-caps", status: "REC", description: "Glyphes pour les capitales"},
            {name: "font-variant-numeric", status: "REC", description: "Forme des caractères numériques"},
            {name: "font-variant-position", status: "REC", description: "Glyphes en exposant ou indice"},
            {name: "font-variant", status: "REC", description: "Raccourci pour les variantes de police"},
            {name: "font-feature-settings", status: "REC", description: "Contrôle bas niveau des fonctionnalités OpenType"}
        ]
    },
    {
        title: "Texte",
        description: "Manipulation et décoration du texte",
        properties: [
            {name: "text-transform", status: "REC", description: "Transformer le texte (uppercase, lowercase, capitalize)"},
            {name: "white-space", status: "REC", description: "Gestion des espaces blancs et retours à la ligne"},
            {name: "word-spacing", status: "REC", description: "Espacement entre les mots"},
            {name: "letter-spacing", status: "WD", description: "Espacement entre les lettres"},
            {name: "text-indent", status: "REC", description: "Indentation de la première ligne"},
            {name: "text-align", status: "REC", description: "Alignement horizontal du texte (left, center, right, justify)"},
            {name: "text-align-last", status: "WD", description: "Alignement de la dernière ligne"},
            {name: "text-justify", status: "WD", description: "Méthode de justification"},
            {name: "word-break", status: "WD", description: "Règles de rupture de mots"},
            {name: "line-break", status: "WD", description: "Rigueur des règles de rupture de ligne"},
            {name: "hyphens", status: "WD", description: "Contrôle de la césure automatique"},
            {name: "overflow-wrap", status: "WD", description: "Césure aux endroits non autorisés pour éviter débordement"},
            {name: "text-decoration-line", status: "CR", description: "Type de décoration (underline, overline, line-through)"},
            {name: "text-decoration-style", status: "CR", description: "Style de la décoration (solid, wavy, dashed)"},
            {name: "text-decoration-color", status: "CR", description: "Couleur de la décoration"},
            {name: "text-decoration", status: "CR", description: "Raccourci pour les décorations de texte"},
            {name: "text-underline-position", status: "CR", description: "Position du soulignement"},
            {name: "text-emphasis-style", status: "CR", description: "Type des marques d'emphase"},
            {name: "text-emphasis-color", status: "CR", description: "Couleur des marques d'emphase"},
            {name: "text-emphasis", status: "CR", description: "Raccourci pour l'emphase de texte"},
            {name: "text-emphasis-position", status: "CR", description: "Position des marques d'emphase"},
            {name: "text-shadow", status: "CR", description: "Ombres portées sur le texte"}
        ]
    },
    {
        title: "Lignes",
        description: "Positionnement des lignes et du texte",
        properties: [
            {name: "line-height", status: "REC", description: "Hauteur de la boîte de ligne"},
            {name: "vertical-align", status: "WD", description: "Alignement vertical d'une boîte inline"},
            {name: "alignment-baseline", status: "WD", description: "Point d'alignement d'une boîte inline"},
            {name: "baseline-shift", status: "WD", description: "Décalage de la ligne de base"}
        ]
    },
    {
        title: "Débordement (Overflow)",
        description: "Gestion des débordements de contenu",
        properties: [
            {name: "overflow-x", status: "WD", description: "Débordement horizontal"},
            {name: "overflow-y", status: "WD", description: "Débordement vertical"},
            {name: "overflow", status: "REC", description: "Raccourci pour overflow-x et overflow-y"},
            {name: "overflow-block", status: "WD", description: "Débordement sur l'axe de bloc"},
            {name: "overflow-inline", status: "WD", description: "Débordement sur l'axe en ligne"},
            {name: "text-overflow", status: "REC", description: "Rendu du texte débordant (ellipsis, clip)"}
        ]
    },
    {
        title: "Listes",
        description: "Styles et gestion des puces de listes",
        properties: [
            {name: "list-style-image", status: "REC", description: "Image utilisée comme puce"},
            {name: "list-style-type", status: "REC", description: "Type de puce (disc, circle, square, decimal, etc.)"},
            {name: "list-style-position", status: "REC", description: "Position du marqueur (inside, outside)"},
            {name: "list-style", status: "REC", description: "Raccourci pour les styles de liste"},
            {name: "counter-reset", status: "REC", description: "Créer et initialiser des compteurs"},
            {name: "counter-increment", status: "REC", description: "Incrémenter des compteurs"},
            {name: "counter-set", status: "WD", description: "Définir la valeur d'un compteur"}
        ]
    },
    {
        title: "Tableaux",
        description: "Comportement des tableaux HTML et CSS",
        properties: [
            {name: "table-layout", status: "REC", description: "Algorithme de disposition (auto, fixed)"},
            {name: "border-collapse", status: "REC", description: "Fusion des bordures adjacentes (collapse, separate)"},
            {name: "border-spacing", status: "REC", description: "Espacement entre les bordures"},
            {name: "caption-side", status: "REC", description: "Position de la légende (top, bottom)"},
            {name: "empty-cells", status: "REC", description: "Affichage des cellules vides (show, hide)"}
        ]
    },
    {
        title: "Images & Contenus Remplacés",
        description: "Propriétés pour images et éléments remplacés",
        properties: [
            {name: "object-fit", status: "CR", description: "Adaptation du contenu à la boîte (fill, contain, cover, etc.)"},
            {name: "object-position", status: "CR", description: "Alignement de l'élément remplacé"},
            {name: "image-orientation", status: "CR", description: "Orientation de l'image (déprécié)"},
            {name: "image-rendering", status: "CR", description: "Algorithme de mise à l'échelle (auto, crisp-edges, pixelated)"}
        ]
    },
    {
        title: "Transitions",
        description: "Transitions progressives entre états CSS",
        properties: [
            {name: "transition-property", status: "WD", description: "Propriété CSS à animer"},
            {name: "transition-duration", status: "WD", description: "Durée de la transition"},
            {name: "transition-timing-function", status: "WD", description: "Fonction de timing (ease, linear, cubic-bezier)"},
            {name: "transition-delay", status: "WD", description: "Délai avant démarrage"},
            {name: "transition", status: "WD", description: "Raccourci pour toutes les propriétés de transition"}
        ]
    },
    {
        title: "Animations",
        description: "Animations CSS avec keyframes",
        properties: [
            {name: "animation-name", status: "WD", description: "Nom de l'animation (@keyframes)"},
            {name: "animation-duration", status: "WD", description: "Durée de l'animation"},
            {name: "animation-timing-function", status: "WD", description: "Fonction de timing"},
            {name: "animation-delay", status: "WD", description: "Délai avant démarrage"},
            {name: "animation-iteration-count", status: "WD", description: "Nombre de cycles (nombre ou infinite)"},
            {name: "animation-direction", status: "WD", description: "Direction des cycles (normal, reverse, alternate)"},
            {name: "animation-fill-mode", status: "WD", description: "Styles avant/après l'animation (forwards, backwards, both)"},
            {name: "animation", status: "WD", description: "Raccourci pour toutes les propriétés d'animation"}
        ]
    },
    {
        title: "Transformations",
        description: "Transformations 2D et 3D",
        properties: [
            {name: "transform", status: "CR", description: "Appliquer des transformations (translate, rotate, scale, skew)"},
            {name: "transform-origin", status: "CR", description: "Point d'origine de la transformation"},
            {name: "transform-box", status: "CR", description: "Boîte de référence pour la transformation"},
            {name: "transform-style", status: "WD", description: "Mode de rendu 3D (flat, preserve-3d)"},
            {name: "perspective", status: "WD", description: "Perspective 3D pour les enfants"},
            {name: "perspective-origin", status: "WD", description: "Point d'origine de la perspective"},
            {name: "backface-visibility", status: "WD", description: "Visibilité du dos d'un élément transformé (visible, hidden)"}
        ]
    },
    {
        title: "Fond (Background)",
        description: "Propriétés du fond et arrière-plan",
        properties: [
            {name: "background-color", status: "REC", description: "Couleur de fond"},
            {name: "background-image", status: "REC", description: "Image de fond"},
            {name: "background-position", status: "REC", description: "Position de l'image de fond"},
            {name: "background-size", status: "CR", description: "Taille de l'image (auto, cover, contain, dimensions)"},
            {name: "background-repeat", status: "REC", description: "Répétition de l'image (repeat, no-repeat, space, round)"},
            {name: "background-attachment", status: "REC", description: "Position fixe ou défilante (scroll, fixed, local)"},
            {name: "background-origin", status: "CR", description: "Point d'origine (content-box, padding-box, border-box)"},
            {name: "background-clip", status: "CR", description: "Zone de dessin du fond"},
            {name: "background", status: "REC", description: "Raccourci pour toutes les propriétés de fond"},
            {name: "box-shadow", status: "CR", description: "Ombres portées autour de la boîte"}
        ]
    },
    {
        title: "Interface Utilisateur",
        description: "Propriétés de l'interface utilisateur",
        properties: [
            {name: "outline-width", status: "REC", description: "Épaisseur de la bordure externe"},
            {name: "outline-style", status: "REC", description: "Style de la bordure externe"},
            {name: "outline-color", status: "REC", description: "Couleur de la bordure externe"},
            {name: "outline", status: "REC", description: "Raccourci pour les propriétés d'outline"},
            {name: "outline-offset", status: "REC", description: "Distance entre la boîte et l'outline"},
            {name: "resize", status: "REC", description: "Élément redimensionnable (none, both, horizontal, vertical)"},
            {name: "cursor", status: "REC", description: "Forme du curseur (pointer, help, wait, text, etc.)"},
            {name: "caret-color", status: "REC", description: "Couleur du curseur de saisie"},
            {name: "user-select", status: "WD", description: "Contrôle de la sélection de texte"}
        ]
    },
    {
        title: "Masquage & Découpage",
        description: "Techniques de masquage et découpage",
        properties: [
            {name: "clip-path", status: "CR", description: "Créer un tracé de détourage"},
            {name: "mask-image", status: "CR", description: "Image utilisée comme masque"},
            {name: "mask-mode", status: "CR", description: "Type de masque (luminance, alpha)"},
            {name: "mask-repeat", status: "CR", description: "Répétition des images de masque"},
            {name: "mask-position", status: "CR", description: "Position du masque"},
            {name: "mask-clip", status: "CR", description: "Zone modifiée par le masque"},
            {name: "mask-origin", status: "CR", description: "Point d'origine du masque"},
            {name: "mask-size", status: "CR", description: "Dimensions des images de masque"},
            {name: "mask-composite", status: "CR", description: "Opération de composition entre masques"},
            {name: "mask", status: "CR", description: "Raccourci pour toutes les propriétés de masque"},
            {name: "mask-border", status: "CR", description: "Masque de bordure"},
            {name: "mask-type", status: "CR", description: "Type de masque (luminance, alpha)"}
        ]
    },
    {
        title: "Barres de Défilement",
        description: "Points d'accroche et style des barres de défilement",
        properties: [
            {name: "scroll-snap-type", status: "CR", description: "Points d'accroche du défilement"},
            {name: "scroll-padding", status: "CR", description: "Décalage de la zone de défilement"},
            {name: "scroll-padding-top", status: "CR", description: "Décalage supérieur"},
            {name: "scroll-padding-right", status: "CR", description: "Décalage droit"},
            {name: "scroll-padding-bottom", status: "CR", description: "Décalage inférieur"},
            {name: "scroll-padding-left", status: "CR", description: "Décalage gauche"},
            {name: "scroll-margin", status: "CR", description: "Marge de défilement"},
            {name: "scroll-margin-top", status: "CR", description: "Marge supérieure"},
            {name: "scroll-margin-right", status: "CR", description: "Marge droite"},
            {name: "scroll-margin-bottom", status: "CR", description: "Marge inférieure"},
            {name: "scroll-margin-left", status: "CR", description: "Marge gauche"},
            {name: "scroll-snap-align", status: "CR", description: "Alignement des positions d'accroche"},
            {name: "scroll-snap-stop", status: "CR", description: "Comportement de passage des positions"},
            {name: "scrollbar-color", status: "FPWD", description: "Couleurs des barres de défilement"},
            {name: "scrollbar-width", status: "FPWD", description: "Épaisseur des barres (auto, thin, none)"},
            {name: "scroll-behavior", status: "FPWD", description: "Comportement du défilement (auto, smooth)"}
        ]
    },
    {
        title: "Mode d'Écriture",
        description: "Direction et orientation du texte",
        properties: [
            {name: "direction", status: "REC", description: "Orientation du texte (ltr, rtl)"},
            {name: "unicode-bidi", status: "REC", description: "Gestion de la bidirectionnalité"},
            {name: "writing-mode", status: "CR", description: "Mode d'écriture (horizontal-tb, vertical-rl, vertical-lr)"},
            {name: "text-orientation", status: "CR", description: "Orientation du texte en mode vertical"},
            {name: "text-combine-upright", status: "CR", description: "Combinaison de caractères verticaux"}
        ]
    },
    {
        title: "Formes CSS",
        description: "Création de formes géométriques",
        properties: [
            {name: "shape-outside", status: "CR", description: "Forme autour de laquelle le contenu s'écoule"},
            {name: "shape-image-threshold", status: "CR", description: "Seuil alpha pour extraire la forme d'une image"},
            {name: "shape-margin", status: "CR", description: "Marge autour de la forme"}
        ]
    },
    {
        title: "Chemins d'Animation",
        description: "Positionnement et animation le long d'un chemin",
        properties: [
            {name: "offset-path", status: "WD", description: "Chemin géométrique de positionnement"},
            {name: "offset-distance", status: "WD", description: "Position le long du chemin"},
            {name: "offset-position", status: "WD", description: "Position initiale du chemin"},
            {name: "offset-anchor", status: "WD", description: "Point d'ancrage sur le chemin"},
            {name: "offset-rotate", status: "WD", description: "Orientation lors du positionnement"},
            {name: "offset", status: "WD", description: "Raccourci pour toutes les propriétés offset"}
        ]
    },
    {
        title: "Composition & Mélange",
        description: "Mélange et composition d'éléments",
        properties: [
            {name: "mix-blend-mode", status: "CR", description: "Mode de fusion avec le parent (multiply, screen, overlay, etc.)"},
            {name: "isolation", status: "CR", description: "Créer un nouveau contexte d'empilement"},
            {name: "background-blend-mode", status: "CR", description: "Fusion des images d'arrière-plan"}
        ]
    },
    {
        title: "Couleur",
        description: "Gestion des couleurs et opacité",
        properties: [
            {name: "color", status: "REC", description: "Couleur du texte"},
            {name: "opacity", status: "REC", description: "Niveau d'opacité (0 à 1)"},
            {name: "color-scheme", status: "WD", description: "Schémas de couleurs acceptés (light, dark)"},
            {name: "forced-color-adjust", status: "WD", description: "Sortir du mode couleurs forcées"}
        ]
    },
    {
        title: "Contenus Générés",
        description: "Génération de contenu avec CSS",
        properties: [
            {name: "content", status: "REC", description: "Contenu généré dans un pseudo-élément"},
            {name: "quotes", status: "REC", description: "Style des guillemets pour citations"}
        ]
    },
    {
        title: "Filtres",
        description: "Effets graphiques et filtres",
        properties: [
            {name: "filter", status: "WD", description: "Appliquer des filtres (blur, brightness, contrast, grayscale, etc.)"},
            {name: "backdrop-filter", status: "WD", description: "Filtre appliqué à l'arrière-plan"}
        ]
    },
    {
        title: "Remplissage & Contours SVG",
        description: "Propriétés de remplissage et contours pour SVG",
        properties: [
            {name: "fill", status: "FPWD", description: "Remplissage d'une forme SVG"},
            {name: "fill-opacity", status: "FPWD", description: "Opacité du remplissage"},
            {name: "fill-rule", status: "FPWD", description: "Règle de remplissage (nonzero, evenodd)"},
            {name: "stroke", status: "FPWD", description: "Contour d'une forme SVG"},
            {name: "stroke-width", status: "FPWD", description: "Largeur du contour"},
            {name: "stroke-opacity", status: "FPWD", description: "Opacité du contour"},
            {name: "stroke-linecap", status: "FPWD", description: "Forme aux extrémités (butt, round, square)"},
            {name: "stroke-linejoin", status: "FPWD", description: "Forme aux jonctions (miter, round, bevel)"},
            {name: "stroke-dasharray", status: "FPWD", description: "Motif de pointillés"},
            {name: "stroke-dashoffset", status: "FPWD", description: "Décalage des pointillés"}
        ]
    },
    {
        title: "Propriétés Diverses",
        description: "Propriétés ne rentrant dans aucun module spécifique",
        properties: [
            {name: "--*", status: "CR", description: "Propriétés personnalisées (variables CSS)"},
            {name: "all", status: "CR", description: "Réinitialiser toutes les propriétés"},
            {name: "contain", status: "REC", description: "Isolation de l'élément (layout, style, paint, size)"},
            {name: "will-change", status: "CR", description: "Indication de changement futur pour optimisation"}
        ]
    }
];

// Fonction pour générer le HTML des modules
function renderModules(modules) {
    const content = document.getElementById('content');
    content.innerHTML = '';

    modules.forEach((module, index) => {
        const moduleDiv = document.createElement('div');
        moduleDiv.className = 'module';
        
        const header = document.createElement('div');
        header.className = 'module-header';
        header.innerHTML = `
            <h2>${module.title}</h2>
            <span class="toggle">▼</span>
        `;
        
        const description = document.createElement('div');
        description.className = 'module-description';
        description.textContent = module.description;
        
        const tableContainer = document.createElement('div');
        tableContainer.className = 'table-container active';
        
        let tableHTML = `
            <table>
                <thead>
                    <tr>
                        <th style="width: 25%">Propriété</th>
                        <th style="width: 10%">Statut</th>
                        <th style="width: 65%">Description</th>
                    </tr>
                </thead>
                <tbody>
        `;
        
        module.properties.forEach(prop => {
            tableHTML += `
                <tr>
                    <td class="property-name">${prop.name}</td>
                    <td><span class="status ${prop.status.toLowerCase()}">${prop.status}</span></td>
                    <td>${prop.description}</td>
                </tr>
            `;
        });
        
        tableHTML += `
                </tbody>
            </table>
        `;
        
        tableContainer.innerHTML = tableHTML;
        
        moduleDiv.appendChild(header);
        moduleDiv.appendChild(description);
        moduleDiv.appendChild(tableContainer);
        content.appendChild(moduleDiv);
        
        // Toggle functionality
        header.addEventListener('click', () => {
            header.classList.toggle('collapsed');
            tableContainer.classList.toggle('active');
        });
    });
}

// Fonction de recherche
function searchProperties() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const modules = document.querySelectorAll('.module');
    
    modules.forEach(module => {
        const rows = module.querySelectorAll('tbody tr');
        let hasVisibleRow = false;
        
        rows.forEach(row => {
            const propertyName = row.querySelector('.property-name').textContent.toLowerCase();
            const description = row.cells[2].textContent.toLowerCase();
            
            if (propertyName.includes(searchTerm) || description.includes(searchTerm)) {
                row.style.display = '';
                hasVisibleRow = true;
            } else {
                row.style.display = 'none';
            }
        });
        
        // Afficher/masquer le module en fonction des résultats
        if (searchTerm === '' || hasVisibleRow) {
            module.style.display = '';
            if (searchTerm !== '') {
                // Ouvrir automatiquement les modules avec résultats
                const header = module.querySelector('.module-header');
                const tableContainer = module.querySelector('.table-container');
                header.classList.remove('collapsed');
                tableContainer.classList.add('active');
            }
        } else {
            module.style.display = 'none';
        }
    });
}

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    renderModules(cssModules);
    
    // Ajouter l'événement de recherche
    const searchInput = document.getElementById('searchInput');
    searchInput.addEventListener('input', searchProperties);
});
