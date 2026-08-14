import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "nowledge-co-nowledge-mem-deepseek-harness",
  name: "nowledge-mem-deepseek-harness",
  description: "给所有 AI 工具和 Agent 共用的一层记忆：注入 Context Bundle、提示时检索、MCP 工具与回合结束 DSH 线程捕获。",
  longDescription: "给所有 AI 工具和 Agent 共用的一层记忆：注入 Context Bundle、提示时检索、MCP 工具与回合结束 DSH 线程捕获。",
  author: { name: "nowledge-co", url: "https://github.com/nowledge-co" },
  tags: ["Memory"],
  category: "tool",
  repository: "https://github.com/nowledge-co/nowledge-mem-deepseek-harness",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:nowledge-co/nowledge-mem-deepseek-harness",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/nowledge-co/nowledge-mem-deepseek-harness/" },
  ],
};

