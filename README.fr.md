<p align="center">
  <a href="README.ja.md">日本語</a> | <a href="README.zh.md">中文</a> | <a href="README.es.md">Español</a> | <a href="README.md">English</a> | <a href="README.hi.md">हिन्दी</a> | <a href="README.it.md">Italiano</a> | <a href="README.pt-BR.md">Português (BR)</a>
</p>

<p align="center">
  <img src="assets/logo.png" alt="GlyphStudio" width="400" />
</p>

<p align="center">
  <a href="https://github.com/mcp-tool-shop-org/glyphstudio/actions"><img src="https://img.shields.io/github/actions/workflow/status/mcp-tool-shop-org/glyphstudio/ci.yml?branch=main&style=flat-square&label=CI" alt="CI"></a>
  <img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="License">
  <img src="https://img.shields.io/badge/platforms-Windows%20%7C%20macOS%20%7C%20Linux-informational?style=flat-square" alt="Platforms">
  <img src="https://img.shields.io/badge/tauri-v2-orange?style=flat-square" alt="Tauri v2">
  <img src="https://img.shields.io/badge/tests-4550%2B%20passing-brightgreen?style=flat-square" alt="Tests">
  <a href="https://mcp-tool-shop-org.github.io/glyphstudio/"><img src="https://img.shields.io/badge/Landing_Page-live-blue?style=flat-square" alt="Landing Page"></a>
</p>

# GlyphStudio

Un studio de gestion d’éléments graphiques, conçu pour les images fixes, les animations, les variantes, les éléments réutilisables et la production structurée.

GlyphStudio est une application de bureau développée avec **Tauri v2**, **React** et **Rust**. Elle est livrée avec un **serveur MCP** qui expose toute la surface d’édition de sprites aux LLM (grands modèles linguistiques) — même logique de domaine, mêmes tampons de pixels, même fonctionnalité d’annulation/rétablissement.

## Ce que vous pouvez faire

**Créer** — Dessiner des graphismes pixelisés avec des outils déterministes, des calques et un contrôle de la palette de couleurs.

**Animer** — Créer des animations image par image avec des outils d’« onion skin », de gestion du timing et d’amélioration de la qualité des transitions.

**Varier** — Créer des variantes d’éléments graphiques dans des documents nommés (direction, pose) et des variantes de palette (familles de couleurs). Prévisualiser avant de valider.

**Réutiliser** — Promouvoir les sélections en éléments réutilisables. Enregistrer des ensembles d’éléments. Insérer des éléments dans différents projets.

**Regrouper** — Exporter des familles d’éléments graphiques en une seule étape : élément de base + variantes de document + variantes de palette, avec des noms de fichiers contextuels.

**Démarrer rapidement** — Commencer à partir de modèles, d’ensembles d’éléments ou de recettes de démarrage. L’interface principale reflète les flux de travail pris en charge par le studio.

## Meilleurs flux de travail

### Image fixe
Projet vierge (32x32) → dessiner avec le crayon/outil de remplissage/gomme → espace de travail de la palette → exporter au format PNG.

### Animation en boucle
Projet vierge (32x32, 4 images) → dessiner l’image 1 → dupliquer + modifier → « onion skin » pour l’alignement → gestion du timing → exporter au format GIF ou en série d’images.

### Famille de variantes
Dessiner l’élément de base → créer des variantes de document (par exemple, marcher à gauche, marcher à droite) → créer des ensembles de palettes (par exemple, feu, glace) → prévisualiser le remappage de la palette → exporter en groupe avec des noms de fichiers `{name}-{variant}-{palette}.png`.

### Éléments réutilisables
Dessiner une forme récurrente → sélectionner → promouvoir en élément → enregistrer dans la bibliothèque → insérer dans d’autres images/projets. Enregistrer des ensembles d’éléments + palettes pour une réutilisation inter-projets.

### Démarrage à partir d’un modèle/ensemble
ProjectHome → choisir un modèle (prêt pour l’animation ou prêt pour les variantes) ou un ensemble (kit d’interface utilisateur, collection de palettes) → projet en cours avec la structure déjà chargée.

## Présentation

Quatre projets exemplaires illustrent les flux de travail les plus performants. Chacun est un fichier d’échange valide que vous pouvez importer :

