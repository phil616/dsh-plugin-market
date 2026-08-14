# Harness 插件市场纯前端项目技术方案

## 1. 项目目标

构建一个面向 Harness 用户的 **纯前端插件展示网站**。

网站的核心作用只有三个：

1. 展示目前有哪些 Harness 插件。
2. 帮助用户了解每个插件的用途、作者、标签、使用方法等信息。
3. 向用户提供安装命令和原始项目仓库链接。

本项目**不是插件仓库、不是包管理器、不是 Registry、不是 CDN，也不是插件分发服务器**。

插件实际文件始终由插件作者自己的 GitHub、Gitea、npm 或其他地址提供。

网站只保存插件的**描述性信息和安装说明**。

整体关系：

```text
用户
 │
 ▼
Harness Plugin Market
 │
 ├── 查看插件
 ├── 搜索插件
 ├── 按标签筛选
 ├── 查看插件介绍
 ├── 复制安装命令
 │
 └── 点击原始仓库
          │
          ▼
   GitHub / Gitea / npm / 其他来源
```

网站本身不参与插件下载过程。

---

# 2. 项目基本原则

项目必须遵循以下原则。

## 2.1 纯静态网站

最终构建结果必须为：

```text
HTML
CSS
JavaScript
图片
字体
JSON
```

不得要求服务器运行：

```text
Node.js
Go
Python
PHP
Java
数据库
Redis
```

网站构建完成以后，可以直接部署到：

```text
Nginx
OpenResty
Cloudflare Pages
GitHub Pages
对象存储静态网站
任意静态 Web Server
```

---

## 2.2 不提供插件托管

禁止实现：

```text
插件上传
插件下载
插件二进制代理
npm mirror
GitHub proxy
对象存储插件
CDN 插件分发
```

例如某插件来自：

```text
https://github.com/example/harness-search
```

网站只展示：

```text
Repository:
https://github.com/example/harness-search
```

点击后直接跳转原始地址。

---

## 2.3 不实现账户系统

第一阶段不需要：

```text
用户注册
用户登录
作者登录
管理员后台
OAuth
用户权限
数据库
评论
评分账户
收藏同步
```

所有内容直接随项目源码维护。

---

# 3. 推荐技术栈

采用：

```text
Astro
TypeScript
Tailwind CSS
React
Lucide Icons
Fuse.js
```

其中各组件职责如下：

```text
Astro
├── 页面生成
├── 路由
├── 静态构建
├── SEO
└── 内容组织

TypeScript
├── 类型定义
├── 插件数据
└── 前端逻辑

Tailwind CSS
└── UI 样式系统

React
└── 复杂交互组件

Fuse.js
└── 前端模糊搜索

Lucide
└── 图标
```

---

# 4. 为什么使用 Astro

本项目本质上是：

> 内容展示网站，而不是复杂 Web Application。

页面绝大多数内容都是：

```text
插件名称
插件介绍
作者
标签
安装方法
GitHub 地址
文档
```

因此 Astro 比完整 React SPA 更合适。

Astro 可以在构建阶段直接生成：

```text
/index.html

/plugins/example/index.html

/plugins/web-search/index.html

/tags/search/index.html
```

访问插件详情页时，不需要浏览器执行大型 SPA 才能显示内容。

优点：

- 首屏加载快
- JavaScript 少
- SEO 友好
- 页面分享友好
- 可以直接部署为静态文件
- 非常适合大量详情页
- 仍然可以局部使用 React

采用 Astro Islands 思路：

```text
静态页面
│
├── Header                 Astro
├── Plugin Card            Astro
├── Plugin Detail          Astro
├── Footer                 Astro
│
├── Search                 React
├── Tag Filter             React
└── Copy Install Command   React
```

只有真正需要交互的组件才向浏览器发送 JavaScript。

---

# 5. 整体架构

项目整体结构：

```text
Harness Plugin Market
│
├── Plugin Data
│
│   └── src/data/plugins/
│
├── Astro Pages
│
├── UI Components
│
├── Search / Filter
│
├── Static Assets
│
└── Build
      │
      ▼
     dist/
      │
      ▼
 Nginx / Pages
```

