<p align="center">
  <a href="README.ja.md">日本語</a> | <a href="README.zh.md">中文</a> | <a href="README.es.md">Español</a> | <a href="README.fr.md">Français</a> | <a href="README.hi.md">हिन्दी</a> | <a href="README.md">English</a> | <a href="README.pt-BR.md">Português (BR)</a>
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

Uno studio di gestione di risorse pixel per immagini statiche, animazioni, varianti, elementi riutilizzabili e output strutturato.

GlyphStudio è un'applicazione desktop sviluppata con **Tauri v2**, **React** e **Rust**. Viene fornita insieme a un **server MCP** che espone l'intera superficie di modifica degli sprite agli LLM: stessa logica di dominio, stessi buffer di pixel, stessa funzionalità di annullamento/ripetizione.

## Cosa puoi fare

**Crea** — Disegna pixel art con strumenti deterministici, livelli e controllo della palette.

**Anima** — Crea animazioni fotogramma per fotogramma con l'effetto "onion skin", controllo dei tempi e strumenti per migliorare la qualità delle transizioni.

**Crea varianti** — Deriva risorse in varianti di documenti denominate (direzionali, pose) e varianti di palette (famiglie di colori). Visualizza l'anteprima prima di salvare.

**Riutilizza** — Promuovi le selezioni a elementi riutilizzabili. Salva pacchetti curati. Applica elementi a diversi progetti.

**Raggruppa** — Esporta famiglie di risorse in un'unica operazione: base + varianti di documenti + varianti di palette, con nomi di file contestuali.

**Inizia rapidamente** — Inizia da modelli, pacchetti o ricette di avvio. L'interfaccia principale riflette i flussi di lavoro supportati dallo studio.

## Flussi di lavoro migliori

### Sprite statico
Progetto vuoto (32x32) → disegna con matita/riempimento/gomma → spazio di lavoro della palette → esporta in PNG.

### Animazione in loop
Progetto vuoto (32x32, 4 fotogrammi) → disegna il fotogramma 1 → duplica + modifica → effetto "onion skin" per l'allineamento → controllo dei tempi → esporta in GIF o in una sequenza di immagini.

### Famiglia di varianti
Disegna la risorsa di base → crea varianti di documenti (ad esempio, cammina a sinistra, cammina a destra) → crea set di palette (ad esempio, fuoco, ghiaccio) → visualizza l'anteprima della rimappatura della palette → esporta in un pacchetto con nomi di file `{name}-{variant}-{palette}.png`.

### Elementi riutilizzabili
Disegna una forma ricorrente → seleziona → promuovi a elemento → salva nella libreria → applica in altri fotogrammi/progetti. Salva elementi e palette curati come pacchetto per il riutilizzo tra progetti.

