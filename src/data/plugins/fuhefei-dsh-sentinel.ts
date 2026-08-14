import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "fuhefei-dsh-sentinel",
  name: "dsh-sentinel",
  description: "条件驱动唤醒：file/command/http/process/webhook 持久监视，触发即唤醒 agent。",
  longDescription: "条件驱动唤醒：file/command/http/process/webhook 持久监视，触发即唤醒 agent。",
  author: { name: "fuhefei", url: "https://github.com/fuhefei" },
  tags: ["Automation"],
  category: "tool",
  repository: "https://github.com/fuhefei/dsh-sentinel",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:fuhefei/dsh-sentinel",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/fuhefei/dsh-sentinel/" },
  ],
};

