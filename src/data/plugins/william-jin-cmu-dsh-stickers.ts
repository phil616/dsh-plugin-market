import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "william-jin-cmu-dsh-stickers",
  name: "dsh-stickers",
  description: "用户与 agent 双向表情贴纸互动。",
  longDescription: "用户与 agent 双向表情贴纸互动。",
  author: { name: "william-jin-cmu", url: "https://github.com/william-jin-cmu" },
  tags: ["Fun"],
  category: "tool",
  repository: "https://github.com/william-jin-cmu/dsh-stickers",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:william-jin-cmu/dsh-stickers",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/william-jin-cmu/dsh-stickers/" },
  ],
};