### Avvio da modello/pacchetto
ProjectHome → scegli un modello (pronto per l'animazione o per le varianti) o un pacchetto (kit di interfaccia utente, raccolta di palette) → progetto funzionante con la struttura già caricata.

## Esempi

Quattro progetti esemplari dimostrano i flussi di lavoro più efficaci. Ognuno è un file di scambio valido che puoi importare:

| Esempi | File | Cosa dimostra |
|----------|------|----------------|
| Crystal Gem | [`showcase/still-sprite.interchange.json`](showcase/) | Creazione di immagini statiche, utilizzo della palette |
| Flickering Flame | [`showcase/loop-animation.interchange.json`](showcase/) | Animazione di 4 fotogrammi, tempistica |
| Shield Variants | [`showcase/variant-family.interchange.json`](showcase/) | Base + varianti di palette fuoco/ghiaccio |
| Game UI Kit | [`showcase/pack-project.interchange.json`](showcase/) | Elementi riutilizzabili (stella, cuore, moneta) |

Consulta [`showcase/SHOWCASE.md`](showcase/SHOWCASE.md) per i dettagli.

## Concetti chiave

| Concetto | Cos'è | Dove si trova |
|---------|-----------|----------------|
| **Palette Set** | Un set di colori denominato per la ricolorazione | A livello di documento, commutabile |
| **Document Variant** | Una derivazione della sequenza di fotogrammi (posa, direzione) | A livello di documento, fotogrammi indipendenti |
| **Part** | Un elemento pixel riutilizzabile promosso da una selezione | Libreria, tra progetti |
| **Pack** | Un pacchetto curato di set di palette + elementi | Libreria, importabile/esportabile |
| **Template** | Un modello di avvio del progetto (tela, palette, fotogrammi) | Libreria, utilizzato da ProjectHome |
| **Bundle** | Un'esportazione in un'unica operazione di base + varianti + palette | Flusso di esportazione |
| **Interchange** | Formato JSON per lo spostamento delle strutture create tra progetti | File `.interchange.json` |

## Scorciatoie contestuali

GlyphStudio mostra le scorciatoie pertinenti in base a ciò che stai facendo. La barra si aggiorna man mano che il contesto cambia.

| Contesto | Scorciatoie principali |
|---------|--------------|
| **Drawing** | `B` Matita, `E` Gomma, `G` Riempimento, `M` Selezione, `X` Scambia primo piano/sfondo, `Ctrl+Z` Annulla |
| **Selection active** | `Ctrl+C` Copia, `Ctrl+X` Taglia, `Ctrl+V` Incolla, `Del` Cancella, `Esc` Deseleziona |
| **Stamp mode** | `Click` Applica elemento, `Esc` Esci |
| **Animation** | `Ctrl+D` Duplica fotogramma, `Space` Riproduci/Interrompi, `Left/Right` Avanza fotogrammi |
| **Library focused** | `Ctrl+F` Cerca, `Up/Down` Naviga, `Enter` Attiva |
| **Variant workflow** | `+ Variant` Deriva sequenza, `Toggle` Confronta sovrapposizione |
| **Palette preview** | `Apply` Conferma rimappatura, `Cancel` Annulla |

## Pacchetti

| Pacchetto | Descrizione |
|---------|-------------|
| `apps/desktop` | Applicazione desktop Tauri v2 (React + Rust) |
| [`@glyphstudio/domain`](packages/domain/) | Tipi e contratti |
| [`@glyphstudio/api-contract`](packages/api-contract/) | Tipi di contratto IPC Tauri |
| [`@glyphstudio/state`](packages/state/) | Gestione dello stato, operazioni raster, cronologia |
| [`@glyphstudio/mcp-sprite-server`](packages/mcp-sprite-server/) | Server MCP: 76 strumenti, 6 risorse |

## Architettura

### Frontend (React + TypeScript)
- Store di Zustand organizzati per dominio
- Renderer HTML canvas
- Editor di sprite con buffer di pixel e composizione alfa gestiti dal frontend
- Pannello della libreria con indice unificato, ricerca, fissaggio e navigazione da tastiera

### Backend (Rust)
- Buffer di pixel e composizione dei livelli definitivi
- Transazioni di tratto con annullamento/ripetizione
- Persistenza del progetto, salvataggio automatico, ripristino in caso di arresto anomalo
- Pipeline di esportazione (PNG, sprite sheet, GIF animata, pacchetto)
- Motore di composizione della scena con telecamera e riproduzione

### Server MCP (Node.js)
- Store di Zustand senza intestazione per sessione (nessun React, nessun browser)
- 76 strumenti registrati tramite `@modelcontextprotocol/sdk`
- Stesso codice `@glyphstudio/domain` e `@glyphstudio/state` dell'applicazione desktop
- Funziona tramite stdio: compatibile con Claude Desktop, Claude Code o qualsiasi client MCP

Consulta il [README del server MCP](packages/mcp-sprite-server/README.md) per l'elenco completo degli strumenti.

## Struttura del monorepo

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

## Esecuzione dell'applicazione

### Prerequisiti
- Node.js 20+
- pnpm 9+
- Rust 1.75+ (tramite [rustup](https://rustup.rs/))
- Prerequisiti Tauri v2 per la tua piattaforma

### Installazione

```bash
pnpm install
```

### Esegui l'applicazione desktop

```bash
pnpm dev
```

### Avvia il server MCP (in modalità standalone)

```bash
npx tsx packages/mcp-sprite-server/src/cli.ts
```

### Controllo dei tipi

```bash
pnpm typecheck
```

### Test

```bash
pnpm test
```

### Controllo Rust

```bash
cd apps/desktop/src-tauri
cargo check
cargo test
```

## Supporto per l'esportazione

| Destinazione | Formati |
|--------|---------|
| **Single frame** | PNG (livelli visibili composti) |
| **Animation** | GIF animata, sequenza PNG, striscia di sprite |
| **Sheet** | Foglio di sprite con file manifest (runtime nativo + generico) |
| **Bundle** | Cartella o file zip con immagini, file manifest e anteprima |
| **Variant family** | Base + varianti del documento + varianti della tavolozza con nomi di file contestuali |
| **MCP Server** | Base64-encoded PNG, foglio, GIF e metadati JSON |

L'esportazione utilizza solo i livelli visibili composti. Gli elementi dell'editor (onion skin, stato di riproduzione) non sono mai inclusi nell'output.

## Filosofia del prodotto

1. **Modifica deterministica:** ogni modifica di pixel è valida, ispezionabile e reversibile.
2. **IA subordinata:** l'automazione assiste il flusso di lavoro senza sostituire il controllo creativo.
3. **Struttura incentrata sull'animazione:** fotogrammi, timeline, onion skin e riproduzione sono concetti fondamentali, non elementi aggiunti in seguito.
4. **Stato affidabile:** salvataggio/caricamento, salvataggio automatico, annulla/ripeti e migrazione sono trattati come funzionalità del prodotto.
5. **Riutilizzo onesto:** le parti sono contrassegnate (pixel confermati), non istanze collegate false. Le varianti sono fork, non uno stato condiviso nascosto. Anteprima prima della conferma.

## Obiettivi non perseguiti

GlyphStudio non mira a essere:

- Un editor di immagini generico
- Un'app giocosa basata sul browser
- Un wrapper di prompt AI che indovina l'arte
- Una tela confusa in cui lo stato del frontend e la realtà del backend divergono
- Un sistema di rigging/simboli falso che finge di essere un collegamento

## Sicurezza

GlyphStudio è un'applicazione **solo per desktop**. Nessuna richiesta di rete, nessun telemetria, nessun segreto.

- **Dati interessati:** file sprite locali (.glyph, .pxs, .png), file di salvataggio/ripristino automatico
- **Dati NON interessati:** nessuna rete, nessun cloud, nessuna API remota, nessun account utente
- **Autorizzazioni:** accesso al file system limitato alle directory selezionate dall'utente tramite le finestre di dialogo native di Tauri v2

Il server MCP viene eseguito localmente tramite stdio senza alcuna comunicazione di rete. Consultare [SECURITY.md](SECURITY.md) per segnalare vulnerabilità.

## Licenza

[MIT](LICENSE)

---

Creato da <a href="https://mcp-tool-shop.github.io/">MCP Tool Shop</a>
