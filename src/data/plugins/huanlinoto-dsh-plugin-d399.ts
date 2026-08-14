import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "huanlinoto-dsh-plugin-d399",
  name: "dsh-plugin-d399",
  description: "模型生成时弹出小游戏菜单（wordle/消消乐，可扩展）。",
  longDescription: "模型生成时弹出小游戏菜单（wordle/消消乐，可扩展）。",
  author: { name: "HuanLinOTO", url: "https://github.com/HuanLinOTO" },
  tags: ["Fun"],
  category: "tool",
  repository: "https://github.com/HuanLinOTO/dsh-plugin-d399",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:HuanLinOTO/dsh-plugin-d399",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/HuanLinOTO/dsh-plugin-d399/" },
  ],
};

