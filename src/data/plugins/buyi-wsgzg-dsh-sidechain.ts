import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "buyi-wsgzg-dsh-sidechain",
  name: "dsh-sidechain",
  description: "`/side` 持续性侧会话与 `/btw` 一次性侧问，在临时 fork 中运行、不写入主会话历史。",
  longDescription: "`/side` 持续性侧会话与 `/btw` 一次性侧问，在临时 fork 中运行、不写入主会话历史。",
  author: { name: "Buyi-wsgzg", url: "https://github.com/Buyi-wsgzg" },
  tags: ["Session"],
  category: "tool",
  repository: "https://github.com/Buyi-wsgzg/dsh-sidechain",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:Buyi-wsgzg/dsh-sidechain",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/Buyi-wsgzg/dsh-sidechain/" },
  ],
};

