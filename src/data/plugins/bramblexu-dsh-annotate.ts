import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "bramblexu-dsh-annotate",
  name: "dsh-annotate",
  description: "面向 Vibe Coding 的浏览器元素标注插件：直接选取页面元素，并将结构化视觉反馈发送给 DeepSeek Harness Agent。",
  longDescription: "面向 Vibe Coding 的浏览器元素标注插件：直接选取页面元素，并将结构化视觉反馈发送给 DeepSeek Harness Agent。",
  author: { name: "BrambleXu", url: "https://github.com/BrambleXu" },
  tags: ["Development"],
  category: "tool",
  repository: "https://github.com/BrambleXu/dsh-annotate",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:BrambleXu/dsh-annotate",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/BrambleXu/dsh-annotate/" },
  ],
};

