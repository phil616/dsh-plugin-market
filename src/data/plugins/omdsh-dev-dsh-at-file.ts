import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "omdsh-dev-dsh-at-file",
  name: "dsh-at-file",
  description: "Codex 风格的 `@file` 文件引用，输入框里直接搜索并引用工作区文件。",
  longDescription: "Codex 风格的 `@file` 文件引用，输入框里直接搜索并引用工作区文件。",
  author: { name: "omdsh-dev", url: "https://github.com/omdsh-dev" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/omdsh-dev/dsh-at-file",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:omdsh-dev/dsh-at-file",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/omdsh-dev/dsh-at-file/" },
  ],
};

