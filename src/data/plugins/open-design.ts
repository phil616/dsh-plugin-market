import type { Plugin } from "@/types/plugin";

/**
 * 真实插件：Open Design（https://github.com/nexu-io/open-design）
 * 开源 Claude Design 替代品，本地优先桌面应用，支持 DeepSeek Harness 原生运行时。
 */
export const openDesignPlugin: Plugin = {
  slug: "open-design",

  name: "Open Design",

  description: "开源 Claude Design 替代品：让编码智能体成为设计引擎，生成原型、仪表盘、幻灯片、图片与视频。",

  longDescription:
    "Open Design 是开源的 Claude Design 替代品：一个本地优先的桌面应用，让已经装在你电脑上的编码智能体（DeepSeek Harness、Claude Code、Codex、Cursor、Gemini、OpenCode、Qwen 等 26 个 CLI）成为设计引擎。它可以生成网页 / 桌面 / 移动端原型、实时仪表盘、幻灯片、图片与视频，并直接导出为 HTML、PDF、PPTX、MP4 等真实文件。DeepSeek Harness 是其一等原生运行时，通过 od agent setup deepseek-harness 一键接入。仓库附带 100+ 功能技能、151 套 DESIGN.md 设计系统与 277 个官方插件；采用 Apache-2.0 许可，支持 BYOK 接入任意 OpenAI 兼容端点。",

  author: {
    name: "nexu-io",
    url: "https://github.com/nexu-io",
  },

  tags: ["Design", "UI", "Tool"],

  repository: "https://github.com/nexu-io/open-design",

  homepage: "https://open-design.ai",

  documentation: "https://github.com/nexu-io/open-design/tree/main/docs",

  license: "Apache-2.0",

  installMethods: [
    {
      name: "DeepSeek Harness",
      description: "将 Open Design 连接为 DeepSeek Harness 的原生运行时（需先安装 dsh CLI）。",
      command: "od agent setup deepseek-harness",
    },
    {
      name: "GitHub",
      description: "克隆仓库进行自托管或二次开发。",
      command: "git clone https://github.com/nexu-io/open-design",
    },
  ],

  links: [
    { name: "Discord 社区", url: "https://discord.gg/mHAjSMV6gz" },
  ],

  featured: true,
};
