<p align="center">
  <a href="README.ja.md">日本語</a> | <a href="README.zh.md">中文</a> | <a href="README.md">English</a> | <a href="README.fr.md">Français</a> | <a href="README.hi.md">हिन्दी</a> | <a href="README.it.md">Italiano</a> | <a href="README.pt-BR.md">Português (BR)</a>
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

Un estudio de activos de píxeles, con control, para imágenes fijas, animaciones, variantes, partes reutilizables y salida estructurada.

GlyphStudio es una aplicación de escritorio creada con **Tauri v2**, **React** y **Rust**. Se distribuye junto con un **servidor MCP** que expone toda la superficie de edición de sprites a los LLM (modelos de lenguaje grandes), con la misma lógica de dominio, los mismos búferes de píxeles y las mismas funciones de deshacer/rehacer.

## Qué puedes hacer

**Crear:** Dibuja arte de píxeles con herramientas deterministas, capas y control de paleta.

**Animar:** Crea animaciones cuadro por cuadro con la función de "cebolla", control de tiempo y herramientas para mejorar la calidad de las transiciones.

**Variante:** Divide los activos en variantes de documentos con nombre (direccional, pose) y variantes de paleta (familias de colores). Previsualiza antes de confirmar.

**Reutilizar:** Promociona las selecciones a partes reutilizables. Guarda paquetes seleccionados. Inserta partes en diferentes proyectos.

**Combinar:** Exporta familias de activos en un solo paso: base + variantes de documentos + variantes de paleta, con nombres de archivo contextuales.

**Comienza rápido:** Comienza con plantillas, paquetes o recetas iniciales. La interfaz principal refleja los flujos de trabajo que admite el estudio.

## Mejores flujos de trabajo

### Sprite estático
Proyecto en blanco (32x32) → dibuja con lápiz/relleno/borrador → espacio de trabajo de paleta → exporta a PNG.

### Bucle animado
Proyecto en blanco (32x32, 4 fotogramas) → dibuja el fotograma 1 → duplica + edita → función de "cebolla" para la alineación → control de tiempo → exporta a GIF o tira de imágenes.

### Familia de variantes
Dibuja el activo base → divide en variantes de documentos (por ejemplo, caminar a la izquierda, caminar a la derecha) → crea conjuntos de paletas (por ejemplo, Fuego, Hielo) → previsualiza el remapeo de la paleta → exporta combinado con nombres de archivo `{name}-{variant}-{palette}.png`.

### Partes reutilizables
Dibuja una forma recurrente → selecciona → promueve a parte → guarda en la biblioteca → inserta en otros fotogramas/proyectos. Guarda partes + paletas seleccionadas como un paquete para reutilizar en diferentes proyectos.

### Inicio con plantilla/paquete
ProjectHome → elige una plantilla (lista para animar o lista para variantes) o un paquete (kit de interfaz de usuario, colección de paletas) → proyecto de trabajo con la estructura ya cargada.

## Presentación

Cuatro proyectos canónicos demuestran los flujos de trabajo más sólidos. Cada uno es un archivo de intercambio válido que puedes importar:

| Presentación | Archivo | Lo que demuestra |
|----------|------|----------------|
| Gema de cristal | [`showcase/still-sprite.interchange.json`](showcase/) | Creación de imágenes fijas, uso de paletas |
| Llama parpadeante | [`showcase/loop-animation.interchange.json`](showcase/) | Animación de 4 fotogramas, temporización |
| Variantes de escudo | [`showcase/variant-family.interchange.json`](showcase/) | Base + variantes de paleta de Fuego/Hielo |
| Kit de interfaz de usuario de juego | [`showcase/pack-project.interchange.json`](showcase/) | Partes reutilizables (estrella, corazón, moneda) |

Consulta [`showcase/SHOWCASE.md`](showcase/SHOWCASE.md) para obtener más detalles.

## Conceptos clave

| Concepto | Qué es | Dónde se encuentra |
|---------|-----------|----------------|
| **Palette Set** | Un conjunto de colores con nombre para cambiar los colores | A nivel de documento, conmutable |
| **Document Variant** | Una división de la secuencia de fotogramas (pose, dirección) | A nivel de documento, fotogramas independientes |
| **Part** | Un sello de píxeles reutilizable promovido desde una selección | Biblioteca, para usar en diferentes proyectos |
| **Pack** | Un paquete seleccionado de conjuntos de paletas + partes | Biblioteca, importable/exportable |
| **Template** | Un plano de inicio de proyecto (lienzo, paleta, fotogramas) | Biblioteca, se usa desde ProjectHome |
| **Bundle** | Una exportación en un solo paso de la base + variantes + paletas | Flujo de exportación |
| **Interchange** | Formato JSON para mover estructuras creadas entre proyectos | Archivos `.interchange.json` |

## Atajos contextuales

GlyphStudio muestra los atajos relevantes según lo que estés haciendo. La barra se actualiza a medida que cambia el contexto.

| Contexto | Atajos clave |
|---------|--------------|
| **Drawing** | `B` Lápiz, `E` Borrador, `G` Relleno, `M` Marco, `X` Intercambiar primer plano/fondo, `Ctrl+Z` Deshacer |
| **Selection active** | `Ctrl+C` Copiar, `Ctrl+X` Cortar, `Ctrl+V` Pegar, `Del` Limpiar, `Esc` Deseleccionar |
| **Stamp mode** | `Click` Colocar sello, `Esc` Salir |
| **Animation** | `Ctrl+D` Duplicar fotograma, `Space` Reproducir/Detener, `Left/Right` Avanzar fotogramas |
| **Library focused** | `Ctrl+F` Buscar, `Up/Down` Navegar, `Enter` Activar |
| **Variant workflow** | `+ Variant` Dividir secuencia, `Toggle` Superponer comparación |
| **Palette preview** | `Apply` Confirmar remapeo, `Cancel` Descartar |

