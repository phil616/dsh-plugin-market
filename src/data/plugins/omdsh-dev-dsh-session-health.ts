import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "omdsh-dev-dsh-session-health",
  name: "dsh-session-health",
  description: "会话文件帧级扫描诊断（torn/损坏/空会话检测）。",
  longDescription: "会话文件帧级扫描诊断（torn/损坏/空会话检测）。",
  author: { name: "omdsh-dev", url: "https://github.com/omdsh-dev" },
  tags: ["Development"],
  category: "tool",
  repository: "https://github.com/omdsh-dev/dsh-session-health",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:omdsh-dev/dsh-session-health",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/omdsh-dev/dsh-session-health/" },
  ],
};

