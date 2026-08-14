import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "icetomoyo-dsh-workflow",
  name: "dsh_workflow",
  description: "把 UltraCode 式多 Agent 调度带给 DSH：可生成、可保存、可治理、可观察、可恢复的 Workflow 层。",
  longDescription: "把 UltraCode 式多 Agent 调度带给 DSH：可生成、可保存、可治理、可观察、可恢复的 Workflow 层。",
  author: { name: "icetomoyo", url: "https://github.com/icetomoyo" },
  tags: ["Automation"],
  category: "tool",
  repository: "https://github.com/icetomoyo/dsh_workflow",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:icetomoyo/dsh_workflow",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/icetomoyo/dsh_workflow/" },
  ],
};

