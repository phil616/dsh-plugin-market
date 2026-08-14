import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "snowcrescenter-tech-dsh-milestone",
  name: "dsh-milestone",
  description: "右侧圆点时间轴导航条，点击跳转到任意用户消息。",
  longDescription: "右侧圆点时间轴导航条，点击跳转到任意用户消息。",
  author: { name: "SnowCrescenter-tech", url: "https://github.com/SnowCrescenter-tech" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/SnowCrescenter-tech/dsh-milestone",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:SnowCrescenter-tech/dsh-milestone",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/SnowCrescenter-tech/dsh-milestone/" },
  ],
};

