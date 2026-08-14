import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "awesome-dsh-plugin-dsh-find-plugin",
  name: "dsh-find-plugin",
  description: "会话内直接找插件：按关键词/分类搜索本精选 registry，返回描述与可直接执行的安装命令。",
  longDescription: "会话内直接找插件：按关键词/分类搜索本精选 registry，返回描述与可直接执行的安装命令。",
  author: { name: "awesome-dsh-plugin", url: "https://github.com/awesome-dsh-plugin" },
  tags: ["Tool"],
  category: "tool",
  repository: "https://github.com/awesome-dsh-plugin/dsh-find-plugin",
  installMethods: [
    {
      name: "npm",
      description: "通过 npm 注册表安装；包与仓库映射已经上游清单核对。",
      command: "dsh plugin --profile web add dsh-find-plugin",
    },
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:awesome-dsh-plugin/dsh-find-plugin",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/awesome-dsh-plugin/dsh-find-plugin/" },
  ],
};

