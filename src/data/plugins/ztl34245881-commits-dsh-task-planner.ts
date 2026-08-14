import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "ztl34245881-commits-dsh-task-planner",
  name: "dsh-task-planner",
  description: "带经验肌肉记忆的任务规划：条件反射检索历史方案 + LLM 能力匹配 + 经验自动沉淀。",
  longDescription: "带经验肌肉记忆的任务规划：条件反射检索历史方案 + LLM 能力匹配 + 经验自动沉淀。",
  author: { name: "ztl34245881-commits", url: "https://github.com/ztl34245881-commits" },
  tags: ["Automation"],
  category: "tool",
  repository: "https://github.com/ztl34245881-commits/dsh-task-planner",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:ztl34245881-commits/dsh-task-planner",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/ztl34245881-commits/dsh-task-planner/" },
  ],
};

