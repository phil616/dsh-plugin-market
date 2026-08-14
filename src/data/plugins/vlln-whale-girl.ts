import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "vlln-whale-girl",
  name: "whale-girl",
  description: "桌面宠物（QQ 宠物形态）：右下角悬浮、可拖拽/投喂/玩耍。",
  longDescription: "桌面宠物（QQ 宠物形态）：右下角悬浮、可拖拽/投喂/玩耍。",
  author: { name: "vlln", url: "https://github.com/vlln" },
  tags: ["Fun"],
  category: "tool",
  repository: "https://github.com/vlln/whale-girl",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:vlln/whale-girl",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/vlln/whale-girl/" },
  ],
};