运行时不存在后端。

---

# 6. 项目目录设计

建议采用：

```text
harness-plugin-market/
│
├── public/
│   ├── favicon.svg
│   ├── logo.svg
│   └── images/
│
├── src/
│   │
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── PluginCard.astro
│   │   ├── PluginGrid.astro
│   │   ├── PluginIcon.astro
│   │   ├── TagBadge.astro
│   │   ├── InstallBox.tsx
│   │   ├── SearchBox.tsx
│   │   ├── PluginFilter.tsx
│   │   └── EmptyState.astro
│   │
│   ├── data/
│   │   └── plugins/
│   │       ├── web-search.ts
│   │       ├── github-tools.ts
│   │       ├── memory.ts
│   │       └── index.ts
│   │
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── PluginLayout.astro
│   │
│   ├── pages/
│   │   ├── index.astro
│   │   ├── plugins/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro
│   │   ├── tags/
│   │   │   └── [tag].astro
│   │   ├── about.astro
│   │   └── 404.astro
│   │
│   ├── styles/
│   │   └── global.css
│   │
│   ├── types/
│   │   └── plugin.ts
│   │
│   └── utils/
│       ├── plugin.ts
│       ├── search.ts
│       └── install.ts
│
├── astro.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

---

# 7. 插件数据管理方式

本项目不需要设计独立 Registry。

插件数据就是：

> 前端源码的一部分。

建议所有插件统一放在：

```text
src/data/plugins/
```

例如：

```text
src/data/plugins/web-search.ts
```

内容：

```ts
import type { Plugin } from "@/types/plugin";

export const webSearchPlugin: Plugin = {
  slug: "web-search",

  name: "Web Search",

  description:
    "为 Harness 智能体提供互联网搜索能力。",

  longDescription:
    "该插件允许 Harness 智能体调用外部搜索服务，在需要实时信息时获取互联网搜索结果。",

  author: {
    name: "Example Developer",
    url: "https://github.com/example"
  },

  tags: [
    "Search",
    "Web",
    "Tool"
  ],

  repository:
    "https://github.com/example/harness-web-search",

  homepage:
    "https://github.com/example/harness-web-search",

  license: "MIT",

  installMethods: [
    {
      name: "npm",
      command:
        "dsh plugin --profile web add @example/harness-web-search"
    },
    {
      name: "GitHub",
      command:
        "dsh plugin --profile web add github:example/harness-web-search"
    }
  ],

  featured: true
};
```

---

# 8. Plugin TypeScript 类型

定义：

```text
src/types/plugin.ts
```

数据结构：

```ts
export interface PluginAuthor {
  name: string;
  url?: string;
  avatar?: string;
}

export interface InstallMethod {
  name: string;
  description?: string;
  command: string;
}

export interface PluginLink {
  name: string;
  url: string;
}

export interface Plugin {
  slug: string;

  name: string;

  description: string;

  longDescription?: string;

  icon?: string;

  author: PluginAuthor;

  tags: string[];

  repository: string;

  homepage?: string;

  documentation?: string;

  license?: string;

  installMethods: InstallMethod[];

  links?: PluginLink[];

  featured?: boolean;

  deprecated?: boolean;
}
```

不要为当前项目加入：

```text
downloadURL
mirrorURL
packageFile
cdnURL
binaryURL
```

因为市场不负责插件分发。

---

# 9. 插件统一导出

建立：

```text
src/data/plugins/index.ts
```

例如：

```ts
import { webSearchPlugin } from "./web-search";
import { githubPlugin } from "./github-tools";
import { memoryPlugin } from "./memory";

export const plugins = [
  webSearchPlugin,
  githubPlugin,
  memoryPlugin
];
```

整个网站统一从：

```ts
plugins
```

读取数据。

这样可以避免各页面维护多份数据。

---

# 10. 首页设计

首页应当非常简单。

整体结构：

```text
Header

Hero

Search

