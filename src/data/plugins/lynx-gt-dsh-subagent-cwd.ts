import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "lynx-gt-dsh-subagent-cwd",
  name: "dsh-subagent-cwd",
  description: "在 dsh-subagent-tools 基础上增加子代理按调用 cwd，附带所需的两个 in-process provider 补丁。",
  longDescription: "在 dsh-subagent-tools 基础上增加子代理按调用 cwd，附带所需的两个 in-process provider 补丁。",
  author: { name: "lynx-gt", url: "https://github.com/lynx-gt" },
  tags: ["Tool"],
  category: "tool",
  repository: "https://github.com/lynx-gt/dsh-subagent-cwd",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:lynx-gt/dsh-subagent-cwd",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/lynx-gt/dsh-subagent-cwd/" },
  ],
};

