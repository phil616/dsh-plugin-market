import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "arrow949-dsh-turn-approval",
  name: "dsh-turn-approval",
  description: "DSH「允许本次任务」临时授权：仅在当前任务内自动放行同类 `danger-full-access` 请求，任务结束自动失效。",
  longDescription: "DSH「允许本次任务」临时授权：仅在当前任务内自动放行同类 `danger-full-access` 请求，任务结束自动失效。",
  author: { name: "arrow949", url: "https://github.com/arrow949" },
  tags: ["Development"],
  category: "tool",
  repository: "https://github.com/arrow949/dsh-turn-approval",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:arrow949/dsh-turn-approval",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/arrow949/dsh-turn-approval/" },
  ],
};

