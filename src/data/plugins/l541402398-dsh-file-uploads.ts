import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "l541402398-dsh-file-uploads",
  name: "dsh-file-uploads",
  description: "从 Web 输入框上传任意本地文件，以待发送卡片展示，并在设置中管理已存文件。",
  longDescription: "从 Web 输入框上传任意本地文件，以待发送卡片展示，并在设置中管理已存文件。",
  author: { name: "l541402398", url: "https://github.com/l541402398" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/l541402398/dsh-file-uploads",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:l541402398/dsh-file-uploads",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/l541402398/dsh-file-uploads/" },
  ],
};

