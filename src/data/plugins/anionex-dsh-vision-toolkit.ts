import type { Plugin } from "@/types/plugin";

// Source: awesome-dsh-plugin/awesome-dsh-plugin
// Snapshot: 767a47fbff0b4abbf52bdbfc6a39d64abd01ca69 (2026-08-14)
export const plugin: Plugin = {
  slug: "anionex-dsh-vision-toolkit",
  name: "dsh-vision-toolkit",
  description: "让纯文本模型更好地做视觉任务：带意图的图片问答、长截图 OCR、UI 还原等。",
  longDescription: "让纯文本模型更好地做视觉任务：带意图的图片问答、长截图 OCR、UI 还原等。",
  author: { name: "Anionex", url: "https://github.com/Anionex" },
  tags: ["Tool"],
  category: "tool",
  repository: "https://github.com/Anionex/dsh-vision-toolkit",
  installMethods: [
    {
      name: "npm",
      description: "通过 npm 注册表安装；包与仓库映射已经上游清单核对。",
      command: "dsh plugin --profile web add @dsh-external/dsh-vision-toolkit",
    },
    {
      name: "GitHub",
      description: "直接从上游 GitHub 仓库安装。",
      command: "dsh plugin --profile web add github:Anionex/dsh-vision-toolkit",
    },
  ],
  links: [
    { name: "Awesome DSH Plugin 收录页", url: "https://awesome-dsh-plugin.com/p/Anionex/dsh-vision-toolkit/" },
  ],
};