Featured Plugins

All Plugins

Tags

Footer
```

例如：

```text
┌─────────────────────────────────────────────────────────┐
│ Harness Plugins                         GitHub    About  │
├─────────────────────────────────────────────────────────┤
│                                                         │
│              Discover Harness Plugins                   │
│                                                         │
│   Find tools and extensions for your Harness agents.    │
│                                                         │
│        [ Search plugins........................ ]        │
│                                                         │
├─────────────────────────────────────────────────────────┤
│ Featured                                                │
│                                                         │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐       │
│  │ Web Search  │ │ GitHub      │ │ Memory      │       │
│  │             │ │             │ │             │       │
│  │ Search Web  │ │ Git Tool    │ │ Memory      │       │
│  └─────────────┘ └─────────────┘ └─────────────┘       │
│                                                         │
├─────────────────────────────────────────────────────────┤
│ All Plugins                                             │
│                                                         │
│ [All] [Search] [Memory] [MCP] [Developer]              │
│                                                         │
│ ...............                                         │
└─────────────────────────────────────────────────────────┘
```

---

# 11. Header

顶部导航保持简单。

例如：

```text
Harness Plugins

Plugins
Tags
About

GitHub
```

桌面端：

```text
Logo     Plugins     Tags     About                 GitHub
```

移动端使用折叠菜单。

Header 建议：

```text
position: sticky
top: 0
```

背景可以使用：

```text
backdrop-blur
```

但不要使用过多透明特效。

---

# 12. Hero 区域

Hero 核心文案：

```text
Discover plugins for Harness
```

副标题：

```text
Explore tools, integrations and extensions
built for Harness agents.
```

主要操作就是搜索。

不需要：

```text
注册
登录
上传插件
Download Market
```

---

# 13. 插件卡片 PluginCard

PluginCard 是整个网站最重要的 UI 元素。

建议设计：

```text
┌────────────────────────────────┐
│ 🔍                             │
│                                │
│ Web Search                     │
│                                │
│ Search the web from Harness    │
│ agents.                        │
│                                │
│ Search    Web    Tool          │
│                                │
│ by Example                     │
└────────────────────────────────┘
```

字段：

```text
图标
名称
一句话简介
Tags
作者
```

整个卡片可点击。

跳转：

```text
/plugins/web-search
```

卡片不要直接显示大量安装命令。

安装命令放详情页面。

---

# 14. 插件详情页

插件详情页是网站核心。

例如：

```text
/plugins/web-search
```

布局：

```text
┌──────────────────────────────────────────────────────┐
│ ← Plugins                                            │
│                                                      │
│ 🔍 Web Search                                        │
│                                                      │
│ Search the web directly from Harness agents.         │
│                                                      │
│ Search   Web   Tool                                  │
│                                                      │
│ by Example Developer                                 │
│                                                      │
│ [Repository]     [Documentation]                     │
├──────────────────────────────────────────────────────┤
│                                                      │
│ About                                                │
│                                                      │
│ Detailed plugin description...                       │
│                                                      │
├──────────────────────────────────────────────────────┤
│ Installation                                         │
│                                                      │
│ npm                                                  │
│ ┌───────────────────────────────────────────────┐    │
│ │ dsh plugin --profile web add xxx       Copy  │    │
│ └───────────────────────────────────────────────┘    │
│                                                      │
│ GitHub                                               │
│ ┌───────────────────────────────────────────────┐    │
│ │ dsh plugin --profile web add github:xxx Copy │    │
│ └───────────────────────────────────────────────┘    │
│                                                      │
├──────────────────────────────────────────────────────┤
│ Repository                                           │
│                                                      │
│ github.com/example/harness-web-search                │
└──────────────────────────────────────────────────────┘
```

---

# 15. 安装命令组件

建立 React 组件：

```text
InstallBox.tsx
```

职责：

- 显示安装方式名称
- 显示命令
- 一键复制
- 显示复制成功状态

例如：

```text
npm