## Paquetes

| Paquete | Descripción |
|---------|-------------|
| `apps/desktop` | Aplicación de escritorio Tauri v2 (React + Rust) |
| [`@glyphstudio/domain`](packages/domain/) | Tipos y contratos |
| [`@glyphstudio/api-contract`](packages/api-contract/) | Tipos de contrato IPC de Tauri |
| [`@glyphstudio/state`](packages/state/) | Gestión de estado, operaciones de ráster, historial |
| [`@glyphstudio/mcp-sprite-server`](packages/mcp-sprite-server/) | Servidor MCP: 76 herramientas, 6 recursos |

## Arquitectura

### Frontend (React + TypeScript)
- Almacenes de Zustand organizados por dominio
- Renderizador de lienzo HTML
- Editor de sprites con búferes de píxeles y composición alfa de propiedad del frontend
- Panel de biblioteca con índice unificado, búsqueda, fijación y navegación por teclado

### Backend (Rust)
- Búferes de píxeles y composición de capas autoritativas
- Transacciones de trazo con deshacer/rehacer
- Persistencia del proyecto, guardado automático, recuperación en caso de fallo
- Flujos de trabajo de exportación (PNG, hoja de sprites, GIF animado, paquete)
- Motor de composición de escenas con cámara y reproducción

### Servidor MCP (Node.js)
- Almacén de Zustand sin cabeza por sesión (sin React, sin navegador)
- 76 herramientas registradas a través de `@modelcontextprotocol/sdk`
- El mismo código `@glyphstudio/domain` y `@glyphstudio/state` que la aplicación de escritorio
- Se ejecuta a través de stdio: funciona con Claude Desktop, Claude Code o cualquier cliente MCP

Consulta el [README del servidor MCP](packages/mcp-sprite-server/README.md) para obtener el inventario completo de herramientas.

## Estructura de monorepositorio

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

## Ejecución de la aplicación

### Requisitos previos
- Node.js 20+
- pnpm 9+
- Rust 1.75+ (a través de [rustup](https://rustup.rs/))
- Requisitos previos de Tauri v2 para tu plataforma

### Instalación

```bash
pnpm install
```

### Ejecutar la aplicación de escritorio

```bash
pnpm dev
```

### Ejecutar el servidor MCP (independiente)

```bash
npx tsx packages/mcp-sprite-server/src/cli.ts
```

### Comprobación de tipos

```bash
pnpm typecheck
```

### Prueba

```bash
pnpm test
```

### Comprobación de Rust

```bash
cd apps/desktop/src-tauri
cargo check
cargo test
```

## Soporte para exportación

| Destino | Formatos |
|--------|---------|
| **Single frame** | PNG (capas visibles combinadas) |
| **Animation** | GIF animado, secuencia PNG, tira de sprites |
| **Sheet** | Hoja de sprites con manifiesto (tiempo de ejecución nativo + genérico) |
| **Bundle** | Carpeta o archivo ZIP con imágenes, manifiestos y vista previa |
| **Variant family** | Base + variantes de documentos + variantes de paleta con nombres de archivo contextuales |
| **MCP Server** | Base64-encoded PNG, hoja, GIF y metadatos JSON |

Las exportaciones utilizan solo capas visibles combinadas. Las superposiciones del editor (calco, estado de reproducción) nunca se incluyen en la salida.

## Filosofía del producto

1. **Edición determinista:** cada modificación de píxel es legal, se puede inspeccionar y revertir.
2. **IA subordinada:** la automatización ayuda al flujo de trabajo sin reemplazar el control creativo.
3. **Estructura centrada en la animación:** los fotogramas, la línea de tiempo, el calco y la reproducción son conceptos centrales, no elementos secundarios.
4. **Estado confiable:** guardar/cargar, guardado automático, deshacer/rehacer y migración se tratan como características del producto.
5. **Reutilización honesta:** las partes están marcadas (píxeles confirmados), no son instancias enlazadas falsas. Las variantes son bifurcaciones, no estados compartidos ocultos. Vista previa antes de confirmar.

## Objetivos no deseados

GlyphStudio no pretende ser:

- Un editor de imágenes genérico
- Una aplicación de juguete centrada en el navegador
- Un envoltorio de indicaciones de IA que adivina el arte
- Un lienzo confuso donde el estado del frontend y la realidad del backend se separan
- Un sistema de rigging/símbolos falso que pretende ser un enlace

## Seguridad

GlyphStudio es una aplicación **solo de escritorio**. No hay solicitudes de red, ni telemetría, ni secretos.

- **Datos afectados:** archivos de sprites locales (.glyph, .pxs, .png), archivos de guardado/recuperación automático
- **Datos NO afectados:** ninguna red, ninguna nube, ninguna API remota, ninguna cuenta de usuario
- **Permisos:** acceso al sistema de archivos limitado a los directorios seleccionados por el usuario a través de los diálogos de archivos nativos de Tauri v2

El servidor MCP se ejecuta localmente a través de stdio sin ninguna salida de red. Consulte [SECURITY.md](SECURITY.md) para obtener información sobre cómo informar sobre vulnerabilidades.

## Licencia

[MIT](LICENSE)

---

Creado por <a href="https://mcp-tool-shop.github.io/">MCP Tool Shop</a>
