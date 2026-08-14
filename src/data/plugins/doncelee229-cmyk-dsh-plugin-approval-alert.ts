import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "doncelee229-cmyk-dsh-plugin-approval-alert",
  name: "dsh-plugin-approval-alert",
  description: "审批与选择方案的系统级桌面通知：通知显示所属工作区、点击跳转到对应工作区，多语言（简中/繁中/英文），附提示音。",
  longDescription: "审批与选择方案的系统级桌面通知：通知显示所属工作区、点击跳转到对应工作区，多语言（简中/繁中/英文），附提示音。",
  author: { name: "doncelee229-cmyk", url: "https://github.com/doncelee229-cmyk" },
  tags: ["Notification"],
  category: "tool",
  repository: "https://github.com/doncelee229-cmyk/dsh-plugin-approval-alert",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:doncelee229-cmyk/dsh-plugin-approval-alert",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/doncelee229-cmyk/dsh-plugin-approval-alert/" },
  ],
};

