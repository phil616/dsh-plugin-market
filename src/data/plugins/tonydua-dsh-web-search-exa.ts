import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "tonydua-dsh-web-search-exa",
  name: "dsh-web-search-exa",
  description: "ctx.web 接缝的零配置 Exa 网页搜索提供方：无 API key 时走匿名 MCP 兜底，配 key 时走 REST 搜索。",
  longDescription: "ctx.web 接缝的零配置 Exa 网页搜索提供方：无 API key 时走匿名 MCP 兜底，配 key 时走 REST 搜索。",
  author: { name: "TonyDua", url: "https://github.com/TonyDua" },
  tags: ["Tool"],
  category: "tool",
  repository: "https://github.com/TonyDua/dsh-web-search-exa",
  installMethods: [
    {
      name: "npm",
      description: "通过 npm 注册表安装；包与仓库映射已经上游清单核对。",
      command: "dsh plugin --profile web add @tonydua/dsh-web-search-exa",
    },
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:TonyDua/dsh-web-search-exa",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/TonyDua/dsh-web-search-exa/" },
  ],
};

