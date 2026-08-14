import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "kingao294-dsh-skin",
  name: "dsh-skin",
  description: "Codex 风格皮肤切换器 + 自定义壁纸层，可调透明度与模糊。",
  longDescription: "Codex 风格皮肤切换器 + 自定义壁纸层，可调透明度与模糊。",
  author: { name: "KinGao294", url: "https://github.com/KinGao294" },
  tags: ["Theme"],
  category: "tool",
  repository: "https://github.com/KinGao294/dsh-skin",
  installMethods: [
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:KinGao294/dsh-skin",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/KinGao294/dsh-skin/" },
  ],
};

