import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "omdsh-dev-dsh-plugin-check",
  name: "dsh-plugin-check",
  description: "插件健康检查：扫描清单协议/patch 格式/构建陷阱，零依赖只读。",
  longDescription: "插件健康检查：扫描清单协议/patch 格式/构建陷阱，零依赖只读。",
  author: { name: "omdsh-dev", url: "https://github.com/omdsh-dev" },
  tags: ["Development"],
  category: "tool",
  repository: "https://github.com/omdsh-dev/dsh-plugin-check",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:omdsh-dev/dsh-plugin-check",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/omdsh-dev/dsh-plugin-check/" },
  ],
};

