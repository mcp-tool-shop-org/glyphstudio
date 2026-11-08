<p align="center">
  <a href="README.ja.md">日本語</a> | <a href="README.md">English</a> | <a href="README.es.md">Español</a> | <a href="README.fr.md">Français</a> | <a href="README.hi.md">हिन्दी</a> | <a href="README.it.md">Italiano</a> | <a href="README.pt-BR.md">Português (BR)</a>
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

一个用于静态图像、动态图像、变体、可重用部件和结构化输出的受控像素素材工作室。

GlyphStudio 是一款使用 **Tauri v2**、**React** 和 **Rust** 构建的桌面应用程序。它与一个 **MCP 服务器** 一起提供，该服务器将完整的精灵编辑界面暴露给 LLM（大型语言模型）——相同的领域逻辑、相同的像素缓冲区、相同的撤销/重做功能。

## 您可以做什么

**创建**——使用确定性工具、图层和调色板控制来绘制像素艺术。

**动画**——使用逐帧动画、关键帧、时间保持和高质量过渡工具来构建逐帧动画。

**变体**——将素材分叉为命名的文档变体（方向、姿势）和调色板变体（重新着色系列）。在提交之前进行预览。

**重用**——将选定的内容提升为可重用的部件。保存策划好的素材包。在多个项目中应用这些部件。

**打包**——一次性导出素材系列：基本素材 + 文档变体 + 调色板变体，并带有上下文文件名。

**快速开始**——从模板、素材包或起始配方开始。主界面反映了工作室支持的工作流程。

## 最佳工作流程

### 静态精灵
空白项目（32x32）→ 使用铅笔/填充/橡皮擦进行绘制 → 调色板工作区 → 导出 PNG。

### 动画循环
空白项目（32x32，4 帧）→ 绘制第一帧 → 复制 + 编辑 → 使用“洋葱皮”功能进行对齐 → 时间保持 → 导出 GIF 或连续帧。

### 变体系列
绘制基本素材 → 分叉文档变体（例如，向左走、向右走）→ 创建调色板集（例如，火焰、冰）→ 预览调色板重新映射 → 使用 `{name}-{variant}-{palette}.png` 文件名进行打包导出。

### 可重用部件
绘制一个重复出现的形状 → 选择 → 提升为部件 → 保存到库中 → 应用到其他帧/项目中。将策划好的部件 + 调色板保存为素材包，以便在多个项目中重用。

### 模板/素材包开始
ProjectHome → 选择模板（已准备好用于动画或变体的模板）或素材包（UI 工具包、调色板集合）→ 加载了结构的已工作项目。

## 展示

四个规范项目展示了最强大的工作流程。每个项目都是一个有效的可互换文件，您可以导入它：

| 展示 | 文件 | 它证明了什么 |
|----------|------|----------------|
| 水晶宝石 | [`showcase/still-sprite.interchange.json`](showcase/) | 静态图像创建、调色板使用 |
| 闪烁的火焰 | [`showcase/loop-animation.interchange.json`](showcase/) | 4 帧动画、时间控制 |
| 盾牌变体 | [`showcase/variant-family.interchange.json`](showcase/) | 基本素材 + 火焰/冰调色板变体 |
| 游戏 UI 工具包 | [`showcase/pack-project.interchange.json`](showcase/) | 可重用部件（星星、爱心、硬币） |

有关详细信息，请参阅 [`showcase/SHOWCASE.md`](showcase/SHOWCASE.md)。

## 关键概念

| 概念 | 它是什么 | 它位于哪里 |
|---------|-----------|----------------|
| **Palette Set** | 用于重新着色的命名颜色集合 | 文档级别，可切换 |
| **Document Variant** | 帧序列的分叉（姿势、方向） | 文档级别，独立的帧 |
| **Part** | 从选择中提升的可重用像素图章 | 库，跨项目 |
| **Pack** | 策划好的调色板集 + 部件 | 库，可导入/导出 |
| **Template** | 项目启动蓝图（画布、调色板、帧） | 库，从 ProjectHome 使用 |
| **Bundle** | 一次性导出基本素材 + 变体 + 调色板 | 导出流程 |
| **Interchange** | 用于在项目之间移动已创建结构的 JSON 格式 | `.interchange.json` 文件 |

## 上下文快捷键

GlyphStudio 根据您正在执行的操作显示相关的快捷键。上下文发生变化时，快捷键列表也会更新。

| 上下文 | 主要快捷键 |
|---------|--------------|
| **Drawing** | `B` 铅笔，`E` 橡皮擦，`G` 填充，`M` 选区，`X` 交换前景色/背景色，`Ctrl+Z` 撤销 |
| **Selection active** | `Ctrl+C` 复制，`Ctrl+X` 剪切，`Ctrl+V` 粘贴，`Del` 清除，`Esc` 取消选择 |
| **Stamp mode** | `Click` 放置图章，`Esc` 退出 |
| **Animation** | `Ctrl+D` 复制帧，`Space` 播放/停止，`Left/Right` 逐帧播放 |
| **Library focused** | `Ctrl+F` 搜索，`Up/Down` 导航，`Enter` 激活 |
| **Variant workflow** | `+ Variant` 分叉序列，`Toggle` 比较叠加 |
| **Palette preview** | `Apply` 提交重新映射，`Cancel` 丢弃 |

