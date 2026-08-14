import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "evilirving-dsh-repro",
  name: "dsh-repro",
  description: "/repro 导出最小可复现问题包：去 secret 的会话日志、失败命令与 git diff。",
  longDescription: "/repro 导出最小可复现问题包：去 secret 的会话日志、失败命令与 git diff。",
  author: { name: "EvilIrving", url: "https://github.com/EvilIrving" },
  tags: ["Development"],
  category: "tool",
  repository: "https://github.com/EvilIrving/dsh-repro",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:EvilIrving/dsh-repro",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/EvilIrving/dsh-repro/" },
  ],
};

