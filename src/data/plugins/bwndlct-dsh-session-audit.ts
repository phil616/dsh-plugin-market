import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "bwndlct-dsh-session-audit",
  name: "dsh-session-audit",
  description: "会话执行分析：步骤、工具调用、失败、重复动作、token 用量与验证信号，输出 text/Markdown/JSON 报告。",
  longDescription: "会话执行分析：步骤、工具调用、失败、重复动作、token 用量与验证信号，输出 text/Markdown/JSON 报告。",
  author: { name: "bwndlct", url: "https://github.com/bwndlct" },
  tags: ["Tool"],
  category: "tool",
  repository: "https://github.com/bwndlct/dsh-session-audit",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:bwndlct/dsh-session-audit",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/bwndlct/dsh-session-audit/" },
  ],
};