| Présentation | Fichier | Ce qu’il prouve |
|----------|------|----------------|
| Gemme de cristal | [`showcase/still-sprite.interchange.json`](showcase/) | Création d’images fixes, utilisation de la palette |
| Flamme vacillante | [`showcase/loop-animation.interchange.json`](showcase/) | Animation de 4 images, gestion du timing |
| Variantes de bouclier | [`showcase/variant-family.interchange.json`](showcase/) | Élément de base + variantes de palette feu/glace |
| Kit d’interface utilisateur de jeu | [`showcase/pack-project.interchange.json`](showcase/) | Éléments réutilisables (étoile, cœur, pièce) |

Voir [`showcase/SHOWCASE.md`](showcase/SHOWCASE.md) pour plus de détails.

## Concepts clés

| Concept | Définition | Emplacement |
|---------|-----------|----------------|
| **Palette Set** | Un ensemble de couleurs nommé pour le remappage des couleurs | Au niveau du document, commutable |
| **Document Variant** | Une copie de la séquence d’images (pose, direction) | Au niveau du document, images indépendantes |
| **Part** | Un tampon de pixels réutilisable, issu d’une sélection | Bibliothèque, inter-projets |
| **Pack** | Un ensemble organisé d’ensembles de palettes + d’éléments | Bibliothèque, importable/exportable |
| **Template** | Un modèle de démarrage de projet (canevas, palette, images) | Bibliothèque, utilisé à partir de ProjectHome |
| **Bundle** | Une exportation en une seule étape de l’élément de base + des variantes + des palettes | Flux d’exportation |
| **Interchange** | Format JSON pour le déplacement des structures créées entre les projets | Fichiers `.interchange.json` |

## Raccourcis contextuels

GlyphStudio affiche les raccourcis pertinents en fonction de ce que vous faites. La barre s’actualise lorsque le contexte change.

| Contexte | Raccourcis clés |
|---------|--------------|
| **Drawing** | `B` Crayon, `E` Gomme, `G` Remplissage, `M` Sélection rectangulaire, `X` Échanger le premier plan/l’arrière-plan, `Ctrl+Z` Annuler |
| **Selection active** | `Ctrl+C` Copier, `Ctrl+X` Couper, `Ctrl+V` Coller, `Del` Effacer, `Esc` Désélectionner |
| **Stamp mode** | `Click` Insérer un tampon, `Esc` Quitter |
| **Animation** | `Ctrl+D` Dupliquer l’image, `Space` Lecture/Pause, `Left/Right` Avancer d’une image |
| **Library focused** | `Ctrl+F` Rechercher, `Up/Down` Naviguer, `Enter` Activer |
| **Variant workflow** | `+ Variant` Dupliquer la séquence, `Toggle` Superposer pour comparaison |
| **Palette preview** | `Apply` Valider le remappage, `Cancel` Annuler |

## Packages

| Package | Description |
|---------|-------------|
| `apps/desktop` | Application de bureau Tauri v2 (React + Rust) |
| [`@glyphstudio/domain`](packages/domain/) | Types et contrats |
| [`@glyphstudio/api-contract`](packages/api-contract/) | Types de contrats IPC de Tauri |
| [`@glyphstudio/state`](packages/state/) | Gestion de l’état, opérations de rendu, historique |
| [`@glyphstudio/mcp-sprite-server`](packages/mcp-sprite-server/) | Serveur MCP — 76 outils, 6 ressources |

## Architecture

### Frontend (React + TypeScript)
- Stockages Zustand organisés par domaine
- Moteur de rendu HTML canvas
- Éditeur de sprites avec des tampons de pixels et une composition alpha gérés par le frontend
- Panneau de bibliothèque avec index unifié, recherche, épinglage et navigation au clavier

### Backend (Rust)
- Tampons de pixels et composition des calques faisant autorité
- Transactions de traits avec annulation/rétablissement
- Persistance du projet, sauvegarde automatique, récupération en cas de plantage
- Pipelines d’exportation (PNG, feuille de sprites, GIF animé, ensemble)
- Moteur de composition de scène avec caméra et lecture

