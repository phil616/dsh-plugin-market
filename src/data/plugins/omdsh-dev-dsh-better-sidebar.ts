import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "omdsh-dev-dsh-better-sidebar",
  name: "DSH-better-sidebar",
  description: "侧边栏完整工作台：内置文件渲染编辑、终端、Git 与子代理，支持三方插件注册新 Tab。",
  longDescription: "侧边栏完整工作台：内置文件渲染编辑、终端、Git 与子代理，支持三方插件注册新 Tab。",
  author: { name: "omdsh-dev", url: "https://github.com/omdsh-dev" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/omdsh-dev/DSH-better-sidebar",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:omdsh-dev/DSH-better-sidebar",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/omdsh-dev/DSH-better-sidebar/" },
  ],
};

