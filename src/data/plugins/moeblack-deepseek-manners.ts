import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "moeblack-deepseek-manners",
  name: "deepseek-manners",
  description: "给每次消息后注入感谢语，做个有礼貌的人。",
  longDescription: "给每次消息后注入感谢语，做个有礼貌的人。",
  author: { name: "Moeblack", url: "https://github.com/Moeblack" },
  tags: ["Fun"],
  category: "tool",
  repository: "https://github.com/Moeblack/deepseek-manners",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:Moeblack/deepseek-manners",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/Moeblack/deepseek-manners/" },
  ],
};

