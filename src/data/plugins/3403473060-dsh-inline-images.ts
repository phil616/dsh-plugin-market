import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "3403473060-dsh-inline-images",
  name: "dsh-inline-images",
  description: "对话内联图片：LLM 回复中输出的本地图片路径在消息正文直接渲染为图片（9 种格式、点击放大灯箱、可调尺寸）。",
  longDescription: "对话内联图片：LLM 回复中输出的本地图片路径在消息正文直接渲染为图片（9 种格式、点击放大灯箱、可调尺寸）。",
  author: { name: "3403473060", url: "https://github.com/3403473060" },
  tags: ["Session"],
  category: "tool",
  repository: "https://github.com/3403473060/dsh-inline-images",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:3403473060/dsh-inline-images",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/3403473060/dsh-inline-images/" },
  ],
};

