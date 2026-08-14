import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "omdsh-dev-dsh-open-in-vscode",
  name: "dsh-open-in-vscode",
  description: "从 Web GUI 一键在 VS Code 中打开工作区目录。",
  longDescription: "从 Web GUI 一键在 VS Code 中打开工作区目录。",
  author: { name: "omdsh-dev", url: "https://github.com/omdsh-dev" },
  tags: ["Notification"],
  category: "tool",
  repository: "https://github.com/omdsh-dev/dsh-open-in-vscode",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:omdsh-dev/dsh-open-in-vscode",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/omdsh-dev/dsh-open-in-vscode/" },
  ],
};

