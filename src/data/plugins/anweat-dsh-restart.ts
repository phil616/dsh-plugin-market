import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "anweat-dsh-restart",
  name: "dsh-restart",
  description: "DSH 重启插件：可配置的重启方式（Node 原生/旧 PowerShell 适配）、重启后自动继续的提示词、可选看门狗自动拉起。",
  longDescription: "DSH 重启插件：可配置的重启方式（Node 原生/旧 PowerShell 适配）、重启后自动继续的提示词、可选看门狗自动拉起。",
  author: { name: "anweat", url: "https://github.com/anweat" },
  tags: ["Fun"],
  category: "tool",
  repository: "https://github.com/anweat/dsh-restart",
  installMethods: [
    {
      name: "npm",
      description: "通过 npm 注册表安装；包与仓库映射已经上游清单核对。",
      command: "dsh plugin --profile web add dsh-restart",
    },
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:anweat/dsh-restart",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/anweat/dsh-restart/" },
  ],
};

