# DSH插件市场

<p align="center">
  面向 DeepSeek Harness 用户的开放插件目录。发现好用的扩展，快速了解能力，复制命令即可开始使用。
</p>

<p align="center">
  <a href="https://astro.build/"><img alt="Astro 7" src="https://img.shields.io/badge/Astro-7-BC52EE?logo=astro&logoColor=white"></a>
  <a href="https://www.typescriptlang.org/"><img alt="TypeScript 5" src="https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white"></a>
  <a href="https://tailwindcss.com/"><img alt="Tailwind CSS 4" src="https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white"></a>
  <a href="https://dshtool.com/plugins"><img alt="收录插件 300+" src="https://img.shields.io/badge/%E6%94%B6%E5%BD%95%E6%8F%92%E4%BB%B6-300%2B-14B8A6"></a>
  <a href="./LICENSE"><img alt="MIT License" src="https://img.shields.io/badge/License-MIT-22C55E.svg"></a>
</p>

<p align="center">
  <a href="https://dshtool.com/"><strong>在线浏览</strong></a>
  ·
  <a href="https://dshtool.com/plugins">全部插件</a>
  ·
  <a href="https://github.com/phil616/dsh-plugin-market/issues/new?template=add-plugin.yml">添加应用到市场</a>
</p>

DSH插件市场是一座轻量、开放、可核验的 DeepSeek Harness 插件索引。它把分散在不同仓库中的插件信息整理到一个清晰的入口，让用户用更短的路径完成搜索、比较、阅读说明和复制安装命令。

> [!IMPORTANT]
> 本项目不是插件仓库、包管理器、Registry、CDN 或分发服务器。网站不托管、不下载、不执行任何插件；插件文件与发布内容始终由原作者维护。

## 为什么使用 DSH插件市场

- **发现更高效**：集中浏览 300+ 个公开插件，支持名称、描述、标签和作者的前端模糊搜索。
- **信息更清楚**：统一展示用途、作者、标签、仓库、文档、许可证和安装方法。
- **安装更直接**：按 profile 生成安装命令，一键复制，但绝不在网页中自动执行。
- **来源可核验**：每个条目均指向原始公开仓库，重要信息可自行复查。
- **体验更轻快**：Astro 静态构建、React Islands、分页浏览，以及明暗主题支持。
- **部署更简单**：没有账户、数据库、后端或运行时 API，构建产物可直接托管。

## 功能概览

| 能力 | 说明 |
| --- | --- |
| 插件发现 | 精选推荐、全部列表、标签聚合与帮助资源 |
| 搜索筛选 | Fuse.js 前端模糊搜索、标签筛选、排序和固定分页 |
| 插件详情 | 简介、详细说明、作者、许可证、原仓库和附加链接 |
| 安装辅助 | profile 实时替换、安装命令复制，不执行任何命令 |
| 主题与适配 | 浅色、深色、跟随系统，兼顾桌面端与移动端 |
| 静态交付 | 无后端、无数据库、无追踪，可部署到常见静态平台 |

## 技术栈

| 层 | 选型 |
| --- | --- |
| 框架 | Astro 7（静态构建 + Islands） |
| 语言 | TypeScript 5 |
| 样式 | Tailwind CSS 4 + CSS Variables |
| 交互 | React 19 |
| 搜索 | Fuse.js |
| 图标 | Lucide |

## 本地开发

需要 Node.js 和 npm。

```bash
git clone https://github.com/phil616/dsh-plugin-market.git
cd dsh-plugin-market
npm install
npm run dev
```

开发服务器默认运行在 `http://localhost:4321`。

```bash
npm run check      # Astro / TypeScript 类型检查
npm run build      # 生产构建，输出到 dist/
npm run preview    # 本地预览生产构建
```

## 页面与数据流

| 路由 | 说明 |
| --- | --- |
| `/` | 搜索、精选插件、标签筛选、排序与分页 |
| `/plugins` | 全部插件列表 |
| `/plugins/[slug]` | 自动生成的插件详情页 |
| `/help` | 文档、资源和辅助软件 |
| `/tags`、`/tags/[tag]` | 标签索引与标签详情 |
| `/about` | 项目定位、安全边界与免责声明 |

插件数据只有一个来源：`src/data/plugins/` 下的 TypeScript 文件。页面、详情路由、搜索索引和标签均在构建时自动生成，不依赖数据库或远程 API。

```text
src/
├── components/          # Astro 组件与 React Islands
├── data/plugins/        # 插件数据，一个插件一个文件
├── layouts/             # 页面布局
├── pages/               # Astro 静态路由
├── styles/              # 全局主题与样式
├── types/plugin.ts      # Plugin 数据模型
└── utils/               # 搜索、排序、标签与安装命令工具
```

## 添加应用到市场

最简单的方式是填写专用的 [应用收录申请](https://github.com/phil616/dsh-plugin-market/issues/new?template=add-plugin.yml)。表单会引导你提供应用名称、公开仓库、作者、简介、分类、标签、安装命令、文档和许可证等必要信息。

也欢迎直接提交 Pull Request：

1. 阅读 [AGENTS.md](./AGENTS.md) 中的数据模型和硬性规则。
2. 在 `src/data/plugins/` 新建唯一、kebab-case 的 `<slug>.ts` 数据文件。
3. 在 `src/data/plugins/index.ts` 注册该条目；使用新标签时同步更新 `TAG_LABELS`。
4. 运行 `npm run check` 和 `npm run build`。
5. 提交 PR，并确保所有描述、链接和安装命令与原仓库一致。

真实插件不要添加 `example: true`。网站不接受插件二进制、镜像、下载代理或自动安装逻辑。

## 部署

```bash
npm run build
```

`dist/` 是完整静态产物，可部署到 Cloudflare Workers Static Assets、Cloudflare Pages、GitHub Pages、Nginx 或任意静态 Web Server。发布前请确认 `astro.config.ts` 中的 `site` 与 `public/robots.txt` 中的 Sitemap 均使用真实域名。

## 安全边界

- 安装命令只作为文本展示和复制，网页不会调用 shell 或自动执行命令。
- 所有外链使用 HTTPS，并以 `noopener noreferrer` 的新窗口方式打开。
- 不渲染未经处理的 HTML，不使用 iframe，不提供上传或下载代理。
- 收录仅表示信息可被展示，不构成对第三方插件安全性、可用性或持续维护的保证。

安装任何第三方插件前，请检查其源代码、许可证、安装脚本和所需权限。

## 数据与致谢

市场条目整理自插件作者的公开仓库，并参考 [Awesome DSH Plugin](https://github.com/awesome-dsh-plugin/awesome-dsh-plugin) 提供的社区索引。插件功能、版本和安装方式均以原始仓库为准。

## 许可证

项目源码采用 [MIT License](./LICENSE)。目录中收录的第三方插件仍分别适用其原作者声明的许可证。

---

<p align="center">发现插件，组合能力，让 DeepSeek Harness 更贴近你的工作流。</p>
