# DeepSeek Harness插件市场（DSH插件市场）

面向 DeepSeek Harness 用户的**纯前端插件展示网站**。展示插件、帮助了解用途与安装方法、提供安装命令和原始仓库链接。

本项目**不是**插件仓库、包管理器、Registry、CDN 或分发服务器 —— 插件文件始终由作者自己的 GitHub / Gitea / npm 地址提供，网站只保存描述性信息和安装说明。

> **免责声明:** 插件由各自的作者独立维护。本站展示不代表对插件安全性的保证，
> 安装前请自行检查插件的源代码、许可证与安全性。

---

## 技术栈

| 层 | 选型 |
| --- | --- |
| 框架 | Astro（静态构建 + Islands） |
| 语言 | TypeScript |
| 样式 | Tailwind CSS v4（CSS-first 配置）+ CSS Variables |
| 交互组件 | React（仅搜索 / 筛选 / 复制 / 主题切换） |
| 搜索 | Fuse.js（前端模糊搜索） |
| 图标 | Lucide |

## 快速开始

```bash
npm install
npm run dev        # 开发
npm run build      # 构建，输出 dist/
npm run preview    # 预览构建产物
npm run check      # 类型检查（astro check）
```

构建产物为纯静态文件（HTML / CSS / JS / 图片 / JSON），可直接部署到
Nginx、Cloudflare Pages、GitHub Pages 或任意静态 Web Server，无需任何后端。

## 页面

| 路由 | 说明 |
| --- | --- |
| `/` | 首页：Hero + 搜索 + 精选插件 + 全部插件（标签筛选 / 排序） |
| `/plugins` | 全部插件列表 |
| `/plugins/[slug]` | 插件详情页：介绍、标签、作者、安装命令（复制 + profile 替换）、仓库链接 |
| `/help` | 帮助：文档 / 资源 / 软件等辅助条目（`category: "help"`） |
| `/tags` | 全部标签 |
| `/tags/[tag]` | 某标签下的插件 |
| `/about` | 关于与免责声明 |
| `/404` | 自定义 404 |

## 目录结构

```text
public/                  # favicon、robots.txt
src/
├── components/          # Astro 静态组件 + React Islands
│   ├── Header.astro / Footer.astro / Hero.astro
│   ├── PluginCard.astro / PluginGrid.astro / TagBadge.astro / EmptyState.astro
│   ├── ThemeToggle.tsx / SearchBox.tsx / PluginFilter.tsx
│   ├── PluginExplorer.tsx   # 首页搜索 + 筛选 + 列表（唯一的大 Island）
│   └── InstallBox.tsx       # 详情页安装命令（profile 替换 + 复制）
├── data/plugins/        # 插件数据（唯一数据源），一个插件一个文件
├── layouts/             # BaseLayout（SEO/主题脚本）、PluginLayout
├── pages/               # 路由页面
├── styles/global.css    # Tailwind v4 主题、Light/Dark/System 色板
├── types/plugin.ts      # 插件数据模型
└── utils/               # 排序/标签、Fuse.js 搜索、安装命令工具
```

## 插件维护指南

> 贡献者与 AI 智能体请先阅读 [AGENTS.md](./AGENTS.md)，再按下面指南操作。

插件数据是纯 TypeScript 文件，所有改动都是"改源码 + 重新构建"，无需数据库、后台或 API。

### 编辑已有插件

1. 打开 `src/data/plugins/<slug>.ts`（例如 `open-design.ts`）。
2. 按需修改字段，保存。
3. 执行 `npm run build` 重新生成 `dist/`。

### 新增插件

1. 在 `src/data/plugins/` 下新建 `<slug>.ts`，导出一个 `Plugin` 对象（字段定义见 `src/types/plugin.ts`）：

```ts
import type { Plugin } from "@/types/plugin";

export const myPlugin: Plugin = {
  slug: "my-plugin",            // 唯一标识，决定 URL：/plugins/my-plugin
  name: "我的插件",             // 显示名称
  description: "一句话简介（显示在卡片上）",
  longDescription: "详细介绍（显示在详情页）",
  author: { name: "作者名", url: "https://github.com/xxx" },
  tags: ["Tool", "Developer"],  // 英文值；界面显示中文，见下方"标签映射"
  category: "tool",             // "tool"（默认，智能体工具）或 "help"（文档 / 资源 / 软件，收录到 /help）
  repository: "https://github.com/xxx/harness-my-plugin",
  homepage: "https://github.com/xxx/harness-my-plugin", // 可选
  documentation: "https://...",                          // 可选
  license: "MIT",               // 可选
  installMethods: [
    {
      name: "npm",
      description: "从 npm 仓库安装。",
      command: "dsh plugin --profile web add @example/my-plugin",
    },
  ],
  links: [],                    // 可选：附加链接
  featured: false,              // true 时进入首页"精选插件"
  deprecated: false,            // true 时显示"已弃用"提示
  example: true,                // UI mock 数据标记；真实插件请移除
};
```

2. 在 `src/data/plugins/index.ts` 的 `plugins` 数组中加入该插件。
3. `npm run build`。

### 删除插件

1. 从 `src/data/plugins/index.ts` 的 `plugins` 数组中移除该条目。
2. 删除（或归档）对应的 `<slug>.ts` 文件。
3. `npm run build`。

### 标签映射

插件的 `tags` 使用英文值（如 `Search`、`Memory`），用于 URL（`/tags/search`）与筛选匹配；
界面显示的中文来自 `src/utils/plugin.ts` 中的 `TAG_LABELS` 映射表。**新增插件用到新标签时，
请同步在该表中加入 `标签英文: "中文"` 条目**，否则界面会原样显示英文。

### 字段注意事项

- `slug` 一经发布请勿随意修改，否则会破坏已分享的链接与 SEO。
- 安装命令只是文本：网站只负责显示与复制，绝不执行；`--profile <name>` 部分会被详情页输入框实时替换。
- 外部链接必须使用 `https://`，所有外链均以新窗口打开（`noopener noreferrer`）。
- 不要添加 `downloadURL` / `mirrorURL` / `cdnURL` 等字段——市场不负责插件分发。
- UI 开发用的 mock 数据可加 `example: true`（卡片与详情页显示"示例"徽章）；真实插件不需要该字段。

## 安全与约束

- 安装命令仅为文本，网站只负责显示与复制，绝不自动执行。
- 所有外部链接均 `target="_blank" rel="noopener noreferrer"`，不做代理。
- 不渲染未经处理的 HTML（无 `dangerouslySetInnerHTML`）。
- 无账户、无数据库、无后端、无上传、无下载代理。

## 部署前

将 `astro.config.ts` 中的 `site` 替换为真实域名，并更新 `public/robots.txt`
中的 Sitemap 地址。

---

*DeepSeek Harness插件市场（DSH插件市场）— 极轻量、静态、快速、现代、适合开发者使用的 Harness 插件目录。*
