import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "zseven-w-dsh-openpencil",
  name: "dsh-openpencil",
  description: "OpenPencil 设计预览与编辑插件。",
  longDescription: "OpenPencil 设计预览与编辑插件。",
  author: { name: "ZSeven-W", url: "https://github.com/ZSeven-W" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/ZSeven-W/dsh-openpencil",
  installMethods: [
    {
      name: "npm",
      description: "通过 npm 注册表安装；包与仓库映射已经上游清单核对。",
      command: "dsh plugin --profile web add @zseven-w/dsh-openpencil",
    },
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:ZSeven-W/dsh-openpencil",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/ZSeven-W/dsh-openpencil/" },
  ],
};

