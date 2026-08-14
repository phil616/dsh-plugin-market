import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "maxeaglet-dsh-bash-terminal",
  name: "dsh-bash-terminal",
  description: "一个 shell 工具：Windows 上统一执行 PowerShell / Git Bash / WSL，外加交互式 PTY 终端，默认终端由用户在设置中选择。",
  longDescription: "一个 shell 工具：Windows 上统一执行 PowerShell / Git Bash / WSL，外加交互式 PTY 终端，默认终端由用户在设置中选择。",
  author: { name: "MAXeaglet", url: "https://github.com/MAXeaglet" },
  tags: ["Tool"],
  category: "tool",
  repository: "https://github.com/MAXeaglet/dsh-bash-terminal",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:MAXeaglet/dsh-bash-terminal",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/MAXeaglet/dsh-bash-terminal/" },
  ],
};

