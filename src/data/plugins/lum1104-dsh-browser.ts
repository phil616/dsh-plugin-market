import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "lum1104-dsh-browser",
  name: "dsh-browser",
  description: "Chrome 侧边栏扩展，让 DSH 直接操控你的浏览器，无需视觉能力。",
  longDescription: "Chrome 侧边栏扩展，让 DSH 直接操控你的浏览器，无需视觉能力。",
  author: { name: "Lum1104", url: "https://github.com/Lum1104" },
  tags: ["Tool"],
  category: "tool",
  repository: "https://github.com/Lum1104/dsh-browser",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:Lum1104/dsh-browser",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/Lum1104/dsh-browser/" },
  ],
};

