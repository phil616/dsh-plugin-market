import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "leemancheung-dsh-whale-animation",
  name: "dsh-whale-animation",
  description: "DSH Web 状态文字旁的持久化黑色鲸鱼深潜动画，提供减少动态效果回退与无缝闭环。",
  longDescription: "DSH Web 状态文字旁的持久化黑色鲸鱼深潜动画，提供减少动态效果回退与无缝闭环。",
  author: { name: "LeemanCheung", url: "https://github.com/LeemanCheung" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/LeemanCheung/dsh-whale-animation",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:LeemanCheung/dsh-whale-animation",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/LeemanCheung/dsh-whale-animation/" },
  ],
};

