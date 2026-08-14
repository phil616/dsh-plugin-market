import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "hellodigua-dsh-share",
  name: "dsh-share",
  description: "一键分享你的对话。",
  longDescription: "一键分享你的对话。",
  author: { name: "hellodigua", url: "https://github.com/hellodigua" },
  tags: ["Session"],
  category: "tool",
  repository: "https://github.com/hellodigua/dsh-share",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:hellodigua/dsh-share",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/hellodigua/dsh-share/" },
  ],
};

