import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "jayden-x-l-forkprobe",
  name: "forkprobe",
  description: "同一任务并行试跑多个技能，对比结果选出最优。",
  longDescription: "同一任务并行试跑多个技能，对比结果选出最优。",
  author: { name: "Jayden-X-L", url: "https://github.com/Jayden-X-L" },
  tags: ["Development"],
  category: "tool",
  repository: "https://github.com/Jayden-X-L/forkprobe",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:Jayden-X-L/forkprobe",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/Jayden-X-L/forkprobe/" },
  ],
};

