import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "zimai233-dsh-video-downloader",
  name: "dsh-video-downloader",
  description: "检测并下载 B站/YouTube/抖音/小红书视频媒体，带清晰度与格式分析。",
  longDescription: "检测并下载 B站/YouTube/抖音/小红书视频媒体，带清晰度与格式分析。",
  author: { name: "zimai233", url: "https://github.com/zimai233" },
  tags: ["Tool"],
  category: "tool",
  repository: "https://github.com/zimai233/dsh-video-downloader",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:zimai233/dsh-video-downloader",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/zimai233/dsh-video-downloader/" },
  ],
};

