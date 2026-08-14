import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "fakechris-dsh-track",
  name: "dsh-track",
  description: "嵌入式任务管理引擎：决策点协议、念头捕获墙、Linear 形 issue 存储。",
  longDescription: "嵌入式任务管理引擎：决策点协议、念头捕获墙、Linear 形 issue 存储。",
  author: { name: "fakechris", url: "https://github.com/fakechris" },
  tags: ["Automation"],
  category: "tool",
  repository: "https://github.com/fakechris/dsh-track",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:fakechris/dsh-track",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/fakechris/dsh-track/" },
  ],
};

