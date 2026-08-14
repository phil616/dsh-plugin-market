import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "leechen298-code2skill",
  name: "Code2Skill",
  description: "从用户授权的源码生成 Function、MCP 工具、工作流 Skill 与离线测试包。",
  longDescription: "从用户授权的源码生成 Function、MCP 工具、工作流 Skill 与离线测试包。",
  author: { name: "leechen298", url: "https://github.com/leechen298" },
  tags: ["Development"],
  category: "tool",
  repository: "https://github.com/leechen298/Code2Skill",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:leechen298/Code2Skill",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/leechen298/Code2Skill/" },
  ],
};

