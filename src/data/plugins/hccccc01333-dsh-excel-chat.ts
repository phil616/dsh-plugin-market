import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "hccccc01333-dsh-excel-chat",
  name: "dsh-excel-chat",
  description: "在 DeepSeek Harness 里对话完成 Excel 工作：建表、编辑、修复公式、图表校验，每次编辑后自动体检公式。",
  longDescription: "在 DeepSeek Harness 里对话完成 Excel 工作：建表、编辑、修复公式、图表校验，每次编辑后自动体检公式。",
  author: { name: "hccccc01333", url: "https://github.com/hccccc01333" },
  tags: ["Tool"],
  category: "tool",
  repository: "https://github.com/hccccc01333/dsh-excel-chat",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:hccccc01333/dsh-excel-chat",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/hccccc01333/dsh-excel-chat/" },
  ],
};

