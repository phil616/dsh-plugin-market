import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "ccq1-dsh-side-panel",
  name: "dsh-side-panel",
  description: "侧边栏集成文件浏览器、终端和 Git 审查，方便预览文件。",
  longDescription: "侧边栏集成文件浏览器、终端和 Git 审查，方便预览文件。",
  author: { name: "ccq1", url: "https://github.com/ccq1" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/ccq1/dsh-side-panel",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:ccq1/dsh-side-panel",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/ccq1/dsh-side-panel/" },
  ],
};

