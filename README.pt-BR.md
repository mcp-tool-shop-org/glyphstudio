<p align="center">
  <a href="README.ja.md">日本語</a> | <a href="README.zh.md">中文</a> | <a href="README.es.md">Español</a> | <a href="README.fr.md">Français</a> | <a href="README.hi.md">हिन्दी</a> | <a href="README.it.md">Italiano</a> | <a href="README.md">English</a>
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

Um estúdio de ativos de pixel governado para imagens estáticas, animações, variantes, partes reutilizáveis e saída estruturada.

GlyphStudio é um aplicativo para desktop construído com **Tauri v2**, **React** e **Rust**. Ele é distribuído juntamente com um **servidor MCP** que expõe toda a superfície de edição de sprites para LLMs — mesma lógica de domínio, mesmos buffers de pixel, mesmo sistema de desfazer/refazer.

## O que você pode fazer

**Criar** — Desenhe arte em pixel com ferramentas determinísticas, camadas e controle de paleta.

**Animar** — Crie animações quadro a quadro com sobreposição de quadros, controle de tempo e ferramentas de qualidade de transição.

**Variante** — Crie variantes de ativos em documentos nomeados (direcional, pose) e variantes de paleta (famílias de cores). Visualize antes de confirmar.

**Reutilizar** — Promova seleções para partes reutilizáveis. Salve pacotes selecionados. Insira partes em diferentes projetos.

**Empacotar** — Exporte famílias de ativos em uma única etapa: base + variantes de documento + variantes de paleta, com nomes de arquivo contextuais.

**Comece rapidamente** — Comece a partir de modelos, pacotes ou receitas iniciais. A interface principal reflete os fluxos de trabalho que o estúdio oferece.

## Melhores fluxos de trabalho

### Sprite estático
Projeto em branco (32x32) → desenhe com lápis/preenchimento/borracha → espaço de trabalho da paleta → exporte como PNG.

### Loop animado
Projeto em branco (32x32, 4 quadros) → desenhe o primeiro quadro → duplique + edite → sobreposição de quadros para alinhamento → controle de tempo → exporte como GIF ou sequência de imagens.

### Família de variantes
Desenhe o ativo base → crie variantes de documento (por exemplo, andar para a esquerda, andar para a direita) → crie conjuntos de paleta (por exemplo, Fogo, Gelo) → visualize o mapeamento de paleta → exporte em pacote com nomes de arquivo `{name}-{variant}-{palette}.png`.

### Partes reutilizáveis
Desenhe uma forma recorrente → selecione → promova para parte → salve na biblioteca → insira em outros quadros/projetos. Salve partes e paletas selecionadas como um pacote para reutilização entre projetos.

### Início com modelo/pacote
ProjectHome → escolha um modelo (pronto para animação ou pronto para variantes) ou um pacote (kit de interface do usuário, coleção de paletas) → projeto de trabalho com a estrutura já carregada.

## Demonstração

Quatro projetos canônicos demonstram os fluxos de trabalho mais eficazes. Cada um é um arquivo de intercâmbio válido que você pode importar:

| Demonstração | Arquivo | O que ele demonstra |
|----------|------|----------------|
| Crystal Gem | [`showcase/still-sprite.interchange.json`](showcase/) | Criação de imagem estática, uso de paleta |
| Flickering Flame | [`showcase/loop-animation.interchange.json`](showcase/) | Animação de 4 quadros, temporização |
| Shield Variants | [`showcase/variant-family.interchange.json`](showcase/) | Base + variantes de paleta de Fogo/Gelo |
| Game UI Kit | [`showcase/pack-project.interchange.json`](showcase/) | Partes reutilizáveis (estrela, coração, moeda) |

Veja [`showcase/SHOWCASE.md`](showcase/SHOWCASE.md) para obter detalhes.

## Conceitos-chave

| Conceito | O que é | Onde está localizado |
|---------|-----------|----------------|
| **Palette Set** | Um conjunto nomeado de cores para recores | Nível do documento, comutável |
| **Document Variant** | Uma cópia da sequência de quadros (pose, direção) | Nível do documento, quadros independentes |
| **Part** | Um selo de pixel reutilizável promovido a partir de uma seleção | Biblioteca, entre projetos |
| **Pack** | Um pacote selecionado de conjuntos de paleta + partes | Biblioteca, importável/exportável |
| **Template** | Um modelo de início de projeto (tela, paleta, quadros) | Biblioteca, usado a partir de ProjectHome |
| **Bundle** | Uma exportação em uma única etapa da base + variantes + paletas | Fluxo de exportação |
| **Interchange** | Formato JSON para mover estruturas criadas entre projetos | Arquivos `.interchange.json` |

## Atalhos contextuais

GlyphStudio mostra atalhos relevantes com base no que você está fazendo. A barra é atualizada conforme o contexto muda.

| Contexto | Atalhos principais |
|---------|--------------|
| **Drawing** | `B` Lápis, `E` Borracha, `G` Preenchimento, `M` Seleção, `X` Trocar primeiro plano/fundo, `Ctrl+Z` Desfazer |
| **Selection active** | `Ctrl+C` Copiar, `Ctrl+X` Recortar, `Ctrl+V` Colar, `Del` Limpar, `Esc` Desselecionar |
| **Stamp mode** | `Click` Inserir selo, `Esc` Sair |
| **Animation** | `Ctrl+D` Duplicar quadro, `Space` Reproduzir/Parar, `Left/Right` Avançar quadros |
| **Library focused** | `Ctrl+F` Pesquisar, `Up/Down` Navegar, `Enter` Ativar |
| **Variant workflow** | `+ Variant` Criar sequência, `Toggle` Comparar sobreposição |
| **Palette preview** | `Apply` Confirmar mapeamento, `Cancel` Descartar |

