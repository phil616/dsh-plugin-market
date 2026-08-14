import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "iccuse-dsh-premise-guard",
  name: "dsh-premise-guard",
  description: "压缩后前提漂移守卫：摘要丢失关键字面锚点时注入一次性提醒。",
  longDescription: "压缩后前提漂移守卫：摘要丢失关键字面锚点时注入一次性提醒。",
  author: { name: "ICCuse", url: "https://github.com/ICCuse" },
  tags: ["Memory"],
  category: "tool",
  repository: "https://github.com/ICCuse/dsh-premise-guard",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:ICCuse/dsh-premise-guard",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/ICCuse/dsh-premise-guard/" },
  ],
};

