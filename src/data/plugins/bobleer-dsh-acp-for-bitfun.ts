import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "bobleer-dsh-acp-for-bitfun",
  name: "dsh-acp-for-bitfun",
  description: "BitFun 与 DSH 的 ACP 交互对接。",
  longDescription: "BitFun 与 DSH 的 ACP 交互对接。",
  author: { name: "bobleer", url: "https://github.com/bobleer" },
  tags: ["Notification"],
  category: "tool",
  repository: "https://github.com/bobleer/dsh-acp-for-bitfun",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:bobleer/dsh-acp-for-bitfun",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/bobleer/dsh-acp-for-bitfun/" },
  ],
};

