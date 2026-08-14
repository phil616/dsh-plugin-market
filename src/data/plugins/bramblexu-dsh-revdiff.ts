import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "bramblexu-dsh-revdiff",
  name: "dsh-revdiff",
  description: "DeepSeek Harness 原生交互式 Git diff 审查，支持结构化批注并回传当前 Agent 会话。",
  longDescription: "DeepSeek Harness 原生交互式 Git diff 审查，支持结构化批注并回传当前 Agent 会话。",
  author: { name: "BrambleXu", url: "https://github.com/BrambleXu" },
  tags: ["Development"],
  category: "tool",
  repository: "https://github.com/BrambleXu/dsh-revdiff",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:BrambleXu/dsh-revdiff",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/BrambleXu/dsh-revdiff/" },
  ],
};

