import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "zhu1090093659-dsh-web-ui",
  name: "dsh-web-ui",
  description: "DSH Web UI 插件与皮肤合集：任务看板、git 图、右侧面板、远程移动端 UI、桌宠、实时 token 统计与皮肤中心。",
  longDescription: "DSH Web UI 插件与皮肤合集：任务看板、git 图、右侧面板、远程移动端 UI、桌宠、实时 token 统计与皮肤中心。",
  author: { name: "zhu1090093659", url: "https://github.com/zhu1090093659" },
  tags: ["UI"],
  category: "tool",
  repository: "https://github.com/zhu1090093659/dsh-web-ui",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:zhu1090093659/dsh-web-ui",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/zhu1090093659/dsh-web-ui/" },
  ],
};

