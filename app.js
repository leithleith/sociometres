const menuData = [
  {
    label: "Sociomètre RPS",
    submenu: [
      "Questionnaire",
      "Importer un fichier",
      "Importer plusieurs fichiers (individus)",
      "Importer plusieurs fichiers (groupe)",
      "Référentiel",
    ],
  },
  {
    label: "Sociomètre de l'encadrant",
    submenu: [
      "Questionnaire",
      "Importer un fichier",
      "Importer plusieurs fichiers (individus)",
      "Importer plusieurs fichiers (groupe)",
      "Référentiel",
    ],
  },
  {
    label: "Violentomètre",
    submenu: [
      "Questionnaire",
      "Importer un fichier",
      "Importer plusieurs fichiers (individus)",
      "Importer plusieurs fichiers (groupe)",
      "Référentiel",
    ],
  },
  {
    label: "Guide utilisateur",
    submenu: [],
  },
  {
    label: "A propos",
    submenu: [],
  },
  {
    label: "GitHub",
    submenu: [],
  },
  {
    label: "CC BY-NC-ND 4.0",
    submenu: [],
  },
];
const externalMenuLinks = {
  github: "https://github.com/leithleith/sociometres",
  "cc-by-nc-nd-4-0": "https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode.fr",
};
const menuRoot = document.getElementById("menu");
const contentRoot = document.getElementById("content");
const installBtn = document.getElementById("installBtn");
const menuHamburgerBtn = document.getElementById("menuHamburger");
let deferredInstallPrompt = null;
const plotLineColors = ["#0072B2", "#CC79A7", "#56B4E9", "#882255", "#332288"];
const plotImageExportIcon = {
  width: 24,
  height: 24,
  path: "M7 4l2-2h6l2 2h3a2 2 0 012 2v12a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2h3zm5 4a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6z",
};
function clonePlotExportValue(value) {
  if (typeof structuredClone === "function") {
    return structuredClone(value);
  }
  return JSON.parse(JSON.stringify(value));
}
function getPlotExportTextLines(context, text, maxWidth) {
  const words = String(text || "").split(/\s+/).filter(Boolean);
  const lines = [];
  let line = "";
  words.forEach((word) => {
    const candidate = line ? `${line} ${word}` : word;
    if (context.measureText(candidate).width <= maxWidth) {
      line = candidate;
      return;
    }
    if (line) {
      lines.push(line);
    }
    if (context.measureText(word).width <= maxWidth) {
      line = word;
      return;
    }
    let fragment = "";
    [...word].forEach((character) => {
      const nextFragment = fragment + character;
      if (context.measureText(nextFragment).width > maxWidth && fragment) {
        lines.push(fragment);
        fragment = character;
      } else {
        fragment = nextFragment;
      }
    });
    line = fragment;
  });
  if (line) {
    lines.push(line);
  }
  return lines.length ? lines : [""];
}
function loadPlotExportImage(dataUrl) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = () => reject(new Error("Impossible de préparer l'image du graphique."));
    image.src = dataUrl;
  });
}
async function createPlotExportDataUrl(container, options) {
  if (!container || typeof Plotly === "undefined") {
    throw new Error("Le graphique n'est pas disponible.");
  }
  const width = options.width || 1600;
  const plotHeight = options.height || 1600;
  const horizontalPadding = 48;
  const title = options.title || "Visualisation";
  const legendItems = (options.legendItems || []).filter((item) => item && item.label && item.color);
  const measureCanvas = document.createElement("canvas");
  const measureContext = measureCanvas.getContext("2d");
  measureContext.font = "700 34px sans-serif";
  const titleLines = getPlotExportTextLines(measureContext, title, width - horizontalPadding * 2);
  const titleHeight = titleLines.length * 44 + 36;
  measureContext.font = "24px sans-serif";
  const legendTextWidth = width - horizontalPadding * 2 - 48;
  const legendLines = legendItems.map((item) => getPlotExportTextLines(measureContext, item.label, legendTextWidth));
  const legendHeight = legendItems.length
    ? 58 + legendLines.reduce((height, lines) => height + Math.max(34, lines.length * 30) + 8, 0)
    : 0;
  const exportContainer = document.createElement("div");
  exportContainer.style.position = "fixed";
  exportContainer.style.left = "-10000px";
  exportContainer.style.top = "0";
  exportContainer.style.width = `${width}px`;
  exportContainer.style.height = `${plotHeight}px`;
  document.body.append(exportContainer);
  let plotDataUrl;
  try {
    const exportLayout = clonePlotExportValue(container.layout || {});
    exportLayout.autosize = false;
    exportLayout.width = width;
    exportLayout.height = plotHeight;
    exportLayout.title = { ...(exportLayout.title || {}), text: "" };
    await Plotly.newPlot(
      exportContainer,
      clonePlotExportValue(container.data || []),
      exportLayout,
      { staticPlot: true, responsive: false, displayModeBar: false },
    );
    plotDataUrl = await Plotly.toImage(exportContainer, {
      format: "png",
      width,
      height: plotHeight,
      scale: 1,
    });
  } finally {
    Plotly.purge(exportContainer);
    exportContainer.remove();
  }
  const plotImage = await loadPlotExportImage(plotDataUrl);
  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = titleHeight + plotHeight + legendHeight;
  const context = canvas.getContext("2d");
  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#1f2937";
  context.font = "700 34px sans-serif";
  context.textAlign = "center";
  titleLines.forEach((line, index) => {
    context.fillText(line, width / 2, 42 + index * 44);
  });
  context.drawImage(plotImage, 0, titleHeight, width, plotHeight);
  if (legendItems.length) {
    let legendY = titleHeight + plotHeight + 42;
    context.textAlign = "left";
    context.fillStyle = "#1f2937";
    context.font = "700 28px sans-serif";
    context.fillText(options.legendTitle || "Légende", horizontalPadding, legendY);
    legendY += 34;
    context.font = "24px sans-serif";
    legendItems.forEach((item, index) => {
      const lines = legendLines[index];
      const rowHeight = Math.max(34, lines.length * 30);
      const markerY = legendY + 10;
      context.fillStyle = item.color;
      if (item.type === "line") {
        context.fillRect(horizontalPadding, markerY + 7, 30, 5);
      } else {
        context.fillRect(horizontalPadding + 5, markerY, 20, 20);
        context.strokeStyle = "#d1d5db";
        context.strokeRect(horizontalPadding + 5, markerY, 20, 20);
      }
      context.fillStyle = "#1f2937";
      lines.forEach((textLine, lineIndex) => {
        context.fillText(textLine, horizontalPadding + 44, legendY + 26 + lineIndex * 30);
      });
      legendY += rowHeight + 8;
    });
  }
  return canvas.toDataURL("image/png");
}
async function downloadPlotImageWithTitleAndLegend(container, options) {
  const dataUrl = await createPlotExportDataUrl(container, options);
  const link = document.createElement("a");
  link.href = dataUrl;
  link.download = `${options.filename || `plot-${Date.now()}`}.png`;
  document.body.append(link);
  link.click();
  link.remove();
}
function getPlotImageExportButton(container, options) {
  return {
    name: "downloadImageWithTitleAndLegend",
    title: "Sauvegarder l'image en PNG",
    icon: plotImageExportIcon,
    click: () => {
      downloadPlotImageWithTitleAndLegend(container, options).catch((error) => {
        console.error("Plot image export failed.", error);
        alert("Impossible d'enregistrer l'image du graphique.");
      });
    },
  };
}
const polarQuestionnaireImportStates = new Map();
function closeHamburgerMenu() {
  if (!menuRoot || !menuHamburgerBtn) {
    return;
  }
  menuRoot.classList.add("menu-collapsed");
  menuHamburgerBtn.setAttribute("aria-expanded", "false");
}
function openHamburgerMenu() {
  if (!menuRoot || !menuHamburgerBtn) {
    return;
  }
  menuRoot.classList.remove("menu-collapsed");
  menuHamburgerBtn.setAttribute("aria-expanded", "true");
}
function toggleHamburgerMenu() {
  if (!menuRoot || !menuHamburgerBtn) {
    return;
  }
  const shouldOpen = menuRoot.classList.contains("menu-collapsed");
  if (shouldOpen) {
    openHamburgerMenu();
  } else {
    closeHamburgerMenu();
  }
}
const encadrantQuestionnaireItems = [
  {
    category: "Environnement de travail de qualité",
    item: "Adéquation entre moyens et objectifs du service",
  },
  {
    category: "Environnement de travail de qualité",
    item: "Respect du rôle contributif en comité de direction",
  },
  {
    category: "Environnement de travail de qualité",
    item: "Reconnaissance du rôle d'encadrant",
  },
  {
    category: "Environnement de travail de qualité",
    item: "Collectif de travail participatif",
  },
  {
    category: "Environnement de travail de qualité",
    item: "Autonomie et confiance pour la gestion quotidienne de l'équipe",
  },
  {
    category: "Environnement de travail de qualité",
    item: "Echanges et communications hiérarchiques respectueux",
  },
  {
    category: "Environnement de travail de qualité",
    item: "Respect du temps de travail",
  },
  {
    category: "Environnement de travail de qualité",
    item: "Déconnexion réelle",
  },
  {
    category: "Environnement de travail dégradé",
    item: "Remise en cause culpabilisante du fonctionnement du service",
  },
  {
    category: "Environnement de travail dégradé",
    item: "Pas d'écoute et isolmement en comité de direction",
  },
  {
    category: "Environnement de travail dégradé",
    item: "Personnalisation des difficultés rencontrées",
  },
  {
    category: "Environnement de travail dégradé",
    item: "Défiance des supérieurs, déni des difficultés exprimées",
  },
  {
    category: "Environnement de travail dégradé",
    item: "Consignes paradoxales et contrôle",
  },
  {
    category: "Environnement de travail dégradé",
    item: "Echanges conflictuels avec la hiérarchie",
  },
  {
    category: "Environnement de travail dégradé",
    item: "Travail supplémentaire non pris en compte",
  },
  {
    category: "Environnement de travail dégradé",
    item: "Difficulté de déconnexion",
  },
  {
    category: "Environnement de travail de rupture",
    item: "Inadéquation des moyens face aux objectifs du service",
  },
  {
    category: "Environnement de travail de rupture",
    item: "Dénigrement et diffamation",
  },
  {
    category: "Environnement de travail de rupture",
    item: "Mise sous tutelle et retrait des missions d'encadrement",
  },
  {
    category: "Environnement de travail de rupture",
    item: "Mise à l'écart des circuits d'information",
  },
  {
    category: "Environnement de travail de rupture",
    item: "Extrême surveillance et déstabilisation",
  },
  {
    category: "Environnement de travail de rupture",
    item: "Convocations récurrentes par la hiérarchie, sanctions",
  },
  {
    category: "Environnement de travail de rupture",
    item: "Injonction à la mobilité, déroulement de carrière bloqué",
  },
  {
    category: "Environnement de travail de rupture",
    item: "Exclusion, mise au placard",
  },
];
const categoryOrder = [
  "Environnement de travail de qualité",
  "Environnement de travail dégradé",
  "Environnement de travail de rupture",
];
const categoryMeta = {
  "Environnement de travail de qualité": {
    color: "#009E73",
    cssClass: "cat-qualite",
  },
  "Environnement de travail dégradé": {
    color: "#F0E442",
    cssClass: "cat-degrade",
  },
  "Environnement de travail de rupture": {
    color: "#D55E00",
    cssClass: "cat-rupture",
  },
};
const violentometreQuestionnaireItems = [
  { category: "Environnement professionnel sain", item: "Remarques et critiques acceptées" },
  { category: "Environnement professionnel sain", item: "Promotions pour les femmes comme pour les hommes" },
  { category: "Environnement professionnel sain", item: "Travail en confiance et autonomie" },
  { category: "Environnement professionnel sain", item: "Reconnaissance du travail" },
  { category: "Environnement professionnel sain", item: "Refus de relations extraprofessionnelles accepté",},
  { category: "Environnement professionnel sexiste et hostile", item: "Commentaires sur l'apparence" },
  { category: "Environnement professionnel sexiste et hostile", item: "Parole coupée systématiquement" },
  { category: "Environnement professionnel sexiste et hostile", item: "Blague sur les promotions canapé" },
  { category: "Environnement professionnel sexiste et hostile", item: "Questions indiscrètes insistantes sur la vie privée" },
  { category: "Environnement professionnel sexiste et hostile", item: "Blagues sexistes sur les blondes" },
  { category: "Environnement professionnel sexiste et hostile", item: "Evocation de sexualité sans accord" },
  { category: "Environnement professionnel sexiste et hostile", item: "Mécontentement après refus d'être raccompagnée" },
  { category: "Environnement professionnel sexiste et hostile", item: "Recherche systématique d'être seul avec une femme" },
  { category: "Harcèlement sexuel", item: "Images à caractère pornographique visibles" },
  { category: "Harcèlement sexuel", item: "Regards insistants sur la poitrine et les fesses" },
  { category: "Harcèlement sexuel", item: "SMS ou courriels à caractère sexuel sans accord" },
  { category: "Harcèlement sexuel", item: "Demande insistante d'un acte sexuel" },
  { category: "Harcèlement sexuel", item: "Hostilité liée au refus d'un acte sexuel" },
  { category: "Agressions sexuelles", item: "Menaces professionnelles pour obtenir un acte sexuel" },
  { category: "Agressions sexuelles", item: "Baiser forcé ou par surprise" },
  { category: "Agressions sexuelles", item: "Toucher les seins, fesses ou cuisses sans consentement" },
  { category: "Viol", item: "Fellation ou pénétration forcée" },
];
const violentometreCategoryOrder = [
  "Environnement professionnel sain",
  "Environnement professionnel sexiste et hostile",
  "Harcèlement sexuel",
  "Agressions sexuelles",
  "Viol",
];
const violentometreCategoryMeta = {
  "Environnement professionnel sain": { color: "#009E73", cssClass: "cat-sain", weight: 40 },
  "Environnement professionnel sexiste et hostile": { color: "#F0E442", cssClass: "cat-sexiste", weight: 60 },
  "Harcèlement sexuel": { color: "#E69F00", cssClass: "cat-harcelement", weight: 75 },
  "Agressions sexuelles": { color: "#D55E00", cssClass: "cat-agressions", weight: 90 },
  "Viol": { color: "#000000", cssClass: "cat-viol", weight: 100 },
};
const violentometreCategoryItemTotals = violentometreCategoryOrder.reduce((acc, category) => {
  acc[category] = violentometreQuestionnaireItems.filter((item) => item.category === category).length;
  return acc;
}, {});
const rpsQuestionnaireItems = [
  { category: "Environnement de travail de qualité", item: "Sens du travail" },
  { category: "Environnement de travail de qualité", item: "Autonomie" },
  { category: "Environnement de travail de qualité", item: "Charge de travail adaptée et effectifs suffisants" },
  { category: "Environnement de travail de qualité", item: "Respect du temps de travail" },
  { category: "Environnement de travail de qualité", item: "Reconnaissance" },
  { category: "Environnement de travail de qualité", item: "Ambiance de travail agréable" },
  { category: "Environnement de travail de qualité", item: "Déconnexion réelle" },
  { category: "Environnement de travail de qualité", item: "Télétravail satisfaisant" },
  { category: "Environnement de travail hostile", item: "Interrogation sur le sens du travail" },
  { category: "Environnement de travail hostile", item: "Pressions et contrôles hiérarchiques" },
  { category: "Environnement de travail hostile", item: "Augmentation du volume de travail" },
  { category: "Environnement de travail hostile", item: "Pas de prise en compte des heures supplémentaires" },
  { category: "Environnement de travail hostile", item: "Manque de reconnaissance" },
  { category: "Environnement de travail hostile", item: "Relations interprofessionnelles dégradées" },
  { category: "Environnement de travail hostile", item: "Difficulté à se déconnecter" },
  { category: "Environnement de travail hostile", item: "Télétravail en mode dégradé" },
  { category: "Environnement de travail de rupture", item: "Perte de sens du travail" },
  { category: "Environnement de travail de rupture", item: "Subordination exacerbée, corvéabilité" },
  { category: "Environnement de travail de rupture", item: "Charge de travail surdimensionnée ou sous-dimensionnée" },
  { category: "Environnement de travail de rupture", item: "Dépassement généralisé du temps de travail et travail gris" },
  { category: "Environnement de travail de rupture", item: "Aucune reconnaissance" },
  { category: "Environnement de travail de rupture", item: "Reproches incessants, humiliations, isolement" },
  { category: "Environnement de travail de rupture", item: "Impossibilité à se déconnecter" },
  { category: "Environnement de travail de rupture", item: "Télétravail subi en mode très dégradé" },
];
const rpsCategoryOrder = [
  "Environnement de travail de qualité",
  "Environnement de travail hostile",
  "Environnement de travail de rupture",
];
const rpsCategoryMeta = {
  "Environnement de travail de qualité": { color: "#009E73", cssClass: "cat-qualite", weight: 1 },
  "Environnement de travail hostile": { color: "#F0E442", cssClass: "cat-degrade", weight: 1 },
  "Environnement de travail de rupture": { color: "#D55E00", cssClass: "cat-rupture", weight: 1 },
};
const contentData = {
  "sociometre-rps-referentiel": {
    title: "Sociomètre RPS",
    subtitle: "Référentiel",
    cards: [
      "Basé sur le <a href='https://ugictcgt.fr/sociometres-2024/' target='_blank' rel='noopener noreferrer'>marque-pages Sociomètre de l'encadrant et des risques psycho-sociaux de l'UFICT Services Publics</a>.",
      "<a href='https://anact.fr/ressources?f%5B1%5D=theme_1%3A942' target='_blank' rel='noopener noreferrer'>ANACT : ressources sur les risques psychosociaux</a>",
      "<a href='https://www.inrs.fr/risques/carrefour-psychosociaux.html' target='_blank' rel='noopener noreferrer'>INRS : risques psychosociaux</a>",
      "<a href='https://lenumeriqueautrement.fr/les-outils/guide-numerique-qvt/' target='_blank' rel='noopener noreferrer'>Le numérique autrement : guide numérique QVT</a> in <a href='https://lenumeriqueautrement.fr/'target='_blank' rel='noopener noreferrer'>Le numérique autrement.</a>",
    ],
  },
  "sociometre-de-l-encadrant-questionnaire": {
    title: "Sociomètre de l'encadrant",
    subtitle: "Questionnaire",
    cards: [
      "Questionne les pratiques d'encadrement et la qualité du collectif de travail.",
      "Met en lumière les ressources et les freins managériaux.",
    ],
  },
  "sociometre-de-l-encadrant-referentiel": {
    title: "Sociomètre de l'encadrant",
    subtitle: "Référentiel",
    cards: [
      "Basé sur le <a href='https://ugictcgt.fr/sociometres-2024/' target='_blank' rel='noopener noreferrer'>marque-pages Sociomètre de l'encadrant de l'UFICT Services Publics</a>.",
      "<a href='https://lenumeriqueautrement.fr/' target='_blank' rel='noopener noreferrer'>Le numérique autrement : ressources sur le management</a> in <a href='https://lenumeriqueautrement.fr/'target='_blank' rel='noopener noreferrer'>Le numérique autrement.</a>",
    ],
  },
  "violentometre-questionnaire": {
    title: "Violentomètre",
    subtitle: "Questionnaire",
    cards: [
      "Identifie les comportements inacceptables et leurs degrés de gravité.",
      "Encourage la prise de conscience et l'orientation vers les bons relais.",
    ],
  },
  "violentometre-referentiel": {
    title: "Violentomètre",
    subtitle: "Référentiel",
    cards: [
      "Basé sur le <a href='https://www.egalite-professionnelle.cgt.fr/sexisme/' target='_blank' rel='noopener noreferrer'>marque-pages Violentomètre CGT</a>.",
    ],
  },
  "a-propos": {
    title: "A propos",
    subtitle: "",
    cards: [
      "Application Web Progressive d'aide à la collecte et l'analyse de questionnaires RPS | Progressive Web App for PSR questionnaires providing and analysis",
      "Bibliothèque graphique | Plotly.js graphing library: <a href='https://plotly.com/javascript/' target='_blank' rel='noopener noreferrer'>Plotly.js</a>",
      "Palettes de couleurs accessibles | colour-blind friendly color palettes: <a href='https://jfly.uni-koeln.de/color/#pallet' target='_blank' rel='noopener noreferrer'>Okabe-Ito</a> + <a href='https://sronpersonalpages.nl/~pault/#sec:colour_blindness' target='_blank' rel='noopener noreferrer'>Paul Tol muted</a>",
      "<a href='https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode.fr' target='_blank' rel='noopener noreferrer'>Contenu sous licence CC BY-NC-ND 4.0</a> | <a href='https://creativecommons.org/licenses/by-nc-nd/4.0/legalcode.en' target='_blank' rel='noopener noreferrer'>Content under CC BY-NC-ND 4.0 licence</a>",
      "<a href='https://opensource.org/licenses/MIT' target='_blank' rel='noopener noreferrer'>Code sous licence MIT | Code under MIT licence</a>: <a href='https://github.com/leithleith/sociometres' target='_blank' rel='noopener noreferrer'><svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' width='20' height='20'><path d='M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.263.82-.583 0-.288-.01-1.05-.015-2.06-3.338.724-4.042-1.61-4.042-1.61-.546-1.387-1.333-1.756-1.333-1.756-1.09-.745.083-.73.083-.73 1.205.085 1.84 1.238 1.84 1.238 1.07 1.835 2.807 1.305 3.492.998.108-.775.418-1.305.762-1.605-2.665-.3-5.467-1.335-5.467-5.93 0-1.31.468-2.38 1.235-3.22-.123-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.52 11.52 0 013.003-.403c1.02.005 2.045.138 3.003.403 2.29-1.552 3.296-1.23 3.296-1.23.653 1.653.242 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.61-2.807 5.625-5.48 5.922.43.37.815 1.096.815 2.21 0 1.595-.015 2.88-.015 3.27 0 .322.216.698.825.58C20.565 21.795 24 17.297 24 12c0-6.63-5.37-12-12-12z'/></svg></a>",
    ],
  },
};
function slugify(text) {
  return text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
function shuffleItems(items) {
  const cloned = [...items];
  for (let i = cloned.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [cloned[i], cloned[j]] = [cloned[j], cloned[i]];
  }
  return cloned;
}
function downloadJsonFile(payload, fileNameBase) {
  const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${fileNameBase}${Date.now()}.json`;
  document.body.append(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
function randomizeCheckboxesInForm(form) {
  const checkboxes = form.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach((checkbox) => {
    checkbox.checked = Math.random() >= 0.5;
  });
}
function computeViolentometrePlotValues(countsByCategory) {
  const category = {
    sain: "Environnement professionnel sain",
    hostile: "Environnement professionnel sexiste et hostile",
    harcelement: "Harcèlement sexuel",
    agressions: "Agressions sexuelles",
    viol: "Viol",
  };

  const sainCount = countsByCategory[category.sain] || 0;
  const hostileCount = countsByCategory[category.hostile] || 0;
  const harcelementCount = countsByCategory[category.harcelement] || 0;
  const agressionsCount = countsByCategory[category.agressions] || 0;
  const violCount = countsByCategory[category.viol] || 0;

  const sainTotal = violentometreCategoryItemTotals[category.sain] || 0;
  const hostileTotal = violentometreCategoryItemTotals[category.hostile] || 0;
  const harcelementTotal = violentometreCategoryItemTotals[category.harcelement] || 0;
  const agressionsTotal = violentometreCategoryItemTotals[category.agressions] || 0;
  const violTotal = violentometreCategoryItemTotals[category.viol] || 0;

  const clampPercentage = (value) => Math.max(0, Math.min(100, value));

  const allNonSainChecked = [category.hostile, category.harcelement, category.agressions, category.viol].every(
    (name) => (countsByCategory[name] || 0) >= (violentometreCategoryItemTotals[name] || 0),
  );

  const sainCeiling = violentometreCategoryMeta[category.sain].weight;
  const hostileCeiling = violentometreCategoryMeta[category.hostile].weight;
  const harcelementCeiling = violentometreCategoryMeta[category.harcelement].weight;
  const agressionsCeiling = violentometreCategoryMeta[category.agressions].weight;

  const scaleToCeiling = (count, total, ceiling) => {
    if (!total) {
      return 0;
    }
    return Math.round(Math.max(0, Math.min(1, count / total)) * ceiling);
  };

  let sainValue = scaleToCeiling(sainCount, sainTotal, sainCeiling);
  if (allNonSainChecked && sainCount >= sainTotal) {
    sainValue = 100;
  }

  let hostileValue = scaleToCeiling(hostileCount, hostileTotal, hostileCeiling);
  if (hostileCount > 0) {
    hostileValue = clampPercentage(Math.max(hostileValue, sainValue + 5));
  }

  let harcelementValue = scaleToCeiling(harcelementCount, harcelementTotal, harcelementCeiling);
  if (harcelementCount > 0) {
    harcelementValue = clampPercentage(Math.max(harcelementValue, hostileValue + 5));
  }

  const agressionsValue = agressionsCount > 0 && agressionsTotal > 0
    ? clampPercentage(
        Math.max(
          scaleToCeiling(agressionsCount, agressionsTotal, agressionsCeiling),
          harcelementValue + 5,
          agressionsCeiling,
        ),
      )
    : 0;
  const violValue = violCount > 0 && violTotal > 0 ? 100 : 0;

  return {
    [category.sain]: sainValue,
    [category.hostile]: hostileValue,
    [category.harcelement]: harcelementValue,
    [category.agressions]: agressionsValue,
    [category.viol]: violValue,
  };
}

function scrollToPageTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
function formatStat(values, stat) {
  const result = getStatisticValue(values, stat);
  return Number.isInteger(result) ? String(result) : result.toFixed(1);
}
function getStatisticValue(values, stat) {
  if (!Array.isArray(values) || values.length === 0) {
    return 0;
  }
  const sortedValues = [...values].sort((a, b) => a - b);
  let result = 0;
  if (stat === "mean") {
    result = values.reduce((sum, value) => sum + value, 0) / values.length;
  } else if (stat === "median") {
    const middle = Math.floor(sortedValues.length / 2);
    result =
      sortedValues.length % 2 === 0
        ? (sortedValues[middle - 1] + sortedValues[middle]) / 2
        : sortedValues[middle];
  } else if (stat === "min") {
    result = sortedValues[0];
  } else if (stat === "max") {
    result = sortedValues[sortedValues.length - 1];
  }
  return result;
}
function buildPolarColorLegend(polarConfig) {
  const legend = document.createElement("div");
  legend.className = "zone-legend polar-color-legend";

  polarConfig.categoryOrder.forEach((category) => {
    const legendItem = document.createElement("div");
    legendItem.className = "zone-legend-item";

    const chip = document.createElement("span");
    chip.className = "zone-legend-color";
    chip.style.backgroundColor = polarConfig.categoryMeta[category].color;

    const text = document.createElement("span");
    text.textContent = category;

    legendItem.append(chip, text);
    legend.append(legendItem);
  });

  return legend;
}
function getPolarExportLegendItems(polarConfig) {
  return polarConfig.categoryOrder.map((category) => ({
    label: category,
    color: polarConfig.categoryMeta[category].color,
  }));
}
function getPolarPlotTitle(polarConfig) {
  return {
    text: polarConfig.title || "",
    automargin: true,
    font: { size: 16 },
    x: 0,
    xanchor: "left",
    y: 1,
    yanchor: "top",
    pad: { t: 0, r: 0, b: 16, l: 0 },
  };
}
function appendPolarColorLegend(plotPanel, polarConfig) {
  if (!plotPanel) {
    return;
  }
  const existingLegend = plotPanel.querySelector(".polar-color-legend");
  if (existingLegend) {
    existingLegend.remove();
  }
  const legend = buildPolarColorLegend(polarConfig);
  legend.style.marginTop = "24px";
  plotPanel.append(legend);
}
function renderPolarChart(plotId, countsByCategory, polarConfig) {
  const plotContainer = document.getElementById(plotId);
  if (!plotContainer || typeof Plotly === "undefined") {
    return;
  }
  plotContainer.classList.add("barpolar-plot");
  const compactPolar = plotContainer.clientWidth < 420;
  const plotPanel = plotContainer.parentElement;
  plotContainer.style.backgroundColor = "#ffffff";
  plotContainer.style.background = "#ffffff";
  const theta = polarConfig.categoryOrder.map((category) => {
    if (polarConfig.labelMap && polarConfig.labelMap[category]) {
      return polarConfig.labelMap[category];
    }
    return category;
  });
  const r = polarConfig.categoryOrder.map((category) => countsByCategory[category] || 0);
  const markerColors = polarConfig.categoryOrder.map((category) => polarConfig.categoryMeta[category].color);
  const angularTickLabels = theta.map((label) =>
    label.replace(/\s*\/\s*/g, "/<br>").replace(/\s+/g, "<br>"),
  );
  const trace = {
    type: "barpolar",
    r,
    theta,
    marker: {
      color: markerColors,
      line: {
        color: "#ffffff",
        width: 1,
      },
    },
    hovertemplate: polarConfig.hoverTemplate || "%{theta}: %{r} item(s) sélectionné(s)<extra></extra>",
  };
  const maxR = Math.max(...r, polarConfig.minMaxRange || 1);
  const layout = {
    dragmode: false,
    paper_bgcolor: "#ffffff",
    plot_bgcolor: "#ffffff",
    margin: { t: 48, r: 45, b: 45, l: 45 },
    font: { size: 16 },
    polar: {
        barmode: "overlay",
        bargap: 0,
      angularaxis: {
        fixedrange: true,
        tickmode: "array",
        tickvals: theta,
        ticktext: angularTickLabels,
        tickfont: { size: compactPolar ? 11 : 14 },
        showgrid: true,
        gridcolor: "rgba(0,0,0,1)",
        showline: false,
        linecolor: "rgba(0,0,0,1)",
      },
        radialaxis: {
        fixedrange: true,
        visible: true,
            range: [0, maxR],
            dtick: polarConfig.dtick || 1,
            showgrid: true,
            gridcolor: "rgba(0,0,0,1)",
            showline: false,
            linecolor: "rgba(0,0,0,1)",
            showticklabels: false,
            ticks: "",
            linewidth: 0
        },
    },
    showlegend: false,
    title: getPolarPlotTitle(polarConfig),
  };
  const config = {
    responsive: true,
    scrollZoom: false,
    doubleClick: false,
    displaylogo: false,
    displayModeBar: true,
    modeBarButtonsToRemove: [
      "zoom2d",
      "pan2d",
      "select2d",
      "lasso2d",
      "zoomIn2d",
      "zoomOut2d",
      "autoScale2d",
      "resetScale2d",
      "hoverClosestCartesian",
      "hoverCompareCartesian",
      "toggleHover",
      "toggleSpikelines",
      "resetViews",
      "sendDataToCloud",
      "hoverClosestPie",
      "toImage",
    ],
    modeBarButtonsToAdd: [
      getPlotImageExportButton(plotContainer, {
        title: polarConfig.title || "Visualisation polaire",
        legendItems: getPolarExportLegendItems(polarConfig),
        filename: `${polarConfig.filenameBase || plotId.replace(/-polar-plot$/, "")}-${Date.now()}`,
        width: 1600,
        height: 1600,
      }),
      {
        name: "fullscreen",
        title: "Visualiser en plein écran",
        icon: {
          width: 500,
          height: 500,
          path: "M0,0 L150,0 L150,50 L50,50 L50,150 L0,150 Z M350,0 L500,0 L500,150 L450,150 L450,50 L350,50 Z M0,350 L50,350 L50,450 L150,450 L150,500 L0,500 Z M450,350 L500,350 L500,500 L350,500 L350,450 L450,450 Z",
        },
        click: function () {
          if (!plotContainer) {
            return;
          }
          if (!document.fullscreenElement) {
            plotContainer.requestFullscreen();
          } else {
            document.exitFullscreen();
          }
          setTimeout(() => Plotly.Plots.resize(plotContainer), 150);
        },
      },
    ],
    toImageButtonOptions: {
        format: 'png',
      filename: `${(polarConfig.filenameBase || plotId.replace(/-polar-plot$/, ""))}-${Date.now()}`,
        height: 1600,
        width: 1600,
        scale: 1
    }
  }
  Plotly.newPlot(plotContainer, [trace], layout, config);
  appendPolarColorLegend(plotPanel, polarConfig);
}
function computePolarQuestionnaireResult(config, ordered) {
  const countsByCategory = config.categoryOrder.reduce((acc, category) => {
    acc[category] = ordered.filter((row) => row.category === category && row.checked).length;
    return acc;
  }, {});
  const valuesByCategory =
    config.idPrefix === "violentometre"
      ? computeViolentometrePlotValues(countsByCategory)
      : config.categoryOrder.reduce((acc, category) => {
          const weight = config.categoryMeta[category].weight || 1;
          acc[category] = (countsByCategory[category] || 0) * weight;
          return acc;
        }, {});
  return { countsByCategory, valuesByCategory };
}
function buildPolarQuestionnaireTable(config, ordered) {
  const tableWrap = document.createElement("div");
  tableWrap.className = "results-table-wrap";
  const table = document.createElement("table");
  table.className = "results-table";
  table.innerHTML = "<tbody></tbody>";
  const tbody = table.querySelector("tbody");
  let previousCategory = "";

  ordered.forEach((rowData) => {
    const rowClass = config.categoryMeta[rowData.category].cssClass;
    if (rowData.category !== previousCategory) {
      const categoryRow = document.createElement("tr");
      const categoryCell = document.createElement("td");
      categoryCell.colSpan = 2;
      categoryCell.className = rowClass;
      categoryCell.textContent = rowData.category;
      categoryCell.style.fontWeight = "700";
      categoryRow.append(categoryCell);
      tbody.append(categoryRow);
      previousCategory = rowData.category;
    }

    const row = document.createElement("tr");
    const itemCell = document.createElement("td");
    const checkCell = document.createElement("td");
    const readonlyCheck = document.createElement("input");
    itemCell.className = rowClass;
    itemCell.textContent = rowData.item;
    readonlyCheck.type = "checkbox";
    readonlyCheck.disabled = true;
    readonlyCheck.checked = rowData.checked;
    checkCell.className = "check-cell";
    checkCell.append(readonlyCheck);
    row.append(itemCell, checkCell);
    tbody.append(row);
  });

  tableWrap.append(table);
  return tableWrap;
}
function renderPolarQuestionnaireSingleResult(config, ordered, showSaveButton = false) {
  if (!contentRoot) {
    return;
  }
  const { valuesByCategory } = computePolarQuestionnaireResult(config, ordered);
  contentRoot.hidden = false;
  contentRoot.innerHTML = "";

  const resultsTitle = document.createElement("h2");
  resultsTitle.className = "content-title";
  resultsTitle.textContent = `Résultats du questionnaire ${config.displayName}`;
  const resultsSubtitle = document.createElement("p");
  resultsSubtitle.className = "content-subtitle";
  resultsSubtitle.textContent = config.resultsSubtitle;
  const resultsLayout = document.createElement("div");
  resultsLayout.className = "results-layout polar-single-results";
  const plotPanel = document.createElement("section");
  plotPanel.className = "plot-panel";
  const plotArea = document.createElement("div");
  plotArea.id = `${config.idPrefix}-polar-plot`;
  plotArea.className = "plot-area";
  plotPanel.append(plotArea);
  resultsLayout.append(buildPolarQuestionnaireTable(config, ordered), plotPanel);

  contentRoot.append(resultsTitle, resultsSubtitle);
  if (showSaveButton) {
    const resultActions = document.createElement("div");
    resultActions.className = "questionnaire-actions result-actions";
    const saveBtn = document.createElement("button");
    saveBtn.type = "button";
    saveBtn.className = "secondary-btn";
    saveBtn.textContent = "Sauvegarder dans un fichier";
    saveBtn.addEventListener("click", () => {
      downloadJsonFile(buildPolarSavedPayload(config, ordered), `${config.fileNameBase}-`);
    });
    resultActions.append(saveBtn);
    contentRoot.append(resultActions);
  }
  contentRoot.append(resultsLayout);
  renderPolarChart(plotArea.id, valuesByCategory, config.polarConfig);
  scrollToPageTop();
}
function buildPolarSavedPayload(config, ordered) {
  return {
    version: 1,
    type: "sociometres-polar-questionnaire",
    questionnaire: config.idPrefix,
    savedAt: new Date().toISOString(),
    answers: ordered.map((row) => ({
      category: row.category,
      questionText: row.item,
      checked: row.checked,
    })),
  };
}
function validatePolarSavedPayload(parsed, fileName, config) {
  if (
    !parsed ||
    parsed.type !== "sociometres-polar-questionnaire" ||
    parsed.questionnaire !== config.idPrefix ||
    !Array.isArray(parsed.answers)
  ) {
    throw new Error(`Le fichier ${fileName} ne correspond pas au questionnaire ${config.displayName}.`);
  }
  if (parsed.answers.length !== config.items.length) {
    throw new Error(`Le fichier ${fileName} ne contient pas le nombre de réponses attendu.`);
  }

  const expectedItems = new Map(config.items.map((item) => [item.item, item.category]));
  const answerByItem = new Map();
  parsed.answers.forEach((answer) => {
    if (
      !answer ||
      typeof answer.questionText !== "string" ||
      typeof answer.checked !== "boolean" ||
      !expectedItems.has(answer.questionText) ||
      expectedItems.get(answer.questionText) !== answer.category ||
      answerByItem.has(answer.questionText)
    ) {
      throw new Error(`Le fichier ${fileName} contient une ou plusieurs réponses invalides.`);
    }
    answerByItem.set(answer.questionText, answer.checked);
  });
  if (answerByItem.size !== config.items.length) {
    throw new Error(`Le fichier ${fileName} ne contient pas toutes les réponses attendues.`);
  }

  return config.items.map((item) => ({ ...item, checked: answerByItem.get(item.item) }));
}
async function readPolarQuestionnaireFile(file, config) {
  const parsed = JSON.parse(await file.text());
  const ordered = validatePolarSavedPayload(parsed, file.name, config);
  return {
    fileName: file.name,
    ordered,
    valuesByCategory: computePolarQuestionnaireResult(config, ordered).valuesByCategory,
  };
}
async function loadPolarQuestionnaireFiles(files, config) {
  const loaded = [];
  const errors = [];
  for (const file of files) {
    try {
      loaded.push(await readPolarQuestionnaireFile(file, config));
    } catch (error) {
      errors.push(error instanceof Error ? error.message : `Impossible de lire ${file.name}.`);
    }
  }
  return { loaded, errors };
}
function getPolarQuestionnaireImportState(idPrefix) {
  if (!polarQuestionnaireImportStates.has(idPrefix)) {
    polarQuestionnaireImportStates.set(idPrefix, {
      individuals: [],
      groupBatches: [],
      singleInput: null,
      individualsInput: null,
      groupInput: null,
    });
  }
  return polarQuestionnaireImportStates.get(idPrefix);
}
function getPolarLineColor(index) {
  return plotLineColors[index % plotLineColors.length];
}
function buildPolarLineSwatch(index) {
  const lineSwatch = document.createElement("span");
  lineSwatch.className = "polar-line-swatch";
  lineSwatch.style.backgroundColor = getPolarLineColor(index);
  lineSwatch.setAttribute("aria-hidden", "true");
  return lineSwatch;
}
function buildPolarStatisticsSection(config, individuals, titleText, showFileLegend = false) {
  const section = document.createElement("section");
  section.className = "polar-statistics-section";
  const title = document.createElement("h3");
  title.textContent = titleText;
  const count = document.createElement("p");
  count.className = "content-subtitle";
  count.textContent = `Nombre de fichiers: ${individuals.length}`;
  const fileLegend = document.createElement("ul");
  fileLegend.className = "polar-individual-file-legend";
  fileLegend.setAttribute("aria-label", "Fichiers importés et couleurs des lignes");
  individuals.forEach((individual, index) => {
    const item = document.createElement("li");
    const fileName = document.createElement("span");
    fileName.textContent = individual.fileName;
    item.append(buildPolarLineSwatch(index), fileName);
    fileLegend.append(item);
  });
  const table = document.createElement("table");
  table.className = "results-table";
  table.innerHTML = "<thead><tr><th>Dimension</th><th>Moyenne</th><th>Médiane</th><th>Min</th><th>Max</th></tr></thead><tbody></tbody>";
  const tbody = table.querySelector("tbody");
  const maximum = config.polarConfig.minMaxRange || 1;
  config.categoryOrder.forEach((category) => {
    const values = individuals.map((individual) => individual.valuesByCategory[category] || 0);
    const categoryMeta = config.categoryMeta[category];
    const categoryLabel =
      (config.polarConfig.labelMap && config.polarConfig.labelMap[category]) || category;
    const row = document.createElement("tr");
    const categoryCell = document.createElement("td");
    categoryCell.classList.add("polar-statistics-dimension", categoryMeta.cssClass);
    categoryCell.textContent = categoryLabel;
    row.append(categoryCell);
    ["mean", "median", "min", "max"].forEach((stat) => {
      const cell = document.createElement("td");
      cell.className = "polar-statistic-cell";
      const value = getStatisticValue(values, stat);
      const formattedValue = formatStat(values, stat);
      const progress = document.createElement("div");
      progress.className = "polar-statistic-progress";
      progress.setAttribute("role", "progressbar");
      progress.setAttribute("aria-valuemin", "0");
      progress.setAttribute("aria-valuemax", String(maximum));
      progress.setAttribute("aria-valuenow", String(value));
      progress.setAttribute("aria-valuetext", `${categoryLabel}: ${formattedValue} sur ${maximum}`);
      const fill = document.createElement("span");
      fill.className = "polar-statistic-progress-fill";
      fill.style.width = `${Math.max(0, Math.min(100, (value / maximum) * 100))}%`;
      fill.style.backgroundColor = categoryMeta.color;
      progress.append(fill);
      cell.append(progress);
      row.append(cell);
    });
    tbody.append(row);
  });
  section.append(title, count);
  if (showFileLegend) {
    section.append(fileLegend);
  }
  section.append(table);
  return section;
}
function buildPolarGroupStatisticsSection(config, batches) {
  const section = document.createElement("section");
  section.className = "polar-group-statistics-section";
  const batchList = document.createElement("div");
  batchList.className = "polar-group-set-list";
  batches.forEach((batch, batchIndex) => {
    const batchItem = document.createElement("section");
    batchItem.className = "polar-group-set-item";
    const batchHeading = document.createElement("div");
    batchHeading.className = "polar-group-set-heading";
    const batchName = document.createElement("strong");
    batchName.textContent = batch.label;
    const count = document.createElement("span");
    count.textContent = `Nombre de fichiers: ${batch.individuals.length}`;
    batchHeading.append(buildPolarLineSwatch(batchIndex), batchName, count);
    const fileList = document.createElement("ul");
    fileList.className = "polar-group-file-list";
    fileList.setAttribute("aria-label", `Fichiers importés — ${batch.label}`);
    batch.individuals.forEach((individual) => {
      const fileItem = document.createElement("li");
      fileItem.textContent = individual.fileName;
      fileList.append(fileItem);
    });
    batchItem.append(batchHeading, fileList);
    batchList.append(batchItem);
  });

  const table = document.createElement("table");
  table.className = "results-table polar-group-statistics-table";
  table.innerHTML = "<thead><tr><th>Dimension</th><th>Lot</th><th>Moyenne</th><th>Médiane</th><th>Min</th><th>Max</th></tr></thead><tbody></tbody>";
  const tbody = table.querySelector("tbody");
  const maximum = config.polarConfig.minMaxRange || 1;
  config.categoryOrder.forEach((category) => {
    const categoryMeta = config.categoryMeta[category];
    const categoryLabel =
      (config.polarConfig.labelMap && config.polarConfig.labelMap[category]) || category;
    batches.forEach((batch, batchIndex) => {
      const values = batch.individuals.map((individual) => individual.valuesByCategory[category] || 0);
      const row = document.createElement("tr");
      if (batchIndex === 0) {
        const categoryCell = document.createElement("td");
        categoryCell.rowSpan = batches.length;
        categoryCell.classList.add("polar-statistics-dimension", "polar-group-label-cell", categoryMeta.cssClass);
        categoryCell.textContent = categoryLabel;
        row.append(categoryCell);
      }
      const batchCell = document.createElement("td");
      const batchLabel = document.createElement("div");
      batchLabel.className = "polar-group-batch-label";
      const batchName = document.createElement("span");
      batchName.textContent = batch.label;
      batchLabel.append(buildPolarLineSwatch(batchIndex), batchName);
      batchCell.append(batchLabel);
      row.append(batchCell);
      ["mean", "median", "min", "max"].forEach((stat) => {
        const cell = document.createElement("td");
        cell.className = "polar-statistic-cell";
        const value = getStatisticValue(values, stat);
        const formattedValue = formatStat(values, stat);
        const progress = document.createElement("div");
        progress.className = "polar-statistic-progress";
        progress.setAttribute("role", "progressbar");
        progress.setAttribute("aria-valuemin", "0");
        progress.setAttribute("aria-valuemax", String(maximum));
        progress.setAttribute("aria-valuenow", String(value));
        progress.setAttribute("aria-valuetext", `${batch.label}, ${categoryLabel}: ${formattedValue} sur ${maximum}`);
        const fill = document.createElement("span");
        fill.className = "polar-statistic-progress-fill";
        fill.style.width = `${Math.max(0, Math.min(100, (value / maximum) * 100))}%`;
        fill.style.backgroundColor = categoryMeta.color;
        progress.append(fill);
        cell.append(progress);
        row.append(cell);
      });
      tbody.append(row);
    });
  });
  section.append(batchList, table);
  return section;
}
function getPolarScatterLayout(config) {
  return {
    dragmode: false,
    paper_bgcolor: "#ffffff",
    plot_bgcolor: "#ffffff",
    margin: { t: 48, r: 45, b: 45, l: 45 },
    showlegend: false,
    title: getPolarPlotTitle(config.polarConfig),
    polar: {
      angularaxis: {
        visible: true,
        showgrid: true,
        gridcolor: "rgba(0,0,0,0.35)",
        showticklabels: true,
        ticks: "",
      },
      radialaxis: {
        visible: true,
        range: [0, config.polarConfig.minMaxRange || 1],
        showgrid: true,
        gridcolor: "rgba(0,0,0,0.35)",
        showline: false,
        showticklabels: false,
        ticks: "",
      },
    },
  };
}
function getPolarScatterConfig(config, mode, plotContainer, lineLegendItems = []) {
  return {
    responsive: true,
    scrollZoom: false,
    doubleClick: false,
    editable: false,
    displaylogo: false,
    displayModeBar: true,
    modeBarButtonsToRemove: [
      "zoom2d",
      "pan2d",
      "select2d",
      "lasso2d",
      "zoomIn2d",
      "zoomOut2d",
      "autoScale2d",
      "resetScale2d",
      "hoverClosestCartesian",
      "hoverCompareCartesian",
      "toggleHover",
      "toggleSpikelines",
      "resetViews",
      "sendDataToCloud",
      "hoverClosestPie",
      "toImage",
    ],
    modeBarButtonsToAdd: [
      getPlotImageExportButton(plotContainer, {
        title: config.polarConfig.title || "Visualisation polaire",
        legendItems: [...lineLegendItems, ...getPolarExportLegendItems(config.polarConfig)],
        filename: `${config.idPrefix}-${mode}-${Date.now()}`,
        width: 1600,
        height: 1600,
      }),
      {
        name: "fullscreen",
        title: "Visualiser en plein écran",
        icon: {
          width: 500,
          height: 500,
          path: "M0,0 L150,0 L150,50 L50,50 L50,150 L0,150 Z M350,0 L500,0 L500,150 L450,150 L450,50 L350,50 Z M0,350 L50,350 L50,450 L150,450 L150,500 L0,500 Z M450,350 L500,350 L500,500 L350,500 L350,450 L450,450 Z",
        },
        click: function () {
          if (!plotContainer) {
            return;
          }
          if (!document.fullscreenElement) {
            plotContainer.requestFullscreen();
          } else {
            document.exitFullscreen();
          }
          setTimeout(() => Plotly.Plots.resize(plotContainer), 150);
        },
      },
    ],
    toImageButtonOptions: {
      format: "png",
      filename: `${config.idPrefix}-${mode}-${Date.now()}`,
      height: 1600,
      width: 1600,
      scale: 1,
    },
  };
}
function getPolarTheta(config) {
  return config.categoryOrder.map(
    (category) => (config.polarConfig.labelMap && config.polarConfig.labelMap[category]) || category,
  );
}
function renderPolarIndividualsView(config, individuals) {
  if (!contentRoot || !individuals.length) {
    return;
  }
  contentRoot.hidden = false;
  contentRoot.innerHTML = "";
  const title = document.createElement("h2");
  title.className = "content-title";
  title.textContent = "Résultats multi-individuels";
  const subtitle = document.createElement("p");
  subtitle.className = "content-subtitle";
  subtitle.textContent = "Statistiques de l'ensemble et une trace polaire par fichier.";
  const layout = document.createElement("div");
  layout.className = "results-layout polar-multi-results";
  const leftPanel = document.createElement("div");
  leftPanel.className = "results-table-wrap";
  const resetBtn = document.createElement("button");
  resetBtn.type = "button";
  resetBtn.className = "secondary-btn compact-action-btn";
  resetBtn.textContent = "Réinitialiser les imports";
  resetBtn.addEventListener("click", () => {
    const state = getPolarQuestionnaireImportState(config.idPrefix);
    state.individuals = [];
    triggerPolarQuestionnaireImport(config.idPrefix, "individuals");
  });
  const selectedSummaryWrap = document.createElement("div");
  selectedSummaryWrap.style.marginTop = "12px";
  selectedSummaryWrap.style.display = "none";

  const selectedSummaryTitle = document.createElement("p");
  selectedSummaryTitle.className = "content-subtitle";

  const selectedSummaryContent = document.createElement("div");
  selectedSummaryContent.style.maxHeight = "320px";
  selectedSummaryContent.style.overflowY = "auto";
  selectedSummaryContent.style.padding = "8px";
  selectedSummaryContent.style.border = "1px solid #d9d9d9";
  selectedSummaryContent.style.borderRadius = "8px";
  selectedSummaryContent.style.background = "#ffffff";

  selectedSummaryWrap.append(selectedSummaryTitle, selectedSummaryContent);
  leftPanel.append(
    resetBtn,
    buildPolarStatisticsSection(config, individuals, "Tous les individus", true),
    selectedSummaryWrap,
  );
  const rightPanel = document.createElement("section");
  rightPanel.className = "plot-panel";
  const plotArea = document.createElement("div");
  plotArea.id = `${config.idPrefix}-individuals-scatterpolar`;
  plotArea.className = "plot-area polar-scatter-plot";
  rightPanel.append(plotArea);
  layout.append(leftPanel, rightPanel);
  contentRoot.append(title, subtitle, layout);

  if (typeof Plotly !== "undefined") {
    const theta = getPolarTheta(config);
    const traces = individuals.map((individual, index) => {
      const color = getPolarLineColor(index);
      const radialValues = config.categoryOrder.map(
        (category) => individual.valuesByCategory[category] || 0,
      );
      return {
        type: "scatterpolar",
        mode: "lines+markers",
        name: individual.fileName,
        theta: [...theta, theta[0]],
        r: [...radialValues, radialValues[0]],
        text: Array(theta.length + 1).fill(individual.fileName),
        customdata: Array(theta.length + 1).fill(index),
        line: { color, width: 2 },
        marker: { color, size: 7 },
        hovertemplate: "Fichier: %{text}<extra></extra>",
      };
    });
    Plotly.newPlot(
      plotArea,
      traces,
      getPolarScatterLayout(config),
      getPolarScatterConfig(
        config,
        "individus",
        plotArea,
        individuals.map((individual, index) => ({
          label: individual.fileName,
          color: getPolarLineColor(index),
          type: "line",
        })),
      ),
    );
    appendPolarColorLegend(rightPanel, config.polarConfig);
    const showSelectedQuestionnaire = (rawIndex) => {
      const index = Number(rawIndex);
      if (!Number.isInteger(index) || index < 0 || index >= individuals.length) {
        return;
      }
      const individual = individuals[index];
      const titlePrefix = document.createElement("span");
      titlePrefix.textContent = "Questionnaire associé:";
      const fileName = document.createElement("span");
      fileName.textContent = individual.fileName;
      selectedSummaryTitle.classList.add("polar-selected-summary-title");
      selectedSummaryTitle.replaceChildren(
        titlePrefix,
        buildPolarLineSwatch(index),
        fileName,
      );
      selectedSummaryContent.innerHTML = "";
      selectedSummaryContent.append(buildPolarQuestionnaireTable(config, individual.ordered));
      selectedSummaryWrap.style.display = "block";
    };
    let hoveredIndividualIndex = null;
    plotArea.on("plotly_hover", (event) => {
      const point = event && event.points && event.points[0];
      hoveredIndividualIndex = point ? point.customdata ?? point.curveNumber : null;
    });
    plotArea.on("plotly_unhover", () => {
      hoveredIndividualIndex = null;
    });
    plotArea.on("plotly_click", (event) => {
      const point = event && event.points && event.points[0];
      if (point) {
        showSelectedQuestionnaire(point.customdata ?? point.curveNumber);
      }
    });
    plotArea.addEventListener("click", () => {
      if (hoveredIndividualIndex !== null) {
        showSelectedQuestionnaire(hoveredIndividualIndex);
      }
    });
  }
  scrollToPageTop();
}
function renderPolarGroupView(config, batches) {
  if (!contentRoot || !batches.length) {
    return;
  }
  contentRoot.hidden = false;
  contentRoot.innerHTML = "";
  const title = document.createElement("h2");
  title.className = "content-title";
  title.textContent = "Résultats groupes";
  const subtitle = document.createElement("p");
  subtitle.className = "content-subtitle";
  subtitle.textContent = "Une trace par lot avec statistiques comparées dans un tableau unique.";
  const layout = document.createElement("div");
  layout.className = "results-layout polar-multi-results";
  const leftPanel = document.createElement("div");
  leftPanel.className = "results-table-wrap polar-group-statistics";
  const resetBtn = document.createElement("button");
  resetBtn.type = "button";
  resetBtn.className = "secondary-btn compact-action-btn";
  resetBtn.textContent = "Réinitialiser les groupes";
  resetBtn.addEventListener("click", () => {
    const state = getPolarQuestionnaireImportState(config.idPrefix);
    state.groupBatches = [];
    triggerPolarQuestionnaireImport(config.idPrefix, "group");
  });
  leftPanel.append(resetBtn, buildPolarGroupStatisticsSection(config, batches));
  const rightPanel = document.createElement("section");
  rightPanel.className = "plot-panel";
  const plotArea = document.createElement("div");
  plotArea.id = `${config.idPrefix}-groups-scatterpolar`;
  plotArea.className = "plot-area polar-scatter-plot";
  rightPanel.append(plotArea);
  layout.append(leftPanel, rightPanel);
  contentRoot.append(title, subtitle, layout);

  if (typeof Plotly !== "undefined") {
    const theta = getPolarTheta(config);
    const traces = batches.map((batch, batchIndex) => {
      const trace = {
        type: "scatterpolar",
        mode: "lines+markers",
        name: batch.label,
        theta: [],
        r: [],
        customdata: [],
        line: { color: getPolarLineColor(batchIndex), width: 2 },
        marker: { color: getPolarLineColor(batchIndex), size: 7 },
        connectgaps: false,
        hovertemplate:
          "Lot: %{customdata[0]}<br>Fichier: %{customdata[1]}<extra></extra>",
      };
      batch.individuals.forEach((individual) => {
        const radialValues = config.categoryOrder.map(
          (category) => individual.valuesByCategory[category] || 0,
        );
        const closedTheta = [...theta, theta[0]];
        const closedRadialValues = [...radialValues, radialValues[0]];
        trace.theta.push(...closedTheta, null);
        trace.r.push(...closedRadialValues, null);
        trace.customdata.push(
          ...closedTheta.map(() => [batch.label, individual.fileName]),
          [batch.label, individual.fileName],
        );
      });
      return trace;
    });
    Plotly.newPlot(
      plotArea,
      traces,
      getPolarScatterLayout(config),
      getPolarScatterConfig(
        config,
        "groupes",
        plotArea,
        batches.map((batch, batchIndex) => ({
          label: batch.label,
          color: getPolarLineColor(batchIndex),
          type: "line",
        })),
      ),
    );
    appendPolarColorLegend(rightPanel, config.polarConfig);
  }
  scrollToPageTop();
}
function ensurePolarQuestionnaireImportInputs(config) {
  const state = getPolarQuestionnaireImportState(config.idPrefix);
  if (state.singleInput && state.individualsInput && state.groupInput) {
    return state;
  }

  const makeInput = (multiple) => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = ".json,application/json";
    input.multiple = multiple;
    input.style.display = "none";
    document.body.append(input);
    return input;
  };
  state.singleInput = makeInput(false);
  state.individualsInput = makeInput(true);
  state.groupInput = makeInput(true);

  state.singleInput.addEventListener("change", async (event) => {
    const file = event.target.files && event.target.files[0];
    if (!file) {
      return;
    }
    try {
      const individual = await readPolarQuestionnaireFile(file, config);
      renderPolarQuestionnaireSingleResult(config, individual.ordered);
    } catch (error) {
      alert(error instanceof Error ? error.message : "Impossible de charger la sauvegarde.");
    } finally {
      event.target.value = "";
    }
  });
  state.individualsInput.addEventListener("change", async (event) => {
    const files = Array.from(event.target.files || []);
    if (!files.length) {
      return;
    }
    const { loaded, errors } = await loadPolarQuestionnaireFiles(files, config);
    if (errors.length) {
      alert(`Certaines sauvegardes n'ont pas été chargées:\n- ${errors.slice(0, 5).join("\n- ")}`);
    }
    if (loaded.length) {
      state.individuals = [...state.individuals, ...loaded];
      renderPolarIndividualsView(config, state.individuals);
    }
    event.target.value = "";
  });
  state.groupInput.addEventListener("change", async (event) => {
    const files = Array.from(event.target.files || []);
    if (!files.length) {
      return;
    }
    const { loaded, errors } = await loadPolarQuestionnaireFiles(files, config);
    if (errors.length) {
      alert(`Certaines sauvegardes n'ont pas été chargées:\n- ${errors.slice(0, 5).join("\n- ")}`);
    }
    if (loaded.length) {
      state.groupBatches = [
        ...state.groupBatches,
        { label: `Lot ${state.groupBatches.length + 1}`, individuals: loaded },
      ];
      renderPolarGroupView(config, state.groupBatches);
    }
    event.target.value = "";
  });
  return state;
}
function triggerPolarQuestionnaireImport(idPrefix, mode) {
  const config = getPolarQuestionnaireConfig(idPrefix);
  if (!config) {
    return;
  }
  const state = ensurePolarQuestionnaireImportInputs(config);
  const input =
    mode === "single"
      ? state.singleInput
      : mode === "individuals"
        ? state.individualsInput
        : state.groupInput;
  input.click();
}
function renderQuestionnaireFeature(config) {
  if (!contentRoot) {
    return;
  }
  const shuffled = shuffleItems(config.items).map((entry, index) => ({
    ...entry,
    id: `${config.idPrefix}-item-${index + 1}`,
  }));
  contentRoot.hidden = false;
  contentRoot.innerHTML = "";
  const title = document.createElement("h2");
  title.className = "content-title";
  title.textContent = `Questionnaire ${config.displayName}`;
  const subtitle = document.createElement("p");
  subtitle.className = "content-subtitle";
  subtitle.textContent = config.subtitle;
  const form = document.createElement("form");
  form.className = "questionnaire-form";
  shuffled.forEach((entry) => {
    const row = document.createElement("div");
    const checkbox = document.createElement("input");
    const label = document.createElement("label");
    row.className = "questionnaire-item";
    checkbox.type = "checkbox";
    checkbox.id = entry.id;
    checkbox.name = entry.id;
    label.htmlFor = entry.id;
    label.textContent = `${entry.item} (${entry.category})`;
    row.append(checkbox, label);
    form.append(row);
  });
  const actions = document.createElement("div");
  actions.className = "questionnaire-actions";
  const randomFillBtn = document.createElement("button");
  randomFillBtn.type = "button";
  randomFillBtn.className = "secondary-btn";
  randomFillBtn.textContent = "Remplissage aléatoire";
  randomFillBtn.addEventListener("click", () => {
    randomizeCheckboxesInForm(form);
  });
  const saveBtn = document.createElement("button");
  saveBtn.type = "button";
  saveBtn.className = "secondary-btn";
  saveBtn.textContent = "Sauvegarder";
  saveBtn.addEventListener("click", () => {
    const ordered = config.items.map((item) => {
      const shuffledItem = shuffled.find((entry) => entry.item === item.item);
      const input = shuffledItem ? form.querySelector(`#${shuffledItem.id}`) : null;
      return { ...item, checked: Boolean(input && input.checked) };
    });
    downloadJsonFile(buildPolarSavedPayload(config, ordered), `${config.fileNameBase}-`);
  });
  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.className = "submit-btn";
  submitBtn.textContent = "Voir les résultats";
  actions.append(randomFillBtn, saveBtn, submitBtn);
  form.append(actions);
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const selected = new Set();
    shuffled.forEach((entry) => {
      const input = form.querySelector(`#${entry.id}`);
      if (input && input.checked) {
        selected.add(entry.item);
      }
    });
    const ordered = config.items.map((entry) => ({
      ...entry,
      checked: selected.has(entry.item),
    }));
    renderPolarQuestionnaireSingleResult(config, ordered, true);
  });
  contentRoot.append(title, subtitle, form);
}
function getPolarQuestionnaireConfig(idPrefix) {
  if (idPrefix === "encadrant") {
    return {
      idPrefix: "encadrant",
      displayName: "Sociomètre de l'encadrant",
      fileNameBase: "questionnaire-sociometre-encadrant",
      subtitle: "Cocher les items qui correspondent à votre situation.",
      resultsSubtitle: "Lecture ordonnée par catégorie avec visualisation polaire.",
      items: encadrantQuestionnaireItems,
      categoryOrder,
      categoryMeta,
      polarConfig: {
        categoryOrder,
        categoryMeta,
        labelMap: {
          "Environnement de travail de qualité": "de qualité",
          "Environnement de travail dégradé": "dégradé",
          "Environnement de travail de rupture": "de rupture",
        },
        title: "Sociomètre de l'encadrant : environnement de travail",
        dtick: 1,
        minMaxRange: 8,
        hoverTemplate: "%{theta}: %{r} item(s) sélectionné(s)<extra></extra>",
      },
    };
  }
  if (idPrefix === "violentometre") {
    return {
      idPrefix: "violentometre",
      displayName: "Violentomètre",
      fileNameBase: "questionnaire-violentometre",
      subtitle: "Cocher les situations observées ou vécues.",
      resultsSubtitle: "Lecture ordonnée par catégorie avec visualisation polaire pondérée (de la moins pondérée à la plus pondérée).",
      items: violentometreQuestionnaireItems,
      categoryOrder: violentometreCategoryOrder,
      categoryMeta: violentometreCategoryMeta,
      polarConfig: {
        categoryOrder: violentometreCategoryOrder,
        categoryMeta: violentometreCategoryMeta,
        labelMap: {
          "Environnement professionnel sain": "sain",
          "Environnement professionnel sexiste et hostile": "sexiste/hostile",
          "Harcèlement sexuel": "harcèlement sexuel",
          "Agressions sexuelles": "agressions sexuelles",
          "Viol": "viol",
        },
        title: "Violentomètre : environnement professionnel",
        dtick: 20,
        minMaxRange: 100,
        hoverTemplate: "%{theta}<extra></extra>",
      },
    };
  }
  if (idPrefix === "rps") {
    return {
      idPrefix: "rps",
      displayName: "Sociomètre RPS",
      fileNameBase: "questionnaire-sociometre-rps",
      subtitle: "Cocher les items qui correspondent à votre situation.",
      resultsSubtitle: "Lecture ordonnée par catégorie avec visualisation polaire.",
      items: rpsQuestionnaireItems,
      categoryOrder: rpsCategoryOrder,
      categoryMeta: rpsCategoryMeta,
      polarConfig: {
        categoryOrder: rpsCategoryOrder,
        categoryMeta: rpsCategoryMeta,
        labelMap: {
          "Environnement de travail de qualité": "de qualité",
          "Environnement de travail hostile": "hostile",
          "Environnement de travail de rupture": "de rupture",
        },
        title: "Sociomètre RPS : environnement professionnel",
        dtick: 1,
        minMaxRange: 8,
        hoverTemplate: "%{theta}: %{r} item(s) sélectionné(s)<extra></extra>",
      },
    };
  }
  return null;
}
function renderEncadrantQuestionnaire() {
  renderQuestionnaireFeature(getPolarQuestionnaireConfig("encadrant"));
}
function renderViolentometreQuestionnaire() {
  renderQuestionnaireFeature(getPolarQuestionnaireConfig("violentometre"));
}
function renderRpsQuestionnaire() {
  renderQuestionnaireFeature(getPolarQuestionnaireConfig("rps"));
}
function getGuideUtilisateurHtml() {
  return `
    <nav class="guide-toc" aria-label="Sommaire du guide">
      <strong>Sommaire</strong>
      <ol>
        <li><a href="#guide-presentation">Présentation générale</a></li>
        <li><a href="#guide-installation">Installer l'application (PWA)</a></li>
        <li><a href="#guide-navigation">Se repérer dans l'application</a></li>
        <li><a href="#guide-commun">Fonctionnement commun à tous les questionnaires</a></li>
        <li><a href="#guide-outils">Visite guidée par outil</a></li>
        <li><a href="#guide-tutoriel">Tutoriel pas à pas</a></li>
        <li><a href="#guide-a-propos">A propos, licences et crédits</a></li>
      </ol>
    </nav>

    <h2 id="guide-presentation">1. Présentation générale</h2>
    <p>« Questionnaires RPS et Sociomètres » est une <strong>application Web Progressive (PWA)</strong> qui permet de remplir des questionnaires reconnus d'évaluation des risques psychosociaux (RPS), de visualiser les résultats sous forme de tableaux et de graphiques, de sauvegarder les réponses dans un fichier, et d'importer des fichiers déjà sauvegardés pour comparer plusieurs personnes ou plusieurs groupes. Tout se passe dans le navigateur : aucune donnée n'est envoyée à un serveur.</p>
    <div class="results-table-wrap">
      <table class="results-table guide-table">
        <thead>
          <tr><th>Outil</th><th>Type de réponse</th><th>Items</th><th>Catégories</th><th>Visualisation</th></tr>
        </thead>
        <tbody>
          <tr><td>Sociomètre RPS</td><td>Cases à cocher</td><td>24</td><td>3 (qualité, hostile, rupture)</td><td>Diagramme polaire</td></tr>
          <tr><td>Sociomètre de l'encadrant</td><td>Cases à cocher</td><td>24</td><td>3 (qualité, dégradé, rupture)</td><td>Diagramme polaire</td></tr>
          <tr><td>Violentomètre</td><td>Cases à cocher</td><td>22</td><td>5 (sain → viol, pondérées)</td><td>Diagramme polaire pondéré</td></tr>
        </tbody>
      </table>
    </div>
    <figure class="guide-figure">
      <img src="docs/screenshots/00-accueil.png" alt="Écran d'accueil de l'application, menu fermé" loading="lazy" />
      <figcaption>Écran d'accueil : le titre de l'application et le bouton menu (☰) en haut à droite.</figcaption>
    </figure>

    <h2 id="guide-installation">2. Installer l'application (PWA)</h2>
    <p>L'application peut être utilisée directement dans un navigateur, ou installée comme une application autonome (icône sur le bureau ou l'écran d'accueil, fonctionnement hors-ligne grâce au <em>service worker</em> embarqué).</p>
    <ul>
      <li><strong>Ordinateur</strong> (Chrome, Edge…) : un bouton <strong>« Installer l'application »</strong> apparaît près du bouton menu lorsque le navigateur juge le site installable ; cliquer dessus puis confirmer.</li>
      <li><strong>Mobile</strong> (Android/iOS) : utiliser l'option du navigateur « Ajouter à l'écran d'accueil ».</li>
      <li><strong>Hors-ligne</strong> : une fois chargée une première fois, l'application reste utilisable sans connexion Internet.</li>
    </ul>

    <h2 id="guide-navigation">3. Se repérer dans l'application</h2>
    <p>Le bouton ☰ ouvre ou ferme le menu de navigation. Les trois outils (Sociomètre RPS, Sociomètre de l'encadrant, Violentomètre) déplient chacun un sous-menu (Questionnaire, imports, Référentiel) ; « Guide utilisateur », « A propos », « GitHub » et la licence ouvrent directement une page.</p>
    <div class="guide-fig-row">
      <figure class="guide-figure">
        <img src="docs/screenshots/01-menu-ouvert.png" alt="Menu de navigation ouvert" loading="lazy" />
        <figcaption>Menu ouvert : les outils disponibles et les pages d'information.</figcaption>
      </figure>
      <figure class="guide-figure">
        <img src="docs/screenshots/02-sous-menu-rps.png" alt="Sous-menu du Sociomètre RPS déplié" loading="lazy" />
        <figcaption>Sous-menu déplié pour « Sociomètre RPS » : Questionnaire, imports, Référentiel.</figcaption>
      </figure>
    </div>

    <h2 id="guide-commun">4. Fonctionnement commun à tous les questionnaires</h2>

    <h3>4.1 Remplir le questionnaire</h3>
    <p>Les items apparaissent dans un ordre aléatoire à chaque ouverture. Un bouton <strong>« Remplissage aléatoire »</strong> préremplit le formulaire (utile pour un essai rapide).</p>
    <div class="guide-fig-row">
      <figure class="guide-figure">
        <img src="docs/screenshots/03-rps-questionnaire-vide.png" alt="Questionnaire Sociomètre RPS vide, cases à cocher" loading="lazy" />
        <figcaption>Questionnaire vide (exemple : Sociomètre RPS, 24 items à cocher).</figcaption>
      </figure>
      <figure class="guide-figure">
        <img src="docs/screenshots/04-rps-questionnaire-rempli.png" alt="Questionnaire Sociomètre RPS après remplissage aléatoire" loading="lazy" />
        <figcaption>Après un clic sur « Remplissage aléatoire ».</figcaption>
      </figure>
    </div>

    <h3>4.2 Voir les résultats</h3>
    <p>Après « Voir les résultats », les réponses sont réordonnées par catégorie dans un tableau codé par couleur, accompagné d'un graphique Plotly (diagramme polaire).</p>
    <figure class="guide-figure">
      <img src="docs/screenshots/05-rps-resultats.png" alt="Résultats du Sociomètre RPS : tableau et diagramme polaire" loading="lazy" />
      <figcaption>Résultats : tableau ordonné par catégorie et diagramme polaire correspondant.</figcaption>
    </figure>

    <h3>4.3 Sauvegarder ses réponses</h3>
    <p>Le bouton <strong>« Sauvegarder »</strong> (avant soumission) ou <strong>« Sauvegarder dans un fichier »</strong> (depuis les résultats) télécharge un fichier JSON réutilisable plus tard.</p>

    <h3>4.4 Importer un fichier (résultat individuel)</h3>
    <p>Recharge un fichier JSON précédemment sauvegardé et affiche directement les résultats correspondants.</p>
    <figure class="guide-figure">
      <img src="docs/screenshots/06-rps-import-un-fichier.png" alt="Résultat rechargé depuis un fichier JSON individuel" loading="lazy" />
      <figcaption>« Importer un fichier » : les résultats d'une sauvegarde individuelle sont réaffichés (l'action de sauvegarde est masquée sur cette vue).</figcaption>
    </figure>

    <h3>4.5 Importer plusieurs fichiers (individus)</h3>
    <p>Chaque fichier sélectionné devient une trace distincte sur le graphique, avec un tableau de statistiques (moyenne, médiane, minimum, maximum).</p>
    <figure class="guide-figure">
      <img src="docs/screenshots/07-rps-import-individus.png" alt="Comparaison de deux fichiers individuels" loading="lazy" />
      <figcaption>Comparaison de deux réponses individuelles importées ensemble.</figcaption>
    </figure>

    <h3>4.6 Importer plusieurs fichiers (groupe)</h3>
    <p>Chaque sélection de plusieurs fichiers réalisée en une fois constitue un <strong>lot</strong>. On peut importer successivement plusieurs lots pour comparer des équipes.</p>
    <figure class="guide-figure">
      <img src="docs/screenshots/08-rps-import-groupe.png" alt="Comparaison de deux lots de fichiers (équipe A et équipe B)" loading="lazy" />
      <figcaption>Deux lots importés successivement (« équipe A » et « équipe B ») : statistiques comparées par lot et traces distinctes sur le graphique.</figcaption>
    </figure>

    <h3>4.7 Référentiel</h3>
    <p>Chaque outil dispose d'une page listant ses sources documentaires officielles.</p>
    <figure class="guide-figure">
      <img src="docs/screenshots/09-rps-referentiel.png" alt="Page Référentiel du Sociomètre RPS avec liens vers les sources" loading="lazy" />
      <figcaption>Page « Référentiel » du Sociomètre RPS : liens vers l'UFICT, l'ANACT, l'INRS, etc.</figcaption>
    </figure>

    <h2 id="guide-outils">5. Visite guidée par outil</h2>

    <h3>5.1 Sociomètre de l'encadrant</h3>
    <p>24 items à cocher, 3 catégories (de qualité, dégradé, de rupture), diagramme polaire identique dans son principe au Sociomètre RPS.</p>
    <div class="guide-fig-row">
      <figure class="guide-figure">
        <img src="docs/screenshots/14-encadrant-questionnaire.png" alt="Questionnaire Sociomètre de l'encadrant" loading="lazy" />
        <figcaption>Questionnaire (pratiques d'encadrement et qualité du collectif de travail).</figcaption>
      </figure>
      <figure class="guide-figure">
        <img src="docs/screenshots/15-encadrant-resultats.png" alt="Résultats Sociomètre de l'encadrant" loading="lazy" />
        <figcaption>Résultats : tableau ordonné et diagramme polaire.</figcaption>
      </figure>
    </div>
    <div class="guide-fig-row">
      <figure class="guide-figure">
        <img src="docs/screenshots/23-encadrant-import-individus.png" alt="Comparaison de deux individus Sociomètre de l'encadrant" loading="lazy" />
        <figcaption>Importer plusieurs fichiers (individus) : une trace par personne, statistiques globales.</figcaption>
      </figure>
      <figure class="guide-figure">
        <img src="docs/screenshots/24-encadrant-import-groupe.png" alt="Comparaison de deux lots Sociomètre de l'encadrant" loading="lazy" />
        <figcaption>Importer plusieurs fichiers (groupe) : deux lots comparés (ex. équipe A / équipe B).</figcaption>
      </figure>
    </div>

    <h3>5.2 Violentomètre</h3>
    <p>22 items à cocher répartis en 5 catégories pondérées, de « environnement professionnel sain » à « viol ». Le diagramme polaire pondéré visualise la gravité globale des situations cochées.</p>
    <div class="guide-fig-row">
      <figure class="guide-figure">
        <img src="docs/screenshots/16-violentometre-questionnaire.png" alt="Questionnaire Violentomètre" loading="lazy" />
        <figcaption>Questionnaire (22 items, 5 catégories de gravité).</figcaption>
      </figure>
      <figure class="guide-figure">
        <img src="docs/screenshots/17-violentometre-resultats.png" alt="Résultats Violentomètre : diagramme polaire pondéré par catégorie de gravité" loading="lazy" />
        <figcaption>Résultats : tableau codé par couleur et diagramme polaire pondéré.</figcaption>
      </figure>
    </div>
    <div class="guide-fig-row">
      <figure class="guide-figure">
        <img src="docs/screenshots/25-violentometre-import-individus.png" alt="Comparaison de deux individus Violentomètre" loading="lazy" />
        <figcaption>Importer plusieurs fichiers (individus) : une trace pondérée par personne.</figcaption>
      </figure>
      <figure class="guide-figure">
        <img src="docs/screenshots/26-violentometre-import-groupe.png" alt="Comparaison de deux lots Violentomètre" loading="lazy" />
        <figcaption>Importer plusieurs fichiers (groupe) : deux lots comparés, gravité moyenne par catégorie.</figcaption>
      </figure>
    </div>

    <h2 id="guide-tutoriel">6. Tutoriel pas à pas : réaliser et comparer des questionnaires</h2>
    <p>Exemple avec le <strong>Sociomètre RPS</strong> ; la démarche est identique pour les autres outils à cases à cocher.</p>
    <div class="guide-step">
      <h4>Étape 1 — Répondre au questionnaire</h4>
      <p>Menu (☰) → <strong>Sociomètre RPS → Questionnaire</strong>. Cocher les items correspondants, ou cliquer sur « Remplissage aléatoire », puis « Voir les résultats ».</p>
    </div>
    <div class="guide-step">
      <h4>Étape 2 — Lire ses résultats</h4>
      <p>Le tableau ordonné par catégorie et le diagramme polaire apparaissent (voir capture de la section 4.2).</p>
    </div>
    <div class="guide-step">
      <h4>Étape 3 — Sauvegarder ses réponses</h4>
      <p>Depuis l'écran de résultats, cliquer sur <strong>« Sauvegarder dans un fichier »</strong> : un fichier JSON est téléchargé.</p>
    </div>
    <div class="guide-step">
      <h4>Étape 4 — Recharger une réponse individuelle</h4>
      <p><strong>Sociomètre RPS → Importer un fichier</strong>, puis sélectionner le fichier sauvegardé à l'étape 3 (voir capture de la section 4.4).</p>
    </div>
    <div class="guide-step">
      <h4>Étape 5 — Comparer plusieurs personnes</h4>
      <p>Faire remplir le questionnaire par plusieurs personnes (étapes 1 à 3), puis <strong>Importer plusieurs fichiers (individus)</strong> en sélectionnant tous les fichiers à la fois (voir capture de la section 4.5).</p>
    </div>
    <div class="guide-step">
      <h4>Étape 6 — Comparer plusieurs groupes</h4>
      <p>Constituer un premier lot de fichiers (équipe A) puis un second (équipe B) et les importer successivement via <strong>Importer plusieurs fichiers (groupe)</strong> (voir capture de la section 4.6). Utiliser « Réinitialiser les imports » pour repartir de zéro.</p>
    </div>

    <h2 id="guide-a-propos">7. A propos, licences et crédits</h2>
    <p>La page « A propos » du menu regroupe les mentions légales : licence MIT pour le code, Creative Commons CC BY-NC-ND 4.0 pour les contenus des questionnaires, bibliothèque graphique Plotly.js, palettes de couleurs accessibles Okabe-Ito et Paul Tol muted, et références méthodologiques (rapport Gollac, INRS, ANACT, UFICT, CGT).</p>
    <figure class="guide-figure">
      <img src="docs/screenshots/18-a-propos.png" alt="Page A propos avec mentions légales et liens" loading="lazy" />
      <figcaption>Page « A propos » : licences, bibliothèques et références.</figcaption>
    </figure>

    <p class="guide-footer">Guide généré à partir de l'application « Questionnaires RPS et Sociomètres » — captures d'écran réelles de l'interface (remplissages aléatoires utilisés à titre d'illustration).</p>
  `;
}
function renderGuideUtilisateur() {
  if (!contentRoot) {
    return;
  }
  contentRoot.hidden = false;
  contentRoot.innerHTML = "";
  const title = document.createElement("h2");
  title.className = "content-title";
  title.textContent = "Guide utilisateur";
  const subtitle = document.createElement("p");
  subtitle.className = "content-subtitle";
  subtitle.textContent = "Documentation de référence, visite guidée et tutoriel pas à pas.";
  const guideContent = document.createElement("div");
  guideContent.className = "guide-content";
  guideContent.innerHTML = getGuideUtilisateurHtml();
  contentRoot.append(title, subtitle, guideContent);
}
function openContent(contentId, activeLink) {
  if (externalMenuLinks[contentId]) {
    window.open(externalMenuLinks[contentId], "_blank", "noopener,noreferrer");


    document.querySelectorAll(".submenu-link.active, .menu-link.active").forEach((el) => {
      el.classList.remove("active");
    });

    if (activeLink) {
      activeLink.classList.add("active");
    }

    return;
  }

  const polarImportRoutes = [
    { menuPrefix: "sociometre-rps", idPrefix: "rps" },
    { menuPrefix: "sociometre-de-l-encadrant", idPrefix: "encadrant" },
    { menuPrefix: "violentometre", idPrefix: "violentometre" },
  ];
  const polarImportRoute = polarImportRoutes.find((route) =>
    contentId.startsWith(`${route.menuPrefix}-importer-`),
  );
  if (polarImportRoute) {
    const mode = contentId.endsWith("-un-fichier")
      ? "single"
      : contentId.endsWith("-plusieurs-fichiers-individus")
        ? "individuals"
        : "group";
    triggerPolarQuestionnaireImport(polarImportRoute.idPrefix, mode);

    document.querySelectorAll(".submenu-link.active, .menu-link.active").forEach((el) => {
      el.classList.remove("active");
    });
    if (activeLink) {
      activeLink.classList.add("active");
    }
    contentRoot.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  if (contentId === "sociometre-de-l-encadrant-questionnaire") {
    renderEncadrantQuestionnaire();

    document.querySelectorAll(".submenu-link.active, .menu-link.active").forEach((el) => {
      el.classList.remove("active");
    });

    if (activeLink) {
      activeLink.classList.add("active");
    }

    scrollToPageTop();
    return;
  }

  if (contentId === "violentometre-questionnaire") {
    renderViolentometreQuestionnaire();

    document.querySelectorAll(".submenu-link.active, .menu-link.active").forEach((el) => {
      el.classList.remove("active");
    });

    if (activeLink) {
      activeLink.classList.add("active");
    }

    scrollToPageTop();
    return;
  }

  if (contentId === "sociometre-rps-questionnaire") {
    renderRpsQuestionnaire();

    document.querySelectorAll(".submenu-link.active, .menu-link.active").forEach((el) => {
      el.classList.remove("active");
    });

    if (activeLink) {
      activeLink.classList.add("active");
    }

    scrollToPageTop();
    return;
  }

  if (contentId === "guide-utilisateur") {
    renderGuideUtilisateur();

    document.querySelectorAll(".submenu-link.active, .menu-link.active").forEach((el) => {
      el.classList.remove("active");
    });

    if (activeLink) {
      activeLink.classList.add("active");
    }

    scrollToPageTop();
    return;
  }

  const data = contentData[contentId];
  if (!data || !contentRoot) {
    return;
  }

  contentRoot.innerHTML = "";
  const title = document.createElement("h2");
  const subtitle = document.createElement("p");
  const grid = document.createElement("div");

  title.className = "content-title";
  title.textContent = data.title;

  subtitle.className = "content-subtitle";
  subtitle.textContent = data.subtitle;

  grid.className = "content-grid";

  data.cards.forEach((text) => {
    const card = document.createElement("article");
    const body = document.createElement("p");
    card.className = "content-card";
    body.innerHTML = text;

    if (data.subtitle !== "Référentiel" && data.title !== "A propos") {
      const heading = document.createElement("h3");
      heading.textContent = data.title;
      card.append(heading);
    }
    card.append(body);
    grid.append(card);
  });

  contentRoot.append(title, subtitle, grid);
  contentRoot.hidden = false;

  document.querySelectorAll(".submenu-link.active, .menu-link.active").forEach((el) => {
    el.classList.remove("active");
  });

  if (activeLink) {
    activeLink.classList.add("active");
  }

  contentRoot.scrollIntoView({ behavior: "smooth", block: "start" });
}

function createSubmenuItem(parentLabel, itemLabel) {
  const li = document.createElement("li");
  const link = document.createElement("a");
  const contentId = `${slugify(parentLabel)}-${slugify(itemLabel)}`;

  link.className = "submenu-link";
  link.href = `#${contentId}`;
  link.textContent = itemLabel;
  link.setAttribute("aria-label", `${parentLabel} - ${itemLabel}`);
  link.dataset.contentId = contentId;

  link.addEventListener("click", (event) => {
    event.preventDefault();
    openContent(contentId, link);
    closeHamburgerMenu();
  });

  li.append(link);
  return li;
}

function createMenuItem(entry) {
  const item = document.createElement("section");
  item.className = "menu-item";

  if (!entry.submenu.length) {
    const link = document.createElement("a");
    const contentId = slugify(entry.label);

    link.className = "menu-link";
    link.href = `#${contentId}`;
    if (contentId === "github") {
      const icon = document.createElementNS("http://www.w3.org/2000/svg", "svg");
      icon.setAttribute("viewBox", "0 0 16 16");
      icon.setAttribute("width", "14");
      icon.setAttribute("height", "14");
      icon.setAttribute("aria-hidden", "true");
      icon.style.marginRight = "8px";
      icon.style.verticalAlign = "text-bottom";

      const path = document.createElementNS("http://www.w3.org/2000/svg", "path");
      path.setAttribute(
        "d",
        "M8 0C3.58 0 0 3.58 0 8a8.001 8.001 0 0 0 5.47 7.59c.4.07.55-.17.55-.38v-1.49c-2.23.49-2.69-1.08-2.69-1.08-.36-.92-.88-1.16-.88-1.16-.72-.49.06-.48.06-.48.8.06 1.22.82 1.22.82.71 1.22 1.87.87 2.33.66.07-.52.28-.87.5-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.58.82-2.14-.08-.2-.36-1.01.08-2.1 0 0 .67-.21 2.2.82a7.64 7.64 0 0 1 4 0c1.53-1.03 2.2-.82 2.2-.82.44 1.09.16 1.9.08 2.1.51.56.82 1.27.82 2.14 0 3.07-1.87 3.75-3.65 3.95.29.25.54.74.54 1.49v2.2c0 .21.14.46.55.38A8.001 8.001 0 0 0 16 8c0-4.42-3.58-8-8-8Z",
      );
      path.setAttribute("fill", "currentColor");
      icon.append(path);

      const text = document.createElement("span");
      text.textContent = entry.label;
      link.append(icon, text);
    } else if (contentId === "cc-by-nc-nd-4-0") {
      const iconsWrap = document.createElement("span");
      iconsWrap.style.display = "inline-flex";
      iconsWrap.style.alignItems = "center";
      iconsWrap.style.gap = "4px";
      iconsWrap.style.marginRight = "8px";

      const ccIcons = ["cc", "by", "nc", "nd"];
      ccIcons.forEach((iconName) => {
        const icon = document.createElement("img");
        icon.src = `https://mirrors.creativecommons.org/presskit/icons/${iconName}.svg`;
        icon.width = 16;
        icon.height = 16;
        icon.alt = "";
        icon.setAttribute("aria-hidden", "true");
        icon.style.verticalAlign = "text-bottom";
        iconsWrap.append(icon);
      });

      const text = document.createElement("span");
      text.textContent = entry.label;
      link.append(iconsWrap, text);
    } else {
      link.textContent = entry.label;
    }
    link.setAttribute("aria-label", entry.label);
    link.dataset.contentId = contentId;

    link.addEventListener("click", (event) => {
      event.preventDefault();
      openContent(contentId, link);
      closeHamburgerMenu();
    });

    item.append(link);
    return item;
  }

  const button = document.createElement("button");
  const submenuId = `submenu-${slugify(entry.label)}`;
  button.className = "menu-toggle";
  button.type = "button";
  button.setAttribute("aria-expanded", "false");
  button.setAttribute("aria-controls", submenuId);
  button.innerHTML = `${entry.label}<span class="chevron" aria-hidden="true">▾</span>`;

  const submenu = document.createElement("ul");
  submenu.className = "submenu";
  submenu.id = submenuId;

  entry.submenu.forEach((child) => {
    submenu.append(createSubmenuItem(entry.label, child));
  });

  button.addEventListener("click", () => {
    const isOpen = item.classList.toggle("open");
    button.setAttribute("aria-expanded", String(isOpen));
  });

  item.append(button, submenu);
  return item;
}

menuData.forEach((entry) => {
  menuRoot.append(createMenuItem(entry));
});

// Keep navigation in hamburger mode by default on all screen sizes.
closeHamburgerMenu();

if (menuHamburgerBtn) {
  menuHamburgerBtn.addEventListener("click", () => {
    toggleHamburgerMenu();
  });
}

document.addEventListener("click", (event) => {
  if (!menuRoot || !menuHamburgerBtn) {
    return;
  }

  const target = event.target;
  if (!(target instanceof Node)) {
    return;
  }

  const clickInsideMenu = menuRoot.contains(target);
  const clickOnHamburger = menuHamburgerBtn.contains(target);

  if (!clickInsideMenu && !clickOnHamburger) {
    closeHamburgerMenu();
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeHamburgerMenu();
  }
});

window.addEventListener("beforeinstallprompt", (event) => {
  event.preventDefault();
  deferredInstallPrompt = event;

  if (installBtn) {
    installBtn.hidden = false;
  }
});

if (installBtn) {
  installBtn.addEventListener("click", async () => {
    if (!deferredInstallPrompt) {
      return;
    }

    deferredInstallPrompt.prompt();
    await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;
    installBtn.hidden = true;
  });
}

window.addEventListener("appinstalled", () => {
  deferredInstallPrompt = null;
  if (installBtn) {
    installBtn.hidden = true;
  }
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("sw.js").catch((error) => {
      console.error("Échec de l'enregistrement du service worker:", error);
    });
  });
}

