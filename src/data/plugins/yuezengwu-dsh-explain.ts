import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "yuezengwu-dsh-explain",
  name: "dsh-explain",
  description: "本地优先学习模式：跨会话全局学习线程、按来源讲解。",
  longDescription: "本地优先学习模式：跨会话全局学习线程、按来源讲解。",
  author: { name: "yuezengwu", url: "https://github.com/yuezengwu" },
  tags: ["Session"],
  category: "tool",
  repository: "https://github.com/yuezengwu/dsh-explain",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:yuezengwu/dsh-explain",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/yuezengwu/dsh-explain/" },
  ],
};

