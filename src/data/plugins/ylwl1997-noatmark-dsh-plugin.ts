import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "ylwl1997-noatmark-dsh-plugin",
  name: "noatmark-dsh-plugin",
  description: "文本卫生 dsh 插件：净化不可信文本、扫描隐形字符、清洗 LLM 格式、转义 CSV 公式注入。",
  longDescription: "文本卫生 dsh 插件：净化不可信文本、扫描隐形字符、清洗 LLM 格式、转义 CSV 公式注入。",
  author: { name: "ylwl1997", url: "https://github.com/ylwl1997" },
  tags: ["Tool"],
  category: "tool",
  repository: "https://github.com/ylwl1997/noatmark-dsh-plugin",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:ylwl1997/noatmark-dsh-plugin",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/ylwl1997/noatmark-dsh-plugin/" },
  ],
};

