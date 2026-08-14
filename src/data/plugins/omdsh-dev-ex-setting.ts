import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "omdsh-dev-ex-setting",
  name: "ex-setting",
  description: "DSH 的设置扩展。",
  longDescription: "DSH 的设置扩展。",
  author: { name: "omdsh-dev", url: "https://github.com/omdsh-dev" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/omdsh-dev/ex-setting",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:omdsh-dev/ex-setting",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/omdsh-dev/ex-setting/" },
  ],
};

