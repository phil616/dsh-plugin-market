import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "feibi-mochi-deepseek-harness-wallet",
  name: "deepseek-harness-wallet",
  description: "多供应商钱包标签：官方 DeepSeek 余额、本会话花费与 token、第三方合计 token、一键充值、低余额提醒。",
  longDescription: "多供应商钱包标签：官方 DeepSeek 余额、本会话花费与 token、第三方合计 token、一键充值、低余额提醒。",
  author: { name: "feibi-mochi", url: "https://github.com/feibi-mochi" },
  tags: ["Model"],
  category: "tool",
  repository: "https://github.com/feibi-mochi/deepseek-harness-wallet",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:feibi-mochi/deepseek-harness-wallet",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/feibi-mochi/deepseek-harness-wallet/" },
  ],
};

