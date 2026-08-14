# AGENTS.md

> 本文件面向 AI 编码智能体（Codex / Claude Code / Cursor 等）与人工贡献者，
> 说明在本仓库中**新增一个插件**的标准流程与硬性规则。其他任务（改样式、
> 修 bug 等）请先阅读 README.md 与相关源码。

## 1. 项目概况

- **项目**：DeepSeek Harness插件市场（DSH插件市场）—— Harness 插件的纯前端展示网站。
- **核心定位**：只做发现、浏览、搜索、筛选、介绍、链接与安装命令复制；**不托管、不分发、不执行**任何插件。
- **技术栈**：Astro（静态构建）+ TypeScript + Tailwind CSS v4 + React Islands + Fuse.js + Lucide。
- **运行方式**：纯静态站点，无后端、无数据库、无 API。
- **插件数据**：不是数据库，而是 `src/data/plugins/` 下的 TypeScript 文件——这是整个项目的唯一数据源。

## 2. 常用命令

```bash
npm install        # 安装依赖
npm run dev        # 本地开发（http://localhost:4321）
npm run build      # 构建，输出 dist/
npm run preview    # 预览构建产物
npm run check      # 类型检查（astro check）
```

> `dist/` 与 `node_modules/` 在 .gitignore 中，禁止提交。

## 3. 目录速览

| 路径 | 用途 |
| --- | --- |
| `src/data/plugins/` | 插件数据（唯一数据源），一个插件一个文件 |
| `src/data/plugins/index.ts` | 插件注册表：`plugins` 数组 |
| `src/types/plugin.ts` | `Plugin` 类型定义——所有插件数据必须严格遵守 |
| `src/utils/plugin.ts` | 排序/标签工具 + `TAG_LABELS`（标签英文→中文显示映射） |
| `src/pages/plugins/[slug].astro` | 插件详情页（自动生成，**无需改动**） |
| `src/pages/help.astro` | 帮助页面：自动列出 `category: "help"` 的条目（文档 / 资源 / 软件） |
| `src/components/PluginExplorer.tsx` | 首页搜索/筛选/列表（React Island，**无需改动**） |

> 新增插件**不需要**修改任何页面或组件：详情页、标签页、帮助页（`category: "help"`
> 的条目）、搜索索引均由 `src/data/plugins/` 自动生成。

## 4. 任务：新增一个插件

### 步骤 1：创建数据文件

在 `src/data/plugins/` 新建 `<slug>.ts`，按下面模板填写：

```ts
import type { Plugin } from "@/types/plugin";

export const myPlugin: Plugin = {
  slug: "my-plugin",            // 唯一标识，决定 URL：/plugins/my-plugin
  name: "我的插件",             // 显示名称（中文）
  description: "一句话简介（显示在卡片上）",
  longDescription: "详细介绍（显示在详情页）",
  author: { name: "作者名", url: "https://github.com/xxx" },
  tags: ["Tool", "Developer"],  // 英文值，见第 5 节"标签映射"
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
  example: true,                // mock 数据标记；真实插件请移除
};
```

### 步骤 2：注册

在 `src/data/plugins/index.ts` 中导入并追加到 `plugins` 数组：

```ts
import { myPlugin } from "./my-plugin";
// ...
export const plugins: Plugin[] = [ /* 已有插件 */, myPlugin ];
```

### 步骤 3：标签映射（仅当使用新标签时）

已收录的标签映射：`Search` `Web` `Tool` `Git` `Developer` `Automation` `Memory`
`AI` `Browser` `Files` `Database` `HTTP` `MCP` `Integrations` `Docker`
`Design` `UI` `Skill` `Persona` `Theme` `Session` `Notification` `Model`
`Development` `Fun`。

如果插件使用了上述之外的标签，必须在 `src/utils/plugin.ts` 的 `TAG_LABELS`
中补一行，否则界面会显示英文：

```ts
Security: "安全",
```

### 步骤 4：验证

```bash
npm run check   # 必须 0 errors
npm run build   # 必须成功，且生成 /plugins/<slug>/index.html
npm run dev     # 抽查：首页能搜到、详情页可打开、安装命令可复制
```

## 5. 硬性规则（违反会导致 PR 被拒）

1. **数据模型**：必须符合 `Plugin` 接口；**禁止**添加 `downloadURL` / `mirrorURL` / `cdnURL` / `packageFile` / `binaryURL` 等分发类字段。
2. **slug**：必须唯一、kebab-case、与文件名一致；一旦发布不可修改（会破坏链接与 SEO）。
3. **链接**：所有外部 URL 必须为 `https://`；禁止 `javascript:` / `data:` / `file:`。
4. **安装命令只是文本**：只负责显示与复制，禁止任何自动执行、shell 调用、自定义协议唤起等实现。
5. **无后端**：禁止新增 server / backend / api / database 目录、路由或依赖。
6. **标签**：`tags` 永远使用英文值；新标签必须同步更新 `TAG_LABELS`。
7. **界面文案**：全站使用简体中文，不要引入英文界面文案（技术名词除外）。
8. **安全**：禁止 `dangerouslySetInnerHTML`、iframe 或未经处理的 HTML 注入。
9. **外链**：保持 `target="_blank" rel="noopener noreferrer"`（组件已内置，不要覆盖）。
10. **示例标记**：mock 数据保留 `example: true`（界面显示"示例"徽章）；真实插件移除该字段。
11. **文件编码**：UTF-8；中文标点使用全角（复制英文模板时常见遗漏）。
12. **改动范围**：只修改与本次插件相关的文件（新数据文件、`index.ts`、`TAG_LABELS`）；不要提交 `dist/`、`node_modules/` 或无关的格式化改动。

## 6. PR 提交前自检清单

- [ ] `npm run check` 通过（0 errors）
- [ ] `npm run build` 通过，`/plugins/<slug>/` 已生成
- [ ] 首页搜索（中英文关键词，如插件名与描述关键词）能命中新插件
- [ ] 详情页正常：介绍 / 标签 / 作者 / 仓库链接 / 安装命令
- [ ] 安装命令的 `--profile` 输入可实时替换，复制按钮可用
- [ ] 新标签已加入 `TAG_LABELS`，界面显示中文
- [ ] 未引入后端、数据库、分发相关代码或字段
- [ ] Commit message 简洁说明本次改动（如 `feat: add my-plugin listing`）
