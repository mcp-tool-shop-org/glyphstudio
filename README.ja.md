<p align="center">
  <a href="README.md">English</a> | <a href="README.zh.md">中文</a> | <a href="README.es.md">Español</a> | <a href="README.fr.md">Français</a> | <a href="README.hi.md">हिन्दी</a> | <a href="README.it.md">Italiano</a> | <a href="README.pt-BR.md">Português (BR)</a>
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

静止画、アニメーション、バリエーション、再利用可能なパーツ、構造化された出力に対応した、管理されたピクセルアセットスタジオ。

GlyphStudioは、**Tauri v2**、**React**、**Rust**を使用して構築されたデスクトップアプリケーションです。大規模言語モデル（LLM）に完全なスプライト編集機能を提供する**MCPサーバー**と連携して動作します。同じドメインロジック、同じピクセルバッファー、同じアンドゥ/リドゥ機能を使用します。

## できること

**作成**：決定的なツール、レイヤー、パレットコントロールを使用してピクセルアートを描画します。

**アニメーション**：オニオンスキン、タイミング調整、高品質なつなぎ目ツールを使用して、フレームごとにアニメーションを作成します。

**バリエーション**：アセットを名前付きのドキュメントバリエーション（方向、ポーズ）やパレットバリエーション（色のバリエーション）に分岐させます。コミット前にプレビューできます。

**再利用**：選択したものを再利用可能なパーツとして登録します。厳選されたパーツを保存し、プロジェクト間でパーツをスタンプとして使用します。

**バンドル**：ベース、ドキュメントバリエーション、パレットバリエーションを含むアセットファミリーを、コンテキストに応じたファイル名で一括エクスポートします。

**迅速な開始**：テンプレート、パーツ、またはスターターレシピから開始します。フロントエンドは、スタジオがサポートするワークフローを反映しています。

## 最適なワークフロー

### 静止スプライト
空白のプロジェクト（32x32）→鉛筆/塗りつぶし/消しゴムで描画→パレットワークスペース→PNGとしてエクスポート。

### アニメーションループ
空白のプロジェクト（32x32、4フレーム）→1フレーム目を描画→複製と編集→オニオンスキンで位置合わせ→タイミング調整→GIFまたはストリップとしてエクスポート。

### バリエーションファミリー
ベースアセットを描画→ドキュメントバリエーション（例：左向き、右向き）を分岐→パレットセット（例：火、氷）を作成→パレットのリマップをプレビュー→`{name}-{variant}-{palette}.png`ファイル名でバンドルエクスポート。

### 再利用可能なパーツ
繰り返し使用する形状を描画→選択→パーツとして登録→ライブラリに保存→他のフレーム/プロジェクトにスタンプとして使用。厳選されたパーツとパレットをパックとして保存し、プロジェクト間で再利用します。

### テンプレート/パックからの開始
ProjectHome→テンプレート（アニメーション用またはバリエーション用）またはパック（UIキット、パレットコレクション）を選択→構造が事前に読み込まれた状態でプロジェクトを開始。

## ショーケース

4つの代表的なプロジェクトは、最も効果的なワークフローを示しています。それぞれが有効な交換ファイルであり、インポートできます。

| ショーケース | ファイル | それが証明するもの |
|----------|------|----------------|
| クリスタルジェム | [`showcase/still-sprite.interchange.json`](showcase/) | 静止画の作成、パレットの使用 |
| ちらつく炎 | [`showcase/loop-animation.interchange.json`](showcase/) | 4フレームのアニメーション、タイミング |
| シールドバリエーション | [`showcase/variant-family.interchange.json`](showcase/) | ベース + 火/氷のパレットバリエーション |
| ゲームUIキット | [`showcase/pack-project.interchange.json`](showcase/) | 再利用可能なパーツ（星、ハート、コイン） |

詳細は[`showcase/SHOWCASE.md`](showcase/SHOWCASE.md)を参照してください。

## 主要な概念

| 概念 | その内容 | 存在する場所 |
|---------|-----------|----------------|
| **Palette Set** | 色の再着色に使用する名前付きのセット | ドキュメントレベル、切り替え可能 |
| **Document Variant** | フレームシーケンスの分岐（ポーズ、方向） | ドキュメントレベル、独立したフレーム |
| **Part** | 選択から登録された、再利用可能なピクセルスタンプ | ライブラリ、プロジェクト間での再利用 |
| **Pack** | 厳選されたパレットセットとパーツのバンドル | ライブラリ、インポート/エクスポート可能 |
| **Template** | プロジェクト開始のブループリント（キャンバス、パレット、フレーム） | ライブラリ、ProjectHomeから使用 |
| **Bundle** | ベース + バリエーション + パレットの一括エクスポート | エクスポートフロー |
| **Interchange** | プロジェクト間で作成された構造を移動するためのJSON形式 | `.interchange.json`ファイル |

## コンテキストに応じたショートカット

GlyphStudioは、現在実行している操作に基づいて、関連するショートカットを表示します。コンテキストが変化すると、表示が更新されます。

| コンテキスト | 主要なショートカット |
|---------|--------------|
| **Drawing** | `B` 鉛筆、`E` 消しゴム、`G` 塗りつぶし、`M` マーカー、`X` 前景色/背景色の切り替え、`Ctrl+Z` アンドゥ |
| **Selection active** | `Ctrl+C` コピー、`Ctrl+X` 切り取り、`Ctrl+V` 貼り付け、`Del` クリア、`Esc` 選択解除 |
| **Stamp mode** | `Click` スタンプの配置、`Esc` 終了 |
| **Animation** | `Ctrl+D` フレームの複製、`Space` 再生/停止、`Left/Right` フレームのステップ実行 |
| **Library focused** | `Ctrl+F` 検索、`Up/Down` ナビゲート、`Enter` アクティブ化 |
| **Variant workflow** | `+ Variant` シーケンスの分岐、`Toggle` オーバーレイ比較 |
| **Palette preview** | `Apply` リマップのコミット、`Cancel` 破棄 |

