import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "chinesezjc-dsh-interconnect",
  name: "dsh-interconnect",
  description: "跨实例互联：经 interconnect 服务在多个 DSH 实例间转发消息与事件。",
  longDescription: "跨实例互联：经 interconnect 服务在多个 DSH 实例间转发消息与事件。",
  author: { name: "Chinesezjc", url: "https://github.com/Chinesezjc" },
  tags: ["Session"],
  category: "tool",
  repository: "https://github.com/Chinesezjc/dsh-interconnect",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:Chinesezjc/dsh-interconnect",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/Chinesezjc/dsh-interconnect/" },
  ],
};