┌──────────────────────────────────────────────────┐
│ dsh plugin --profile web add @example/plugin     │
│                                           Copy   │
└──────────────────────────────────────────────────┘
```

点击 Copy 后：

```text
Copied!
```

1～2 秒后恢复：

```text
Copy
```

使用浏览器：

```ts
navigator.clipboard.writeText()
```

实现。

不需要任何后端。

---

# 16. Profile 可选设计

因为 Harness 安装命令可能涉及：

```text
--profile
```

为了提高可用性，可以在详情页允许用户输入自己的 profile。

例如：

```text
Profile

[ web                 ]
```

默认：

```text
web
```

安装命令：

```text
dsh plugin --profile web add @example/plugin
```

用户输入：

```text
my-agent
```

前端实时变成：

```text
dsh plugin --profile my-agent add @example/plugin
```

这个功能完全由浏览器完成。

不保存任何用户输入。

---

# 17. 搜索功能

网站必须支持前端搜索。

搜索字段：

```text
name
description
tags
author.name
```

例如搜索：

```text
github
```

应该匹配：

```text
GitHub Tools
GitHub MCP
Repository Manager
```

建议使用：

```text
Fuse.js
```

不需要：

```text
Elasticsearch
Meilisearch
Typesense
Algolia
```

---

# 18. 搜索行为

搜索框：

```text
Search plugins...
```

用户输入以后立即过滤。

例如：

```text
memory
```

只显示：

```text
Memory
Long-Term Memory
Vector Memory
```

搜索必须：

- 大小写不敏感
- 支持部分匹配
- 支持 tag
- 支持作者搜索

结果为空时显示：

```text
No plugins found.
Try another keyword or remove some filters.
```

---

# 19. Tag 系统

每个插件可以具有多个 tag。

例如：

```text
Search
Web
Memory
MCP
Developer
Automation
Browser
Database
AI
Tool
```

首页提供：

```text
All

Search

Memory

MCP

Developer

Automation
```

点击标签：

```text
Search
```

前端只显示包含：

```text
Search
```

的插件。

也可以提供独立页面：

```text
/tags/search
```

方便 URL 分享。

---

# 20. URL 设计

统一采用简单语义化 URL。

首页：

```text
/
```

所有插件：

```text
/plugins
```

插件：

```text
/plugins/web-search
```

标签：

```text
/tags/search
```

关于页面：

```text
/about
```

不要设计：

```text
/plugin?id=123
```

应使用：

```text
/plugins/web-search
```

---

# 21. 插件图标

插件允许定义：

```text
icon
```

例如：

```ts
icon: "/images/plugins/web-search.svg"
```

图标建议：

```text
SVG
PNG
WebP
```

优先：

```text
SVG
```

推荐尺寸：

```text
128 × 128
```

或者使用统一比例：

```text
1:1
```

如果插件没有图标：

使用自动生成的占位图标。

例如：

```text
W
```

代表：

```text
Web Search
```

不要因为没有插件图标导致页面报错。

---

# 22. 外部链接

插件可以包含：

```text
Repository
Homepage
Documentation
Author
```

所有外部地址：

```html
target="_blank"
rel="noopener noreferrer"
```

所有链接必须明确跳转外部网站。

插件市场不做代理。

---

# 23. 安全设计

由于这是纯前端项目，攻击面本身较小。

但仍需遵守以下规则。

## 23.1 禁止插入原始 HTML

插件信息不得允许直接执行：

```html
<script>
```

或者：

```html
iframe
```

插件描述默认作为文本或受控 Markdown 渲染。

不要使用未经处理的：

```text
dangerouslySetInnerHTML
```

---

## 23.2 外部 URL

所有插件 URL 必须要求：

```text
https://
```

必要时允许：

```text
http://localhost
```

用于开发环境。

生产数据不应包含：

```text
javascript:
data:
file:
```

---

## 23.3 安装命令

安装命令只是文本。

禁止：

```text
自动执行
Shell 调用
浏览器调用本地终端
自定义协议自动执行
```

网站只负责：

```text
显示
复制
```

用户自己在终端执行。

---

# 24. SEO

每个插件详情页应该生成独立：

```html
<title>
<meta name="description">
```

例如：

```text
Web Search - Harness Plugins
```

Description：

```text
Web Search plugin for Harness. Add web search capabilities to your Harness agents.
```

增加：

```text
Open Graph
Twitter Card
canonical URL
```

方便插件页面分享。

---

# 25. Sitemap

Astro 构建过程中自动生成：

```text
/sitemap-index.xml
```

或者：

```text
/sitemap.xml
```

其中应该包含：

```text
/
/plugins
/plugins/web-search
/plugins/memory
/plugins/github-tools
```

---

# 26. Robots

提供：

```text
public/robots.txt
```

允许正常搜索引擎抓取：

```text
User-agent: *
Allow: /
```

---

# 27. 响应式设计

最低支持：

```text
Desktop
Laptop
Tablet
Phone
```

插件列表：

桌面：

```text
3～4 列
```

平板：

```text
2 列
```

手机：

```text
1 列
```

例如：

```text
Desktop

