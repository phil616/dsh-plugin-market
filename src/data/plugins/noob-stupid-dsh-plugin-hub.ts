import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "noob-stupid-dsh-plugin-hub",
  name: "dsh-plugin-hub",
  description: "插件管理面板：已安装插件一键启用/停用，内置 GitHub dsh-plugin 插件市场，支持详情查看与一键安装。",
  longDescription: "插件管理面板：已安装插件一键启用/停用，内置 GitHub dsh-plugin 插件市场，支持详情查看与一键安装。",
  author: { name: "Noob-stupid", url: "https://github.com/Noob-stupid" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/Noob-stupid/dsh-plugin-hub",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:Noob-stupid/dsh-plugin-hub",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/Noob-stupid/dsh-plugin-hub/" },
  ],
};

