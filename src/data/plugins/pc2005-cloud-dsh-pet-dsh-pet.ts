import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "pc2005-cloud-dsh-pet-dsh-pet",
  name: "dsh-pet#dsh-pet",
  description: "DSH Web UI 桌面宠物：25 个透明动画、屏幕漫游、点击反应与拖拽，附可复现的素材生成链。",
  longDescription: "DSH Web UI 桌面宠物：25 个透明动画、屏幕漫游、点击反应与拖拽，附可复现的素材生成链。",
  author: { name: "PC2005-cloud", url: "https://github.com/PC2005-cloud" },
  tags: ["Fun"],
  category: "tool",
  repository: "https://github.com/PC2005-cloud/dsh-pet/tree/main/dsh-pet",
  installMethods: [
    {
      name: "GitHub",
      description: "从上游 GitHub 仓库的插件子目录安装。",
      command: "dsh plugin --profile web add github:PC2005-cloud/dsh-pet#path:/dsh-pet",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/PC2005-cloud/dsh-pet--dsh-pet/" },
  ],
};

