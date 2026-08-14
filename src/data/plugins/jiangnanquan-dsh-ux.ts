import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "jiangnanquan-dsh-ux",
  name: "dsh-ux",
  description: "Solarized 浅色主题、紧凑布局、思考/工具链折叠胶囊，以及余额、本轮成本与用量看板的 DSH Web 界面增强插件。",
  longDescription: "Solarized 浅色主题、紧凑布局、思考/工具链折叠胶囊，以及余额、本轮成本与用量看板的 DSH Web 界面增强插件。",
  author: { name: "jiangnanquan", url: "https://github.com/jiangnanquan" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/jiangnanquan/dsh-ux",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:jiangnanquan/dsh-ux",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/jiangnanquan/dsh-ux/" },
  ],
};

