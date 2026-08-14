import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "han-1413141-dsh-sticky-disclosure",
  name: "dsh-sticky-disclosure",
  description: "一键收起会话中所有展开的区块（Think、工具卡等），常驻计数按钮 + 自定义快捷键。",
  longDescription: "一键收起会话中所有展开的区块（Think、工具卡等），常驻计数按钮 + 自定义快捷键。",
  author: { name: "Han-1413141", url: "https://github.com/Han-1413141" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/Han-1413141/dsh-sticky-disclosure",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:Han-1413141/dsh-sticky-disclosure",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/Han-1413141/dsh-sticky-disclosure/" },
  ],
};

