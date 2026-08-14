import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "a903067276-rgb-dsh-file-mentions",
  name: "dsh-file-mentions",
  description: "DSH 回复中的文件路径可点击：Codex 风格行内打开、文件管理器定位、回合尾部文件 chip 列表。",
  longDescription: "DSH 回复中的文件路径可点击：Codex 风格行内打开、文件管理器定位、回合尾部文件 chip 列表。",
  author: { name: "a903067276-rgb", url: "https://github.com/a903067276-rgb" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/a903067276-rgb/dsh-file-mentions",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:a903067276-rgb/dsh-file-mentions",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/a903067276-rgb/dsh-file-mentions/" },
  ],
};

