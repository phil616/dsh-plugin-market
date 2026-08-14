import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "akiracod-dsh-drag-and-drop",
  name: "dsh-drag-and-drop",
  description: "拖放 fork：文档以可删除「文件芯片」挂在输入框上方，不打字也能发送。",
  longDescription: "拖放 fork：文档以可删除「文件芯片」挂在输入框上方，不打字也能发送。",
  author: { name: "AKIRACOD", url: "https://github.com/AKIRACOD" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/AKIRACOD/dsh-drag-and-drop",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:AKIRACOD/dsh-drag-and-drop",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/AKIRACOD/dsh-drag-and-drop/" },
  ],
};