## パッケージ

| パッケージ | 説明 |
|---------|-------------|
| `apps/desktop` | Tauri v2 デスクトップアプリケーション（React + Rust） |
| [`@glyphstudio/domain`](packages/domain/) | 型とコントラクト |
| [`@glyphstudio/api-contract`](packages/api-contract/) | Tauri IPCコントラクト型 |
| [`@glyphstudio/state`](packages/state/) | 状態管理、ラスター演算、履歴 |
| [`@glyphstudio/mcp-sprite-server`](packages/mcp-sprite-server/) | MCPサーバー — 76のツール、6つのリソース |

## アーキテクチャ

### フロントエンド（React + TypeScript）
- ドメインごとに整理されたZustandストア
- HTMLキャンバスレンダラー
- フロントエンドで所有するピクセルバッファーとアルファ合成を備えたスプライトエディター
- 統合されたインデックス、検索、ピン留め、キーボードナビゲーションを備えたライブラリパネル

### バックエンド（Rust）
- 権限のあるピクセルバッファーとレイヤー合成
- アンドゥ/リドゥ機能付きのストロークトランザクション
- プロジェクトの永続化、自動保存、クラッシュからの復旧
- エクスポートパイプライン（PNG、スプライトシート、アニメーションGIF、バンドル）
- カメラと再生を備えたシーン合成エンジン

### MCPサーバー（Node.js）
- セッションごとにヘッドレスのZustandストア（Reactなし、ブラウザなし）
- `@modelcontextprotocol/sdk`で登録された76のツール
- デスクトップアプリケーションと同じ`@glyphstudio/domain`および`@glyphstudio/state`コード
- stdio経由で実行 — Claude Desktop、Claude Code、または任意のMCPクライアントで使用可能

完全なツールリストについては、[MCPサーバーのREADME](packages/mcp-sprite-server/README.md)を参照してください。

## モノリポジトリ構造

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

## アプリケーションの実行

### 前提条件
- Node.js 20+
- pnpm 9+
- Rust 1.75+（[rustup](https://rustup.rs/)経由）
- プラットフォームに応じたTauri v2の前提条件

### インストール

```bash
pnpm install
```

### デスクトップアプリケーションの実行

```bash
pnpm dev
```

### MCPサーバー（スタンドアロン）を実行

```bash
npx tsx packages/mcp-sprite-server/src/cli.ts
```

### 型チェック

```bash
pnpm typecheck
```

### テスト

```bash
pnpm test
```

### Rustチェック

```bash
cd apps/desktop/src-tauri
cargo check
cargo test
```

## エクスポート機能

| ターゲット | 形式 |
|--------|---------|
| **Single frame** | PNG（合成された表示レイヤー） |
| **Animation** | アニメーションGIF、PNGシーケンス、スプライトストリップ |
| **Sheet** | マニフェストを含むスプライトシート（ネイティブ + ジェネリックランタイム） |
| **Bundle** | 画像、マニフェスト、プレビューを含むフォルダーまたはZIPファイル |
| **Variant family** | 基本 + ドキュメントバリアント + コンテキストに応じたファイル名を持つパレットバリアント |
| **MCP Server** | Base64-encoded PNG、シート、GIF、およびメタデータJSON |

エクスポートでは、合成された表示レイヤーのみが使用されます。エディターのオーバーレイ（オニオンスキン、再生状態）は、出力に含まれません。

## 製品理念

1. **決定的な編集** — すべてのピクセルの変更は、合法であり、検査可能であり、元に戻すことができます。
2. **従属的なAI** — 自動化は、クリエイティブな制御を置き換えることなく、ワークフローを支援します。
3. **アニメーションを重視した構造** — フレーム、タイムライン、オニオンスキン、再生は、主要な概念であり、後から追加されるものではありません。
4. **信頼できる状態** — 保存/読み込み、自動保存、元に戻す/やり直し、移行は、製品機能として扱われます。
5. **正直な再利用** — パーツは、偽のリンクされたインスタンスではなく、スタンプ（コミットされたピクセル）として扱われます。バリアントは、隠された共有状態ではなく、フォークです。コミット前にプレビューします。

## 非目標

GlyphStudioは、以下のようにならないことを目指します。

- 汎用的な画像エディター
- ブラウザを重視したおもちゃのようなアプリケーション
- 芸術を推測するAIプロンプトラッパー
- フロントエンドの状態とバックエンドの真実が乖離する、曖昧なキャンバス
- リンクであるかのように装った、偽の rigging/シンボルシステム

## セキュリティ

GlyphStudioは、**デスクトップ専用**アプリケーションです。ネットワークリクエスト、テレメトリ、秘密情報は一切ありません。

- **アクセスされるデータ:** ローカルのスプライトファイル（.glyph、.pxs、.png）、自動保存/復元ファイル
- **アクセスされないデータ:** ネットワーク、クラウド、リモートAPI、ユーザーアカウント
- **権限:** ファイルシステムへのアクセスは、Tauri v2のネイティブファイルダイアログを介して、ユーザーが選択したディレクトリに限定されます。

MCPサーバーは、ネットワークを介さずに、ローカルのstdio上で実行されます。脆弱性の報告については、[SECURITY.md](SECURITY.md)を参照してください。

## ライセンス

[MIT](LICENSE)

---

<a href="https://mcp-tool-shop.github.io/">MCP Tool Shop</a>によって作成
