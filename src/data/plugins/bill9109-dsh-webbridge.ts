import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "bill9109-dsh-webbridge",
  name: "dsh-webbridge",
  description: "DSH 结合 Kimi WebBridge。",
  longDescription: "DSH 结合 Kimi WebBridge。",
  author: { name: "bill9109", url: "https://github.com/bill9109" },
  tags: ["Notification"],
  category: "tool",
  repository: "https://github.com/bill9109/dsh-webbridge",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:bill9109/dsh-webbridge",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/bill9109/dsh-webbridge/" },
  ],
};