## Pacotes

| Pacote | Descrição |
|---------|-------------|
| `apps/desktop` | Aplicativo de desktop Tauri v2 (React + Rust) |
| [`@glyphstudio/domain`](packages/domain/) | Tipos e contratos |
| [`@glyphstudio/api-contract`](packages/api-contract/) | Tipos de contrato IPC do Tauri |
| [`@glyphstudio/state`](packages/state/) | Gerenciamento de estado, operações de rasterização, histórico |
| [`@glyphstudio/mcp-sprite-server`](packages/mcp-sprite-server/) | Servidor MCP — 76 ferramentas, 6 recursos |

## Arquitetura

### Frontend (React + TypeScript)
- Armazenamentos Zustand organizados por domínio
- Renderizador de tela HTML
- Editor de sprite com buffers de pixel e composição alfa de propriedade do frontend
- Painel de biblioteca com índice unificado, pesquisa, fixação e navegação por teclado

### Backend (Rust)
- Buffers de pixel e composição de camadas autoritários
- Transações de traçado com desfazer/refazer
- Persistência do projeto, salvamento automático, recuperação de falhas
- Pipelines de exportação (PNG, folha de sprite, GIF animado, pacote)
- Mecanismo de composição de cena com câmera e reprodução

### Servidor MCP (Node.js)
- Armazenamento Zustand sem estado por sessão (sem React, sem navegador)
- 76 ferramentas registradas via `@modelcontextprotocol/sdk`
- Mesmo código `@glyphstudio/domain` e `@glyphstudio/state` do aplicativo de desktop
- Executa via stdio — funciona com Claude Desktop, Claude Code ou qualquer cliente MCP

Veja o [README do servidor MCP](packages/mcp-sprite-server/README.md) para o inventário completo de ferramentas.

## Estrutura do monorepos

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

## Executando o aplicativo

### Pré-requisitos
- Node.js 20+
- pnpm 9+
- Rust 1.75+ (via [rustup](https://rustup.rs/))
- Pré-requisitos do Tauri v2 para sua plataforma

### Instalar

```bash
pnpm install
```

### Executar aplicativo para desktop

```bash
pnpm dev
```

### Executar o servidor MCP (autônomo)

```bash
npx tsx packages/mcp-sprite-server/src/cli.ts
```

### Verificação de tipo

```bash
pnpm typecheck
```

### Teste

```bash
pnpm test
```

### Verificação Rust

```bash
cd apps/desktop/src-tauri
cargo check
cargo test
```

## Suporte à exportação

| Destino | Formatos |
|--------|---------|
| **Single frame** | PNG (camadas visíveis combinadas) |
| **Animation** | GIF animado, sequência PNG, tira de sprites |
| **Sheet** | Folha de sprites com manifesto (tempo de execução nativo + genérico) |
| **Bundle** | Pasta ou arquivo zip com imagens, manifestos e visualização |
| **Variant family** | Base + variantes de documento + variantes de paleta com nomes de arquivo contextuais |
| **MCP Server** | Base64-encoded PNG, folha, GIF e metadados JSON |

As exportações usam apenas camadas visíveis combinadas. As sobreposições do editor (camada de cebola, estado de reprodução) nunca são incluídas na saída.

## Filosofia do produto

1. **Edição determinística** — Cada mutação de pixel é legal, pode ser inspecionada e revertida.
2. **IA subordinada** — A automação auxilia o fluxo de trabalho sem substituir o controle criativo.
3. **Estrutura com foco na animação** — Quadros, linha do tempo, camada de cebola e reprodução são conceitos centrais, não elementos secundários.
4. **Estado confiável** — Salvar/carregar, salvamento automático, desfazer/refazer e migração são tratados como recursos do produto.
5. **Reutilização honesta** — As partes são marcadas (pixels confirmados), não instâncias vinculadas falsas. As variantes são ramificações, não um estado compartilhado oculto. Visualização antes da confirmação.

## Objetivos não definidos

GlyphStudio não tem como objetivo ser:

- Um editor de imagens genérico
- Um aplicativo simples com foco no navegador
- Um wrapper de prompt de IA que tenta adivinhar a arte
- Uma tela confusa onde o estado do frontend e a realidade do backend se separam
- Um sistema de rigging/símbolos falso que finge ser uma ligação

## Segurança

GlyphStudio é um aplicativo **apenas para desktop**. Sem solicitações de rede, sem telemetria, sem segredos.

- **Dados acessados:** arquivos de sprite locais (.glyph, .pxs, .png), arquivos de salvamento/recuperação automático
- **Dados NÃO acessados:** nenhuma rede, nenhuma nuvem, nenhuma API remota, nenhuma conta de usuário
- **Permissões:** acesso ao sistema de arquivos restrito a diretórios selecionados pelo usuário por meio de diálogos de arquivo nativos Tauri v2

O servidor MCP é executado localmente via stdio, sem saída de rede. Consulte [SECURITY.md](SECURITY.md) para relatar vulnerabilidades.

## Licença

[MIT](LICENSE)

---

Criado por <a href="https://mcp-tool-shop.github.io/">MCP Tool Shop</a>