┌───────┐ ┌───────┐ ┌───────┐
│Plugin │ │Plugin │ │Plugin │
└───────┘ └───────┘ └───────┘


Mobile

┌──────────────┐
│ Plugin       │
└──────────────┘

┌──────────────┐
│ Plugin       │
└──────────────┘
```

---

# 28. UI 风格

整体采用：

> 简洁、现代、开发者工具风格。

可以参考：

```text
GitHub
Vercel
Cloudflare
Linear
shadcn/ui
Astro
```

但不要直接复制。

推荐视觉特征：

```text
大量留白

圆角：
8px～12px

细边框

轻微阴影

清晰 Typography

减少复杂渐变

减少玻璃拟态

强调内容，而不是动画
```

---

# 29. 颜色系统

建议同时支持：

```text
Light
Dark
System
```

默认：

```text
System
```

颜色使用 CSS Variables。

例如：

```css
:root {
  --background: ...;
  --foreground: ...;
  --muted: ...;
  --border: ...;
  --card: ...;
  --primary: ...;
}
```

避免在组件中大量写死颜色。

---

# 30. Dark Mode

支持：

```text
prefers-color-scheme
```

用户也可以通过 Header 手动切换：

```text
Light
Dark
System
```

设置保存：

```text
localStorage
```

不需要服务器同步。

---

# 31. Accessibility

必须：

- 使用语义化 HTML
- Button 使用 `<button>`
- Link 使用 `<a>`
- 图片提供 alt
- 支持键盘导航
- 搜索框提供 label
- 保证文字和背景对比度
- focus 状态不可被完全移除
- Copy Button 提供 aria-label

例如：

```html
<button aria-label="Copy install command">
```

---

# 32. 性能要求

首页不得一次加载大型 JavaScript Bundle。

原则：

```text
能用 Astro 就不用 React

能静态生成就不客户端生成

只有搜索和交互组件 hydration
```

插件数量达到几百个时仍应保持良好性能。

图片：

```text
lazy loading
```

非首屏资源：

```text
loading="lazy"
```

---

# 33. 动画

只使用轻微动画。

例如：

```text
card hover

button hover

copy feedback

dialog fade

theme transition
```

动画时间：

```text
100ms～250ms
```

禁止大量：

```text
视差滚动
3D 动画
粒子背景
复杂页面切换
```

开发者工具网站应优先保证稳定和阅读效率。

---

# 34. 插件排序

默认排序：

```text
featured
↓
name
```

即：

```text
Featured Plugin
Featured Plugin
普通插件 A
普通插件 B
普通插件 C
```

前端可以额外提供：

```text
Featured
Name A-Z
Name Z-A
```

不需要：

```text
下载量
热度
评分
```

因为项目没有后台统计。

---

# 35. Featured 插件

插件数据中：

```ts
featured: true
```

首页单独出现：

```text
Featured Plugins
```

例如：

```text
Web Search

GitHub Tools

