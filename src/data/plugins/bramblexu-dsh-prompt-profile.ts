import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "bramblexu-dsh-prompt-profile",
  name: "dsh-prompt-profile",
  description: "DeepSeek Harness 可复用 Markdown Prompt Profile，支持单轮模型选择、参数替换和状态恢复。",
  longDescription: "DeepSeek Harness 可复用 Markdown Prompt Profile，支持单轮模型选择、参数替换和状态恢复。",
  author: { name: "BrambleXu", url: "https://github.com/BrambleXu" },
  tags: ["Development"],
  category: "tool",
  repository: "https://github.com/BrambleXu/dsh-prompt-profile",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:BrambleXu/dsh-prompt-profile",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/BrambleXu/dsh-prompt-profile/" },
  ],
};

