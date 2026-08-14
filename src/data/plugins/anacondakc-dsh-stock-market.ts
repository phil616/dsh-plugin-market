import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "anacondakc-dsh-stock-market",
  name: "dsh-stock-market",
  description: "有效解决了写代码的时候账户不能同时亏钱的 BUG。",
  longDescription: "有效解决了写代码的时候账户不能同时亏钱的 BUG。",
  author: { name: "AnacondaKC", url: "https://github.com/AnacondaKC" },
  tags: ["Fun"],
  category: "tool",
  repository: "https://github.com/AnacondaKC/dsh-stock-market",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:AnacondaKC/dsh-stock-market",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/AnacondaKC/dsh-stock-market/" },
  ],
};

