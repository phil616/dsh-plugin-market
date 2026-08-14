import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "linenxi-ctrl-dsh-vision",
  name: "dsh-vision",
  description: "外挂识图插件：鲸鱼按钮配置面板、图片识图自动回传、模型自主截图识图工具。",
  longDescription: "外挂识图插件：鲸鱼按钮配置面板、图片识图自动回传、模型自主截图识图工具。",
  author: { name: "linenxi-ctrl", url: "https://github.com/linenxi-ctrl" },
  tags: ["Tool"],
  category: "tool",
  repository: "https://github.com/linenxi-ctrl/dsh-vision",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:linenxi-ctrl/dsh-vision",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/linenxi-ctrl/dsh-vision/" },
  ],
};

