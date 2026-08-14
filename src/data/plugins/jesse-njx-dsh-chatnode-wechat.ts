import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "jesse-njx-dsh-chatnode-wechat",
  name: "dsh-chatnode-wechat",
  description: "通过 iLink 网关在微信里与 DSH agent 聊天、监控与审批：双向文本、会话切换、进度摘要与编号审批提示。",
  longDescription: "通过 iLink 网关在微信里与 DSH agent 聊天、监控与审批：双向文本、会话切换、进度摘要与编号审批提示。",
  author: { name: "Jesse-njx", url: "https://github.com/Jesse-njx" },
  tags: ["Notification"],
  category: "tool",
  repository: "https://github.com/Jesse-njx/dsh-chatnode-wechat",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:Jesse-njx/dsh-chatnode-wechat",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/Jesse-njx/dsh-chatnode-wechat/" },
  ],
};

