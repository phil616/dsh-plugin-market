import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "nagi-ovo-dsh-ads",
  name: "dsh-ads",
  description: "2005 年中文站点风格的整活广告插件：侧栏广告/信息流/角落弹窗 + 假关闭叉，素材全虚构。",
  longDescription: "2005 年中文站点风格的整活广告插件：侧栏广告/信息流/角落弹窗 + 假关闭叉，素材全虚构。",
  author: { name: "Nagi-ovo", url: "https://github.com/Nagi-ovo" },
  tags: ["Fun"],
  category: "tool",
  repository: "https://github.com/Nagi-ovo/dsh-ads",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:Nagi-ovo/dsh-ads",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/Nagi-ovo/dsh-ads/" },
  ],
};

