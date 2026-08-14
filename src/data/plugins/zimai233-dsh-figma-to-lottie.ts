import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "zimai233-dsh-figma-to-lottie",
  name: "dsh-figma-to-lottie",
  description: "将 SVG 路径与关键帧参数编译成自包含的 Lottie JSON 动画文件。",
  longDescription: "将 SVG 路径与关键帧参数编译成自包含的 Lottie JSON 动画文件。",
  author: { name: "zimai233", url: "https://github.com/zimai233" },
  tags: ["Tool"],
  category: "tool",
  repository: "https://github.com/zimai233/dsh-figma-to-lottie",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:zimai233/dsh-figma-to-lottie",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/zimai233/dsh-figma-to-lottie/" },
  ],
};