Memory
```

然后下面才是：

```text
All Plugins
```

---

# 36. Deprecated 插件

允许：

```ts
deprecated: true
```

页面显示：

```text
Deprecated
```

并增加醒目提示：

```text
This plugin is no longer actively maintained.
```

但仍然可以保留原仓库链接。

---

# 37. License

如果作者提供 License，可以显示：

```text
MIT

Apache-2.0

GPL-3.0
```

市场本身不需要解析 License。

只是展示。

---

# 38. About 页面

增加：

```text
/about
```

解释：

```text
Harness Plugin Market 是社区插件展示页面。

本站不托管、不分发任何插件。

所有插件均由第三方作者独立维护。

安装插件之前，请检查其源码、许可证以及安全性。

本站展示不代表对插件安全性的保证。
```

这一点非常重要。

---

# 39. Disclaimer

Footer 可以显示：

```text
Harness Plugin Market is an independent plugin directory.

Plugins are maintained by their respective authors.
```

如果项目不是 DeepSeek 官方项目，则必须明确说明：

```text
This project is not affiliated with or endorsed by DeepSeek.
```

避免让用户误认为这是官方市场。

---

# 40. 404 页面

提供友好的：

```text
404

Plugin not found.

[Back to plugins]
```

不要直接使用浏览器默认 404。

---

# 41. 构建流程

开发：

```bash
npm install

npm run dev
```

构建：

```bash
npm run build
```

输出：

```text
dist/
```

部署只需要：

```text
dist/
```

---

# 42. Nginx 部署

静态部署模型：

```text
Browser
   │
 HTTPS
   │
   ▼
Nginx
   │
   ▼
dist/
```

不需要：

```text
proxy_pass
Node.js
PM2
systemd Node Service
```

例如服务器只需要：

```text
/var/www/harness-plugins/
```

里面存放：

```text
dist
```

产生的文件。

---

# 43. URL 刷新问题

由于 Astro 会直接生成真实页面：

```text
/plugins/web-search/index.html
```

因此访问：

```text
/plugins/web-search
```

直接刷新也不会像传统 React SPA 那样产生路由问题。

这也是使用 Astro 而不是纯 SPA 的重要原因。

---

# 44. 不实现的功能

Codex 必须明确避免实现以下内容。

## 不需要后端

不要创建：

```text
server/
backend/
api/
database/
```

---

## 不需要插件 API

不要创建：

```text
/api/plugins
/api/search
/api/download
```

---

## 不需要账户

不要创建：

```text
login
register
user
session
JWT
OAuth
```

---

## 不需要数据库

不要加入：

```text
SQLite
PostgreSQL
MySQL
MongoDB
Redis
```

---

## 不需要上传

不要提供：

```text
Submit Plugin Web Form
Upload
Drag & Drop
```

插件信息直接通过源码修改。

---

## 不需要下载代理

禁止：

```text
/download/plugin
/proxy/github
/cache/package
```

用户点击 Repository 后直接访问原始地址。

---

# 45. Codex 开发要求

Codex 应自主完成：

```text
项目初始化

页面结构

组件设计

TypeScript 类型

插件示例数据

响应式布局

Light / Dark Mode

搜索

Tag Filter

Plugin Detail

Copy Command

SEO

Sitemap

404

Build
```

---

# 46. Codex 应加入示例插件

为了验证 UI，至少创建 8～12 个 mock plugin。

例如：

```text
Web Search

GitHub Tools

Browser Automation

Long-Term Memory

Filesystem Tools

PostgreSQL Tools

HTTP Client

MCP Bridge

Docker Tools

Knowledge Base
```

这些插件属于：

> UI development mock data。

不要假装它们是真实存在的官方插件。

可以明确标记为：

```text
Example Plugin
```

后续维护者自行替换。

---

# 47. 首页功能验收

首页必须能够：

- 正常显示 Hero
- 正常显示 Featured Plugins
- 正常显示所有插件
- 搜索插件
- 根据 tag 筛选
- 清除筛选
- 点击插件进入详情页
- 响应式布局
- Dark Mode 正常

---

# 48. 插件详情页验收

详情页必须展示：

- 名称
- 图标
- 简介
- 完整介绍
- 作者
- 标签
- License
- Repository
- Homepage
- Documentation
- 多种安装方式

并支持：

```text
Copy
```

复制安装命令。

---

# 49. 搜索验收

以下内容应该可以搜索：

```text
plugin name