### Serveur MCP (Node.js)
- Stockage Zustand sans tête par session (pas de React, pas de navigateur)
- 76 outils enregistrés via `@modelcontextprotocol/sdk`
- Même code `@glyphstudio/domain` et `@glyphstudio/state` que l’application de bureau
- S’exécute via stdio — fonctionne avec Claude Desktop, Claude Code ou tout client MCP

Voir le [README du serveur MCP](packages/mcp-sprite-server/README.md) pour l’inventaire complet des outils.

## Structure du monorepos

```text
glyphstudio/
  apps/desktop/           Desktop app (React + Tauri + Rust)
    src/                  Frontend
    src-tauri/            Rust backend
  packages/
    domain/               Types and contracts
    api-contract/         Tauri IPC types
    state/                State management, raster, history (2,575+ tests)
    mcp-sprite-server/    MCP server — 76 tools
  showcase/               Canonical showcase projects
  site/                   Landing page (Astro)
```

## Exécution de l’application

### Prérequis
- Node.js 20+
- pnpm 9+
- Rust 1.75+ (via [rustup](https://rustup.rs/))
- Prérequis de Tauri v2 pour votre plateforme

### Installation

```bash
pnpm install
```

### Exécuter l’application de bureau

```bash
pnpm dev
```

### Exécuter le serveur MCP (en mode autonome)

```bash
npx tsx packages/mcp-sprite-server/src/cli.ts
```

### Vérification de type

```bash
pnpm typecheck
```

### Test

```bash
pnpm test
```

### Vérification Rust

```bash
cd apps/desktop/src-tauri
cargo check
cargo test
```

## Prise en charge de l’exportation

| Cible | Formats |
|--------|---------|
| **Single frame** | PNG (calques visibles combinés) |
| **Animation** | GIF animé, séquence PNG, bande d’images |
| **Sheet** | Feuille de sprites avec fichier manifeste (environnement d’exécution natif + générique) |
| **Bundle** | Dossier ou fichier ZIP contenant des images, des fichiers manifeste et un aperçu |
| **Variant family** | Base + variantes de documents + variantes de palette avec noms de fichiers contextuels |
| **MCP Server** | Base64-encoded PNG, feuille, GIF et métadonnées JSON |

L’exportation utilise uniquement les calques visibles combinés. Les superpositions de l’éditeur (calque d’oignon, état de lecture) ne sont jamais incluses dans la sortie.

## Philosophie du produit

1. **Édition déterministe** — Chaque modification de pixel est légale, inspectable et réversible.
2. **IA subordonnée** — L’automatisation assiste le flux de travail sans remplacer le contrôle créatif.
3. **Structure axée sur l’animation** — Les images, la ligne de temps, le calque d’oignon et la lecture sont des concepts fondamentaux, et non des éléments secondaires.
4. **État fiable** — La sauvegarde/chargement, la sauvegarde automatique, l’annulation/rétablissement et la migration sont considérés comme des fonctionnalités du produit.
5. **Réutilisation honnête** — Les parties sont marquées (pixels validés), et non de fausses instances liées. Les variantes sont des branches, et non un état partagé caché. Aperçu avant la validation.

## Objectifs non visés

GlyphStudio ne vise pas à être :

- Un éditeur d’images générique
- Une application ludique axée sur le navigateur
- Un outil d’invite d’IA qui devine le contenu artistique
- Une toile floue où l’état de l’interface utilisateur et la réalité du backend divergent
- Un faux système de liaison/symboles qui prétend être un système de liaison

## Sécurité

GlyphStudio est une application **uniquement pour ordinateur de bureau**. Aucune requête réseau, aucun suivi, aucun secret.

- **Données concernées :** fichiers de sprites locaux (.glyph, .pxs, .png), fichiers de sauvegarde/restauration automatique
- **Données non concernées :** aucun réseau, aucun cloud, aucune API distante, aucun compte utilisateur
- **Autorisations :** accès au système de fichiers limité aux répertoires sélectionnés par l’utilisateur via les boîtes de dialogue de fichiers natives Tauri v2

Le serveur MCP s’exécute localement via stdio, sans communication réseau. Voir [SECURITY.md](SECURITY.md) pour signaler les vulnérabilités.

## Licence

[MIT](LICENSE)

---

Créé par <a href="https://mcp-tool-shop.github.io/">MCP Tool Shop</a>
