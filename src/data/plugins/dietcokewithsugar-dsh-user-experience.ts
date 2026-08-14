import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "dietcokewithsugar-dsh-user-experience",
  name: "dsh-user-experience",
  description: "帮你发现项目中可能存在的用户体验问题：自动走查 React/TypeScript 源码，定位问题并给出具体优化建议。",
  longDescription: "帮你发现项目中可能存在的用户体验问题：自动走查 React/TypeScript 源码，定位问题并给出具体优化建议。",
  author: { name: "DietCokewithSugar", url: "https://github.com/DietCokewithSugar" },
  tags: ["Development"],
  category: "tool",
  repository: "https://github.com/DietCokewithSugar/dsh-user-experience",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:DietCokewithSugar/dsh-user-experience",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/DietCokewithSugar/dsh-user-experience/" },
  ],
};

