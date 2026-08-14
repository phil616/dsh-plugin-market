import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "qyw233-dsh-deeplink",
  name: "dsh-deeplink",
  description: "`?session=` / `?workspace=` 深链直达指定项目对话。",
  longDescription: "`?session=` / `?workspace=` 深链直达指定项目对话。",
  author: { name: "qyw233", url: "https://github.com/qyw233" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/qyw233/dsh-deeplink",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:qyw233/dsh-deeplink",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/qyw233/dsh-deeplink/" },
  ],
};

