import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "zimai233-dsh-image-search",
  name: "dsh-image-search",
  description: "多引擎反向识图聚合：Google Lens、百度、Yandex、TinEye、SauceNAO、IQDB、Ascii2d。",
  longDescription: "多引擎反向识图聚合：Google Lens、百度、Yandex、TinEye、SauceNAO、IQDB、Ascii2d。",
  author: { name: "zimai233", url: "https://github.com/zimai233" },
  tags: ["Tool"],
  category: "tool",
  repository: "https://github.com/zimai233/dsh-image-search",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:zimai233/dsh-image-search",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/zimai233/dsh-image-search/" },
  ],
};

