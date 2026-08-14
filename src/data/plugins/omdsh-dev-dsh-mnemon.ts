import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "omdsh-dev-dsh-mnemon",
  name: "dsh-mnemon",
  description: "Mnemon 深度集成：本地三层记忆（Runtime Memory、可检索 Documents、受监督 Memory Spaces）。",
  longDescription: "Mnemon 深度集成：本地三层记忆（Runtime Memory、可检索 Documents、受监督 Memory Spaces）。",
  author: { name: "omdsh-dev", url: "https://github.com/omdsh-dev" },
  tags: ["Memory"],
  category: "tool",
  repository: "https://github.com/omdsh-dev/dsh-mnemon",
  installMethods: [
    {
      name: "npm",
      description: "通过 npm 注册表安装；包与仓库映射已经上游清单核对。",
      command: "dsh plugin --profile web add dsh-mnemon",
    },
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:omdsh-dev/dsh-mnemon",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/omdsh-dev/dsh-mnemon/" },
  ],
};

