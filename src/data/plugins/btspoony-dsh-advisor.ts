import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "btspoony-dsh-advisor",
  name: "dsh-advisor",
  description: "搭配一个副模型，每轮被动审查并注入见解。",
  longDescription: "搭配一个副模型，每轮被动审查并注入见解。",
  author: { name: "btspoony", url: "https://github.com/btspoony" },
  tags: ["Automation"],
  category: "tool",
  repository: "https://github.com/btspoony/dsh-advisor",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:btspoony/dsh-advisor",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/btspoony/dsh-advisor/" },
  ],
};

