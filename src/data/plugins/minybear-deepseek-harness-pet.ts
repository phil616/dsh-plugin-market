import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "minybear-deepseek-harness-pet",
  name: "DeepSeek-Harness-Pet",
  description: "Codex 风格桌面宠物：右下角悬浮动画精灵，随 agent 运行状态实时变化（工作、等待、报错、完成）。",
  longDescription: "Codex 风格桌面宠物：右下角悬浮动画精灵，随 agent 运行状态实时变化（工作、等待、报错、完成）。",
  author: { name: "minybear", url: "https://github.com/minybear" },
  tags: ["Fun"],
  category: "tool",
  repository: "https://github.com/minybear/DeepSeek-Harness-Pet",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:minybear/DeepSeek-Harness-Pet",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/minybear/DeepSeek-Harness-Pet/" },
  ],
};

