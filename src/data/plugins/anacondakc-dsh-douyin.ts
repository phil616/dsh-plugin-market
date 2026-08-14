import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "anacondakc-dsh-douyin",
  name: "dsh-douyin",
  description: "侧栏短视频：原生播放器、系列导航、精确历史回放。",
  longDescription: "侧栏短视频：原生播放器、系列导航、精确历史回放。",
  author: { name: "AnacondaKC", url: "https://github.com/AnacondaKC" },
  tags: ["Fun"],
  category: "tool",
  repository: "https://github.com/AnacondaKC/dsh-douyin",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:AnacondaKC/dsh-douyin",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/AnacondaKC/dsh-douyin/" },
  ],
};

