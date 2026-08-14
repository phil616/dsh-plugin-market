import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "xmanrui-dsh-feishu",
  name: "dsh-feishu",
  description: "通过扫码把飞书机器人接入DeepSeek Harness。",
  longDescription: "通过扫码把飞书机器人接入DeepSeek Harness。",
  author: { name: "xmanrui", url: "https://github.com/xmanrui" },
  tags: ["Notification"],
  category: "tool",
  repository: "https://github.com/xmanrui/dsh-feishu",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:xmanrui/dsh-feishu",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/xmanrui/dsh-feishu/" },
  ],
};

