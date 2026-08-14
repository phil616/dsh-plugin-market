import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "nagi-ovo-dsh-visualize",
  name: "dsh-visualize",
  description: "对话内生成式 UI：模型把交互式 HTML 卡片直接画进会话流，带流式预览与沙箱渲染。",
  longDescription: "对话内生成式 UI：模型把交互式 HTML 卡片直接画进会话流，带流式预览与沙箱渲染。",
  author: { name: "Nagi-ovo", url: "https://github.com/Nagi-ovo" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/Nagi-ovo/dsh-visualize",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:Nagi-ovo/dsh-visualize",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/Nagi-ovo/dsh-visualize/" },
  ],
};

