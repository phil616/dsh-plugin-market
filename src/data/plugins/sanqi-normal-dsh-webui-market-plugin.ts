import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "sanqi-normal-dsh-webui-market-plugin",
  name: "dsh-webui-market-plugin",
  description: "dsh Web GUI 内的社区插件市场：浏览 awesome-dsh-plugin.com 目录，从 设置 → 插件 → 插件市场 安装/卸载插件到 profile。",
  longDescription: "dsh Web GUI 内的社区插件市场：浏览 awesome-dsh-plugin.com 目录，从 设置 → 插件 → 插件市场 安装/卸载插件到 profile。",
  author: { name: "Sanqi-normal", url: "https://github.com/Sanqi-normal" },
  tags: ["Tool"],
  category: "tool",
  repository: "https://github.com/Sanqi-normal/dsh-webui-market-plugin",
  installMethods: [
    {
      name: "npm",
      description: "通过 npm 注册表安装；包与仓库映射已经上游清单核对。",
      command: "dsh plugin --profile web add @sanqi-normal/dsh-webui-market-plugin",
    },
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:Sanqi-normal/dsh-webui-market-plugin",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/Sanqi-normal/dsh-webui-market-plugin/" },
  ],
};