## 软件包

| 软件包 | 描述 |
|---------|-------------|
| `apps/desktop` | Tauri v2 桌面应用程序（React + Rust） |
| [`@glyphstudio/domain`](packages/domain/) | 类型和契约 |
| [`@glyphstudio/api-contract`](packages/api-contract/) | Tauri IPC 契约类型 |
| [`@glyphstudio/state`](packages/state/) | 状态管理、光栅操作、历史记录 |
| [`@glyphstudio/mcp-sprite-server`](packages/mcp-sprite-server/) | MCP 服务器 — 76 个工具，6 个资源 |

## 架构

### 前端（React + TypeScript）
- 按照领域组织的状态管理存储
- HTML 画布渲染器
- 具有前端拥有的像素缓冲区和 Alpha 混合的精灵编辑器
- 具有统一索引、搜索、固定和键盘导航的库面板

### 后端（Rust）
- 权威的像素缓冲区和图层混合
- 带有撤销/重做的笔画事务
- 项目持久性、自动保存、崩溃恢复
- 导出流水线（PNG、精灵图、动画 GIF、打包）
- 具有相机和播放功能的场景合成引擎

### MCP 服务器（Node.js）
- 每个会话的无头 Zustand 存储（没有 React，没有浏览器）
- 通过 `@modelcontextprotocol/sdk` 注册的 76 个工具
- 与桌面应用程序相同的 `@glyphstudio/domain` 和 `@glyphstudio/state` 代码
- 通过标准输入/输出运行 — 可与 Claude Desktop、Claude Code 或任何 MCP 客户端一起使用

有关完整工具清单，请参阅 [MCP 服务器 README](packages/mcp-sprite-server/README.md)。

## 单仓库结构

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

## 运行应用程序

### 先决条件
- Node.js 20+
- pnpm 9+
- Rust 1.75+（通过 [rustup](https://rustup.rs/））
- 适用于您的平台的 Tauri v2 先决条件

### 安装

```bash
pnpm install
```

### 运行桌面应用程序

```bash
pnpm dev
```

### 运行 MCP 服务器（独立模式）

```bash
npx tsx packages/mcp-sprite-server/src/cli.ts
```

### 类型检查

```bash
pnpm typecheck
```

### 测试

```bash
pnpm test
```

### Rust 检查

```bash
cd apps/desktop/src-tauri
cargo check
cargo test
```

## 导出支持

| 目标 | 格式 |
|--------|---------|
| **Single frame** | PNG（合成的可见图层） |
| **Animation** | 动画 GIF、PNG 序列、精灵图 |
| **Sheet** | 带有清单的精灵图（原生 + 通用运行时） |
| **Bundle** | 包含图像、清单和预览的文件夹或 ZIP 文件 |
| **Variant family** | 基本图 + 文档变体 + 带有上下文文件名的调色板变体 |
| **MCP Server** | Base64-encoded PNG、精灵图、GIF 和元数据 JSON |

导出时仅使用合成的可见图层。编辑器叠加层（洋葱皮、播放状态）绝不会包含在输出中。

## 产品理念

1. **确定性编辑**——每个像素的更改都是合法的、可检查的且可逆的。
2. **辅助型 AI**——自动化辅助工作流程，但不取代创意控制。
3. **动画优先的结构**——帧、时间轴、洋葱皮和播放是核心概念，而不是事后添加。
4. **可靠的状态**——保存/加载、自动保存、撤销/重做和迁移都被视为产品功能。
5. **诚实的重用**——部件被标记（提交的像素），而不是虚假的链接实例。变体是分支，而不是隐藏的共享状态。在提交之前进行预览。

## 非目标

GlyphStudio 的目标不是：

- 通用图像编辑器
- 首先为浏览器设计的玩具应用程序
- 一个 AI 提示包装器，用于猜测艺术作品
- 一个前端状态和后端事实逐渐分离的模糊画布
- 一个伪装成链接的虚假绑定/符号系统

## 安全性

GlyphStudio 是一款**仅限桌面**应用程序。没有网络请求，没有遥测，没有秘密。

- **涉及的数据：**本地精灵文件（.glyph、.pxs、.png）、自动保存/恢复文件
- **不涉及的数据：**没有网络、没有云、没有远程 API、没有用户帐户
- **权限：**文件系统访问权限限定在用户选择的目录中，通过 Tauri v2 原生文件对话框实现

MCP 服务器在本地通过 stdio 运行，没有网络输出。有关漏洞报告，请参阅 [SECURITY.md](SECURITY.md)。

## 许可证

[MIT](LICENSE)

---

由 <a href="https://mcp-tool-shop.github.io/">MCP Tool Shop</a> 构建