description

tag

author
```

例如：

```text
search
```

能够找到：

```text
Web Search
```

搜索：

```text
example
```

能够找到 Example Author 的插件。

---

# 50. 静态构建验收

执行：

```bash
npm run build
```

必须成功。

生成：

```text
dist/
```

删除开发环境以后，单独部署：

```text
dist/
```

网站仍然完全可用。

不得依赖开发服务器。

---

# 51. JavaScript 关闭后的行为

关闭 JavaScript 后：

仍然应该能够：

```text
访问首页

浏览插件

进入详情页

看到插件描述

看到安装命令

点击 Repository
```

只有以下增强功能可以失效：

```text
实时搜索

动态筛选

一键复制

Theme Switch
```

这是 Astro 静态优先原则的重要验收标准。

---

# 52. 插件维护流程

后续新增插件非常简单。

创建：

```text
src/data/plugins/example.ts
```

然后：

```ts
export const examplePlugin: Plugin = {
  ...
};
```

在：

```text
src/data/plugins/index.ts
```

加入：

```ts
examplePlugin
```

重新：

```bash
npm run build
```

即可。

不需要：

```text
数据库迁移

后台操作

API 请求

用户系统
```

---

# 53. 后续可选功能

第一版完成之后，可以考虑增加：

```text
插件分类页面

插件兼容性说明

安装教程

Harness 使用教程

插件开发教程

RSS

GitHub 编辑链接

Markdown 插件详细介绍

插件截图

相关插件推荐
```

但这些全部属于静态内容。

仍然不需要后端。

---

# 54. 推荐第一版页面范围

第一版只做：

```text
/
/plugins
/plugins/[slug]
/tags/[tag]
/about
/404
```

不要在第一版不断增加功能。

---

# 55. 最终系统架构

最终整体架构应该保持：

```text
                  Source Repository
                         │
                         │
                plugin information
                         │
                         ▼
                  Astro + TS
                         │
                    npm run build
                         │
                         ▼
                       dist/
                         │
             ┌───────────┴────────────┐
             │                        │
       Cloudflare Pages            Nginx
             │                        │
             └───────────┬────────────┘
                         │
                      Browser
                         │
        ┌────────────────┼────────────────┐
        │                │                │
   Browse Plugins      Search       Plugin Detail
                                          │
                                  Copy Install Command
                                          │
                                  Open Original Repo
                                          │
                                          ▼
                                 GitHub / npm / Gitea
```

插件市场始终不进入：

```text
插件下载链路
```

---

# 56. 核心产品定位

Codex 在整个开发过程中必须始终遵循以下定位：

> Harness Plugin Market 是一个插件发现、浏览和安装说明网站，而不是插件托管平台。

市场负责：

```text
Discover

Browse

Search

Filter

Explain

Link

Copy Install Command
```

市场不负责：

```text
Host

Download

Mirror

Proxy

Install

Execute

Update
```

最终产品应该是一个：

> **极轻量、静态、快速、现代、适合开发者使用的 Harness 插件目录网站。**

---

# 57. 最终技术选型

正式确定：

```text
框架：
Astro

语言：
TypeScript

CSS：
Tailwind CSS

交互组件：
React

搜索：
Fuse.js

Icon：
Lucide

插件数据：
本地 TypeScript 数据文件

插件托管：
无

插件下载：
无

后台：
无

数据库：
无

API：
无

运行时 Node：
无

部署：
纯静态 dist/
```

开发过程中优先使用 Astro 完成页面，仅当组件确实需要浏览器状态和交互时才使用 React。

不要把整个网站变成 React SPA。

最终应确保：

```text
npm install
npm run build
```

即可获得可以直接部署的完整静态网站。