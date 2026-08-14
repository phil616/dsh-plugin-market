import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "tsonglew-dsh-media-preview",
  name: "dsh-media-preview",
  description: "better-sidebar 音视频预览器：原生播放器内联播放 mp4/webm/mkv/mov 等视频与 mp3/flac/wav 等音频，自带支持 HTTP Range 拖动的流式媒体路由。",
  longDescription: "better-sidebar 音视频预览器：原生播放器内联播放 mp4/webm/mkv/mov 等视频与 mp3/flac/wav 等音频，自带支持 HTTP Range 拖动的流式媒体路由。",
  author: { name: "tsonglew", url: "https://github.com/tsonglew" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/tsonglew/dsh-media-preview",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:tsonglew/dsh-media-preview",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/tsonglew/dsh-media-preview/" },
  ],
};

