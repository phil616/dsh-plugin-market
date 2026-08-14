import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "siberiah2o-dsh-plugin-terminal",
  name: "dsh-plugin-terminal",
  description: "底部多标签终端面板（node-pty + xterm.js）：贴底全宽，输入框始终在终端上方。",
  longDescription: "底部多标签终端面板（node-pty + xterm.js）：贴底全宽，输入框始终在终端上方。",
  author: { name: "siberiah2o", url: "https://github.com/siberiah2o" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/siberiah2o/dsh-plugin-terminal",
  installMethods: [
    {
      name: "npm",
      description: "通过 npm 注册表安装；包与仓库映射已经上游清单核对。",
      command: "dsh plugin --profile web add dsh-plugin-terminal",
    },
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:siberiah2o/dsh-plugin-terminal",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/siberiah2o/dsh-plugin-terminal/" },
  ],
};

