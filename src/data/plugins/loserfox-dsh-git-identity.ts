import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "loserfox-dsh-git-identity",
  name: "dsh-git-identity",
  description: "git 提交固定使用环境自身作者身份，环境变量注入压过一切 `git config` 设置。",
  longDescription: "git 提交固定使用环境自身作者身份，环境变量注入压过一切 `git config` 设置。",
  author: { name: "LoserFox", url: "https://github.com/LoserFox" },
  tags: ["Development"],
  category: "tool",
  repository: "https://github.com/LoserFox/dsh-git-identity",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:LoserFox/dsh-git-identity",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/LoserFox/dsh-git-identity/" },
  ],
};

